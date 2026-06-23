# AI Twin Waitlist Backend

Node.js + Express + PostgreSQL backend for the AI Twin waitlist application.

## Features

* Join Waitlist API
* PostgreSQL Database Integration
* Waitlist Count API
* API Key Protection
* Swagger Documentation
* CORS Support

## Project Structure

```text
Ai_Twin_Backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── waitlistController.js
│
├── middleware/
│   └── apiKeyAuth.js
│
├── models/
│   └── waitlistModel.js
│
├── routes/
│   └── waitlistRoutes.js
│
├── swagger/
│   └── swagger.js
│
├── .env
├── app.js
├── package.json
└── README.md
```

## Prerequisites

* Node.js
* PostgreSQL
* VS Code

## Database Setup

Create database:

```sql
CREATE DATABASE waitlistdb;
```

Create table:

```sql
CREATE TABLE waitlist (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    business_name VARCHAR(255),
    phone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Environment Variables

Create a `.env` file:

```env
PORT=8000

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=waitlistdb

API_KEY=TWINN_SECRET_KEY
```

## Install Dependencies

```bash
npm install
```

or

```bash
npm install express cors dotenv pg
npm install swagger-ui-express swagger-jsdoc
npm install nodemon --save-dev
```

## Run Application

Development Mode:

```bash
npm run dev
```

Production Mode:

```bash
npm start
```

Expected Output:

```text
PostgreSQL Connected
Server Running on Port 8000
```

## API Endpoints

### Join Waitlist

```http
POST /api/waitlist
```

Headers:

```http
Content-Type: application/json
x-api-key: TWINN_SECRET_KEY
```

Request Body:

```json
{
  "full_name": "John Doe",
  "email": "john@example.com",
  "business_name": "AI Twin",
  "phone": "9876543210"
}
```

### Get Waitlist Count

```http
GET /api/waitlist/count
```

Response:

```json
{
  "success": true,
  "total_waitlist_users": 150
}
```

## Swagger Documentation

Open:

```text
http://localhost:8000/docs
```

## Application Flow

1. User visits twinn.live
2. User submits Join Waitlist form
3. Frontend sends POST request to backend
4. Backend validates API Key
5. Data is stored in PostgreSQL
6. Count API returns total registrations
7. Landing page displays live waitlist count

## Deployment

Recommended Platforms:

* Google Cloud Run
* Render
* Railway

Database:

* PostgreSQL
* Google Cloud SQL
* Neon
* Supabase

## Author

AI Twin Backend Team
