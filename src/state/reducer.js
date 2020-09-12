const lastYear = new Date();
lastYear.setMonth(0);
lastYear.setDate(1);
lastYear.setHours(0, 0, 0, 0);

export const initialState = {
  lastYear,
  submissions: { all: [] },
  selected: localStorage.getItem("bev-selection") || "all",
  selected_submissions: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "set_submissions":
      return {
        ...state,
        submissions: action.payload.submissions,
        selected_submissions: action.payload.submissions[state.selected],
      };
    case "set_selected":
      return {
        ...state,
        selected: action.payload.selected,
        selected_submissions: state.submissions[action.payload.selected],
      };
    default:
      throw Error("Reducer action type invalid");
  }
};

export default reducer;
