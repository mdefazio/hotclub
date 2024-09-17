import React from "react";
import { EuiHeader, EuiPageTemplate, EuiHeaderLogo } from "@elastic/eui";

import { SideNavServerless } from "./sideNavServerless";
import { SideNav } from "./sideNav";

interface PageWrapperProps {
  children: React.ReactNode;
}
export const PageWrapper = ({ children }: PageWrapperProps) => (
  <>
    <EuiPageTemplate restrictWidth={false} panelled={true}>
      <EuiHeader
        position="fixed"
        sections={[
          {
            items: [<EuiHeaderLogo key="elastic">Elastic</EuiHeaderLogo>],
          },
        ]}
      />
      <EuiPageTemplate.Sidebar>
        <SideNav/>
      </EuiPageTemplate.Sidebar>
      <EuiPageTemplate.Section>
        {children}
      </EuiPageTemplate.Section>
    </EuiPageTemplate>
  </>
);
