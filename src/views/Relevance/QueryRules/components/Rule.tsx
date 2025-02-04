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
  EuiThemeProvider,
  useEuiTheme,
  useEuiFontSize,
} from '@elastic/eui';

import { css } from "@emotion/css";

import { RuleType } from '../data/types';

interface RuleProps {
  rule: RuleType,
  showFlyout: any,
}

export default function Rule({ rule, showFlyout, ...props }: RuleProps) {
  const { euiTheme, colorMode } = useEuiTheme();
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
        <EuiThemeProvider colorMode={rule.action_type === "pinned" ? colorMode : "inverse"}>
          <span>
            <EuiBadge color="default" iconType={rule.action_type === "pinned" ? "pinFilled" : "eyeClosed"} iconSide="left">{rule.actions.length}</EuiBadge>
          </span>
        </EuiThemeProvider>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiPanel
          color="transparent"
          paddingSize="m"
          aria-label="Drag Handle"
        >
          <EuiButtonIcon iconType="expand" display='empty' color='text' onClick={showFlyout} />
        </EuiPanel>
      </EuiFlexItem>
    </EuiFlexGroup >

  )
}
