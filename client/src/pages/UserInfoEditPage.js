import React from "react";
import UserEditForm from "../components/UserEditForm";

function UserInfoEditPage() {
  return (
    <>
      <UserEditForm
        title="회원 정보 수정"
        click="회원정보수정"
        disabled="true"
      />
    </>
  );
}

export default UserInfoEditPage;
