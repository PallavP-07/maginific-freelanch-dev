// components/Loader.js
import Lottie from "react-lottie";
import Loader from "/MagnificLoader.json";

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <Lottie options={defaultOptions} height={150} width={150} />
    </div>
  );
};

export default Loader;
