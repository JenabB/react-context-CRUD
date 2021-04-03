import React, { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";

const initialState = {
  article: localStorage.getItem("article")
    ? JSON.parse(localStorage.getItem("article"))
    : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    localStorage.setItem("article", JSON.stringify(state.article));
  }, [state]);

  function createArticle(article) {
    dispatch({
      type: "CREATE_ARTICLE",
      payload: article,
    });
  }

  function deleteArticle(id) {
    dispatch({
      type: "DELETE_ARTICLE",
      payload: id,
    });
  }

  function editArticle(article) {
    dispatch({
      type: "EDIT_ARTICLE",
      payload: article,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        article: state.article,
        createArticle,
        editArticle,
        deleteArticle,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
