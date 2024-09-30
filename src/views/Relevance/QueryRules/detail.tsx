import {
  EuiButton,
  EuiButtonEmpty,
  EuiButtonIcon,
  EuiFieldSearch,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiPanel,
  EuiPageBody,
  EuiPageHeader,
  EuiSpacer,
} from '@elastic/eui';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

export const QueryRuleDetail = () => {
  const [hasChanges, setHasChanges] = useState(true);
  const [savingChanges, setSavingChanges] = useState(false);
  const navigate = useNavigate();

  const makeChanges = () => setHasChanges(true);

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
            href: '#',
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
              >Add rule</EuiButton>
            </span>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiFieldSearch />
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer />
        <EuiPanel color='plain' hasShadow>
          Form goes here
        </EuiPanel>
      </EuiPageBody>
    </>
  )

}

