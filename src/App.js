import "./App.css";
import { Link, Outlet } from "react-router-dom";
import Login from "./Components/Login";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <div>
    <Provider store={store}>
    <div className="d-flex justify-content-center text-decoration-none bg-dark border border-light" style={{ borderRadius: "1px" }}>
        <i className="d-flex align-items-center ms-2 me-2">
          <a href="/" className="text-decoration-none" style={{ fontSize: "25px", color: "gold" }}>
            <img src="https://i.pinimg.com/originals/8e/18/35/8e1835e8abbc2b819663d61a034467e4.jpg" alt="" width="100px"></img>
          </a>
        </i>
        <div className="w-100 d-flex mx-auto ms-2 p-2 my-1">
        <Link to="/dashboard" id="dash" hidden className="text-warning text-decoration-none">
              Dash-Board
            </Link>
            <Link to="/booking" className="text-warning text-decoration-none ms-4">
              Booking
            </Link>
            <Link to="/login" className="text-warning text-decoration-none ms-auto">
              Login
            </Link>
            <Link to="/signup" className="text-warning text-decoration-none ms-4">
              Sign Up
            </Link> 
        </div>
      </div>
        <div>
          <Outlet></Outlet>
        </div>
    </Provider>
    </div>
  );
}

export default App;
