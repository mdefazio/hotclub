import {
  EuiButtonIcon,
  EuiFlexGroup,
  EuiIcon,
  EuiPageHeader,
  EuiPanel,
  EuiSpacer,
} from '@elastic/eui';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { SynonymRuleList } from './components/SynonymRuleList';


export default function SynonymSetDetail() {

  const navigate = useNavigate();

  return (
    <>
      <EuiPageHeader
        pageTitle='synonyms_set_1'
        breadcrumbs={[
          {
            text: (
              <>
                <EuiIcon color='primary' display="empty" type="arrowLeft" />
                {" "}
                View all
              </>
            ),
            color: 'primary',
            onClick: () => navigate('../')
          }
        ]}
        rightSideItems={[
          <EuiButtonIcon
            iconType='boxesHorizontal'
          />
        ]}
        bottomBorder
      />

      <EuiSpacer />
      <SynonymRuleList />
    </>
  )
}
