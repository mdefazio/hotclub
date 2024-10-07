import React, { useState } from 'react';
import { ActionFunction, useLoaderData } from 'react-router-dom';

import {
  EuiBasicTable,
  EuiButton,
  EuiButtonEmpty,
  EuiPageHeader,
  EuiBasicTableColumn,
  EuiSpacer,
  EuiSearchBar
} from "@elastic/eui";

import { getQueryRules, createQueryRule, updateRuleSet } from '../../../shared/data/queryrules';

import { useNavigate, redirect } from "react-router-dom";
import { CreateModal } from './components/CreateModal';

type Ruleset = {
  id: string;
};


// This gets applied at the route level
export async function loader() {
  const queryRules = await getQueryRules();
  return { queryRules };
}



export const action: ActionFunction = async ({ request, params }) => {
  const rule_set = await createQueryRule();
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateRuleSet(params.id, updates);
  // return redirect(`/query-rules/${params.id}`);
  return { rule_set };
}

export default function QueryRules() {
  const navigate = useNavigate()
  const { queryRules }: any = useLoaderData();

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
        items={queryRules}
      />
    </>
  )
}
