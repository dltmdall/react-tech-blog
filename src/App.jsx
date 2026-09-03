import Header from "./components/Header.jsx";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <small>© 2026 Seung Mi Lee</small>
      </footer>
    </>
  )
}

export default App
