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
      name: "Home",
      id: htmlIdGenerator("basicExample")(),
      onClick: () => navigate("/"),
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
          isSelected: checkParams("/content/connectors"),
          onClick: () => navigate("/content/connectors"),
        },
        {
          name: "Web Crawlers",
          id: htmlIdGenerator("basicExample")(),
          isSelected: checkParams("/content/crawlers"),
          onClick: () => navigate("/content/crawlers"),
        },
        {
          name: "Settings",
          id: htmlIdGenerator("basicExample")(),
          isSelected: checkParams("/content/settings"),
          onClick: () => navigate("/content/settings"),
        },
      ],
    },
    {
      name: "Applications",
      id: "applications",
      items: [
        {
          name: "Search Applications",
          id: "search-applications",
          onClick: () => navigate("/"),
        },
        {
          name: "Behavioral Analytics",
          id: "behavioral-analytics",
          onClick: () => navigate("/"),
        },
      ],
    },
    {
      name: "Getting Started",
      id: "getting-started",
      items: [
        {
          name: "Elasticsearch",
          id: "gs-elasticsearch",
          onClick: () => navigate("/"),
        },
        {
          name: "Vector Search",
          id: "gs-vector-search",
          onClick: () => navigate("/"),
        },
        {
          name: "AI Search",
          id: "gs-ai-search",
          onClick: () => navigate("/"),
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
