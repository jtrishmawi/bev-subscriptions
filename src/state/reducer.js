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
        selected_submissions: action.payload.submissions[state.selected],
      };
    case "set_selected":
      return {
        ...state,
        selected: action.payload.selected,
        selected_submissions: state.submissions[action.payload.selected],
        search: "",
      };
    case "set_search":
      let selected_submissions = state.submissions[state.selected];
      const fuse = new Fuse(selected_submissions, {
        keys: [
          "form_data.taille",
          "form_data.categories",
          "form_data.horaires",
          "form_data.addition",
          "form_data.categorie",
          "form_data.duree",
          "form_data.nombre",
          "form_data.materiel",
          "form_data.description",
          "form_data.quartier",
          "form_data.referent",
          "form_data.joueurs.nom",
        ],
      });
      if (action.payload.search.length >= 3) {
        selected_submissions = fuse
          .search(action.payload.search, {
            minMatchCharLength: 3,
            shouldSort: false,
            findAllMatches: true,
          })
          .map((result) => result.item);
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
