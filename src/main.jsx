import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // Bu mütləqdir
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { PlanProvider } from './context/PlanContext.jsx' // 👈 ƏLAVƏ ET
import { RoutineProvider } from '../src/context/RoutineContext.jsx' // <--- IMPORT ET
import { ExerciseProvider } from './context/ExerciseContext'; // <--- YENİ
import './assets/styles/global.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PlanProvider>
          <RoutineProvider>
            <ExerciseProvider>
              <App />
            </ExerciseProvider>
          </RoutineProvider>
        </PlanProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)