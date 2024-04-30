import React from "react";
import { EuiHeader, EuiPageTemplate, EuiHeaderLogo } from "@elastic/eui";

import { SideNav } from "./sideNav";
import { ServerlessSideNav } from "./serverlessSideNav";

interface PageWrapperProps {
  children: React.ReactNode;
  mode: "stack" | "serverless";
}
export const PageWrapper = ({ children, mode }: PageWrapperProps) => (
  <>
    <EuiHeader
      theme="dark"
      sections={[
        {
          items: [<EuiHeaderLogo key="elastic">Elastic</EuiHeaderLogo>],
        },
      ]}
    />
    <EuiHeader />
    <EuiPageTemplate restrictWidth={false} panelled={true}>
      <EuiPageTemplate.Sidebar sticky>
        {mode === "serverless" ? <ServerlessSideNav /> : <SideNav />}
      </EuiPageTemplate.Sidebar>
      <div style={{ padding: "2rem" }}>{children}</div>
    </EuiPageTemplate>
  </>
);
