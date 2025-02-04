import React, { useState } from 'react';
import {
  EuiPageHeader,
  EuiButtonIcon,
  EuiButton,
  EuiIcon,
} from '@elastic/eui';
import { useNavigate } from 'react-router-dom';


export const PageHeader = () => {

  const [savingChanges, setSavingChanges] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  const saveChanges = () => {
    setSavingChanges(true);
    console.log("start");
    setTimeout(() => {
      console.log("stop");
      setSavingChanges(false);
      setHasChanges(false);
    }, 1000)
  }

  const makeChanges = () => setHasChanges(true);
  const navigate = useNavigate();

  return (
    <EuiPageHeader
      pageTitle='my_new_query_rule'
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

  )
}
