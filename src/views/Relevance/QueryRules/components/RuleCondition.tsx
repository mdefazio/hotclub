import {
  EuiButtonIcon,
  EuiComboBox,
  EuiFlexGroup,
  EuiFlexItem,
  EuiForm,
  EuiFormRow,
  EuiPanel,
  EuiSelect
} from "@elastic/eui"

import { CRITERIA_TYPES } from '../data/data';

interface RuleConditionProps {
  type: string
}

const RuleCondition = ({ type }: RuleConditionProps) => {

  const options = CRITERIA_TYPES.map((opt) => (
    { value: opt, text: opt }
  ))

  return (
    <EuiPanel color="plain" hasBorder={false} hasShadow={false} paddingSize="m">
      <EuiFlexGroup gutterSize="s" direction="column">
        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiFormRow
              label="Metadata field"
              fullWidth
            >
              <EuiComboBox
                prepend="IF"
                fullWidth
                singleSelection={{ asPlainText: true }}
              />
            </EuiFormRow>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiFormRow
              label="Type"
            >
              <EuiSelect value={""} options={options} />
            </EuiFormRow>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiFormRow hasEmptyLabelSpace>
              <EuiButtonIcon
                display="empty"
                size="m"
                iconType="trash"
                color="danger"
              />
            </EuiFormRow>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiFormRow
              label="Values"
              fullWidth
            >
              <EuiComboBox
                fullWidth
              />
            </EuiFormRow>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlexGroup>
    </EuiPanel>
  )
}

export default RuleCondition
