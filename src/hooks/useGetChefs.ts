import { useEffect, useState } from "react";

const useGetChefs = () => {
  const [loading, setLoading] = useState(false);
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    const getChefs = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/chefs/getall`);
        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }
        if (data) setChefs(data);
      } catch (error) {
        console.log("Error getting chefs:", (error as Error).message);
      } finally {
        setLoading(false);
      }
    };
    getChefs();
  }, [setChefs]);
  return { chefs, setChefs, loading };
};

export default useGetChefs;
