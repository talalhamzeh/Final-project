import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/userList/List";
import ProductList from "./pages/userList/ProductList";
import SingleUser from "./pages/userDisplay/UserDisplay";
import New from "./pages/new/New";
import Register from "./pages/new/Register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs} from "./pages/new/Inputs";



import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {


  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="/users">
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              <Route
                path=":userId"
                element={
                  <RequireAuth>
                    <SingleUser />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={userInputs} title="Add New User" />
                  </RequireAuth>
                }
              />
              <Route
                path="register"
                element={
                 
                    <Register inputs={userInputs} title="Add New User" />
                 
                }
              />
            </Route>
            
            <Route path="/products">
              <Route
                index
                element={
                  <RequireAuth>
                    <ProductList />
                  </RequireAuth>
                }
              />
              <Route
                path=":productId"
                element={
                  <RequireAuth>
                    <SingleUser />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={productInputs} title="Add New Product" />
                  </RequireAuth>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;