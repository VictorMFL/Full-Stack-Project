"use client";

import Image from "next/image";
import { Inter, Poppins } from "next/font/google";
import Input from "@/components/input/Input";
import { FormEvent, useEffect, useState } from "react";
import { UserProps } from "@/interface/interface";
import axios from "axios";
import { urlUsers } from "@/api/api";
import { useRouter } from "next/navigation";

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

const SignIn = () => {
  const [allUsers, setAllUsers] = useState<UserProps[]>([]);
  const [userNotFound, setUserNotFound] = useState<null | string>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter()

  async function getUsers() {
    try {
      const { data } = await axios.get(urlUsers);
      console.log(data);
      setAllUsers(data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    // Verifica se o email e a senha existem em allUsers
    const user = allUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      router.push('/home', { scroll: false })
    } else {
      setUserNotFound("Email or password invalid. Please, try again.");
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    setUserNotFound(null);
  }, [password, email]);

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
            Log in to Exclusive
          </h1>
          <p className="mb-[48px]">Enter your details below</p>

          <form onSubmit={handleSubmit}>
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

            <div className="relative">
              {userNotFound && (
                <p className="text-xs text-secondary2 absolute -top-9 max-w-full mb-4">
                  {userNotFound}
                </p>
              )}
            </div>

            <div className="w-full flex-center justify-between">
              <button
                className="text-white rounded bg-secondary2 flex-center py-4 px-12"
                type="submit"
              >
                Log In
              </button>
              <p
                className="text-secondary2 cursor-pointer"
                onClick={() =>
                  alert("Ops, this functionality is in development")
                }
              >
                Forget Password?
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
