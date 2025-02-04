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

export const RULESET_LIST = [
  {
    id: "my_new_query_rule",
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



export const RULES = [
  {
    "ruleId": "first_rule",
    "action_type": "pinned",
    "criteria": [
      {
        "type": "contains",
        "metadata": "user_query",
        "values": ["pugs", "puggles"]
      },
      {
        "type": "exact",
        "metadata": "user_country",
        "values": ["us"]
      },

    ],
    "actions": [
      { "index": "abc", "doc_id": "123abc" },
      { "index": "abc", "doc_id": "123abc" },
      { "index": "abc", "doc_id": "123abc" },
    ]
  },
  {
    "ruleId": "second_rule",
    "action_type": "exclude",
    "criteria": [
      {
        "type": "fuzzy",
        "metadata": "query_string",
        "values": ["rescue dogs"]
      }

    ],
    "actions": [
      { "index": "abc", "doc_id": "123abc" },
    ]
  },
  {
    "ruleId": "third_rule",
    "action_type": "pinned",
    "criteria": [
      {
        "type": "contains",
        "metadata": "query_string",
        "values": ["free admission"]
      },
      {
        "type": "gte",
        "metadata": "customer_age",
        "values": ["10"]
      },
      {
        "type": "lte",
        "metadata": "customer_age",
        "values": ["20"]
      },
      {
        "type": "gte",
        "metadata": "campaign_date",
        "values": ["2022-11-10T00:00:00"]
      },
      {
        "type": "lte",
        "metadata": "campaign_date",
        "values": ["2022-12-25T00:00:00"]
      }
    ],
    "actions": [
      { "index": "abc", "doc_id": "fj2308f2j12kl2f1" },
    ]
  },
]


export const RULESET_DATA = {
  ruleset_id: "my_new_rule_query",
  rule_list: RULES
}

