# Task Manager API - Backend

A scalable REST API with JWT authentication, role-based access control, and comprehensive task management features.

## 🚀 Features

- **Authentication & Authorization**
  - User registration and login with JWT tokens
  - Role-based access control (User, Admin)
  - Password hashing with bcrypt
  - Token expiration and refresh handling

- **Task Management (CRUD)**
  - Create, read, update, and delete tasks
  - Filter tasks by status and priority
  - Pagination support
  - User-specific task isolation

- **Security**
  - JWT token authentication
  - Input validation and sanitization
  - Rate limiting
  - Helmet.js for security headers
  - CORS configuration

- **API Features**
  - RESTful API design
  - API versioning (v1)
  - Comprehensive error handling
  - Swagger API documentation
  - Request validation

## 📋 Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd backend
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
```bash
cp .env.example .env
```

Edit `.env` file with your configuration:
```env
PORT=5000
NODE_ENV=development

DB_HOST=localhost
DB_PORT=5432
DB_NAME=taskmanager_db
DB_USER=postgres
DB_PASSWORD=your_password

JWT_SECRET=your_secret_key_here
JWT_EXPIRE=7d
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

6. **Start the server**
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

Server will start on http://localhost:5000

## 📚 API Documentation

Once the server is running, visit:
- **Swagger UI**: http://localhost:5000/api-docs
- **Health Check**: http://localhost:5000/health

## 🔑 API Endpoints

### Authentication

| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| POST | `/api/v1/auth/register` | Register new user | Public |
| POST | `/api/v1/auth/login` | Login user | Public |
| GET | `/api/v1/auth/me` | Get current user | Private |

### Tasks

| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| GET | `/api/v1/tasks` | Get all tasks | Private |
| GET | `/api/v1/tasks/:id` | Get single task | Private |
| POST | `/api/v1/tasks` | Create task | Private |
| PUT | `/api/v1/tasks/:id` | Update task | Private |
| DELETE | `/api/v1/tasks/:id` | Delete task | Private |
| GET | `/api/v1/tasks/admin/all` | Get all users' tasks | Admin |

## 📦 Example Requests

### Register User
```bash
curl -X POST http://localhost:5000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "john_doe",
    "email": "john@example.com",
    "password": "password123",
    "role": "user"
  }'
```

### Login
```bash
curl -X POST http://localhost:5000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Create Task (with JWT token)
```bash
curl -X POST http://localhost:5000/api/v1/tasks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "title": "Complete project",
    "description": "Finish the API implementation",
    "status": "pending",
    "priority": "high"
  }'
```

## 🗄️ Database Schema

### Users Table
```sql
id (SERIAL PRIMARY KEY)
username (VARCHAR UNIQUE)
email (VARCHAR UNIQUE)
password (VARCHAR)
role (VARCHAR) - 'user' or 'admin'
created_at (TIMESTAMP)
updated_at (TIMESTAMP)
```

### Tasks Table
```sql
id (SERIAL PRIMARY KEY)
title (VARCHAR)
description (TEXT)
status (VARCHAR) - 'pending', 'in_progress', 'completed'
priority (VARCHAR) - 'low', 'medium', 'high'
user_id (INTEGER FK -> users.id)
created_at (TIMESTAMP)
updated_at (TIMESTAMP)
```

## 🏗️ Project Structure

```
backend/
├── config/
│   ├── database.js       # Database configuration
│   └── swagger.js        # Swagger documentation config
├── controllers/
│   ├── authController.js # Authentication logic
│   └── taskController.js # Task CRUD operations
├── middleware/
│   ├── auth.js          # JWT verification & RBAC
│   └── validate.js      # Request validation
├── routes/
│   ├── authRoutes.js    # Auth endpoints
│   └── taskRoutes.js    # Task endpoints
├── scripts/
│   └── migrate.js       # Database migrations
├── .env.example         # Environment template
├── package.json
├── server.js           # Application entry point
└── README.md
```

## 🔒 Security Features

1. **Password Security**: Bcrypt hashing with salt rounds
2. **JWT Tokens**: Secure token generation and verification
3. **Input Validation**: Express-validator for request validation
4. **Rate Limiting**: Protection against brute force attacks
5. **Helmet.js**: Security headers configuration
6. **CORS**: Cross-origin resource sharing controls
7. **SQL Injection Prevention**: Parameterized queries

## 📈 Scalability Considerations

### Current Implementation
- Modular architecture with separation of concerns
- Database indexing for optimized queries
- Pagination for large datasets
- Connection pooling for database efficiency

### Future Enhancements
- **Caching**: Implement Redis for frequently accessed data
- **Microservices**: Split into auth, task, and user services
- **Load Balancing**: Use nginx or AWS ELB for horizontal scaling
- **Message Queue**: Add RabbitMQ/Redis for async operations
- **Containerization**: Docker for consistent deployments
- **Monitoring**: Add logging (Winston) and APM tools
- **Database Replication**: Master-slave setup for read scaling

## 🧪 Testing

To add tests, install testing dependencies:
```bash
npm install --save-dev jest supertest
```

Run tests:
```bash
npm test
```

## 🚀 Deployment

### Using Docker
```bash
docker build -t task-manager-api .
docker run -p 5000:5000 task-manager-api
```

### Manual Deployment
1. Set `NODE_ENV=production`
2. Configure production database
3. Use process manager (PM2)
```bash
npm install -g pm2
pm2 start server.js --name task-api
```

## 📝 License

MIT

## 👥 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/NewFeature`)
3. Commit changes (`git commit -m 'Add NewFeature'`)
4. Push to branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

## 📧 Support

For issues and questions, please open an issue in the repository.
