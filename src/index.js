import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { SidebarProvider } from './context/sidebar_context'

// import { AppProvider, useGlobalContext } from './context'
// import Alternative from './Alternative'

ReactDOM.render(
  <SidebarProvider>
    <App />
  </SidebarProvider>,
  document.getElementById('root')
)
