#!/usr/bin/env python3
"""Module 7"""
from typing import Union


def to_kv(k: str, v: Union(int, float)) -> tuple[str, float]:
    """Return Tuple"""
    return (k, float(v**2))
