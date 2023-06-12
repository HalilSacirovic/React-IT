import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes/AllQuotes";
import QuoteDetails from "./pages/QuoteDetails/QuoteDetails";
import EditQuote from "./pages/QuoteDetails/EditQuote";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import TryAdd from "./pages/TryAdd/TryAdd";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllQuotes />} />
        <Route path="/quote/:id" element={<QuoteDetails />} />
        <Route path="/quote/edit/:id" element={<EditQuote/>} />
        <Route path="/login" element ={<Login/>} />
        <Route path="/signup" element ={<SignUp/>} />
        <Route path="/newquoteadd" element ={<TryAdd/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
