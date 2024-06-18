import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({ Comp, user }) => {
    const token = localStorage.getItem("login")
    if (token === "true") {
        return <Comp></Comp>
    }
    else {
        return <Navigate to="/login" />
    }
}