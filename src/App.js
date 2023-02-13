import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddStudent from "./components/AddStudent";
import ManageStudents from "./components/ManageStudents";
import Login from "./components/Login";
import { Navigate } from "react-router";

function App() {
  const ProtectedRoute = ({ children }) => {
    if (!localStorage.getItem("id")) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Navbar>
                  <AddStudent />
                </Navbar>
              </ProtectedRoute>
            }
          />
          <Route
            path="/add"
            element={
              <Navbar>
                <AddStudent />
              </Navbar>
            }
          />
          <Route
            path="/manage"
            element={
              <Navbar>
                <ManageStudents />
              </Navbar>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
