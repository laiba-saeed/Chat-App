import { Routes, Route, Navigate } from "react-router-dom";
import Chat from "./containers/Chat";
import Register from "./containers/Register";
import Login from "./containers/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/NAvBar";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Routes className="text-secondary">
          <Route path="/" element={<Chat />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
