#!/usr/bin/env python3
"""Async function"""

import asyncio
import random

async def wait_random(max_delay: int = 10) -> float:
    """Returns a float"""
    num = random.uniform(1,max_delay)
    await asyncio.sleep(num)
    return num

asyncio.run(wait_random())
