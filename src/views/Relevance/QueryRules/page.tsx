import React, { useState } from 'react';
import {
  ActionFunction,
  useLoaderData,
  useNavigate,
  redirect
} from 'react-router-dom';

import {
  EuiBasicTable,
  EuiButton,
  EuiButtonEmpty,
  EuiPageHeader,
  EuiBasicTableColumn,
  EuiSpacer,
  EuiSearchBar,
  EuiLink,
  EuiPageBody
} from "@elastic/eui";

import { CreateModal } from './components/CreateModal';

type Ruleset = {
  id: string,
  rule_total_count: number
}

const RULESET_LIST = [
  {
    id: "alpha",
    rule_total_count: 0
  },
  {
    id: "beta",
    rule_total_count: 0
  },
  {
    id: "charlie",
    rule_total_count: 0
  }
]

export default function QueryRules() {
  const navigate = useNavigate()
  // const { queryRules }: any = useLoaderData();

  const columns: Array<EuiBasicTableColumn<Ruleset>> = [
    {
      field: 'id',
      name: 'Ruleset',
      'data-test-subj': 'rulesetIDCell',
      render: ((id: Ruleset["id"]) => (
        <EuiLink onClick={() => navigate('./detail')}>{id}</EuiLink>
      ))
    },
    {
      field: 'rule_total_count',
      name: "Rules"
    }
  ]

  const items = RULESET_LIST;

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

      <EuiPageBody >

        <EuiSpacer />
        <EuiSearchBar />
        <EuiSpacer />
        <EuiBasicTable
          columns={columns}
          items={items}
        />
      </EuiPageBody>

    </>
  )
}

