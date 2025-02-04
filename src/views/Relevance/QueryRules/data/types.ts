
export type RuleType = {
  ruleId: string,
  action_type: string,
  criteria: Array<CriteriaType>,
  actions: Array<any>
}

export type CriteriaType = {
  type: string,
  metadata: string,
  values: Array<string>,
}
