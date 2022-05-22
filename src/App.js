import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Authentication/Login/Login";
import Register from "./Pages/Authentication/Register/Register";
import Home from "./Pages/HomePage/Home/Home";
import Header from "./Pages/SharedPages/Header/Header";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Register />} />
                <Route path="/register" element={<Login />} />
            </Routes>
        </>
    );
}

export default App;
