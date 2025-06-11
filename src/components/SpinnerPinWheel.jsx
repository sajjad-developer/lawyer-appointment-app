import { LoaderPinwheel } from "lucide-react";

export default function SpinnerPinwheel() {
  return (
    <>
      <div className="flex gap-4 justify-center items-center mt-40">
        <span>
          <LoaderPinwheel
            size={46}
            className="text-green-700 animate-spin"
          ></LoaderPinwheel>
        </span>
        <span className="text-2xl font-bold font-mulish">
          Loading, please wait...
        </span>
      </div>
    </>
  );
}
