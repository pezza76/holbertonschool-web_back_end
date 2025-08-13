#!/usr/bin/env python3
"""pagination"""


def index_range(page, page_size):
    """pagination"""
    start = (page - 1) * page_size
    end = page * page_size
    return start, end
