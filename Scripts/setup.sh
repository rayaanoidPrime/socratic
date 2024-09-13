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

# Ensure pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "Error: pnpm is not installed. Please install pnpm before running this script."
    exit 1
fi

# Install dependencies for all workspace packages
print_msg "Installing all workspace dependencies..."
pnpm install
print_msg "Dependencies installed!"

# Setup backend (ensure virtual environment is activated)
print_msg "Setting up backend..."
cd apps/backend
if [ ! -d "venv" ]; then
  python -m venv venv
  print_msg "Virtual environment created!"
else
  print_msg "Virtual environment already exists, skipping creation."
fi
source venv/bin/activate

# Ensure pip does not use the --user flag
export PIP_USER=false

pip install --no-cache-dir -r requirements.txt
print_msg "Backend setup complete!"
deactivate  # Deactivate the virtual environment
cd ../..

# # Start development environment (e.g., servers)
# print_msg "Starting development servers..."

# # Example: starting frontend and backend simultaneously
# # You can replace the following lines with your specific commands for starting the frontend/backend
# cd apps/backend
# print_msg "Starting backend server..."
# source venv/bin/activate
# uvicorn main:app --reload &
# deactivate  # Ensure to deactivate the virtual environment before moving to the next step
# cd ../..

# cd apps/frontend
# print_msg "Starting frontend development server..."
# pnpm run dev &

print_msg "Setup Completed!"

print_msg "run Scripts/dev.sh to start the development environment"
# wait  # Wait for background processes to finish
