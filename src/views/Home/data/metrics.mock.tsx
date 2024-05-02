import { EuiHealth } from "@elastic/eui";
import { MetricProps } from "../types/metric.type";
export const MOCK_METRICS: MetricProps[] = [
  {
    description: "Documents",
    icon: "documents",
    emptyStateCTALabel: "Create an index",
    emptyStateMessage: "Create your first index to start adding documents.",
    metrics: [
      {
        title: "Documents",
        value: "108",
      },
      {
        title: "Indices",
        value: "12",
      },
      {
        title: "Ingest health",
        value: <EuiHealth color="success"> No issues</EuiHealth>,
      },
    ],
  },
  {
    description: "Queries",
    icon: "search",
    emptyStateCTALabel: "Start searching",
    emptyStateMessage: "Start searching to see queries and clicks.",
    metrics: [
      {
        title: "Queries",
        value: "42,108",
      },
      {
        title: "Errors per hour",
        value: <EuiHealth color="danger"> 23</EuiHealth>,
      },
      {
        title: "Performance",
        value: <EuiHealth color="warning"> Slow</EuiHealth>,
      },
    ],
  },
  {
    description: "Machine Learning",
    icon: "compute",
    emptyStateCTALabel: "Add an ML node",
    emptyStateMessage:
      "Add a machine learning node to configure trained models.",
    metrics: [
      {
        title: "CPU",
        value: "63%",
      },
      {
        title: "Memory",
        value: "3.2gb",
      },
      {
        title: "Health",
        value: <EuiHealth color="success"> Healthy</EuiHealth>,
      },
    ],
  },
];

export const MOCK_METRICS_EMPTY: MetricProps[] = [
  {
    description: "Documents",
    icon: "documents",
    emptyStateCTALabel: "Add documents",
    emptyStateMessage: "Create your first index to start adding documents.",
    metrics: [
      {
        title: "Total",
        value: 0,
      },
      {
        title: "Indices",
        value: 0,
      },
      {
        title: "Ingest",
        value: 0,
      },
    ],
  },
  {
    description: "Queries",
    icon: "search",
    emptyStateCTALabel: "Start searching",
    emptyStateMessage: "Start searching to see queries and clicks.",
    metrics: [
      {
        title: "Total",
        value: 0,
      },
      {
        title: "Indices",
        value: 0,
      },
      {
        title: "Ingest",
        value: 0,
      },
    ],
  },
  {
    description: "Machine Learning",
    icon: "compute",
    emptyStateCTALabel: "Add an ML node",
    emptyStateMessage:
      "Add a machine learning node to configure trained models.",
    metrics: [
      {
        title: "CPU",
        value: 0,
      },
      {
        title: "Memory",
        value: 0,
      },
      {
        title: "Health",
        value: 0,
      },
    ],
  },
];
