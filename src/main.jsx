import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // Bu mütləqdir
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { PlanProvider } from './context/PlanContext.jsx' // 👈 ƏLAVƏ ET
import { RoutineProvider } from '../src/context/RoutineContext.jsx' // <--- IMPORT ET
import { ExerciseProvider } from './context/ExerciseContext'; // <--- YENİ
import { CartProvider } from './context/CartContext.jsx'; // <--- SHOP CART
import { Toaster } from 'react-hot-toast';
import './assets/styles/global.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PlanProvider>
          <RoutineProvider>
            <ExerciseProvider>
              <CartProvider>
                <App />
                <Toaster 
                  position="top-right"
                  toastOptions={{
                    style: {
                      background: '#1a1a1a',
                      color: '#fff',
                      border: '1px solid rgba(212, 244, 88, 0.2)'
                    },
                    success: {
                      iconTheme: {
                        primary: '#D4F458',
                        secondary: '#000'
                      }
                    }
                  }}
                />
              </CartProvider>
            </ExerciseProvider>
          </RoutineProvider>
        </PlanProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)