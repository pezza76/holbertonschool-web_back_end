import asyncio
import random

async def wait_random(max_delay=10):
    num = random.uniform(1,10)
    print(f"waiting {num} seconds")
    await asyncio.sleep(num)
    print('finished')
    return num

asyncio.run(wait_random())
