import React, { useEffect } from "react";
import { ImgFit, PageSec } from "ConstComponents";
import { TableComp } from "components";
import { useUserContext } from "contexts";
import { UserApi, DeleteUserApi } from "contexts/UserContext/apiCall";
import { Edit, Delete } from "@material-ui/icons";
import { EditBox } from "./AllUsersStyle";
import { Link } from "react-router-dom";

export const AllUsers = () => {
  const { users, dispatch } = useUserContext();
  const handleDelete = (id) => {
    DeleteUserApi(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "User ID", width: 100 },
    {
      field: "user",
      headerName: "User",
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
              <ImgFit src={params.row.profilePic} />
            </div>
            <span style={{ marginLeft: "8px" }}>{params.row.username}</span>
          </>
        );
      },
    },
    { field: "firstname", headerName: "firstname", width: 100 },
    { field: "lastname", headerName: "lastname", width: 150 },
    { field: "isAdmin", headerName: "isAdmin", width: 150 },
    { field: "email", headerName: "email", width: 150 },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => {
        return (
          <EditBox>
            <Link
              to={{ pathname: `/user/${params.row._id}`, user: params.row }}
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
    UserApi(dispatch);
  }, [dispatch]);
  console.log(users);

  return (
    <PageSec>
      <TableComp
        columns={columns}
        rows={users}
        size={10}
        height={"600px"}
        pageSize={10}
      />
    </PageSec>
  );
};
