import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import SignUpForm from "../components/SignUpForm";

function SignUpPage(props) {
  return (
    <>
      <Nav />
      <SignUpForm title="회원가입" />
      <Footer />
    </>
  );
}

export default SignUpPage;
