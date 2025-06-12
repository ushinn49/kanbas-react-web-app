import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

export function ProtectedRoute({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (currentUser) {
    return children;
  }
  return <Navigate to="/Kambaz/Account/Signin" />;
}

export function ProtectedCourseRoute({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const { cid } = useParams();

  if (!currentUser) {
    return <Navigate to="/Kambaz/Account/Signin" />;
  }

  const isEnrolled = enrollments.some(
    (e: any) => e.user === currentUser._id && e.course === cid
  );

  if (!isEnrolled) {
    return <Navigate to="/Kambaz/Dashboard" />;
  }

  return children;
}