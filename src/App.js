import './App.css';
import React from 'react';
import Login from './container/Login'
import Callback from './container/Callback'
import Homepage from './container/Homepage'
import Article from './container/Article'
import { 
  // createBrowserRouter,
  // RouterProvider,
  // Outlet,
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import UserDataProvider from "./actions/provider/user";
import Register from "./container/Register";
import Navbar from "./container/Navbar";
import styled from "styled-components";

// function App() {
//   const router = createBrowserRouter([
//     { path: '/', element: <Homepage /> },
//     { path: '/login', element: <Login /> },
//     { path: '/callback', element: <Callback /> },
//     { path: '/register', element: <Register /> },
//   ]);
//   return (
//     <div className="App">
//       <UserDataProvider>
//         <RouterProvider router={router} />
//       </UserDataProvider>
//     </div>
//   );
// }
const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <UserDataProvider>
            <Container>
              <Navbar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/callback" element={<Callback />} />
              <Route path="/register" element={<Register />} />
              <Route path="/article/:articleId" element={<Article />} />
            </Routes>

            </Container>

          </UserDataProvider>
        </BrowserRouter>
    </div>
  );
}

// const Layout = ({ children }) => () => {
//   return (
//     <div className="App">
//       <UserDataProvider>
//       </UserDataProvider>
//     </div>
//   );
// }

export default App;
