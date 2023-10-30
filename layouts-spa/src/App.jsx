import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CreateAccount1 from "./pages/Signup/CreateAccount1";
import CreateAccount2 from "./pages/Signup/CreateAccount2";
import CreateAccount3 from "./pages/Signup/CreateAccount3";
import CreateAccount4 from "./pages/Signup/CreateAccount4";
import Profile from "./pages/Profile/Profile";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <CreateAccount1 />,
  },
  {
    path: "/signup2",
    element: <CreateAccount2 />,
  },
  {
    path: "/signup3",
    element: <CreateAccount3 />,
  },
  {
    path: "/signup4",
    element: <CreateAccount4 />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
