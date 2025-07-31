#!/usr/bin/env python3
"""Module 7"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return Tuple"""
    return (k, float(v**2))
