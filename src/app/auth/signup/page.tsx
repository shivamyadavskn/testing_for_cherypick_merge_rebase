"use client";
import { FormEvent, useState } from "react";
import style from "./signup.module.css";

export default function SignUp() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleOnChangeInput = async (e: any) => {
    const { name, value } = e.target;

    console.log("handle value", value, name);
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      if (value.length < 6 || value.length > 10) {
        setError((error) => ({ ...error, password: "Enter Password<10" }));
      } else {
        setError((error) => ({ ...error, password: "" }));
      }
      setPassword(() => value);
    } else if (name === "confirmpassword") {
      if (value !== password) {
        setError((error) => ({
          ...error,
          confirmPassword: "Passwords do not match",
        }));
      } else {
        setError((error) => ({ ...error, confirmPassword: "" }));
      }
      setConfirmPassword(() => value);
    }
  };

  function handleOnSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    // Start with a fresh error object
    const newError = {
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (email.trim() === "") {
      newError.email = "Email is required";
    }

    if (password.trim() === "") {
      newError.password = "Password is required";
    }

    if (
      confirmPassword.trim() === "" ||
      confirmPassword.trim() !== password.trim()
    ) {
      newError.confirmPassword = "Passwords do not match";
    }

    // Update the state once
    setError(newError);

    // Check if there are any errors
    const hasNoError = Object.values(newError).every((val) => val === "");

    if (hasNoError) {
      alert("Submitted successfully!");
      console.log("Form Data:", { email, password, confirmPassword });
      // Proceed with form logic here
    }

    setLoading(false);
  }

  return (
    <div className={style.box}>
      <div>
        <h3 className={style.heading}>Register Form</h3>
        <form className={style.form} onSubmit={handleOnSubmit}>
          <div className={style.labelEmail}>
            <div className={style.Each}>
              <label className={style.label}>Email:</label>
              <input
                className={!error.email ? style.input : style.inputError}
                type="email"
                name="email"
                placeholder="Enter Email"
                onChange={handleOnChangeInput}
              />
            </div>
            <div className={style.Each}>
              <label className={style.label}>Password</label>
              <input
                className={!error.password ? style.input : style.inputError}
                type="password"
                name="password"
                placeholder="Enter Password"
                onChange={handleOnChangeInput}
              />
            </div>
            <div className={style.Each}>
              <label className={style.label}>ConfirmPassword</label>
              <input
                className={
                  !error.confirmPassword ? style.input : style.inputError
                }
                type="password"
                name="confirmpassword"
                placeholder="Re-enter Password"
                onChange={handleOnChangeInput}
              />
            </div>
          </div>
          <div className={style.error}>
            <div>*{error.email}</div>
            <div>*{error.password}</div>
            <div>*{error.confirmPassword}</div>
          </div>
          <button type="submit" className={style.button}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
