export const CRITERIA_TYPES = [
  "exact",
  "fuzzy",
  "prefix",
  "suffix",
  "contains",
  "lt",
  "lte",
  "gt",
  "gte",
  "always"
]

export const ACTION_TYPES = [
  {
    value: 'pin',
    text: "Pin documents"
  },
  {
    value: 'exclude',
    text: "Exclude documents"
  }
]

export const RULESET_DATA = {
  ruleset_id: "my new rule query",
  indices_assigned: [],
  rule_list: [
    {
      "ruleId": "first_rule",
      "criteria": ["match", "fuzzy"]
    },
    {
      "ruleId": "second_rule",
      "criteria": ["always"],
    },
    {
      "ruleId": "third_rule",
      "criteria": ["match"],

    }
  ]
}

