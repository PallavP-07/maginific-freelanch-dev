import { CircleChevronLeft } from "lucide-react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-[#01331a] bg-[url('/circle-bg.svg')] bg-no-repeat bg-right ">
      <div className="text-center ">
        <h1 className="text-8xl font-bold text-white tracking-[10px]">404</h1>
        <h2 className="mt-4 text-3xl text-gray-200 tracking-wider ">
          Page Not Found
        </h2>
        <p className="mt-2 text-gray-300">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block px-3 py-1 text-gray-800 shadow-md bg-opacity-80  bg-white border-2 border-green-700 rounded-md hover:bg-green-900 hover:border-gray-200 hover:text-white transition duration-500"
        >
          <span className="flex items-center gap-1 text-sm">
            {" "}
            <CircleChevronLeft className="w-4 h-4" /> Home{" "}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
