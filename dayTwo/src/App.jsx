import './App.css'
import LoginForm from './components/login/login'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Register from './components/register/register';
// import TodoList from './components/to_do/todo_list';
import TodoApp from './components/to_do/todo_list';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Movie from './pages/movie/movie';
import Favorites from './pages/favorites/favorites';
import Login from './pages/login/loginPage';
import Details from './pages/details/details';
import store from './store/store';
import { Provider } from 'react-redux'
function App() {

  return(
    // <LoginForm/>
    // <Register/>
    // <TodoApp/>
    <Provider store={store}>
<BrowserRouter>
      <Navbar/>
      <Outlet/>
      
      <Routes>
            <Route path="/" element={<Movie />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/details/:movieId" element={<Details />} />
            
        </Routes>
    </BrowserRouter>
    

    </Provider>
    


    
  
  )
  }

export default App
