import { useEffect, useState } from "react";
import {
  EuiButton,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiListGroup,
  EuiListGroupItem,
  EuiPanel,
  EuiSpacer,
  EuiSwitch,
  EuiText,
  EuiTitle,
  useEuiTheme,
} from "@elastic/eui";
import { EmptyStateToggle } from "../../../shared/components/private/emptyStateToggle";

import { MOCK_INDICES } from "../data/indices.mock";
import { IndexListLabel } from "./indexListItem";

import noDataImage from "../../../assets/noData.png";

export const IndexList = () => {
  const [indices, setIndices] = useState(MOCK_INDICES);
  const [renderEmptyState, setRenderEmptyState] = useState(false);
  const [showSystemIndices, setShowSystemIndices] = useState(false);
  const [filterTerm, setFilterTerm] = useState("");

  const { euiTheme } = useEuiTheme();

  useEffect(() => {
    setIndices(renderEmptyState ? [] : MOCK_INDICES);
  }, [renderEmptyState]);

  return (
    <EuiPanel hasBorder style={{ width: "100%", position: "relative" }}>
      <EmptyStateToggle
        onClick={() => setRenderEmptyState(!renderEmptyState)}
        isEmpty={renderEmptyState}
      />
      <EuiFlexGroup
        alignItems="center"
        justifyContent="spaceBetween"
        style={{ width: "100%" }}
      >
        <EuiFlexItem grow={false}>
          <EuiTitle size="xs">
            <EuiText>Indices</EuiText>
          </EuiTitle>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiSwitch
            compressed
            color="primary"
            label="Show system indices"
            checked={showSystemIndices}
            onChange={() => setShowSystemIndices(!showSystemIndices)}
          />
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiSpacer size="l" />
      {renderEmptyState ? (
        <EuiFlexGroup
          direction="column"
          alignItems="center"
          style={{ width: "100%" }}
        >
          <EuiFlexItem style={{ alignItems: "center", padding: "2rem" }}>
            <img src={noDataImage} alt="No data" style={{ width: "40%" }} />
          </EuiFlexItem>
          <EuiTitle size="s">
            <EuiText>Nothing here, yet</EuiText>
          </EuiTitle>
          <EuiText
            color="subdued"
            style={{ maxWidth: "20rem" }}
            textAlign="center"
          >
            Create your first index to start searching your data in Elastic
          </EuiText>
          <EuiButton fill color="primary" iconType="plusInCircleFilled">
            Create an index
          </EuiButton>
          <EuiSpacer size="xs" />
        </EuiFlexGroup>
      ) : (
        <>
          <EuiFlexItem>
            <EuiFieldText
              value={filterTerm}
              onChange={(e: any) => setFilterTerm(e.target.value)}
              placeholder="Search indices"
            />
          </EuiFlexItem>
          <EuiListGroup flush style={{ width: "100%" }}>
            {indices.map((item, index) => (
              <EuiListGroupItem
                className="override"
                style={{
                  border: `1px solid ${euiTheme.colors.lightShade}`,
                  borderRadius: ".25rem",
                }}
                id={`listGroupItem-Index-${index}`}
                onClick={() => {}}
                size="xs"
                key={`listGroupItem-Index-${index}`}
                label={
                  <IndexListLabel
                    label={item.label}
                    description={item.description}
                  />
                }
                iconType="database"
              />
            ))}
          </EuiListGroup>
          <EuiSpacer size="m" />
          <EuiButton
            fullWidth
            size="s"
            color="primary"
            iconType="plusInCircleFilled"
          >
            Create an index
          </EuiButton>
        </>
      )}
    </EuiPanel>
  );
};
