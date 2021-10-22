import React, { useEffect } from "react";
import { EditSec } from "./EditStyle";
import { useLocation, useHistory } from "react-router-dom";
import { EditUserComp } from "components/EditComp/EditUserComp";
import { UserForm } from "components/FormsComp/EditForms/UserForm";

export const EditUser = () => {
  let location = useLocation();
  let history = useHistory();
  const user = location.user;

  useEffect(() => {
    if (!location.user) {
      history.push("/allusers");
    }
  });

  return (
    <>
      {user && (
        <EditSec>
          <EditUserComp user={user} />
          <UserForm user={user} />
        </EditSec>
      )}
    </>
  );
};
