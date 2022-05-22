import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddReview from "./Components/Dashboard/AddReview";
import MyOrders from "./Components/Dashboard/MyOrders";
import MyProfile from "./Components/Dashboard/MyProfile";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Login from "./Pages/Authentication/Login/Login";
import Register from "./Pages/Authentication/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/HomePage/Home/Home";
import Purchase from "./Pages/MyCart/Purchase";
import Header from "./Pages/SharedPages/Header/Header";

function App() {
    const { pathname } = useLocation();
    return (
        <>
            <div className={`${pathname.includes("/dashboard") && "hidden"}`}>
                <Header />
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/purchase/:id" element={<Purchase />} />
                <Route
                    path="/dashboard"
                    element={
                        <RequireAuth>
                            <Dashboard />
                        </RequireAuth>
                    }
                >
                    <Route
                        index
                        element={
                            <RequireAuth>
                                <MyProfile />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="myOrders"
                        element={
                            <RequireAuth>
                                <MyOrders />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="addReview"
                        element={
                            <RequireAuth>
                                <AddReview />
                            </RequireAuth>
                        }
                    />
                </Route>
            </Routes>
            <ToastContainer />
        </>
    );
}

export default App;
