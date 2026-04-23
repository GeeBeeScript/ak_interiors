import { LoaderCircle } from "lucide-react";
import * as motion from "motion/react-client";

const LoaderText = ({ className }: { className: string }) => {
  return (
    <>
      <p
        className={`flex justify-center items-center space-x-2 font-bold ${className}`}
      >
        <span>Loading</span>{" "}
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 1, ease: "easeIn", repeat: Infinity }}
        >
          <LoaderCircle />
        </motion.span>
      </p>
    </>
  );
};

export default LoaderText;
