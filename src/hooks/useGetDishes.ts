import { useEffect, useState } from "react";

const useGetDishes = () => {
  const [loading, setLoading] = useState(false);
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const getDishes = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/dishes/getall`);
        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }
        if (data) setDishes(data);
      } catch (error) {
        console.log("Error getting dishes:", (error as Error).message);
      } finally {
        setLoading(false);
      }
    };
    getDishes();
  }, [setDishes]);
  return { dishes, setDishes, loading };
};

export default useGetDishes;
