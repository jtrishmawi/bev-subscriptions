import Fuse from "fuse.js";

const lastYear = new Date();
lastYear.setMonth(0);
lastYear.setDate(1);
lastYear.setHours(0, 0, 0, 0);

export const initialState = {
  lastYear,
  submissions: { all: [] },
  selected: localStorage.getItem("bev-selection") || "all",
  selected_submissions: [],
  search: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "set_submissions":
      return {
        ...state,
        submissions: action.payload.submissions,
        selected_submissions: action.payload.submissions[state.selected] || [],
      };
    case "set_selected":
      return {
        ...state,
        selected: action.payload.selected,
        selected_submissions: state.submissions[action.payload.selected] || [],
        search: "",
      };
    case "set_search":
      let selected_submissions = state.submissions[state.selected];
      const fuse = new Fuse(selected_submissions, {
        keys: ["form_data.nom", "form_data.prenom"],
      });
      const search = fuse.search(action.payload.search, {
        minMatchCharLength: 3,
      });
      if (action.payload.search.length >= 3) {
        selected_submissions = search.map((result) => result.item);
      }
      return {
        ...state,
        search: action.payload.search,
        selected_submissions,
      };
    default:
      throw Error("Reducer action type invalid");
  }
};

export default reducer;
