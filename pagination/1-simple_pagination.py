#!/usr/bin/env python3
"""Module 1"""
import csv
from typing import List, Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Return (start, end) indexes for pagination. Page is 1-indexed.
    """
    start = (page - 1) * page_size
    end = start + page_size
    return start, end


class Server:
    """Server class to paginate a database of popular baby names."""
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset (skips header)."""
        if self.__dataset is None:
            with open(self.DATA_FILE, newline="") as f:
                reader = csv.reader(f)
                rows = [row for row in reader]
            self.__dataset = rows[1:]  # skip header
        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Return a page of the dataset.
        - Validates that page and page_size are positive ints.
        - Uses index_range for slice bounds.
        - Returns [] if start is beyond dataset length.
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        data = self.dataset()
        start, end = index_range(page, page_size)

        if start >= len(data):
            return []
        return data[start:end]
