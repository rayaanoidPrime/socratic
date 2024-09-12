#!/bin/bash

# Start backend
cd apps/backend
source venv/bin/activate
uvicorn src.main:app --reload &
cd ../..

# Start frontend
cd apps/frontend
npm start &
cd ../..

# Wait for all background processes to finish
wait