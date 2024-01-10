import { Eraser } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center max-w-xl min-h-screen mx-auto">
    <div className="flex flex-col items-center justify-center gap-2 justify-self-center">
      <Eraser size={30} className="text-white " />
      <h3 className="text-3xl font-bold text-white">Something Error</h3>
      <Link href="/" className="text-white">Back to Home </Link>
    </div>
    </div>
  );
};

export default NotFound;
