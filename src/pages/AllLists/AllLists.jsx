import React, { useEffect } from "react";
import { ImgFit, PageSec } from "ConstComponents";
import { TableComp } from "components";
import { useListContext } from "contexts";
import { ListApi, DeleteListApi } from "contexts/ListContext/apiCall";
import { Edit, Delete } from "@material-ui/icons";
import { EditBox } from "./AllListsStyle";
import { Link } from "react-router-dom";

export const AllLists = () => {
  const { lists, dispatch } = useListContext();
  const handleDelete = (id) => {
    DeleteListApi(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "User ID", width: 100 },
    {
      field: "list title",
      headerName: "list title",
      width: 250,
      renderCell: (params) => {
        return (
          <>
            <span>{params.row.title}</span>
          </>
        );
      },
    },
    { field: "type", headerName: "type", width: 100 },
    { field: "genre", headerName: "genre", width: 150 },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => {
        return (
          <EditBox>
            <Link
              to={{ pathname: `/list/${params.row._id}`, list: params.row }}
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
    ListApi(dispatch);
  }, [dispatch]);
  console.log(lists);

  return (
    <PageSec>
      <TableComp
        columns={columns}
        rows={lists}
        size={10}
        height={"600px"}
        pageSize={10}
      />
    </PageSec>
  );
};
