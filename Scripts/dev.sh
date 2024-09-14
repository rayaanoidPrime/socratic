#!/bin/bash

# Exit script on any error
set -e

# Helper function to print messages
print_msg() {
  echo
  echo "===================================="
  echo "$1"
  echo "===================================="
  echo
}

# Function to handle cleanup
cleanup() {
  if [ -n "$VIRTUAL_ENV" ]; then
    print_msg "Deactivating virtual environment..."
    deactivate
  fi
  print_msg "Stopping all services..."
  kill $BACKEND_PID $FRONTEND_PID 2>/dev/null || true
  exit 0
}

# Trap Ctrl+C (SIGINT) and other signals for cleanup
trap cleanup SIGINT SIGTERM

# Ensure virtual environment exists and activate it for backend
print_msg "Starting backend server..."
cd apps/backend
if [ ! -d "venv" ]; then
  echo "Error: virtual environment not found. Please run setup.sh first."
  exit 1
fi
source venv/bin/activate
cd src
uvicorn main:app --reload &
BACKEND_PID=$!  # Store backend process ID
cd ../../..

# Start frontend server
print_msg "Starting frontend development server..."
cd apps/frontend
pnpm run dev &
FRONTEND_PID=$!  # Store frontend process ID
cd ../..

print_msg "All services started successfully!"

# Wait for both servers to stop
wait $BACKEND_PID $FRONTEND_PID

# Cleanup after all services have stopped
cleanup
