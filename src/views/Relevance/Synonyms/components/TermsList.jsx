import React from "react";
import {
  EuiBadge,
  EuiPanel,
  EuiFlexGroup,
  EuiSpacer,
  EuiText,
  EuiButtonIcon,
} from "@elastic/eui";

const CustomBadge = ({ label, removeItem }) => (
  <EuiPanel color="subdued" paddingSize="s">
    <EuiButtonIcon
      type="cross"
      color="text"
      onClick={() => removeItem(label)}
    />
    <EuiText>
      <span>{label}</span>
    </EuiText>
  </EuiPanel>
);

export const TermsList = ({ items, removeItem }) => {
  return (
    <EuiFlexGroup
      direction="column"
      gutterSize="xs"
      tabIndex={0}
      className="eui-yScrollWithShadows"
    >
      <EuiSpacer size="xs" />
      {items.map((opt, index) => (
        <span key={index}>
          {/* <CustomBadge label={opt} removeItem={removeItem(opt)} /> */}
          <EuiBadge
            color="hollow"
            iconSide="right"
            iconType="cross"
            iconOnClick={() => removeItem(opt)}
            iconOnClickAriaLabel="remove"
          >
            {opt}{" "}
          </EuiBadge>
        </span>
      ))}
      {items.length === 0 && (
        <EuiText color="subdued" textAlign="center" size="s">
          <p>No terms found.</p>
        </EuiText>
      )}
      <EuiSpacer size="s" />
    </EuiFlexGroup>
  );
};
