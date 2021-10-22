import React, { useEffect } from "react";
import { ImgFit, PageSec } from "ConstComponents";
import { TableComp } from "components";
import { useMovieContext } from "contexts";
import { MovieApi, DeleteMovieApi } from "contexts/MovieContext/apiCall";
import { Edit, Delete } from "@material-ui/icons";
import { EditBox } from "./AllProductsStyle";
import { Link } from "react-router-dom";

export const AllProducts = () => {
  const { movies, dispatch } = useMovieContext();
  const handleDelete = (id) => {
    DeleteMovieApi(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "movie ID", width: 100 },
    {
      field: "movie",
      headerName: "Movie",
      width: 250,
      renderCell: (params) => {
        return (
          <>
            <div
              style={{
                display: "flex",
                width: "40px",
                height: "40px",
                overflow: "hidden",
                borderRadius: "50px",
              }}
            >
              <ImgFit src={params.row.hover} />
            </div>
            <span style={{ marginLeft: "8px" }}>{params.row.title}</span>
          </>
        );
      },
    },
    { field: "type", headerName: "Type", width: 100 },
    { field: "genre", headerName: "Genre", width: 150 },
    { field: "year", headerName: "Year", width: 150 },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => {
        return (
          <EditBox>
            <Link
              to={{ pathname: `/product/${params.row._id}`, movie: params.row }}
              className="edit"
            >
              <Edit />
            </Link>
            <button
              className="delete"
              onClick={() => handleDelete(params.row._id)}
            >
              <Delete className="delete" />
            </button>
          </EditBox>
        );
      },
    },
  ];

  useEffect(() => {
    MovieApi(dispatch);
  }, [dispatch]);
  console.log(movies);
  return (
    <PageSec>
      <TableComp
        columns={columns}
        rows={movies}
        size={10}
        height={"700px"}
        pageSize={10}
      />
    </PageSec>
  );
};
