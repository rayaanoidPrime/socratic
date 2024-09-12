#!/bin/bash

# Install dependencies
pnpm install

# Setup backend
cd apps/backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cd ../..

# Setup frontend
cd apps/frontend
pnpm install
cd ../..

# Setup AI agent
cd packages/ai-agent
pnpm install
cd ../..

# Setup shared package
cd packages/shared
pnpm install
cd ../..

echo "Setup complete!"