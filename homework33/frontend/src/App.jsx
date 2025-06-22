import { createBrowserRouter, RouterProvider } from "react-router";

//Laders


//Pages
import Classes from "./pages/classes"
import AboutUs from "./pages/about-us"
import Hotels from "./pages/hotels";
import Travel from "./pages/travel";

//Components
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <div>Home</div>
      },
      {
        path: "classes",
        element: <Classes />
      },
      {
        path: "about-us",
        element: <AboutUs />,
        loader: () => {console.log("loading data"); return "My Data!"}
      },
      {
        path: "hotels",
        element: <Hotels />
      },
      {
        path: "travel",
        element: <Travel />
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
