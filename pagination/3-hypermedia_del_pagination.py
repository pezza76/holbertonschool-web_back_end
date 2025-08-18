#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
from typing import List, Dict, Any


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset: Dict[int, List] = None  # type: ignore[assignment]

    def dataset(self) -> List[List]:
        """Cached dataset."""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            # skip header
            self.__dataset = dataset[1:]
        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0."""
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            # Index all rows (not only first 1000) to match tests
            self.__indexed_dataset = {i: dataset[i] for i in range(len(dataset))}
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict[str, Any]:
        """
        Return a deletion-resilient hypermedia page.

        Returns:
            {
              "index": <start index requested>,
              "data": <list of rows>,
              "page_size": <len(data)>,
              "next_index": <first index after the last returned item or None>
            }
        """
        if index is None:
            index = 0

        assert isinstance(index, int) and index >= 0
        assert isinstance(page_size, int) and page_size > 0

        indexed = self.indexed_dataset()
        if not indexed:
            return {"index": index, "data": [], "page_size": 0, "next_index": None}

        max_key = max(indexed.keys())
        # allow starting from a deleted key, but not beyond highest existing key
        assert index <= max_key

        data: List[List] = []
        cur = index

        # Collect up to page_size existing entries, skipping deleted indices
        while len(data) < page_size and cur <= max_key:
            row = indexed.get(cur)
            if row is not None:
                data.append(row)
            cur += 1

        next_index = cur if cur <= max_key else None

        return {
            "index": index,
            "data": data,
            "page_size": len(data),
            "next_index": next_index,
        }
