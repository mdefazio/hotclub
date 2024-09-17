import React, { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

import {
  EuiAccordion,
  EuiSideNav,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiTitle,
  htmlIdGenerator,
  EuiListGroup,
  EuiListGroupItem,
  EuiCollapsibleNavGroup,
  EuiCollapsibleNavBeta,
  EuiPinnableListGroupItemProps,
  EuiCollapsibleNav,
  EuiPinnableListGroup,
  EuiPanel,
  EuiSpacer,
} from "@elastic/eui";


export const SideNavServerless = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [navIsOpen, setNavIsOpen] = useState(true)

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
    <EuiCollapsibleNavBeta>

    </EuiCollapsibleNavBeta>
  )
}
