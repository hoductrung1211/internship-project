'use client';
import useLoadingAnimation from "@/utils/hooks/useLoadingAnimation";
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function Home() {
  return (
    <LoginForm />
  )
}

function LoginForm() {
  const [showLoading, hideLoading] = useLoadingAnimation();
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  function handleSubmitLogin(e) {
    e.preventDefault();
    try {
      showLoading();
      setTimeout(() => {
        hideLoading();
        router.push("home");
      }, 1000);
    } 
    catch(error) {

    } 
  } 
  return (
    <form
      className="mt-10 mx-auto w-[480px] py-4 px-6 flex flex-col gap-4 rounded-md border-2"
      action="post"
      onSubmit={handleSubmitLogin}
    >
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <input className="h-8 px-2 rounded-md border-2" type="text" />
      <input className="h-8 px-2 rounded-md border-2" type="text" />
      <button className="h-9 bg-blue-400 font-bold text-white rounded-md">Login</button>
    </form>
  )
}