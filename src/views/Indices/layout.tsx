import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { EuiPageTemplate } from "@elastic/eui";

export const IndicesLayout = () => {
  const navigate = useNavigate();
  const pathName = useLocation().pathname;

  const handleClick = (path: string) => {
    navigate(`/indices/detail${path}`);
  };

  const checkPathname = (path: string) => {
    return pathName?.includes(path);
  };
  return (
    <>
      <EuiPageTemplate.Header
        pageTitle={"Index detail"}
        tabs={[
          {
            id: "overview",
            label: "Overview",
            isSelected: checkPathname("overview"),
            onClick: () => handleClick("/overview"),
          },
          {
            id: "documents",
            label: "Documents",
            isSelected: checkPathname("documents"),
            onClick: () => handleClick("/documents"),
          },
          {
            id: "mappings",
            label: "Mappings",
            isSelected: checkPathname("mappings"),
            onClick: () => handleClick("/mappings"),
          },
          {
            id: "pipelines",
            label: "Pipelines",
            isSelected: checkPathname("pipelines"),
            onClick: () => handleClick("/pipelines"),
          },
          {
            id: "settings",
            label: "Settings",
            isSelected: checkPathname("settings"),
            onClick: () => handleClick("/settings"),
          },
        ]}
      />
      <EuiPageTemplate.Section>
        <Outlet />
      </EuiPageTemplate.Section>
    </>
  );
};
