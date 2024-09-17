import React, { useState } from 'react';
import {
  EuiBasicTable,
  EuiButton,
  EuiButtonEmpty,
  EuiPageHeader,
  EuiBasicTableColumn,
  EuiSpacer,
  EuiSearchBar
} from "@elastic/eui";

import { faker } from '@faker-js/faker';
import { useNavigate } from "react-router-dom";
import { CreateModal } from './components/CreateModal';

type Ruleset = {
  id: string;
  rule_total_count: number;
};

const rulesets: Ruleset[] = [];

for (let i = 0; i < 4; i++) {
  rulesets.push({
    id: faker.string.uuid(),
    rule_total_count: faker.number.int(50),
  });
}


export const QueryRulesView = () => {
  const navigate = useNavigate()

  const columns: Array<EuiBasicTableColumn<Ruleset>> = [
    {
      field: 'id',
      name: 'Ruleset',
      'data-test-subj': 'rulesetIDCell',
    },
    {
      field: 'rule_total_count',
      name: "Rules"
    }
  ]

  return (
    <>
      <EuiPageHeader
        pageTitle='Query Rules'
        description='Create and manage your query rules'
        rightSideItems={[
          <CreateModal />,
          <EuiButtonEmpty
            iconSide='left'
            iconType='help'
          >
            Documentation
          </EuiButtonEmpty>
        ]}
        bottomBorder
      />

      <EuiSpacer />
      <EuiSearchBar />
      <EuiSpacer />

      <EuiBasicTable
        columns={columns}
        items={[]}
      />
    </>
  )
}
