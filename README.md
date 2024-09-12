# AI Learning Platform

This project is an AI-powered learning platform that uses the Socratic method to guide students through their learning journey.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- Python (v3.9 or later)
- Docker and Docker Compose
- pnpm

### Setup

1. Clone the repository
2. Run the setup script:
   ```
   pnpm run setup
   ```

### Development

To start the development servers:

```
pnpm run dev
```

### Testing

To run all tests:

```
pnpm test
```

### Building and Deployment

To build all packages:

```
pnpm run build
```

To start the application using Docker:

```
pnpm start
```

## Project Structure

- `apps/`: Contains the main applications (backend and frontend)
- `packages/`: Contains shared packages and the AI agent
- `scripts/`: Contains utility scripts for setup and development

## TODO

- [ ] Backend Development
  - [ ] Design DB tables
  - [ ] Implement core services
    - [ ] Auth
    - [ ] User
    - [ ] Content
    - [ ] Learning Path
    - [ ] Code Execution
    - [ ] AI Interaction
- [ ] Frontend Development
  - [ ] Create main UI components
  - [ ] Add WebSocket support for realtime feedback
- [ ] DevOps & Infrastructure
  - [ ] Set up CI/CD pipeline
  - [ ] Configure Kubernetes cluster
- [ ] AI & Learning Features

  - [ ] Integrate AI agent server
  - [ ] Develop code sandbox/editor
  - [ ] Implement feedback loop
  - [ ] Implement student modeling
