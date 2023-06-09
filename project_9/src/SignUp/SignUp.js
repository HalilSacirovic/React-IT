import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const loginSchema = yup.object({
  email: yup.string().required("Nedostaje email").email("Email nije dobar"),
  // .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i),
  password: yup.string().required().min(6).max(50),
});

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="login-wrapper">
      <Formik
        initialValues={{ email: "", password: "",confirmPassword:"",fullName:"" }}
        onSubmit={(values, actions) => {
            console.log("values = ",values)
          fetch("https://js-course-server.onrender.com/user/signup", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
                alert("RADI?")
                navigate("/login"); 
            })
            .catch((error) =>{
                console.log("error",error);
                alert(error)
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
            <button
              onClick={() => {
                console.log(values, "values");
                console.log(errors, "errors");
                console.log(touched, "touched");
              }}
            >
              Console log states
            </button>
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
            <div>
              <input
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
              <p className="error-message">
                {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
              </p>
            </div>
            <div>
              <input
                type="text"
                name="fullName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullName}
              />
              <p className="error-message">
                {errors.fullName && touched.fullName && errors.fullName}
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

export default SignUp;