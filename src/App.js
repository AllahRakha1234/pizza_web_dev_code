import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import DashboardPage from './Components/DashboardPage';
// import { SignUpPage } from './Components/SignUpPage';
import Footer from './Components/Footer';
// import { useSelector, useDispatch } from "react-redux";
// import { toggleTrue, toggleFalse } from "./actions/loginBtnAction"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useHistory
} from "react-router-dom"

function App() {

  // const myState = useSelector((state) => state.ChangeLoginBtnBoolValue);
  // const dispatch = useDispatch();

  // dispatch(toggleFalse);
  // console.log(myState);

  return (
    <>
      <Router>

        <Navbar />
        {/* <HomePage /> */}
        {/* <DashboardPage /> */}
        {/* <LoginPage /> */}
        {/* <SignUpPage /> */}
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/dashboard' element={<DashboardPage />} />
          {/* <Route exact path='/signup' element={<SignUpPage />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
