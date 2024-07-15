
```markdown
# Intuit Home Assignment - Client

This is the client component for the Intuit home assignment. 
It provides a responsive web application that displays a list of photographers.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Docker](#docker)
- [Features](#features)
- [Building](#building)

## Installation

1. Clone the repository:

```bash
git clone <repository_url>
cd <repository_directory>/client
```

2. Install the dependencies:

```bash
npm install
```

## Usage

To start the client in development mode:

```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Docker

To run the project using Docker, follow these steps:

1. Make sure you have Docker and Docker Compose installed on your machine.
2. Navigate to the root directory of the project where the `docker-compose.yml` file is located.
3. Pull and run the Docker containers:

```bash
docker-compose up -d
```

The application will be available at `http://localhost:3000`.

To stop the Docker containers, run:

```bash
docker-compose down
```

## Features

- Display photographer cards with:
  - Photographer's first name and last name
  - Avatar
  - Event types
  - Location (city, state)
- Paginated scrolling through photographer cards
- Sorting photographers by first name

## Building

To build the project for production, run:

```bash
npm run build
```

The built files will be located in the `build` directory.