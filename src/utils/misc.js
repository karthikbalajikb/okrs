import { uniqBy } from 'lodash';

export const getKeyResultsBasedOnObjective = ({ id, keyResults }) =>
  keyResults.filter(keyResult => keyResult.parent_objective_id === id);

export const getUniqueBy = ({ key, data }) =>
 uniqBy(data, function (e) {
    return e[key];
  });