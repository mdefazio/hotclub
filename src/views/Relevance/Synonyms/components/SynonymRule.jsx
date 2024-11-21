import {
  EuiButtonIcon,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiText,
} from "@elastic/eui";

export const SynonymRule = ({ rule, expandAction, deleteAction }) => {
  return (
    <EuiFlexGroup alignItems="center" gutterSize="s">
      <EuiFlexItem grow={false}>
        <EuiButtonIcon
          color="text"
          display="empty"
          iconType="expand"
          size="m"
          onClick={() => expandAction(rule.id)}
        />
      </EuiFlexItem>
      <EuiPanel color="subdued" paddingSize="m">
        <EuiText>
          <span>
            {rule.terms.join(', ').toLowerCase()}
          </span>
        </EuiText>
      </EuiPanel>
      <EuiFlexItem grow={false}>
        <EuiButtonIcon
          color="danger"
          display="empty"
          iconType="trash"
          onClick={() => deleteAction()}
          size="m"
        />
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};
