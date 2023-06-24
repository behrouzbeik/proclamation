import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
// import { themeSettings } from "./theme";
import Home from './Pages/Home';
import NavBar from "./Components/NavBar";
import Login from "./Pages/LoginPage";
import Register from "./Pages/RegisterPage";

import { Provider } from "react-redux";
import store from './Store/store.js'
import ProfilePage from "./Pages/ProfilePage";
import AddProductPage from "./Pages/AddProductPage";


function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <CssBaseline />
          
          <Routes>
            <Route path="/" element={<NavBar />}>
              <Route index element={<Home />} />
              <Route path="/react_proclamation/" element={<Navigate to="/"/>} />
              <Route path="/Login" element={<Login/>}/>
              <Route path="/Register" element={<Register/>}/>
              <Route path="/Profile" element={<ProfilePage/>}/>
              <Route path="/AddProduct" element={<AddProductPage/>}/>
              
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>

    </>
  );
}

export default App;
