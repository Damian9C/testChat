import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Login} from "../view/log/login";
import Chat from "../view/chat/chat";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={
                  <Login/>
              }/>
              <Route path="/chats" element={
                  <Chat/>
              }/>
          </Routes>
      </Router>
  );
}

export default App;
