import { redirect, RouterProvider } from "react-router";
import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ErrorBoundary from "./error-boundary";
import Login from "./pages/Login";
import authLoader from "./utils/authLoader";
import { fakeAuthProvider } from "./utils/fakeAuth";
import protectedLoader from "./utils/protectedLoader";
import Contact from "./pages/Contact";
import Layout from "./components/layout";
import "react-toastify/dist/ReactToastify.css";
import ChartAndMap from "./pages/ChartAndMap";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    loader() {
      return { user: "test" };
    },
    errorElement: <ErrorBoundary />,
    Component: Home,
  },
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "contact",
        loader: protectedLoader,
        Component: Contact,
      },
      {
        path: "charts/map",
        loader: protectedLoader,
        Component: ChartAndMap,
      },
    ],
  },
  {
    path: "auth",
    children: [
      {
        path: "login",
        Component: Login,
        loader: authLoader,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
  {
    path: "/logout",
    async action() {
      await fakeAuthProvider.signout();
      return redirect("/");
    },
    errorElement: <ErrorBoundary />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
    </>
  );
}

export default App;
