import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import bootstrap
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
// import component
import HomePage from "./pages/homePage/homePage";
import PostPage from "./pages/postPage/postPage";
import ProfilePage from "./pages/profilePage/profilePage";
import LoginPage from "./pages/loginPage/loginPage";
import PostDetailPage from "./pages/postDetailpage/postDetailpage";


export default function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <Link style={{ marginRight:'10px'}} to="/">Home</Link>
        <Link style={{ marginRight:'10px'}} to="/posts">Posts</Link>
        <Link style={{ marginRight:'10px'}} to="/">Profile</Link> */}
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/posts">Posts</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
