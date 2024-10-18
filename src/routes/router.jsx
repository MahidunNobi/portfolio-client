import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../layout/layout";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
            index: true,
            element: <App />
        }
      ]
    },
  ]);