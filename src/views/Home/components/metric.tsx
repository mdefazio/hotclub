import {
  EuiButtonEmpty,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiPanel,
  EuiText,
  EuiTitle,
  useEuiTheme,
} from "@elastic/eui";
import { MetricProps } from "../types/metric.type";

export const Metric: React.FC<MetricProps> = ({
  description,
  icon,
  emptyStateCTALabel,
  emptyStateMessage,
  metrics,
}) => {
  const { euiTheme } = useEuiTheme();
  return (
    <EuiFlexItem>
      <EuiPanel hasBorder>
        <EuiFlexGroup direction="column">
          <EuiFlexItem grow={false}>
            <EuiFlexGroup gutterSize="s" alignItems="center">
              <EuiFlexItem grow={false}>
                <div
                  style={{
                    padding: ".5rem",
                    borderRadius: "1rem",
                    background: euiTheme.colors.lightestShade,
                    width: "2rem",
                    height: "2rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <EuiIcon type={icon} size="s" color="ink" />
                </div>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle size="xs">
                  <EuiText>{description}</EuiText>
                </EuiTitle>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>

          <EuiFlexItem>
            {metrics[0].value !== 0 ? (
              <EuiFlexGroup>
                {metrics.map((metric, index) => (
                  <EuiFlexItem key={index}>
                    <EuiFlexGroup direction="column" gutterSize="s">
                      <EuiFlexItem>
                        <EuiText color="subdued" size="xs">
                          {metric.title}
                        </EuiText>
                      </EuiFlexItem>
                      <EuiFlexItem>
                        <EuiText>{metric.value}</EuiText>
                      </EuiFlexItem>
                    </EuiFlexGroup>
                  </EuiFlexItem>
                ))}
              </EuiFlexGroup>
            ) : (
              <EuiFlexGroup direction="column" gutterSize="s">
                <EuiFlexItem>
                  <EuiText color="subdued" size="xs">
                    {emptyStateMessage}
                  </EuiText>
                </EuiFlexItem>
                <EuiFlexItem>
                  <div>
                    <EuiButtonEmpty iconType="plusInCircleFilled">
                      {emptyStateCTALabel}
                    </EuiButtonEmpty>
                  </div>
                </EuiFlexItem>
              </EuiFlexGroup>
            )}
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPanel>
    </EuiFlexItem>
  );
};
