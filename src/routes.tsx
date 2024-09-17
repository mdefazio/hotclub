import { createBrowserRouter, Outlet, useParams } from "react-router-dom";
import App from "./App";
import ConnectorsView from "./views/Connectors/page";
import { IndexSample } from "./views/Indices/indexSample";
import { IndicesLayout } from "./views/Indices/layout";
import RelevanceView from "./views/Relevance/page";

import InferenceEndpoints from "./views/Relevance/inference-endpoints/page";

const Test = ({ title }: any) => {

  const { id } = useParams()

  return (
    <h1>{title}{id && ` - ${id}`}</h1>
  )
}

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
            path: "detail",
            element: <IndexSample />,
            children: [
              {
                path: "overview",
                element: <h2>Overview</h2>,
              },
              {
                path: "documents",
                element: <h2>Documents</h2>,
              },
              {
                path: "mappings",
                element: <h2>Mappings</h2>,
              },
              {
                path: "pipelines",
                element: <h2>Pipelines</h2>,
              },
              {
                path: "settings",
                element: <h2>Settings</h2>,
              },

            ]
          },
          {
            path: "settings",
            element: <Test title='Settings' />,
          },
        ],
      },
      {
        path: "connectors",
        element: <ConnectorsView />,
        children: [
          {
            path: "detail",
            element: <Test title='Connector detail' />,
          }
        ]
      },
      {
        path: "crawlers",
        element: <div><h1>Web Crawlers</h1><Outlet /></div>,
        children: [
          {
            path: "detail",
            element: <Test title='Web crawler detail' />,
          }
        ]
      },
      {
        path: "relevance",
        element: <RelevanceView />,
        children: [
          {
            path: "inference-endpoints",
            element: <InferenceEndpoints />,
          },
        ]
      },
      {
        path: "search-applications",
        element: <h1>Search Applications</h1>
      },
      {
        path: "behavioral-analytics",
        element: <h1>Behavioral Analytics</h1>
      },
      {
        path: "getting-started",
        element: <h1>Getting Started</h1>
      },
    ],
  },
]);
