import KambazNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Account from "./Account";
import { ProtectedRoute, ProtectedCourseRoute } from "./Account/ProtectedRoute";
import { Provider } from "react-redux";
import store from "./store";

export default function Kambaz() {
  return (
    <Provider store={store}>
      <div id="wd-kambaz">
        <div className="d-flex">
          <div style={{ width: "110px", position: "fixed", height: "100vh", zIndex: 1000 }}>
            <KambazNavigation />
          </div>
          <div style={{ marginLeft: "110px", width: "100%" }} className="p-3">
            <Routes>
              <Route path="/" element={<Navigate to="Account" />} />
              <Route path="Account/*" element={<Account />} />
              <Route
                path="Dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="Courses/:cid/*"
                element={
                  <ProtectedCourseRoute>
                    <Courses />
                  </ProtectedCourseRoute>
                }
              />
              <Route path="Calendar" element={<h1>Calendar</h1>} />
              <Route path="Inbox" element={<h1>Inbox</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </Provider>
  );
}