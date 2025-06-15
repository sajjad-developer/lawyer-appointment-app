import { useLoaderData } from "react-router";

const MyBookings = () => {
  const data = useLoaderData();
  console.log(data);
  return <div>My bookings</div>;
};

export default MyBookings;
