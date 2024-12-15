import {
  SELECT_PROFILE,
  ADD_PROFILE,
  DELETE_PROFILE,
  DELETE_MODAL,
  RENAME_PROFILE,
  EDIT_PROFILE,
  MOVE_PROFILE,
  LOAD_PROFILES,
} from "../actions/actionTypes";

const defaultProfiles = [
  {
    name: "Default",
    icon: "default",
    isDefault: true,
    isEdit: false,
  },
  {
    name: "Game",
    icon: "game",
    isDefault: true,
    isEdit: false,
  },
  {
    name: "Movie",
    icon: "movie",
    isDefault: true,
    isEdit: false,
  },
  {
    name: "Music",
    icon: "music",
    isDefault: true,
    isEdit: false,
  },
];

const initialState = {
  selectedIndex: 0,
  profiles: JSON.parse(localStorage.getItem("profiles")) || defaultProfiles,
  deleteModal: false,
};

export const profileReducer = (state = initialState, action) => {
  let profiles = [...state.profiles];
  switch (action.type) {
    case SELECT_PROFILE:
      let oldSelect = { ...profiles[action.prevSelectedIndex] };

      if (action.newSelectedIndex === state.selectedIndex) {
        return { ...state };
      }

      oldSelect.isEdit = false;
      profiles[action.prevSelectedIndex] = oldSelect;
      return { ...state, profiles, selectedIndex: action.newSelectedIndex };

    case ADD_PROFILE:
      profiles.push({
        name: "New Profile",
        icon: "default",
        isDefault: false,
        isEdit: false,
      });
      return { profiles, selectedIndex: profiles.length - 1 };

    case DELETE_PROFILE:
      profiles.splice(action.index, 1);
      return {
        profiles,
        selectedIndex: Math.max(0, action.index - 1),
        deleteModal: false,
      };

    case DELETE_MODAL:
      return {
        ...state,
        deleteModal: action.isEnable,
      };

    case EDIT_PROFILE:
      let editObj = { ...profiles[action.index] };
      editObj.isEdit = action.enable;
      profiles[action.index] = editObj;
      return { ...state, profiles };

    case RENAME_PROFILE:
      let renameObj = { ...profiles[action.index] };

      renameObj.name = action.name.trim() || renameObj.name;
      renameObj.isEdit = false;
      profiles[action.index] = renameObj;
      return { ...state, profiles };

    case MOVE_PROFILE:
      const swapIndex = action.index + action.direction;
      if (
        (action.index < 1 && action.direction === -1) ||
        (swapIndex >= profiles.length && action.direction === 1)
      ) {
        return { ...state };
      }
      [profiles[action.index], profiles[swapIndex]] = [
        profiles[swapIndex],
        profiles[action.index],
      ];
      return { ...state, profiles, selectedIndex: swapIndex };

    case LOAD_PROFILES:
      return { ...state, profiles: action.profiles };

    default:
      return state;
  }
};
