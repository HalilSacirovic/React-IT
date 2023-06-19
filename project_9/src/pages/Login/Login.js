import React from "react";
import "./Login.css";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import jwtDecoded from 'jwt-decode';

const loginSchema = yup.object({
  email: yup.string().required("Nedostaje email").email("Email nije dobar"),
  // .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i),
  password: yup.string().required().min(6).max(50),

});

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login-wrapper">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, actions) => {
          fetch("https://js-course-server.onrender.com/user/login", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.token) {
                const decode = jwtDecoded(data.token);
                console.log(decode)
                localStorage.setItem("auth_token", data.token);
                localStorage.setItem("userId", data.userId);
             
              }
            })

        }}
        validationSchema={loginSchema}
        // validate={(values) => {
        //   const errors = {};
        //   if (
        //     !values.error ||
        //     values.error.length < 10 ||
        //     values.error.length > 100
        //   ) {
        //     errors.email = "Neispravan email";
        //   }
        //   return errors;
        // }}
      >
        {({
          values, // formikov state
          errors, // errors = { email: 'Neispravan email' }
          touched, // touched = { email: true }
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div>
            <div>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <p className="error-message">
                {errors.email && touched.email && errors.email}
              </p>
            </div>
            <div>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <p className="error-message">
                {errors.password && touched.password && errors.password}
              </p>
            </div>
            <button onClick={handleSubmit} type="button">
              Submit
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Login;