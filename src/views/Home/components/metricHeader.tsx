import { useState, useEffect } from "react";
import {
  EuiFlexGroup,
  EuiPanel,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from "@elastic/eui";
import { Metric } from "./metric";
import { MetricProps } from "../types/metric.type";
import { MOCK_METRICS, MOCK_METRICS_EMPTY } from "../data/metrics.mock";
import { EmptyStateToggle } from "../../../shared/components/private/emptyStateToggle";

export const MetricHeader = () => {
  const [renderEmptyState, setRenderEmptyState] = useState<boolean>(false);
  const [metricData, setMetricData] =
    useState<MetricProps[]>(MOCK_METRICS_EMPTY);

  useEffect(() => {
    if (renderEmptyState) {
      setMetricData(MOCK_METRICS_EMPTY);
    } else {
      setMetricData(MOCK_METRICS);
    }
  }, [renderEmptyState]);

  return (
    <EuiPanel color="subdued" paddingSize="l">
      <EuiFlexGroup style={{ position: "relative" }}>
        <EmptyStateToggle
          isEmpty={renderEmptyState}
          onClick={() => setRenderEmptyState(!renderEmptyState)}
        />
        {metricData.map((metric, index) => (
          <Metric
            key={`stat-${index}`}
            description={metric.description}
            icon={metric.icon}
            emptyStateCTALabel={metric.emptyStateCTALabel}
            emptyStateMessage={metric.emptyStateMessage}
            metrics={metric.metrics}
          />
        ))}
      </EuiFlexGroup>
    </EuiPanel>
  );
};
