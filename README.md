# Socratic Learning

This project is an AI-powered learning platform that uses the Socratic method to guide students through their learning journey. It includes a FastAPI backend, a Streamlit app for the frontend, and an AI agent service integrated into the backend.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- Python (v3.9 or later)
- Docker and Docker Compose
- pnpm

## Installation and Running

### Clone the repository:

```bash
git clone <repository-url>
cd socratic
```

### Option 1: With Docker

1. Build and run the Docker services:

   ```bash
   docker-compose up --build
   ```

   This command will build the Docker images and start the containers for the backend, Streamlit app, and PostgreSQL database. The services will be accessible on their respective ports (8000 for backend, 8501 for Streamlit, and 5432 for PostgreSQL).

### Option 2: Without Docker

1. Create a virtual environment:

   - Create a virtual environment:
     ```bash
     python -m venv venv
     ```
   - Activate the virtual environment:
     - On Windows:
       ```bash
       .\venv\Scripts\activate
       ```
     - On macOS and Linux:
       ```bash
       source venv/bin/activate
       ```

2. Install project dependencies (only for frontend dir not streamlit):

   ```bash
   pnpm install
   ```

3. Run the setup script:

   ```bash
   pnpm run setup
   ```

4. Start the backend and streamlit servers:

   ```bash
   pnpm run dev
   ```

## Development

To start the development servers manually without Docker, use the commands provided in Option 2. This will start the backend server and the Streamlit app independently.

### Testing

To run all tests:

```bash
pnpm test
```

### Building and Deployment

To build all packages:

```bash
pnpm run build
```

To start the application using Docker, follow the instructions in Option 1.

## Project Structure

- `apps/`: Contains the main applications (backend and Streamlit app).
- `scripts/`: Contains utility scripts for setup and development.
- `docker-compose.yml`: Docker Compose configuration for managing multi-container Docker applications.

### Directory Structure

```plaintext
├── apps
│   ├── backend               # FastAPI backend
│   │   ├── alembic           # Alembic migrations
│   │   ├── socratic_agent    # AI agent package integrated in the backend
│   │   ├── src               # Backend source code
│   │   │   └── main.py       # Entry point for FastAPI app
│   │   ├── tests             # Backend test cases
│   │   └── Dockerfile        # Backend Dockerfile
│   ├── streamlit_app         # Streamlit frontend
│   │   ├── app.py            # Streamlit app entry point
│   │   └── Dockerfile        # Streamlit Dockerfile
│   └── frontend (nextjs)     # Frontend in nextjs
|
├── public                    # Static assets
├── scripts                   # Utility scripts
│   ├── setup.sh              # Setup script
│   └── dev.sh                # Development script
├── docker-compose.yml         # Docker Compose configuration
└── README.md                 # Project documentation
```

### Services

1. **Backend**: The backend service (FastAPI) manages the core functionality, including AI interactions, database connections, and API routes.
2. **Streamlit App**: The frontend is powered by Streamlit for quick UI rendering and user interaction.
3. **Socratic Agent**: Integrated as part of the backend, the AI agent provides intelligent interactions and helps users learn through guided questions.

### AI Agent Flow

![AI Agent Architecture](./public/ai-arch.png)

## TODO

- **Backend Development**

  - [ ] Design database tables
  - [ ] Implement core services
    - [ ] Auth
    - [ ] User
    - [ ] Content
    - [ ] Learning Path
    - [ ] Code Execution
    - [ ] AI Interaction

- **Streamlit App Development**

  - [ ] Create main UI components
  - [ ] Add WebSocket support for real-time feedback

- **DevOps & Infrastructure**

  - [ ] Set up CI/CD pipeline
  - [ ] Configure Kubernetes cluster
  - [ ] Monitor services

- **AI & Learning Features**
  - [ ] Integrate AI agent server
  - [ ] Develop code sandbox/editor
  - [ ] Implement feedback loop
  - [ ] Implement student modeling
