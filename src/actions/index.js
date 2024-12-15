import {
  SELECT_PROFILE,
  ADD_PROFILE,
  DELETE_PROFILE,
  DELETE_MODAL,
  RENAME_PROFILE,
  EDIT_PROFILE,
  MOVE_PROFILE,
  LOAD_PROFILES,
} from "./actionTypes";

export const selectProfile = (newSelectedIndex, prevSelectedIndex) => ({
  type: SELECT_PROFILE,
  newSelectedIndex,
  prevSelectedIndex,
});

export const addProfile = () => ({
  type: ADD_PROFILE,
});

export const deleteProfile = (index) => ({
  type: DELETE_PROFILE,
  index,
});

export const deleteModal = (isEnable) => ({
  type: DELETE_MODAL,
  isEnable,
});

export const renameProfile = (index, name) => ({
  type: RENAME_PROFILE,
  index,
  name,
});

export const editProfile = (index, enable) => ({
  type: EDIT_PROFILE,
  index,
  enable,
});

export const moveProfile = (index, direction) => ({
  type: MOVE_PROFILE,
  index,
  direction,
});
export const loadProfiles = (profiles) => ({ type: LOAD_PROFILES, profiles });
