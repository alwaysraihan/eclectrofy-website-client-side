import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddReview from "./Components/Dashboard/AddReview";
import MyOrders from "./Components/Dashboard/MyOrders";
import MyProfile from "./Components/Dashboard/MyProfile";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Login from "./Pages/Authentication/Login/Login";
import Register from "./Pages/Authentication/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Payment from "./Pages/Dashboard/Payment";
import Home from "./Pages/HomePage/Home/Home";
import Purchase from "./Pages/MyCart/Purchase";
import Footer from "./Pages/SharedPages/Footer/Footer";
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
                    <Route
                        path="payment/:orderid"
                        element={
                            <RequireAuth>
                                <Payment />
                            </RequireAuth>
                        }
                    />
                </Route>
            </Routes>
            <ToastContainer />
            <div className="bg-gray-800">
                <Footer />
            </div>
        </>
    );
}

export default App;
