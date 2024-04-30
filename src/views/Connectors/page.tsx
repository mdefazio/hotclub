import { useNavigate } from "react-router-dom";

import {
  EuiFlexGroup,
  EuiSpacer,
  EuiTitle,
  EuiButton,
  EuiText,
} from "@elastic/eui";

import { indices } from "../../shared/data/indices";
import { IndicesTable, SplitPanel } from "../Indices/components";

export default function ConnectorsView() {
  const connectorIndices = indices.filter(
    (value: any) => value.type === "connector",
  );
  const navigate = useNavigate();
  return (
    <>
      <EuiFlexGroup>
        <SplitPanel
          title="Connector summary"
          summary="1 connectors"
          extraSummary={
            <EuiText size="s">
              0 idle syncs / 0 orpahned syncs / 0 sync errors
            </EuiText>
          }
        />
        <SplitPanel
          title="Sync status"
          summary="0 running syncs"
          extraSummary={
            <EuiText size="s">
              0 idle syncs / 0 orpahned syncs / 0 sync errors
            </EuiText>
          }
        />
      </EuiFlexGroup>
      <EuiSpacer size="l" />
      <EuiTitle>
        <h3>Available connectors</h3>
      </EuiTitle>
      <EuiSpacer size="l" />
      <IndicesTable items={connectorIndices} />
      <EuiButton onClick={() => navigate("/content/indices/overview")}>
        View index
      </EuiButton>
    </>
  );
}
