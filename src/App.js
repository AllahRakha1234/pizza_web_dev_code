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
// import CartPage from './Components/CartPage';

function App() {

  // const myState = useSelector((state) => state.ChangeLoginBtnBoolValue);
  // const dispatch = useDispatch();

  // dispatch(toggleFalse);
  // console.log(myState);

  return (
    <>
      <Router>
        <Navbar />
        {/* <AdminPage /> */}
        {/* <CustomPizzaPage /> */}
        {/* <CartPage /> */}
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/dashboard' element={<DashboardPage />} />
          {/* <Route exact path='/customPizza' element={<CustomPizzaPage />} /> */}
        </Routes>
        {/* <DashboardPage /> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
