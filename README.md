# Lyft Waitlist Application

A React-based waitlist management application that allows users to register for both invite-only and general waitlists. The application features real-time updates and a modern, responsive user interface.

## Features

- User registration for invite-only and general waitlists
- Real-time waitlist updates with automatic user additions
- Responsive design using Bootstrap
- Modern routing with React Router
- Context-based state management
- Separate views for registration and waitlist management

## Prerequisites

Before running this application, make sure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- Git (for deployment and version control)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd waitinglistapp
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

To start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Deployment

### Deploying to Vercel

1. **Prepare Your Repository**
   - Create a GitHub account at https://github.com/signup
   - Create a new repository on GitHub
   - Push your code to GitHub:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git branch -M main
     git remote add origin <your-github-repo-url>
     git push -u origin main
     ```

2. **Deploy with Vercel**
   - Sign up for Vercel at https://vercel.com/signup using your GitHub account
   - Once logged in, click "Import Project"
   - Choose "Import Git Repository"
   - Select your waitlist app repository
   - Keep the default settings:
     - Framework Preset: Vite
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Click "Deploy"

3. **Your App Is Live!**
   - Vercel will provide you with a deployment URL (e.g., `https://your-app-name.vercel.app`)
   - The app will automatically redeploy when you push changes to your GitHub repository

### Environment Variables (if needed)
If your app uses environment variables:
1. Create a `.env` file locally
2. Add the same variables in your Vercel project settings:
   - Go to your project in Vercel
   - Navigate to Settings > Environment Variables
   - Add each variable and its value

## Testing the Application

### Manual Testing Steps

1. **Registration Testing**:
   - Navigate to the home page
   - Fill out the registration form
   - Test both invite-only and general waitlist registrations
   - Verify form validation works

2. **Waitlist View Testing**:
   - Navigate to the Waitlist page
   - Verify that registered users appear in the correct lists
   - Wait for 10 seconds to see automatic user additions
   - Check that the table updates in real-time

3. **Navigation Testing**:
   - Test the navigation links in the header
   - Verify that routing works correctly
   - Check that the Lyft logo and branding are visible

## Project Structure

```
waitinglistapp/
├── src/
│   ├── components/         # Reusable components
│   ├── context/           # Context providers
│   ├── pages/             # Page components
│   ├── styles/            # CSS styles
│   ├── assets/           # Images and other static assets
│   ├── App.jsx           # Main application component
│   └── main.jsx          # Application entry point
├── public/               # Public assets
└── package.json         # Project dependencies and scripts
```

## Built With

- [React](https://reactjs.org/) - Frontend library
- [Vite](https://vitejs.dev/) - Build tool and development server
- [React Router](https://reactrouter.com/) - Navigation
- [Bootstrap](https://getbootstrap.com/) - Styling and components

## Known Issues

- The real-time simulation may occasionally show delayed updates in the waitlist
- Form validation messages might need improvement for better user experience

## Future Improvements

- Add user authentication
- Implement waitlist position tracking
- Add email notifications
- Include admin dashboard
- Add unit and integration tests

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
