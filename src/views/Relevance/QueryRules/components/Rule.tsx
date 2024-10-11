import React, { useState } from 'react'
import {
  EuiAccordion,
  EuiBadge,
  EuiButton,
  EuiButtonIcon,
  EuiCode,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiPanel,
  EuiSelect,
  EuiSpacer,
  EuiText,
  useGeneratedHtmlId
} from '@elastic/eui';
import RuleCondition from './RuleCondition';

import { ACTION_TYPES } from '../data/data';

interface EmptyStateProps {
  text: string,
  href?: string,
  label: string
}

interface RuleProps {
  "ruleId": string,
  "criteria": Array<string>
}

const EmptyState = ({ text, href, label }: EmptyStateProps) => {

  return (
    <EuiPanel color='subdued' paddingSize='m'>
      <EuiText textAlign='center' size='s'>
        <p>{text}</p>
        <EuiButton
          color='text'
          iconType="plusInCircle"
          iconSide='left'
        >
          {label}
        </EuiButton>
      </EuiText>
    </EuiPanel>
  )
}

const ActionType = () => {
  const options = ACTION_TYPES
  const [value, setValue] = useState(options[1].value);
  const actionSelectId = useGeneratedHtmlId({ prefix: 'basicSelect' });

  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <EuiSelect
      id={actionSelectId}
      prepend="Then"
      value={value}
      options={options}
      onChange={(e) => onChange(e)}
    />
  )
}


export default function Rule({ data, ...props }: { data: RuleProps }) {

  const [isActive, setIsActive] = useState(false);
  const [ruleConditions, setRuleConditions] = useState([])
  const ruleAccordionId = useGeneratedHtmlId({ prefix: "rule" })

  const extraAction = (
    <>
      {!isActive &&
        <EuiBadge color='default'>contains</EuiBadge>
      }
    </>
  )

  const onToggle = (isOpen: boolean) => {
    setIsActive(isOpen)
  }


  return (
    <EuiPanel paddingSize='m' color={isActive ? 'plain' : 'transparent'} hasBorder={false} hasShadow={false}>
      <EuiAccordion
        id={ruleAccordionId}
        buttonContent={data.ruleId}
        extraAction={extraAction}
        paddingSize="none"
        onToggle={onToggle}
        arrowDisplay="left"
      >
        <EuiSpacer size="s" />
        <EuiFlexGroup
          gutterSize='l'
          direction='column'
        >
          <EuiFlexItem>
            {data.criteria.length === 0 &&
              <EmptyState
                text='This rule will always run regardless of query'
                label="Add condition"
              />
            }
            <EuiFlexGroup gutterSize='s' direction='column'>
              {data.criteria.map((crit: string, index: number) => (
                <RuleCondition type={crit} />
              ))}
            </EuiFlexGroup>
          </EuiFlexItem>
          <EuiFlexItem>
            <ActionType />
          </EuiFlexItem>
          <EuiFlexItem>
            <EmptyState
              text="The selected documents will be pinned at the top of the result list"
              label="Add documents"
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiAccordion>

    </EuiPanel>
  )
}
