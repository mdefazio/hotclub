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
import { RuleFlyout } from './components/RuleFlyout';
import { RuleList } from './components/RuleList';
import { RULES } from './data/data';

export default function QueryRuleDetail() {
  const [hasChanges, setHasChanges] = useState(true);
  const [savingChanges, setSavingChanges] = useState(false);
  const [ruleList, setRuleList] = useState(RULES)
  const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);

  const navigate = useNavigate();

  const makeChanges = () => setHasChanges(true);
  const closeFlyout = () => setIsFlyoutVisible(false);
  const showFlyout = () => setIsFlyoutVisible(true);

  const addRule = () => { }
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
      <EuiPageHeader
        pageTitle='My new query rule'
        description='Create and manage your query rules'
        restrictWidth
        rightSideGroupProps={{
          gutterSize: "s"
        }}
        rightSideItems={[
          <EuiButtonIcon
            display='base'
            iconType="boxesHorizontal"
            color='text'
            size='m'
          />,
          <EuiButton
            isLoading={savingChanges}
            color={hasChanges ? 'success' : 'text'}
            fill={hasChanges}
            iconType={hasChanges ? '' : 'check'}
            iconSide="left"
            onClick={hasChanges ? saveChanges : makeChanges}
          >
            {hasChanges ? 'Save changes' : 'Rule saved'}
          </EuiButton>,
          <EuiButton color='text'>
            Open in Playground
          </EuiButton>,
        ]}
        breadcrumbs={[
          {
            text: (
              <>
                <EuiIcon size="s" type="arrowLeft" />{` `}View all
              </>
            ),
            color: 'primary',
            'aria-current': false,
            onClick: () => (navigate('/relevance/query-rules')),
          },
        ]}
        bottomBorder
      />
      <EuiPageBody paddingSize="none" restrictWidth>
        <EuiSpacer />
        <EuiFlexGroup alignItems='center' justifyContent='spaceBetween'>
          <EuiFlexItem grow={false}>
            <span>
              <EuiButton
                iconSide='left'
                iconType="plusInCircle"
                onClick={addRule}
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
          <RuleList ruleListArray={ruleList} showFlyout={() => showFlyout} />
        </EuiFlexGroup>
        <p>show flyout is {isFlyoutVisible ? "true" : "false"}</p>

        {isFlyoutVisible &&
          <RuleFlyout closeFlyout={closeFlyout} />
        }
      </EuiPageBody>
    </>
  )

}

