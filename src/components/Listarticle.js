import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import ArticleTable from "./ArticleTable";

export const Listarticle = () => {
  const { article } = useContext(GlobalContext);

  return (
    <Fragment>
      <div className="floatingActionButton">
        <h1>+</h1>
      </div>
      <div className="Articlelist">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h3>Article Inventory</h3>
            </div>
            <div className="col-md-4 text-right">
              {article.length >= 1 ? (
                <Link to="/create">
                  <button type="button" className="btn btn-primary">
                    Create New Article
                  </button>
                </Link>
              ) : (
                <p></p>
              )}
            </div>
          </div>
          <div>
            <div className="listing">
              <div>
                {article.length > 0 ? (
                  <div className="row">
                    {article.length ? <h6>Total: {article.length}</h6> : ""}
                    <div className="col-md-12">
                      <ArticleTable />
                    </div>
                  </div>
                ) : (
                  <div className="noList">
                    <p>It Seems you dont have any articles</p>
                    <Link to="/create">
                      <button type="button" className="btn btn-primary">
                        Create New Article
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
