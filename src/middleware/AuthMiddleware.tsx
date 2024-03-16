import { Navigate } from "react-router-dom";

type Props = {
    children: React.ReactNode;
}

const AuthMiddleware = ({children} : Props) => {
    const isAuthenticated = false;

    if (isAuthenticated) {
        return children;
    } else {
        return <Navigate to="/login" />;
    }
}

export default AuthMiddleware;