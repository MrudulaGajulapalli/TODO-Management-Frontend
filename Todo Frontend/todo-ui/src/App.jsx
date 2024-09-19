import { useState } from 'react'
import './App.css'
import FooterComponent from './Components/FooterComponent'
import HeaderComponent from './Components/HeaderComponent'
import ListTodoComponent from './Components/ListTodoComponent'
import { BrowserRouter , Routes , Route, Navigate} from 'react-router-dom'
import TodoComponent from './Components/TodoComponent'
import RegisterComponent from './Components/RegisterComponent'
import LoginComponent from './Components/LoginComponent'
import { isUserLoggedIn } from './services/AuthService'
function App() {

  function AuthenticatedRoute({children}){
    const isAuth = isUserLoggedIn();
    if(isAuth){
      return children;
    }
    return <Navigate to = "/"/>
  }
  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>
          <Routes>
            {/* //http://localhost: */}
              <Route path='/' element = {<LoginComponent/>}></Route>
            {/* //http://localhost:8080/todos */}
              <Route path='/todos' element = {<AuthenticatedRoute><ListTodoComponent/></AuthenticatedRoute>}></Route>
            {/* //http://localhost:8080/add-Todo */}
              <Route path='/addTodo' element = {<AuthenticatedRoute>< TodoComponent /></AuthenticatedRoute>}></Route>
            {/* //http://localhost:8080/update-Todo/id */}
              <Route path='/updateTodo/:id' element = {<AuthenticatedRoute>< TodoComponent /></AuthenticatedRoute>}></Route>
            {/* //http://localhost:8080/register */}
              <Route path='/register' element = {<RegisterComponent/>}></Route>
            {/* //http://localhost:8080/login */}
              <Route path='/login' element = {<LoginComponent/>}></Route>
          </Routes>
      <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
