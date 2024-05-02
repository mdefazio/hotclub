import { IndexListItemMetrics } from "../components/indexListItemMetrics";

export const MOCK_INDICES = [
  {
    label: "my-first-index",
    description: (
      <IndexListItemMetrics
        items={[
          { label: "1k", iconType: "document" },
          { label: "23", iconType: "warning" },
        ]}
        health="danger"
      />
    ),
  },
  {
    label: "my-second-index",
    description: (
      <IndexListItemMetrics
        items={[
          { label: "1k", iconType: "document" },
          { label: "23", iconType: "warning" },
        ]}
        health="success"
      />
    ),
  },
  {
    label: "my-third-index",
    description: (
      <IndexListItemMetrics
        items={[
          { label: "1k", iconType: "document" },
          { label: "23", iconType: "warning" },
        ]}
        health="warning"
      />
    ),
  },
  {
    label: "my-fourth-index",
    description: (
      <IndexListItemMetrics
        items={[
          { label: "1k", iconType: "document" },
          { label: "23", iconType: "warning" },
        ]}
        health="success"
      />
    ),
  },
  {
    label: "my-fifth-index",
    description: (
      <IndexListItemMetrics
        items={[
          { label: "1k", iconType: "document" },
          { label: "23", iconType: "warning" },
        ]}
        health="warning"
      />
    ),
  },
];
