import { useNavigate, useLocation } from "react-router-dom";

import {
  EuiSideNav,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiTitle,
  htmlIdGenerator,
} from "@elastic/eui";

export const SideNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const checkParams = (path: string) => {
    return location.pathname?.includes(path);
  };

  const sideNavItems = [
    {
      name: <></>,
      id: htmlIdGenerator("basicExample")(),
      items: [
        {
          name: "Home",
          id: htmlIdGenerator("basicExample")(),
          onClick: () => navigate("/"),
        },
        {
          name: "Dev console",
          id: htmlIdGenerator("basicExample")(),
        },
      ]
    },
    {
      name: "Kibana",
      id: "kibana",
      items: [
        {
          name: "Discover",
          id: htmlIdGenerator("basicExample")(),
        },
        {
          name: "Dashboards",
          id: htmlIdGenerator("basicExample")(),
        },
      ],
    },
    {
      name: "Content",
      id: "content",
      items: [
        {
          name: "Indices",
          id: htmlIdGenerator("basicExample")(),
          isSelected: checkParams("/indices") || checkParams("/indices"),
          onClick: () => navigate("/indices"),
        },
        {
          name: "Connectors",
          id: htmlIdGenerator("basicExample")(),
          isSelected: checkParams("/connectors"),
          onClick: () => navigate("/connectors"),
        },
        {
          name: "Web Crawlers",
          id: htmlIdGenerator("basicExample")(),
          isSelected: checkParams("/crawlers"),
          onClick: () => navigate("/crawlers"),
        },
      ],
    },
    {
      name: "Build",
      id: "build",
      items: [
        {
          name: "Playground",
          id: htmlIdGenerator("basicExample")(),
        },
        {
          name: "Search Applications",
          id: htmlIdGenerator("basicExample")(),
        },
        {
          name: "Behavioral Analytics",
          id: htmlIdGenerator("basicExample")(),
        },
      ],
    },
    {
      name: "Relevance",
      id: "relevance",
      items: [
        {
          name: "Inference Endpoints",
          id: htmlIdGenerator("basicExample")(),
          isSelected: checkParams("/relevance/inference-endpoints"),
          onClick: () => navigate("/relevance/inference-endpoints"),
        },
      ],
    },
    {
      name: "Enterprise Search",
      id: "enterprise-search",
      items: [
        {
          name: "App Search",
          id: "app-search",
          onClick: () => navigate("/"),
        },
        {
          name: "Workplace Search",
          id: "workplace-search",
          onClick: () => navigate("/"),
        },
      ],
    },
  ];

  return (
    <EuiSideNav
      items={sideNavItems}
      aria-label="Left nav"
      heading={
        <EuiFlexGroup alignItems="center" gutterSize="m">
          <EuiFlexItem grow={false}>
            <EuiIcon type="logoElasticsearch" />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiTitle size="xs">
              <h2>Search</h2>
            </EuiTitle>
          </EuiFlexItem>
        </EuiFlexGroup>
      }
    />
  );
};
