# Task Manager Frontend

A modern React-based frontend application for the Task Manager API with authentication and task management features.

## 🚀 Features

- **User Authentication**
  - Register new users
  - Login with JWT tokens
  - Persistent authentication state
  - Protected routes

- **Task Management**
  - Create, read, update, and delete tasks
  - Filter tasks by status and priority
  - Real-time updates
  - Responsive task cards

- **User Experience**
  - Clean and modern UI
  - Success and error notifications
  - Loading states
  - Mobile-responsive design

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend API running (see backend README)

## 🛠️ Installation

1. **Install dependencies**
```bash
cd frontend
npm install
```

2. **Configure environment**

The `.env` file is already configured with:
```env
REACT_APP_API_URL=http://localhost:5000/api/v1
```

If your backend is running on a different port, update this URL.

3. **Start the development server**
```bash
npm start
```

The app will open at http://localhost:3000

## 🎯 Usage

### Registration
1. Navigate to http://localhost:3000/register
2. Fill in your details:
   - Username
   - Email
   - Password
   - Confirm Password
   - Role (User or Admin)
3. Click "Register"

### Login
1. Navigate to http://localhost:3000/login
2. Enter your email and password
3. Click "Login"

### Managing Tasks
Once logged in:
1. Click "+ New Task" to create a task
2. Fill in task details:
   - Title (required)
   - Description
   - Status (Pending, In Progress, Completed)
   - Priority (Low, Medium, High)
3. Click "Create Task"
4. Use filters to view specific tasks
5. Click "Edit" to update a task
6. Click "Delete" to remove a task

## 📁 Project Structure

```
frontend/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/
│   │   ├── Login.js        # Login page
│   │   ├── Register.js     # Registration page
│   │   ├── Dashboard.js    # Main dashboard
│   │   ├── TaskForm.js     # Task creation/edit form
│   │   └── TaskList.js     # Task display list
│   ├── context/
│   │   └── AuthContext.js  # Auth state management
│   ├── services/
│   │   └── api.js          # API integration
│   ├── App.js              # Main app component
│   ├── App.css             # Styles
│   └── index.js            # Entry point
├── .env                    # Environment variables
├── package.json
└── README.md
```

## 🎨 Features Breakdown

### Authentication Flow
- JWT tokens stored in localStorage
- Automatic token injection in API requests
- Auto-redirect on token expiration
- Protected routes for authenticated users

### Task Management
- Full CRUD operations
- Real-time updates after actions
- Filtering by status and priority
- Visual feedback for all actions

### UI/UX
- Gradient background design
- Card-based task layout
- Color-coded status badges
- Responsive grid layout
- Smooth animations and transitions

## 🔧 Available Scripts

### `npm start`
Runs the app in development mode at http://localhost:3000

### `npm run build`
Builds the app for production to the `build` folder

### `npm test`
Launches the test runner

## 🌐 API Integration

The frontend communicates with the backend API using axios. All API calls are centralized in `src/services/api.js`:

- **Authentication APIs**: Register, Login, Get Profile
- **Task APIs**: Get All, Get One, Create, Update, Delete

## 🔐 Security Features

1. **Token Management**
   - JWT tokens stored securely
   - Automatic token refresh handling
   - Auto-logout on token expiration

2. **Request Validation**
   - Client-side form validation
   - Error message display
   - Confirmation dialogs for destructive actions

3. **Protected Routes**
   - Authentication required for dashboard
   - Auto-redirect to login if not authenticated

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🎨 Styling

The app uses pure CSS with:
- CSS Grid for layouts
- Flexbox for component alignment
- CSS variables for consistent theming
- Smooth transitions and animations
- Gradient backgrounds

## 🚀 Production Build

To create a production build:

```bash
npm run build
```

This creates an optimized build in the `build` folder ready for deployment.

### Deployment Options

**Netlify/Vercel:**
```bash
npm run build
# Deploy the build folder
```

**Nginx:**
```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    root /path/to/build;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 🔄 State Management

The app uses React Context API for global state:
- `AuthContext`: Manages user authentication state
- Local component state for UI interactions
- Centralized API calls in service layer

## 🐛 Troubleshooting

### CORS Errors
Make sure the backend CORS configuration allows your frontend URL.

### API Connection Issues
1. Verify backend is running on port 5000
2. Check `.env` file has correct API URL
3. Restart the React dev server

### Authentication Issues
1. Clear localStorage and cookies
2. Re-register or login
3. Check browser console for errors

## 📝 License

MIT

## 👥 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request
