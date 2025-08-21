#!/usr/bin/env python3
"""
This script provides some stats about Nginx logs stored in MongoDB.
Database: logs
Collection: nginx
"""
from pymongo import MongoClient


def log_stats():
    """
    Connects to the MongoDB database and prints statistics about the
    Nginx logs. This includes the total number of logs, counts for
    each HTTP method, and the number of status check logs.
    """
    client = MongoClient('mongodb://127.0.0.1:27017')
    logs_collection = client.logs.nginx

    total_logs = logs_collection.count_documents({})
    print(f"{total_logs} logs")

    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = logs_collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    status_check_count = logs_collection.count_documents(
        {"method": "GET", "path": "/status"}
    )
    print(f"{status_check_count} status check")


if __name__ == "__main__":
    log_stats()
