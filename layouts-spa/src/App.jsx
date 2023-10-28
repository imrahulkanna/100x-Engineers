import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

function App() {
  return (
    <div className="min-h-screen bg-black text-twitter-neutral-50 font-inter flex flex-col justify-center">
      <RouterProvider router={router} />
    </div>
  );
}

export default App
