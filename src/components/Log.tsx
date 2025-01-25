import ImageSlider from "./ImageSlider";
import LoginForm from "./LoginForm";

const Log = () => {
  return (
    <div className="flex h-[100vh] w-[100vw] items-center justify-center">
      <div className="grid h-[90vh] w-[70vw] grid-cols-2 items-center justify-around rounded-2xl bg-[#2c2638]">
        <ImageSlider />
        <LoginForm />
      </div>
    </div>
  );
};

export default Log;
