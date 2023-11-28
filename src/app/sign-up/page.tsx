"use client";

import Image from "next/image";
import { Inter, Poppins } from "next/font/google";
import Input from "@/components/input/Input";
import { FormEvent, useState } from "react";
import Link from "next/link";
import axios from "axios";

const inter = Inter({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function postUser() {
    axios
      .post("https://bd-full-stack-project.vercel.app/user", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    postUser();
  }

  return (
    <main
      className={`${poppins.className} w-full flex-center justify-normal pt-[70px]`}
    >
      <Image
        src={require("../../../assets/Sign-photo.png")}
        alt="Image of sign up"
        className="w-[60%] h-[90vh] bg-cover"
      />
      <div className="flex-center w-[40%]">
        <div>
          <h1 className={`${inter.className} text-4xl mb-6`}>
            Create an account
          </h1>
          <p className="mb-[48px]">Enter your details below</p>

          <form onSubmit={handleSubmit}>
            <Input
              title="FirstName"
              type="text"
              value={firstName}
              setValue={setFirstName}
            />
            <Input
              title="LastName"
              type="text"
              value={lastName}
              setValue={setLastName}
            />
            <Input
              title="E-mail"
              type="email"
              value={email}
              setValue={setEmail}
            />
            <Input
              title="Password"
              type="password"
              value={password}
              setValue={setPassword}
            />

            <button
              className="w-full text-white rounded bg-secondary2 flex-center py-4 mb-8"
              type="submit"
            >
              Create Account
            </button>
          </form>

          <div className="flex gap-4">
            <p className="opacity-70">Already have account?</p>
            <Link className="font-medium" href="/sign-in">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
