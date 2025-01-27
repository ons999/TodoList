import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Footer from './Footer'
import TodoList from './TodoList.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <TodoList /> 
    <Footer/>
  </StrictMode>,
)
