import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const coffeeList = useLoaderData();

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-4">
        Our Popular Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {coffeeList.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

export default Home;
