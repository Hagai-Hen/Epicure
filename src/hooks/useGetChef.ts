import { useEffect, useState } from "react";
import { ChefInterface } from "../resources/interfaces";

const useGetChef = (id: string) => {
  const [loading, setLoading] = useState(false);
  const [chef, setChef] = useState<ChefInterface>();

  useEffect(() => {
    const getChef = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/chefs/get/${id}`);
        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }
        if (data) setChef(data);
      } catch (error) {
        console.log("Error getting chef:", (error as Error).message);
      } finally {
        setLoading(false);
      }
    };
    getChef();
  }, [setChef]);
  return { chef, setChef, loading };
};

export default useGetChef;
