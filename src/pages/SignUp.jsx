import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api/localAuth";
import "../App.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [bio, setBio] = useState("");
  const [apiError, setApiError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState("");

  const navigate = useNavigate();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*/?.-_+=]).{8,}$/;
  const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;

  const handleSignup = async (e) => {
    e.preventDefault();
    setApiError("");
    setSuccessMessage("");

    if (!emailRegex.test(email)) return setApiError("Invalid email");
    if (!usernameRegex.test(username))
      return setApiError(
        "Username must be 3-15 characters (letters/ numbers/_)"
      );
    if (!passwordRegex.test(password))
      return setApiError(
        "Password must be 8+ chars including upper/ lower/ numbers/ symbol"
      );
    if (password != confirmPassword)
      return setApiError("Passwords do not match");

    try {
      setIsSubmitting(true);
      const res = await registerUser({
        name: username,
        email,
        password,
        city,
        gender,
        dob,
        bio,
      });
      console.log("Register response: ", res);
      setSuccessMessage("Account created. Redirecting to login...");
      setTimeout(() => {
        navigate("/login");
      }, 800);
    } catch (err) {
      console.error("Signup error: ", err);
      setApiError(err?.response?.data?.message || "Signup failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-linear-to-r from-violet-600 via-fuchsia-600 to-pink-500 flex items-center justify-center">
      <div className="bg-white w-xl h-auto m-auto rounded-3xl p-6">
        <h1 className="font-bold text-2xl text-center mb-8">
          Create an account
        </h1>

        <form
          onSubmit={handleSignup}
          className="flex flex-col items-center justify-center space-y-3"
        >
          <div className="w-84">
            <input
              type="text"
              placeholder="Full Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full h-10 border rounded-2xl px-4 my-1"
            />
          </div>

          <div className="w-84">
            <input
              type="text"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-10 border rounded-2xl px-4 my-1"
            />
          </div>

          <div className="w-84">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-10 border rounded-2xl px-4 my-1"
            />
          </div>

          <div className="w-84">
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full h-10 border rounded-2xl px-4 my-1"
            />
          </div>

          <div className="w-84 grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="h-10 border rounded-2xl px-4"
            />

            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className={`h-10 border rounded-2xl px-4 bg-white ${
                gender ? "text-black" : "text-gray-400"
              }`}
            >
              <option value="" disabled>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="w-84">
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full h-10 border rounded-2xl px-4 my-1"
            />
          </div>

          <div className="w-84">
            <textarea
              placeholder="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full h-10 border rounded-2xl px-4 pt-2"
            />
          </div>

          {apiError && (
            <p className="text-red-500 text-sm mt-2 text-center">{apiError}</p>
          )}
          {successMessage && (
            <p className="text-green-600 text-sm mt-2 text-center">
              {successMessage}
            </p>
          )}

          <button
            type="submit"
            className="bg-linear-to-r from-violet-600 via-fuchsia-600 to-pink-500 h-12 w-42 text-white rounded-3xl hover:scale-105 font-bold text-xl mt-2 disabled:opacity-60 disabled:hover:scale-100"
          >
            {isSubmitting ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-purple-700 font-bold cursor-pointer"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
