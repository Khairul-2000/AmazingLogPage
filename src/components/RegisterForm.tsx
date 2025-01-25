import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

const Form = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex h-full w-full flex-col items-start justify-center text-white">
      <div>
        <h1 className="mb-6 text-7xl">Create an account</h1>
        <p className="mb-6 text-xl">
          Already have an account?{" "}
          <span className="text-purple-500 underline">
            <a href="/log">Log in</a>
          </span>
        </p>

        <form
          action="https://formspree.io/f/xzzdzoqz"
          method="POST"
          // onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          //   e.preventDefault();

          //   const form = e.currentTarget;

          //   const formData = new FormData(form);

          //   const data = {
          //     first_name: formData.get("first_name"),
          //     last_name: formData.get("last_name"),
          //     email: formData.get("email"),
          //     password: formData.get("password"),
          //     terms: formData.get("terms"),
          //   };

          //   form.reset();

          //   console.log(data);
          // }}
          className="space-y-5"
        >
          <div className="flex w-full flex-row gap-3">
            <input
              type="text"
              name="first_name"
              id="first_name"
              placeholder="First name"
              required
              className="w-[60%] rounded-xl border-none bg-[#3c364c] p-4 outline-0"
            />
            <input
              type="text"
              placeholder="Last name"
              name="last_name"
              id="last_name"
              required
              className="w-[60%] rounded-xl border-none bg-[#3c364c] p-4 outline-0"
            />
          </div>
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
          <div className="flex flex-row items-center gap-3">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              required
              className="h-[20px] w-[20px] outline-0"
            />
            <label htmlFor="terms">I agree to the Terms and Conditions</label>
          </div>
          <button className="w-full cursor-pointer rounded-xl bg-[#6d54b5] p-3 text-xl">
            Create Account
          </button>
        </form>
        <div className="my-4 flex flex-row items-center justify-center gap-2">
          <hr className="w-[30%]" />
          <p className="text-center">or register with</p>
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

export default Form;
