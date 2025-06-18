import { createBrowserRouter, RouterProvider } from "react-router";

//Laders


//Pages
import Home from "./pages/Home";
import Certificates from "./pages/Certificates";

//Components
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "sertificates",
        element: <Certificates />
      },
      {
        path: "*",
        element: <div>404 page</div>
      }
    ]
  }
])

function App() {
  return (<RouterProvider router={router} />)
}

export default App
