#!/bin/bash
sqlite3 planner.db ".schema" > schema.sql
sqlite3 planner.db ".dump" > dump.sql