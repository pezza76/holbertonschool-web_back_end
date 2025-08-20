#!/usr/bin/env python3
"""Module contains function that takes two integers

Imports:
    List: module for list type annotation
    asyncio: module for running coroutines concurrently
    wait_random: function delays for n seconds and returns n
"""
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawns wait_random n times with the specified max_delay concurrently.

    Args:
        n (int): The number of times to spawn wait_random.
        max_delay (int): The maximum delay for wait_random.

    Returns:
        List[float]: The list of all the delays in ascending order.
    """
    # 1. Create a list of tasks to run concurrently
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]

    # 2. Wait for all tasks to complete and get their results
    delays = await asyncio.gather(*tasks)

    # 3. Return the sorted list of delays
    return sorted(delays)
