import { useState } from "react";
import {
  EuiFlexGroup,
  EuiPanel,
} from "@elastic/eui";

import { RuleFlyout } from "./RuleFlyout";
import { SYNONYM_RULES } from "../data/data";
import { SynonymRule } from "./SynonymRule";

export const SynonymRuleList = () => {
  const [rules, setRules] = useState(SYNONYM_RULES);
  const [viewRule, setViewRule] = useState(null);
  const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);

  const closeFlyout = (terms) => {
    // updateTerms(terms);
    setIsFlyoutVisible(false);
  };

  const openFlyout = (id) => {
    console.log('hit')
    const rule = rules.find(r => r.id === id);
    console.log(rule);
    setViewRule(rule);
    setIsFlyoutVisible(true)
  }





  // const updateTerms = (newTerms, index) => {
  //   const newArray = [...terms];
  //   newArray[index] = newTerms;
  //   setTerms(newArray);
  // };

  return (
    <EuiPanel paddingSize="s" color="transparent">
      <EuiFlexGroup direction="column" gutterSize="s">
        {rules.map((rule) => (
          <SynonymRule key={rule.id} rule={rule} expandAction={openFlyout} />
        ))}
      </EuiFlexGroup>
      {isFlyoutVisible && <RuleFlyout rule={viewRule} closeFlyout={closeFlyout} />}
    </EuiPanel>
  );
};
