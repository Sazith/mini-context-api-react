
import './App.css'
import UserContextProvider from "./context/UserContextProvider";
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1 className='text-3xl text-center mt-3 mb-3 font-semibold'>Context Api React</h1>
      <div className="min-h-screen flex items-start justify-center gap-10 p-10 bg-gray-100">
        <Login />
        <Profile />
      </div>
   
    </UserContextProvider>
  )
}

export default App
