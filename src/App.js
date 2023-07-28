import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import DashboardPage from './Components/DashboardPage';
import AdminPage from './Components/AdminPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
  // useHistory
} from "react-router-dom"
// import CustomPizzaPage from './Components/CustomPizzaPage';

function App() {

  // const myState = useSelector((state) => state.ChangeLoginBtnBoolValue);
  // const dispatch = useDispatch();

  // dispatch(toggleFalse);
  // console.log(myState);

  return (
    <>
      <Router>
        <Navbar />
        <AdminPage />
        {/* <CustomPizzaPage /> */}
        <Routes>
          <Route exact path='/home' element={<HomePage />} />
          <Route exact path='/dashboard' element={<DashboardPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
