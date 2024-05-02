import { EuiFlexGroup, EuiFlexItem, EuiIcon, EuiText } from "@elastic/eui";

type IndexListLabelProps = {
  label: string;
  description: string | React.ReactNode;
};
export const IndexListLabel: React.FC<IndexListLabelProps> = ({
  description,
  label,
}) => {
  return (
    <EuiFlexGroup
      direction="row"
      gutterSize="none"
      alignItems="center"
      justifyContent="spaceBetween"
      style={{ width: "100%" }}
    >
      <EuiFlexItem grow>
        <EuiText size="s">
          <strong>{label}</strong>
        </EuiText>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiText size="xs" color="subdued">
          {description}
        </EuiText>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};
