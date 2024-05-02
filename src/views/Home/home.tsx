import {
  EuiButtonEmpty,
  EuiDescriptionList,
  EuiFlexGroup,
  EuiFlexItem,
  EuiListGroup,
  EuiListGroupItem,
  EuiPanel,
  EuiText,
  EuiTitle,
} from "@elastic/eui";
import { EmptyStateToggle } from "../../shared/components/private/emptyStateToggle";
import { MetricHeader } from "./components";
import { IndexList } from "./components/indexList";
import { IndexListLabel } from "./components/indexListItem";
import { MOCK_INDICES } from "./data/indices.mock";

export const HomeView = () => {
  console.log("HomeView");
  return (
    <EuiFlexGroup
      direction="column"
      alignItems="flexStart"
      style={{ width: "100%" }}
    >
      <EuiTitle size="l">
        <EuiText>Welcome to Search</EuiText>
      </EuiTitle>
      <EuiFlexItem style={{ width: "100%" }}>
        <MetricHeader />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiButtonEmpty iconType="console" color="primary">
          Quickly get started in code
        </EuiButtonEmpty>
      </EuiFlexItem>
      <EuiFlexItem style={{ width: "100%" }}>
        <EuiFlexGroup direction="row">
          <EuiFlexItem grow={1}>
            <IndexList />
          </EuiFlexItem>
          <EuiFlexItem grow={2}>
            <EuiPanel hasBorder>
              <EuiText>Moar stuffs</EuiText>
            </EuiPanel>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};
