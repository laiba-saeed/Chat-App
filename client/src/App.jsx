import { Routes, Route, Navigate } from "react-router-dom";
import Chat from "./containers/Chat";
import Register from "./containers/Register";
import Login from "./containers/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/NAvBar";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { ChatContextProvider } from "./context/chatContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <ChatContextProvider user={user}>
        <NavBar />
        <Container>
          <Routes className="text-secondary">
            <Route path="/" element={user ? <Chat /> : <Login />}></Route>
            <Route
              path="/register"
              element={user ? <Chat /> : <Register />}
            ></Route>
            <Route path="/login" element={user ? <Chat /> : <Login />}></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
          </Routes>
        </Container>
      </ChatContextProvider>
    </>
  );
}

export default App;
