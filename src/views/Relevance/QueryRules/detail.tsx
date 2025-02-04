import {
  EuiButton,
  EuiButtonIcon,
  EuiFieldSearch,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiPageBody,
  EuiPageHeader,
  EuiSpacer,
  EuiText,
  euiDragDropReorder,
} from '@elastic/eui';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { PageHeader } from './components/PageHeader';
import { RuleFlyout } from './components/RuleFlyout';
import { RuleList } from './components/RuleList';
import { RULES } from './data/data';

export default function QueryRuleDetail() {
  const [hasChanges, setHasChanges] = useState(true);
  const [savingChanges, setSavingChanges] = useState(false);
  const [ruleList, setRuleList] = useState(RULES)
  const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);
  const [isAddRuleFlyoutVisible, setIsAddRuleFlyoutVisible] = useState(false);

  const navigate = useNavigate();

  const makeChanges = () => setHasChanges(true);
  const closeFlyout = () => setIsFlyoutVisible(false);
  const showFlyout = () => setIsFlyoutVisible(true);
  const showAddRuleFlyout = () => setIsAddRuleFlyoutVisible(true);
  const closeAddRuleFlyout = () => setIsAddRuleFlyoutVisible(false);

  const deleteRule = () => { }

  const saveChanges = () => {
    setSavingChanges(true);
    console.log("start");
    setTimeout(() => {
      console.log("stop");
      setSavingChanges(false);
      setHasChanges(false);
    }, 1000)
  }

  return (
    <>
      <PageHeader />
      <EuiPageBody paddingSize="none" restrictWidth>
        <EuiSpacer />
        <EuiFlexGroup alignItems='center' justifyContent='spaceBetween'>
          <EuiFlexItem grow={false}>
            <span>
              <EuiButton
                iconSide='left'
                iconType="plusInCircle"
                onClick={showAddRuleFlyout}
              >Add rule</EuiButton>
            </span>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiText>
              <p>Total rules: <strong>{ruleList.length}</strong></p>
            </EuiText>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiFieldSearch />
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer />
        <EuiFlexGroup direction='column' gutterSize='s'>
          <RuleList ruleListArray={ruleList} showFlyout={showFlyout} />
        </EuiFlexGroup>
        {isFlyoutVisible &&
          <RuleFlyout closeFlyout={closeFlyout} />
        }
        {isAddRuleFlyoutVisible &&
          <RuleFlyout closeFlyout={closeAddRuleFlyout} />
        }
      </EuiPageBody>
    </>
  )

}

