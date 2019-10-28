import { CHANGE_USERNAME } from './constants';

export function showName(name) {
  return {
    type: CHANGE_USERNAME,
    name,
  };
}
export function showName2(name) {
  return {
    type: "USER_NAME",
    name,
  };
}
