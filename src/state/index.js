import React, {
  useReducer,
  createContext,
  useContext,
  useCallback,
  useEffect,
} from "react";
import reducer, { initialState } from "./reducer";
import { groupes } from "../constants";

const StateContext = createContext();

export const withData = (WrappedComponent) => {
  const StateContextProvider = (props) => {
    // initialize state
    const [state, dispatch] = useReducer(reducer, initialState);

    // add actions
    const setSubmissions = useCallback(
      (submissions) =>
        dispatch({ type: "set_submissions", payload: { submissions } }),
      [dispatch]
    );

    const setSelected = useCallback(
      (selected) => {
        localStorage.setItem("bev-selection", selected);
        dispatch({ type: "set_selected", payload: { selected } });
      },
      [dispatch]
    );

    useEffect(() => {
      (async () => {
        const request = await fetch(
          process.env.NODE_ENV === "production"
            ? "https://cors-anywhere.herokuapp.com/http://www.bellevillenvrai.fr/api/forms"
            : "/api/forms"
        );
        const response = await request.json();
        const data = response.data
          .map((submission) => {
            const form_data = JSON.parse(submission.form_data);
            if (form_data.joueurs) {
              const joueurs = JSON.parse(form_data.joueurs);
              form_data.joueurs = joueurs.sort((a, b) =>
                a.capitaine < b.capitaine || a.vice_capitaine < b.vice_capitaine
                  ? 1
                  : -1
              );
            }
            return {
              ...submission,
              form_data,
            };
          })
          .sort((a, b) =>
            a.form_data.nom.trim().charAt(0).toLowerCase() >
            b.form_data.nom.trim().charAt(0).toLowerCase()
              ? 1
              : -1
          )
          .filter((item) =>
            process.env.NODE_ENV === "production"
              ? new Date(item.created_at) >= state.lastYear
              : true
          );

        let itemsPerGroup = [];
        groupes.forEach(
          (groupe) =>
            (itemsPerGroup[groupe.key] = data.filter(
              (sub) => sub.group === groupe.name
            ))
        );

        setSubmissions({ all: data, ...itemsPerGroup });
      })();
    }, []);

    return (
      <StateContext.Provider
        value={[
          state,
          {
            setSubmissions,
            setSelected,
          },
        ]}
      >
        <WrappedComponent {...props} />
      </StateContext.Provider>
    );
  };

  return StateContextProvider;
};

export const useData = () => useContext(StateContext);
