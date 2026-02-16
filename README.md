

## Project Overview

This project demonstrates a complete backend and frontend implementation featuring:
- Secure user authentication with JWT
- Role-based access control (User & Admin)
- RESTful API design with versioning
- CRUD operations for task management
- Professional UI/UX with React
- Comprehensive API documentation
- Security best practices

## Project Structure

```
fullstack-app/
├── backend/                 # Node.js/Express API
│   ├── config/             # Configuration files
│   ├── controllers/        # Business logic
│   ├── middleware/         # Authentication & validation
│   ├── routes/             # API routes
│   ├── scripts/            # Database migrations
│   ├── server.js           # Entry point
│   └── README.md
│
├── frontend/               # React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── context/       # State management
│   │   └── services/      # API integration
│   └── README.md
│
└── README.md              # This file
```

## Quick Start

### Prerequisites
- Node.js (v14+)
- PostgreSQL (v12+)
- npm 

### Backend Setup

1. **Navigate to backend folder**
```bash
cd backend
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment**
```bash
cp .env.example .env
# Edit .env with your database credentials
```

4. **Create database**
```bash
psql -U postgres
CREATE DATABASE taskmanager_db;
\q
```

5. **Run migrations**
```bash
npm run migrate
```

6. **Start server**
```bash
npm run dev
```

Backend will run on http://localhost:4000

### Frontend Setup

1. **Navigate to frontend folder**
```bash
cd frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

Frontend will run on http://localhost:3000

## API Documentation

Once the backend is running, access the Swagger documentation at:
**http://localhost:4000/api-docs**

## Core Features

### Backend Features
✅ User registration and login with JWT  
✅ Password hashing with bcrypt  
✅ Role-based access control (User/Admin)  
✅ CRUD operations for tasks  
✅ API versioning (v1)  
✅ Request validation and sanitization  
✅ Error handling middleware  
✅ Rate limiting  
✅ Security headers (Helmet)  
✅ CORS configuration  
✅ Database indexing  
✅ Swagger API documentation  

### Frontend Features
✅ User registration and login UI  
✅ JWT token management  
✅ Protected routes  
✅ Task CRUD interface  
✅ Status and priority filtering  
✅ Real-time updates  
✅ Success/error notifications  
✅ Responsive design  
✅ Modern gradient UI  

## 🗄️ Database Schema

### Users Table
| Column | Type | Constraints |
|--------|------|-------------|
| id | SERIAL | PRIMARY KEY |
| username | VARCHAR(50) | UNIQUE, NOT NULL |
| email | VARCHAR(100) | UNIQUE, NOT NULL |
| password | VARCHAR(255) | NOT NULL |
| role | VARCHAR(20) | DEFAULT 'user' |
| created_at | TIMESTAMP | DEFAULT NOW() |
| updated_at | TIMESTAMP | DEFAULT NOW() |

### Tasks Table
| Column | Type | Constraints |
|--------|------|-------------|
| id | SERIAL | PRIMARY KEY |
| title | VARCHAR(200) | NOT NULL |
| description | TEXT | |
| status | VARCHAR(20) | DEFAULT 'pending' |
| priority | VARCHAR(20) | DEFAULT 'medium' |
| user_id | INTEGER | FOREIGN KEY → users.id |
| created_at | TIMESTAMP | DEFAULT NOW() |
| updated_at | TIMESTAMP | DEFAULT NOW() |

## Security Features

1. **Authentication & Authorization**
   - JWT tokens with expiration
   - Bcrypt password hashing (10 salt rounds)
   - Role-based access control
   - Token verification middleware

2. **Input Validation**
   - Express-validator for all inputs
   - SQL injection prevention (parameterized queries)
   - XSS protection via input sanitization

3. **API Security**
   - Rate limiting (100 requests/15 minutes)
   - Helmet.js security headers
   - CORS configuration
   - Error handling without exposing internals

## Scalability Considerations

See [SCALABILITY.md](SCALABILITY.md) for detailed scalability analysis and recommendations.

### Current Architecture
- Modular MVC-like structure
- Database connection pooling
- Indexed database queries
- Pagination support
- Stateless JWT authentication

### Recommended Enhancements
- **Caching**: Redis for frequently accessed data
- **Load Balancing**: Nginx or AWS ELB
- **Microservices**: Split into separate services
- **Message Queues**: RabbitMQ for async operations
- **Containerization**: Docker for consistent deployments
- **Monitoring**: Winston logging + APM tools
- **Database Scaling**: Read replicas, sharding

## Testing the Application

### Manual Testing Flow

1. **Register a new user**
   - Go to http://localhost:3000/register
   - Create an account with role "user"

2. **Login**
   - Login with your credentials
   - You'll be redirected to the dashboard

3. **Create tasks**
   - Click "+ New Task"
   - Fill in task details
   - Submit the form

4. **Filter tasks**
   - Use status/priority dropdowns
   - View filtered results

5. **Edit/Delete tasks**
   - Click "Edit" to modify
   - Click "Delete" to remove

6. **Test admin features**
   - Register another user with role "admin"
   - Admin can view all users' tasks via API

### API Testing with cURL

```bash
# Register
curl -X POST http://localhost:4000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","email":"test@example.com","password":"password123"}'

# Login
curl -X POST http://localhost:4000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'

# Create Task (use token from login)
curl -X POST http://localhost:4000/api/v1/tasks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{"title":"Test Task","description":"Testing","status":"pending","priority":"high"}'

# Get All Tasks
curl -X GET http://localhost:4000/api/v1/tasks \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### Backend (.env)
```env
PORT=5000
NODE_ENV=production
DB_HOST=localhost
DB_PORT=5432
DB_NAME=taskmanager_db
DB_USER=postgres
DB_PASSWORD=your_password
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d
```

### Frontend (.env)
```env
REACT_APP_API_URL=http://localhost:5000/api/v1
```

## API Endpoints Summary

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | /api/v1/auth/register | Register user | Public |
| POST | /api/v1/auth/login | Login user | Public |
| GET | /api/v1/auth/me | Get profile | Private |
| GET | /api/v1/tasks | Get all tasks | Private |
| GET | /api/v1/tasks/:id | Get task | Private |
| POST | /api/v1/tasks | Create task | Private |
| PUT | /api/v1/tasks/:id | Update task | Private |
| DELETE | /api/v1/tasks/:id | Delete task | Private |
| GET | /api/v1/tasks/admin/all | Get all users' tasks | Admin |

## 🎓 Technologies Used

### Backend
- Node.js & Express
- PostgreSQL
- JWT (jsonwebtoken)
- Bcrypt
- Express-validator
- Helmet
- Swagger

### Frontend
- React 18
- React Router
- Axios
- Context API
