import {
  SELECT_PROFILE,
  ADD_PROFILE,
  DELETE_PROFILE,
  RENAME_PROFILE,
  MOVE_PROFILE,
  LOAD_PROFILES,
} from "./actionTypes";

export const selectProfile = (index) => ({
  type: SELECT_PROFILE,
  index,
});

export const addProfile = () => ({
  type: ADD_PROFILE,
});

export const deleteProfile = (index) => ({
  type: DELETE_PROFILE,
  index,
});

export const renameProfile = (index, name) => ({
  type: RENAME_PROFILE,
  index,
  name,
});

export const moveProfile = (index, direction) => ({
  type: MOVE_PROFILE,
  index,
  direction,
});
export const loadProfiles = (profiles) => ({ type: LOAD_PROFILES, profiles });
