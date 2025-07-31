#!/usr/bin/env python3
"""Module 9"""
from typing import List

def element_length(lst: List[str]) -> list[tuple]:
   """return a list of tuples"""
   return [(i, len(i)) for i in lst]
