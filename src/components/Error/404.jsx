import React from "react";
import Container from "../Utilities/Container.jsx";
import { Link } from "react-router";
import errorimg from '../../assets/images/404.png'

const Error = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="w-1/2 mx-auto py-14 px-16">
          <div>
            <img src={errorimg} alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Error;
