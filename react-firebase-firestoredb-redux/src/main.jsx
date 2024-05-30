import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store.js'
import { AuthProvider } from './context/GoogleAuth.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <AuthProvider>
          <App/>
      </AuthProvider>
        
   
      
  </Provider>
   
)
