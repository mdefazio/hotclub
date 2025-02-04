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
import { RULESET_LIST } from './data/data';

// TODO: Move this to types file
type Ruleset = {
  id: string,
  rule_total_count: number
}


export default function QueryRules() {
  const navigate = useNavigate()

  // TODO: Can this be moved somewhere or imported?
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
        restrictWidth
      />

      <EuiPageBody restrictWidth>

        <EuiSpacer />
        <EuiSearchBar />
        <EuiSpacer />
        <EuiBasicTable
          columns={columns}
          items={RULESET_LIST}
        />
      </EuiPageBody>

    </>
  )
}

