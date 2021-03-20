import { User } from './types';

export const DEFAULT_SEARCH_TERM = '';
export const DEFAULT_USER_COLLECTION = {};
export const DEFAULT_DATA_LOADER_STATE = false;

export const SEARCH_BAR_CONFIG = {
  PLACEHOLDER : 'Search for customer names, emails ...',
  ID: "DASH_BOARD_SEARCH"
}

export const TABLE_CONFIG = {
  HEADER_LABELS: ['First Name', 'Last Name', 'Email', 'Avatar', 'Actions'],
  ACTION_BUTTONS_LABELS: {
    EDIT: "Edit",
    DELETE: "Delete"
  },
  TUPLE_KEY_GEN(userData: User[]): string[]{
    return userData.map( user => String(user.id))
  },
  USER_CONTAINS_SEARCH_TERM(user: User, searchTerm: string){
    return user.first_name.includes(searchTerm) || user.last_name.includes(searchTerm) || user.email.includes(searchTerm)
  }
}

export const DIALOG_BOX_CONFIG = {
  LABEL: "You're about to permanently delete this user. Are you sure you want to proceed ?",
  CANCEL_BUTTON:{
    LABEL: "Cancel",
    COLOR: "#568a56"
  },
  DELETE_BUTTON:{
    LABEL: "Delete",
    COLOR: "#bf3f3f"
  }
}

export const ADD_USER_BUTTON_LABEL = "Add User";

export const API_RECORD_THRESHOLD = 1;

export const TABLE_RECORD_THRESHOLD = 0;

export const EDIT_ROUTE_PREFIX = '/edit-user';
