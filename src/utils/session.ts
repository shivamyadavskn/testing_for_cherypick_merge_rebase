"use server";

export default async function userLogin(_prev: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const errors: { email?: string; password?: string } = {};

  if (!email || email.trim() === "") errors.email = "Email Required";
  if (!password || password.trim() === "") errors.password = "Password Required";

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      error: errors,
    };
  }

  if (email === "test@gmail.com" && password === "test") {
    return {
      success: true,
      user: email,
    };
  }

  return {
    success: false,
    error: {
      email: "Invalid credentials",
      password: "Invalid credentials",
    },
  };
}
