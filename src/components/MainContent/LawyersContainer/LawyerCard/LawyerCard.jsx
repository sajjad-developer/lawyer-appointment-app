import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ResponsiveImageProcessor from "@/ResponsiveImageProcessor/ResponsiveImageProcessor";

import { FaRegRegistered } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

const LawyerCard = ({ lawyer }) => {
  const { id, images, name, experience, licenseNumber, speciality } = lawyer;

  const navigate = useNavigate();

  const handleToast = () => {
    toast("Your AppointBook Successfully");
    navigate("/my-bookings");
  };

  return (
    <Card className="flex flex-row gap-0 card">
      <CardContent className="w-[43%] md:w-[50%]  h-56 px-2  lg:px-3 ">
        <ResponsiveImageProcessor
          images={images}
          alt={name}
        ></ResponsiveImageProcessor>
      </CardContent>

      <div>
        <CardHeader className="px-0 space-y-5 text-xs md:text-base">
          <div className="space-x-2">
            <span className="p-1 lg:p-2 text-center bg-[#09982F10]  text-[#09982F] rounded-lg">
              Available
            </span>
            <span className="whitespace-nowrap p-1 lg:p-2 bg-[#176AE510] text-[#176AE5] rounded-lg ">
              +{experience} Experience
            </span>
          </div>
          <CardTitle>{name}</CardTitle>
          <CardDescription className="flex flex-col gap-2">
            <p>{speciality}</p>
            <div className="flex gap-2 items-center whitespace-nowrap">
              <FaRegRegistered />
              <p>License No: BD {licenseNumber}</p>
            </div>
          </CardDescription>
        </CardHeader>

        <CardFooter className="px-0 mt-11">
          <Link to={`/my-bookings/${id}`}>
            <button
              onClick={handleToast}
              className="btn border-[#176AE520] bg-gray-200 text-[#176AE5] rounded-xl border-none px-6"
            >
              View Details
            </button>
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
};

export default LawyerCard;
