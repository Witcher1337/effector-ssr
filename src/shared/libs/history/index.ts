import { createEvent, createWatch, Scope } from "effector";
import { createBrowserHistory, createMemoryHistory, History } from "history";

export const history = typeof window !== "undefined" ? createBrowserHistory() : createMemoryHistory();

// Used in some cases
export const historyPush = createEvent<string>();

function attachEvents<T extends History>(scope: Scope, history: T): T {
  createWatch({
    unit: historyPush,
    fn: (url) => history.push(url),
    scope,
  });
  return history;
}

export function createClientHistory(scope: Scope) {
  return attachEvents(scope, createBrowserHistory());
}

export function createServerHistory(scope: Scope) {
  return attachEvents(scope, createMemoryHistory());
}
