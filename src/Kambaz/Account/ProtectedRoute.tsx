import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }: { children: any }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    if (currentUser) {
        return children;
    }

    return <Navigate to="../Signin" replace />;
}

export default ProtectedRoute;