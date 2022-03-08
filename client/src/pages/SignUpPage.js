import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import UserEditForm from "../components/UserEditForm";

function SignUpPage(props) {
  return (
    <>
      <Nav />
      <UserEditForm title="회원가입" click="회원가입" />
      <Footer />
    </>
  );
}

export default SignUpPage;
