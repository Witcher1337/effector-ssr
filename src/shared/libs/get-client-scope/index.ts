import { fork } from "effector";

const scope = fork({
  values: typeof window !== "undefined" ? window.INITIAL_STATE : {},
});

export const getClientScope = () => scope;
