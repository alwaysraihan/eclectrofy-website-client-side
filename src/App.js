import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Authentication/Login/Login";
import Register from "./Pages/Authentication/Register/Register";
import Home from "./Pages/HomePage/Home/Home";
import MyCart from "./Pages/MyCart/MyCart";
import Header from "./Pages/SharedPages/Header/Header";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/buy/:id" element={<MyCart />} />
            </Routes>
        </>
    );
}

export default App;
