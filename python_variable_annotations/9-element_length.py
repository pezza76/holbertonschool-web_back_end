#!/usr/bin/env python3
"""Module 9"""
from typing import List

def element_length(Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
   """return a list of tuples"""
   return [(i, len(i)) for i in lst]
