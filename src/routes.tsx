import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ConnectorsView from "./views/Connectors/page";
import { IndexSample } from "./views/Indices/indexSample";
import { IndicesLayout } from "./views/Indices/layout";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "indices",
        element: <IndicesLayout />,
        children: [
          {
            path: "foo/:foo",
            element: <IndexSample />,
          },
        ],
      },
      {
        path: "connectors",
        element: <ConnectorsView />,
      },
    ],
  },
]);
