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

print_msg "Setting up virtual environment..."
if [ ! -d "venv" ]; then
  python -m venv venv
  print_msg "Virtual environment created!"
else
  print_msg "Virtual environment already exists, skipping creation."
fi
. venv/Scripts/activate
# Ensure pip does not use the --user flag
export PIP_USER=false

# Setup backend (ensure virtual environment is activated)
print_msg "Setting up backend..."

cd apps/backend
pip install --no-cache-dir -r requirements.txt
print_msg "Backend setup complete!"

cd ../..

# Setup Streamlit app
print_msg "Setting up Streamlit app..."
cd apps/streamlit_app

pip install --no-cache-dir -r requirements.txt
print_msg "Backend setup complete!"
deactivate  # Deactivate the virtual environment
cd ../..


print_msg "Setup Completed!"

print_msg "run Scripts/dev.sh to start the development environment"
# wait  # Wait for background processes to finish
