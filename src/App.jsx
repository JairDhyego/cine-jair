import Routes from "./routes"
import "./styles.css"
import {ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

// https://sujeitoprogramador.com/r-api/?api=filmes/

export default function App() {
  return (
    <div className="app">
      <Routes/>
      <ToastContainer autoclose={3000} />
    </div>
  );
}
