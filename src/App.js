import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ForgotPassword from './pages/ForgotPassword';
import Offers from './pages/Offers'
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateListing from './pages/CreateListing';
import EditListing from './pages/EditListing';


function App() {
  return (
    <>
   
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/profile' element={<PrivateRoute />} >
          <Route path='/profile' element={<Profile />} />
          </Route>
          
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />

          <Route path='/create-listing' element={<PrivateRoute />} >
          <Route path='/create-listing' element={<CreateListing />} />
          </Route>

          <Route path='/edit-listing' element={<PrivateRoute />} >
          <Route path='/edit-listing/:listingID' element={<EditListing />} />
          </Route>
          


        </Routes>
      </Router>

     <ToastContainer
position="bottom-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </>

  );
}

export default App;
