import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import AllQuotes from "./pages/AllQuotes/AllQuotes";
import QuoteDetails from "./pages/QuoteDetails/QuoteDetails.js";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import AddQuote from './pages/TryAdd/TryAdd'
import EditQuote from "../src/pages/QuoteDetails/EditQuote";
import { store } from "./store/store";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { authSlice } from "./store/authSlice";
import Favorite from "./pages/QuoteDetails/Favorite";
import Report from "./pages/QuoteDetails/Report";

const NavigationRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      const decoded = jwtDecode(token);
      dispatch(authSlice.actions.setData(decoded));
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllQuotes />} />
        <Route path="/quote/:id" element={<QuoteDetails />} />
        <Route path="/quote/edit/:id" element={<EditQuote />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/add-quote" element={<AddQuote />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/reported" element={<Report/>} />
      </Routes>
    </BrowserRouter>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationRoutes />
    </Provider>
  );
};

export default App;
