# Toolbox Project

Welcome to the Toolbox Project! This repository contains both the backend and frontend applications. You can run them using either a PowerShell script or Docker Compose.

## Prerequisites

Make sure you have the following tools installed on your machine:

- **Node.js**
  - **Backend**: Requires **Node.js 14**
  - **Frontend**: Requires **Node.js 16**
- **npm** (Node Package Manager)
- **Docker** (if you plan to use Docker Compose)
- **PowerShell** (if you're on Windows and plan to use the PowerShell script)

## Running the Project with PowerShell

If you're on Windows, you can easily run both the backend and frontend using the provided PowerShell script. Follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/toolbox-project.git
   cd toolbox-project
   .\run_app.ps1
   ```
   
## Running the Project with Docker Compose

1. **Clone the Repository**
```
git clone https://github.com/yourusername/toolbox-project.git
cd toolbox-project
```
2. **Run Docker Compose**
```
docker-compose up --build
```

3. Stopping the Containers
```
docker-compose down
```

   
## How to Install Dependencies

Navigate to the Backend and Frontend directories and install the dependencies:

```
cd Backend
npm install
cd ../Frontend/toolbox-front
npm install
```

Important: Ensure you're using Node.js 14 when installing dependencies and running the backend, and Node.js 16 for the frontend.

   
## Project Structure
Here's an overview of the project structure:

```bash
/Toolbox-Test
├── /Backend
│   ├── src
│   │   └── index.js
│   ├── package.json
│   ├── Dockerfile
│   └── ...
├── /Frontend
│   ├── /toolbox-front
│   │   ├── src
│   │   ├── public
│   │   ├── package.json
│   │   ├── Dockerfile
│   │   └── ...
├── docker-compose.yml
└── run_app.ps1
```

## Testing Backend
To run unit tests for the backend, use:

```
cd Backend
npm test
```

## Testing Frontend
To run unit tests for the frontend, use:

```
cd Frontend/toolbox-front
npm test
```

Thank you for using Toolbox Project! If you have any questions or feedback, feel free to reach out.

This `README.md` file includes instructions on how to run the project and test it all while emphasizing the specific Node.js versions required for the backend and frontend.