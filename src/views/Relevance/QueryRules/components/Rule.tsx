import React, { useState } from 'react'
import {
  EuiBadge,
  EuiButtonIcon,
  EuiExpression,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiCode,
  EuiText,
  EuiDescriptionList,
  EuiDescriptionListDescription,
  EuiDescriptionListTitle,
  useEuiTheme,
  useEuiFontSize,
} from '@elastic/eui';

import { css } from "@emotion/css";

import { RuleType } from '../data/types';

interface RuleProps {
  rule: RuleType,
  showRule: any,
}

export default function Rule({ rule, showRule, ...props }: RuleProps) {
  const { euiTheme } = useEuiTheme();
  return (
    <EuiFlexGroup
      gutterSize='m'
      justifyContent='flexStart'
      alignItems='center'
    >
      <EuiFlexItem grow={true}>
        {rule.criteria.map((crit, index) => (
          <div>
            <EuiBadge color={euiTheme.colors.lightestShade} >{crit.metadata}</EuiBadge>
            <EuiExpression
              key={index}
              description={crit.type}
              value={crit.values.join(', ')}
              uppercase={false}
              color="primary"
              style={{ marginLeft: euiTheme.size.s }}
            />
          </div>
        ))}
      </EuiFlexItem>

      <EuiFlexItem grow={false}>
        <span>
          <EuiBadge color="default" iconType={rule.action_type === "pinned" ? "pinFilled" : "eyeClosed"} iconSide="left">{rule.actions.length}</EuiBadge>
        </span>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiPanel
          color="transparent"
          paddingSize="m"
          aria-label="Drag Handle"
        >
          <EuiButtonIcon iconType="expand" display='empty' color='text' onClick={showRule} />
        </EuiPanel>
      </EuiFlexItem>
    </EuiFlexGroup >

  )
}
