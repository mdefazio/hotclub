import {
  EuiFlexGroup,
  EuiHealth,
  EuiIcon,
  EuiSpacer,
  EuiText,
} from "@elastic/eui";

type IndexListItemMetricsProps = {
  items: {
    label: string;
    iconType: string;
  }[];
  health: "success" | "warning" | "danger";
};

export const IndexListItemMetrics: React.FC<IndexListItemMetricsProps> = ({
  items,
  health,
}) => {
  return (
    <EuiFlexGroup gutterSize="xs" alignItems="center">
      {items.map((item, index) => (
        <>
          <EuiIcon type={item.iconType} size="s" />
          <EuiText size="xs">{item.label}</EuiText>
          <EuiSpacer size="s" />
        </>
      ))}
      <EuiHealth color={health} />
    </EuiFlexGroup>
  );
};
