import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import RegisterForm from "../components/RegisterForm";

function RegisterPage(props) {
  return (
    <>
      <Nav />
      <RegisterForm title="작성하기" click="등록하기" />
      <Footer />
    </>
  );
}

export default RegisterPage;
