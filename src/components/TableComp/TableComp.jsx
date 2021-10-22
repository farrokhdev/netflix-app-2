import React from "react";
import { TableSec } from "./TableStyle";
import { DataGrid } from "@mui/x-data-grid";

export const TableComp = ({ columns, rows, height, pageSize }) => {
  return (
    <>
      <TableSec style={{ height: height, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
          getRowId={(r) => r._id}
          pageSize={pageSize}
          rowsPerPageOptions={[5]}
        />
      </TableSec>
    </>
  );
};
