import {
  SELECT_PROFILE,
  ADD_PROFILE,
  DELETE_PROFILE,
  RENAME_PROFILE,
  MOVE_PROFILE,
  LOAD_PROFILES,
} from "../actions/actionTypes";

const defaultProfiles = [
  {
    name: "Default",
    icon: "default",
    isDefault: true,
  },
  {
    name: "Game",
    icon: "game",
    isDefault: true,
  },
  {
    name: "Movie",
    icon: "movie",
    isDefault: true,
  },
  {
    name: "Music",
    icon: "music",
    isDefault: true,
  },
];

const initialState = {
  selectedIndex: 0,
  profiles: JSON.parse(localStorage.getItem("profiles")) || defaultProfiles,
};

export const profileReducer = (state = initialState, action) => {
  let profiles = [...state.profiles];
  switch (action.type) {
    case SELECT_PROFILE:
      return { ...state, selectedIndex: action.index };

    case ADD_PROFILE:
      profiles.push({ name: "New Profile", icon: "default", isDefault: false });
      return { profiles, selectedIndex: profiles.length - 1 };

    case DELETE_PROFILE:
      profiles.splice(action.index, 1);
      return {
        profiles,
        selectedIndex: Math.max(0, action.index - 1),
      };

    case RENAME_PROFILE:
      profiles[action.index].name =
        action.name.trim() || profiles[action.index].name;
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
