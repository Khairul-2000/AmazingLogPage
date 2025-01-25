import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex h-full w-full flex-col items-start justify-center text-white">
      <div>
        <h1 className="mb-6 text-7xl">Log in account</h1>
        <p className="mb-6 text-xl">
          <span className="text-purple-500">
            <a href="/register">or register for account</a>
          </span>
        </p>

        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            const form = e.currentTarget;

            const formData = new FormData(form);

            const data = {
              email: formData.get("email"),
              password: formData.get("password"),
            };

            form.reset();

            console.log(data);
          }}
          className="space-y-5"
        >
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            required
            className="w-full rounded-xl bg-[#3c364c] p-4 outline-0"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              id="password"
              required
              className="w-full rounded-xl bg-[#3c364c] p-4 outline-0"
            />
            {!showPassword ? (
              <FiEye
                size={25}
                className="absolute top-3 right-3"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <FiEyeOff
                size={25}
                className="absolute top-3 right-3"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>

          <button className="w-full cursor-pointer rounded-xl bg-[#6d54b5] p-3 text-xl">
            Sign in
          </button>
        </form>
        <div className="my-4 flex flex-row items-center justify-center gap-2">
          <hr className="w-[30%]" />
          <p className="text-center">or log in with</p>
          <hr className="w-[30%]" />
        </div>
        <div>
          <button className="flex w-full cursor-pointer flex-row items-center justify-center gap-3 rounded-xl border border-gray-500 p-2 text-2xl">
            <FcGoogle size={25} /> Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
