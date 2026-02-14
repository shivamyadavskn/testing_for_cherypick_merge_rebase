"use client";
import { useActionState, useEffect } from "react";
import style from "./login.module.css";
import userLogin from "@/utils/session";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [state, onsubmit, loading] = useActionState(
    userLogin,
    null,
    "/auth/login"
  );

  useEffect(() => {
    if (state?.success) redirect("/dashboard");
  }, [state]);

  return (
    <div className={style.box}>
      <div>
        <h3 className={style.heading}>Login Auth</h3>
        <form className={style.form} action={onsubmit}>
          <div className={style.labelEmail}>
            <div className={style.Each}>
              <label className={style.label}>Email:</label>
              <input
                className={state?.error?.email ? style.inputError : style.input}
                type="email"
                name="email"
                placeholder="Enter Email"
              />
              {state?.error?.email && (
                <span className={style.error}>{state.error.email}</span>
              )}
            </div>
            <div className={style.Each}>
              <label className={style.label}>Password</label>
              <input
                className={
                  state?.error?.password ? style.inputError : style.input
                }
                type="password"
                name="password"
                placeholder="Enter Password"
              />
              {state?.error?.password && (
                <span className={style.error}>{state.error.password}</span>
              )}
            </div>
          </div>
          <button type="submit" className={style.button}>
            {loading ? "...loading" : "Submit"}
          </button>
        </form>
        <Link href="/auth/signup">Register</Link>
      </div>
    </div>
  );
}
