# MERN Friend List Client

A React-based client application for managing a friend list with full CRUD operations. This is the frontend component of a MERN stack application that connects to a Node.js/Express backend API.

## Project Overview

This application provides a simple and intuitive interface for managing a list of friends. Users can add new friends with their name and age, view the complete friend list, update friend information, and remove friends from the list. The application communicates with a RESTful API hosted on Heroku to perform all data operations.

## Features

- **Add Friends**: Create new friend entries with name and age
- **View Friends**: Display a complete list of all friends with their details
- **Update Friends**: Modify friend information (specifically age) using a prompt interface
- **Delete Friends**: Remove friends from the list with a single click
- **Real-time Updates**: Automatic fetching of friend list on component mount
- **Responsive UI**: Clean and simple interface with basic styling

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                     React Client Application                  │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │  App.js (Main Component)                                │ │
│  │  - State Management (name, age, friendList)            │ │
│  │  - CRUD Operations (add, read, update, delete)         │ │
│  │  - UI Rendering                                          │ │
│  └─────────────────────────────────────────────────────────┘ │
│                            │                                  │
│                            │ Axios HTTP Client               │
│                            ▼                                  │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ HTTP Requests
                            │ (GET, POST, PUT, DELETE)
                            ▼
┌─────────────────────────────────────────────────────────────┐
│              Backend API (Heroku-hosted)                     │
│         https://mernapptest123.herokuapp.com                 │
│                                                              │
│  Endpoints:                                                  │
│  - GET    /read          - Fetch all friends                │
│  - POST   /addFriend     - Add new friend                   │
│  - PUT    /update        - Update friend age                │
│  - DELETE /delete/:id    - Delete friend by ID              │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    MongoDB Database                          │
│              (Stores friend documents)                       │
└─────────────────────────────────────────────────────────────┘
```

## Tech Stack

### Frontend
- **React 18.1.0** - UI library for building the user interface
- **React DOM 18.1.0** - React renderer for the web
- **Axios 0.27.2** - HTTP client for making API requests
- **CSS3** - Styling and layout

### Development Tools
- **Create React App 5.0.1** - Build tool and development environment
- **React Scripts 5.0.1** - Scripts for running, testing, and building
- **Testing Library** - Jest, React Testing Library for unit testing

### Backend (External)
- **Node.js/Express API** - RESTful API hosted on Heroku
- **MongoDB** - NoSQL database for data persistence

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher recommended)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mern-client-test
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open in browser**
   The application will automatically open at [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner in interactive watch mode
- `npm run build` - Builds the app for production to the `build` folder
- `npm run eject` - Ejects from Create React App (one-way operation)

### Environment Configuration

The application is configured to connect to the Heroku-hosted backend API. To use a different backend, modify the API endpoints in `src/App.js`:

```javascript
// Current backend URL
const API_BASE = "https://mernapptest123.herokuapp.com";

// Update endpoints as needed:
axios.post(`${API_BASE}/addFriend`, { ... })
axios.get(`${API_BASE}/read`)
axios.put(`${API_BASE}/update`, { ... })
axios.delete(`${API_BASE}/delete/${id}`)
```

## API Examples

### Get All Friends
```javascript
axios.get("https://mernapptest123.herokuapp.com/read")
  .then((res) => {
    console.log(res.data); // Array of friend objects
  })
```

### Add New Friend
```javascript
axios.post("https://mernapptest123.herokuapp.com/addFriend", {
  name: "John Doe",
  age: 25
}).then((response) => {
  console.log(response.data); // Created friend object with _id
})
```

### Update Friend Age
```javascript
axios.put("https://mernapptest123.herokuapp.com/update", {
  newage: 26,
  id: "friend_id_here"
}).then(() => {
  console.log("Friend updated successfully");
})
```

### Delete Friend
```javascript
axios.delete(`https://mernapptest123.herokuapp.com/delete/${friendId}`)
  .then(() => {
    console.log("Friend deleted successfully");
  })
```

## Project Structure

```
mern-client-test/
├── public/
│   ├── _redirects          # Netlify/Heroku redirect configuration
│   ├── index.html           # HTML template
│   └── favicon.ico          # Application icon
├── src/
│   ├── App.js               # Main application component
│   ├── App.css              # Component styles
│   ├── App.test.js          # Component tests
│   ├── index.js             # Application entry point
│   └── reportWebVitals.js   # Performance metrics
├── package.json             # Project dependencies
└── README.md                # Project documentation
```

## Deployment

This application can be deployed to various platforms:

- **Netlify**: Supports the `_redirects` file for SPA routing
- **Vercel**: Automatic React deployment
- **Heroku**: Can be deployed as a static site
- **GitHub Pages**: Free hosting for static sites

To deploy, run:
```bash
npm run build
```
Then deploy the contents of the `build/` folder to your chosen platform.
