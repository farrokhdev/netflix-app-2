import "./app.scss";
import { Navbar, MainComp, Sidebar } from "components";

import {
  Home,
  Login,
  Analytics,
  AllUsers,
  AllProducts,
  CreateUser,
  EditUser,
  CreateProduct,
  EditProduct,
  AllLists,
  CreateList,
  EditList,
} from "pages";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useAuthContext } from "contexts";

function App() {
  const { user } = useAuthContext();
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <MainComp>
            {user ? (
              <>
                <Sidebar />
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/analytics">
                  <Analytics />
                </Route>
                <Route path="/allusers">
                  <AllUsers />
                </Route>
                <Route path="/createuser">
                  <CreateUser />
                </Route>
                <Route path="/user/:id">
                  <EditUser />
                </Route>
                <Route path="/allProducts">
                  <AllProducts />
                </Route>
                <Route path="/createproduct">
                  <CreateProduct />
                </Route>
                <Route path="/product/:id">
                  <EditProduct />
                </Route>
                <Route path="/alllist">
                  <AllLists />
                </Route>
                <Route path="/createlist">
                  <CreateList />
                </Route>
                <Route path="/list/:id">
                  <EditList />
                </Route>
              </>
            ) : (
              <Redirect to="/login" />
            )}

            {/* register and login routes  */}
            <Route path="/login">
              {user ? <Redirect to="/" /> : <Login />}
            </Route>
          </MainComp>
        </Switch>
      </Router>
    </>
  );
}

export default App;
