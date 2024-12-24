# Student Management System

A modern web application for managing student data, built with React, Next.js, and Supabase, featuring a polished UI with shadcn/ui components.

## Overview

This Student Management System provides an intuitive interface for managing student information, with features like filtering, searching, and responsive design across all devices. The application is built using a Figma design as a reference, ensuring a polished and professional user interface.

## Tech Stack

- **Frontend**
  - React.js
  - Next.js
  - TailwindCSS
  - Redux (State Management)
  - shadcn/ui (UI Component Library)
  - Heroicons

- **Backend**
  - Next.js API Routes
  - Prisma (ORM)
  - Supabase (Database)

## Features

- Responsive design that works across all screen sizes
- Comprehensive student management functionality
- Add new students through a user-friendly form
- Advanced filtering options:
  - Filter by cohort
  - Filter by courses
- Search functionality
- Interactive data tables
- Sidebar navigation
- Header with quick actions

## Components

The application is built with several key components:

- Sidebar Navigation
- Header
- Student Table
- Add Student Form
- Filter Controls
- Search Bar
- Select Buttons

## Getting Started

### Prerequisites

- Node.js installed on your system
- A Supabase account
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ManiSetharasipalli/Student_Management.git
cd student-management
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
   - Edit a `.env` file in the root directory
   - Add the following URLS:

```env
DATABASE_URL="your-supabase-transaction-url"
DIRECT_URL="your-supabase-session-url"
```

4. Set up Supabase:
   - Create a new project in Supabase
   - Copy the Transaction URL and add it as `DATABASE_URL`
   - Copy the Session URL and add it as `DIRECT_URL`

5. Run Database Migrations:
```bash
   npx prisma migrate dev
```

5. Start the development server:
```bash
npm run dev
```

The application should now be running at `http://localhost:3000`

## Connection Pool Setup

To ensure proper database connectivity:

1. Go to your Supabase project dashboard
2. Navigate to Database settings
3. Copy the Transaction URL for the `DATABASE_URL`
4. Copy the Session URL for the `DIRECT_URL`


## Acknowledgments

- shadcn/ui for the beautiful components
- Supabase team for the excellent database service
- Next.js team for the amazing framework




