import img2 from "../images/img2.jpg";
import img1 from "../images/img1.jpg";
import img3 from "../images/img3.jpg";
import { GoArrowRight } from "react-icons/go";
import { useState } from "react";

const images = [img1, img2, img3];

const ImageSlider = () => {
  const [image, setImage] = useState(images[2]);

  const index = images.indexOf(image);
  console.log(index);

  return (
    <div className="ml-[50px] flex h-full w-full items-center justify-start">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="z-0 flex h-[90%] w-[80%] flex-col justify-between rounded-2xl"
      >
        <div className="z-10 flex flex-row items-center justify-between p-5 text-white">
          <div>
            <svg
              width="120"
              height="86"
              viewBox="0 0 220 86"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.288 86C1.22133 86 0.688 85.4667 0.688 84.4V25.072C0.688 24.3893 0.901333 23.7493 1.328 23.152L16.432 1.64799C16.9013 1.008 17.584 0.687996 18.48 0.687996H41.392C42.3307 0.687996 43.0133 1.008 43.44 1.64799L58.672 23.152C59.0987 23.7493 59.312 24.3893 59.312 25.072V84.4C59.312 85.4667 58.7787 86 57.712 86H34.288C33.2213 86 32.688 85.4667 32.688 84.4V60.4H27.312V84.4C27.312 85.4667 26.7787 86 25.712 86H2.288ZM30 38.192C31.8347 38.192 33.328 37.616 34.48 36.464C35.632 35.312 36.208 33.84 36.208 32.048C36.208 30.2133 35.632 28.72 34.48 27.568C33.328 26.416 31.8347 25.84 30 25.84C28.1653 25.84 26.672 26.416 25.52 27.568C24.368 28.72 23.792 30.2133 23.792 32.048C23.792 33.84 24.368 35.312 25.52 36.464C26.672 37.616 28.1653 38.192 30 38.192ZM66.288 86C65.2213 86 64.688 85.4667 64.688 84.4V17.072C64.688 16.0907 65.0293 15.2373 65.712 14.512L78.512 1.712C79.2373 1.02933 80.0907 0.687996 81.072 0.687996H95.152C96.176 0.687996 97.0293 1.02933 97.712 1.712L108.528 12.528H111.472L122.288 1.712C122.971 1.02933 123.824 0.687996 124.848 0.687996H138.928C139.909 0.687996 140.763 1.02933 141.488 1.712L154.288 14.512C154.971 15.2373 155.312 16.0907 155.312 17.072V84.4C155.312 85.4667 154.779 86 153.712 86H130.288C129.221 86 128.688 85.4667 128.688 84.4V31.6H123.312V84.4C123.312 85.4667 122.779 86 121.712 86H98.288C97.2213 86 96.688 85.4667 96.688 84.4V31.6H91.312V84.4C91.312 85.4667 90.7787 86 89.712 86H66.288ZM177.072 86C176.091 86 175.237 85.6373 174.512 84.912L161.712 72.112C161.029 71.4293 160.688 70.576 160.688 69.552V2.28799C160.688 1.22133 161.221 0.687996 162.288 0.687996H185.712C186.779 0.687996 187.312 1.22133 187.312 2.28799V57.712C187.312 59.504 188.208 60.4 190 60.4H192.688V2.28799C192.688 1.22133 193.221 0.687996 194.288 0.687996H217.712C218.779 0.687996 219.312 1.22133 219.312 2.28799V84.4C219.312 85.4667 218.779 86 217.712 86H177.072Z"
                fill="white"
              />
            </svg>
          </div>
          <button className="flex h-[30px] flex-row items-center justify-between gap-1 rounded-full bg-gray-400 p-3">
            <a href="/">Back to Home </a>
            <span>
              <GoArrowRight size={25} />
            </span>
          </button>
        </div>
        <div className="flex flex-col flex-wrap items-center justify-end space-y-5 py-9 text-white">
          <p className="text-3xl">
            Capturing Moments,
            <br />
            Creating Memories{" "}
          </p>
          <div className="flex flex-row items-center justify-between gap-2">
            <div
              className={`h-[8px] w-[60px] cursor-pointer rounded-full ${index == 0 ? "bg-green-400" : "bg-gray-600"}`}
              onClick={() => setImage(images[0])}
            ></div>
            <div
              className={`h-[8px] w-[60px] cursor-pointer rounded-full ${index == 1 ? "bg-green-400" : "bg-gray-600"}`}
              onClick={() => setImage(images[1])}
            ></div>
            <div
              className={`h-[8px] w-[60px] cursor-pointer rounded-full ${index == 2 ? "bg-green-400" : "bg-gray-600"}`}
              onClick={() => setImage(images[2])}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
