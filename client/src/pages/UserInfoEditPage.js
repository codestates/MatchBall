import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import UserEditForm from "../components/UserEditForm";

function UserInfoEditPage() {
  return (
    <>
      <Nav />
      <UserEditForm
        title="회원 정보 수정"
        click="회원정보수정"
        disabled="true"
      />
      <Footer />
    </>
  );
}

export default UserInfoEditPage;
