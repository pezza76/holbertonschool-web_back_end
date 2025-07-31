#!/usr/bin/env python3
"""Module 8"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Multiplier"""
    def multi(n: float):
        """second multiplier"""
        return n * multiplier
    return multi
