import { useEffect, useState } from "react";

const useGetRestaurants = () => {
  const [loading, setLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/restaurants/getall`);
        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }
        if (data) setRestaurants(data);
      } catch (error) {
        console.log("Error getting restaurants:", (error as Error).message);
      } finally {
        setLoading(false);
      }
    };
    getRestaurants();
  }, [setRestaurants]);
  return { restaurants, setRestaurants, loading };
};

export default useGetRestaurants;
