import React, { useState, useCallback } from "react";
import {
  EuiButtonIcon,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiSpacer,
} from "@elastic/eui";
import { Flyout, RuleFlyout } from "./RuleFlyout";

const SynonymRule = ({ rule }) => {
  return (
    <EuiFlexGroup>
      <EuiFlexItem grow={false}>
        <EuiButtonIcon
          color="text"
          display="base"
          iconType="expand"
          size="m"
        />
      </EuiFlexItem>
      {rule.terms.toString()}
      <EuiFlexItem grow={false}>
        <EuiButtonIcon
          color="danger"
          display="empty"
          iconType="trash"
          onClick={() => ""}
          size="m"
        />
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

// const terms = [
//   {
//     terms: [],
//     explicitTerm: ''
//   }
// ]

export const SynonymRuleList = () => {
  const [terms, setTerms] = useState([]);
  const [showEquiv, setShowEquiv] = useState(false);
  const [showExplicit, setShowExplicit] = useState(false);
  const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);

  const closeFlyout = (terms) => {
    updateTerms(terms);
    setIsFlyoutVisible(false);
  };

  const updateTerms = (newTerms, index) => {
    const newArray = [...terms];
    newArray[index] = newTerms;
    setTerms(newArray);
  };

  return (
    <EuiPanel paddingSize="s" color="transparent">
      <EuiFlexGroup direction="column" gutterSize="s">
        {/* 
        List of Synonym Rules
        - Within each there is:
        - - Expand option (open flyout)
        - - Delete Row (removes row from RulesArray)
        - - Terms display (comma separated terms array)
         */}
      </EuiFlexGroup>

      <EuiSpacer />
      {isFlyoutVisible && <RuleFlyout closeFlyout={closeFlyout} />}
    </EuiPanel>
  );
};
