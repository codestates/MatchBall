import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import RegisterForm from "../components/RegisterForm";

function RegisterEditPage(props) {
  return (
    <>
      <Nav />
      <RegisterForm title="수정하기" click="수정하기" />
      <Footer />
    </>
  );
}

export default RegisterEditPage;
