import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

// Get all query rules, sorted by createdAt
export async function getQueryRules(query) {
  await fakeNetwork(`getContacts:${query}`);
  let queryRules = await localforage.getItem("queryRules");
  if (!queryRules) queryRules = [];
  if (query) {
    queryRules = matchSorter(queryRules, query, { keys: ["rule_id"] });
  }
  return queryRules.sort(sortBy("rule_id"));
}

// Create query rule
export async function createQueryRule() {
  await fakeNetwork();
  let id;
  if (!id) { id = Math.random().toString(36).substring(2, 9) }
  let rule_set = { id, createdAt: Date.now() };
  let queryRules = await getQueryRules();
  queryRules.unshift(rule_set);
  await set(queryRules);
  return rule_set;
}

export async function updateRuleSet(id, updates) {
  await fakeNetwork();
  let queryRules = await localforage.getItem("queryRules");
  let ruleSet = queryRules.find(rule_set => rule_set.id === id);
  if (!ruleSet) throw new Error("No rule set found for", id);
  Object.assign(ruleSet, updates);
  await set(queryRules);
  return ruleSet;
}

function set(queryRules) {
  return localforage.setItem("queryRules", queryRules);
}

// Fake a cache so we don't slow down stuff we've already seen
// Pulled from https://gist.githubusercontent.com/ryanflorence/1e7f5d3344c0db4a8394292c157cd305/raw/f7ff21e9ae7ffd55bfaaaf320e09c6a08a8a6611/contacts.js
let fakeCache = {};

async function fakeNetwork(key) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise(res => {
    setTimeout(res, Math.random() * 800);
  });
}


