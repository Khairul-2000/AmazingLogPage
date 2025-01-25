import Form from "./RegisterForm";
import ImageSlider from "./ImageSlider";

const Register = () => {
  return (
    <div className="flex h-[100vh] w-[100vw] items-center justify-center">
      <div className="grid h-[90vh] w-[70vw] grid-cols-2 items-center justify-around rounded-2xl bg-[#2c2638]">
        <ImageSlider />
        <Form />
      </div>
    </div>
  );
};

export default Register;
