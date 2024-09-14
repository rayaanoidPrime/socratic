# Use the official Python image from the Docker Hub
FROM python:3.11-slim

# Set the working directory in the container
WORKDIR /app

# Copy the backend's requirements file to the container
COPY ./apps/backend/requirements.txt /app/requirements.txt

COPY ./apps/backend/socratic_agent/requirements.txt /app/socratic_agent_requirements.txt
# Install the dependencies
RUN pip install --no-cache-dir -r /app/requirements.txt
RUN pip install --no-cache-dir -r /app/socratic_agent_requirements.txt

# Copy the backend source code to the container
COPY ./apps/backend /app

# Expose the backend port
EXPOSE 8000

# Command to run the FastAPI app using Uvicorn
CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000"]
