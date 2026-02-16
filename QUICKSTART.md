

### Step 1: Setup Database
```bash
# Install PostgreSQL if not already installed
# On macOS: brew install postgresql
# On Ubuntu: sudo apt-get install postgresql

# Start PostgreSQL service
# macOS: brew services start postgresql
# Ubuntu: sudo service postgresql start

# Create database
psql -U postgres
CREATE DATABASE taskmanager_db;
\q
```

### Step 2: Setup Backend

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Edit .env and update your database password
# Open .env in any text editor and change DB_PASSWORD

# Run database migrations
npm run migrate

# Start the server
npm run dev
```

Backend should now be running on http://localhost:4000

### Step 3: Setup Frontend 

```bash
# Open a new terminal
cd frontend

# Install dependencies
npm install

# Start the application
npm start
```

Frontend should now open automatically at http://localhost:3000

## Test the Application

### 1. Register a New Account
- Go to http://localhost:3000/register
- Enter:
  - Username: `testuser`
  - Email: `test@example.com`
  - Password: `password123`
  - Role: `user`
- Click "Register"

### 2. Create Your First Task
- You'll be redirected to the dashboard
- Click "+ New Task"
- Fill in:
  - Title: `My First Task`
  - Description: `Testing the application`
  - Status: `Pending`
  - Priority: `High`
- Click "Create Task"

### 3. Manage Your Tasks
- Edit the task by clicking "Edit"
- Delete the task by clicking "Delete"
- Filter tasks by status and priority

## View API Documentation

Visit http://localhost:4000/api-docs to see the interactive Swagger documentation.


### Database Connection Error
```bash
# Check if PostgreSQL is running
# macOS: brew services list
# Ubuntu: sudo service postgresql status

# Make sure database exists
psql -U postgres -l
```

### Port Already in Use
```bash
# If port 5000 or 3000 is in use, change it:
# Backend: Edit PORT in backend/.env
# Frontend: Set PORT=3001 in frontend/.env
```

### Dependencies Installation Issues
```bash
# Clear npm cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

## What's Included

### Backend Features
- ✅ JWT Authentication
- ✅ Role-based Access (User/Admin)
- ✅ CRUD Operations for Tasks
- ✅ Input Validation
- ✅ Error Handling
- ✅ API Documentation
- ✅ Rate Limiting
- ✅ Security Headers

### Frontend Features
- ✅ User Registration & Login
- ✅ Task Management Interface
- ✅ Filtering by Status & Priority
- ✅ Responsive Design
- ✅ Real-time Updates
- ✅ Error/Success Messages

