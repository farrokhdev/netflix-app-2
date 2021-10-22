import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { EditSec } from "./EditStyle";
import { EditListComp } from "components/EditComp/EditListComp";
import { ListForm } from "components/FormsComp/EditForms/ListForm";

export const EditList = () => {
  let location = useLocation();
  let history = useHistory();
  const list = location.list;

  useEffect(() => {
    if (!location.list) {
      history.push("/alllist");
    }
  });

  return (
    <>
      {list && (
        <EditSec>
          <EditListComp list={list} />
          <ListForm list={list} />
        </EditSec>
      )}
    </>
  );
};
