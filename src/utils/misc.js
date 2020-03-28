export const getKeyResultsBasedOnObjective = ({ id, keyResults }) =>
  keyResults.filter(keyResult => keyResult.parent_objective_id === id);
