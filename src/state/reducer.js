const lastYear = new Date();
lastYear.setMonth(0);
lastYear.setDate(1);
lastYear.setHours(0, 0, 0, 0);

export const initialState = {
  lastYear,
  submissions: [],
  selected: localStorage.getItem("bev-selection") || "all",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "set_submissions":
      return {
        ...state,
        submissions: action.payload.submissions,
      };
    case "set_selected":
      return {
        ...state,
        selected: action.payload.selected,
      };
    default:
      throw Error("Reducer action type invalid");
  }
};

export default reducer;
