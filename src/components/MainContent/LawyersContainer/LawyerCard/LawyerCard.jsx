import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import ResponsiveImageProcessor from "@/ResponsiveImageProcessor/ResponsiveImageProcessor";

import React from "react";
import { FaRegRegistered } from "react-icons/fa6";

const LawyerCard = ({ lawyer }) => {
  console.log(lawyer);
  const { images, name, experience, licenseNumber, speciality } = lawyer;
  return (
    <Card className="card flex flex-row gap-0 ">
      <CardContent className="w-[50%] h-56 px-3 ">
        <ResponsiveImageProcessor
          images={images}
          alt={name}
        ></ResponsiveImageProcessor>
      </CardContent>

      <div>
        <CardHeader className="space-y-5 px-0 ">
          <div className="space-x-2">
            <span className=" p-2 text-center bg-[#09982F10]  text-[#09982F] rounded-lg">
              Available
            </span>
            <span className="whitespace-nowrap p-2 bg-[#176AE510] text-[#176AE5] rounded-lg ">
              +{experience} Experience
            </span>
          </div>
          <CardTitle>{name}</CardTitle>
          <CardDescription className="flex flex-col gap-2 ">
            <p>{speciality}</p>
            <div className="flex items-center gap-2 ">
              <FaRegRegistered />
              <p>License No : BD {licenseNumber}</p>
            </div>
          </CardDescription>
        </CardHeader>

        <CardFooter className="px-0 mt-11">
          <button className="btn border-[#176AE520] bg-gray-200 text-[#176AE5] rounded-xl border-none px-6">
            View Details
          </button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default LawyerCard;
