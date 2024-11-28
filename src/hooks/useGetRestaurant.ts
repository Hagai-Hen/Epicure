import { useEffect, useState } from "react";

const useGetRestaurant = (ids: string | string[]) => {
  const [loading, setLoading] = useState(false);
  const [restaurant, setRestaurant] = useState<any[]>([]);

  useEffect(() => {
    const getRestaurant = async () => {
      if (ids) {
        const idList = Array.isArray(ids) ? ids : [ids];

        if (idList.length === 0) return;

        setLoading(true);

        try {
          const restaurantPromises = idList.map((id) =>
            fetch(`/api/restaurants/get/${id}`).then((response) =>
              response.json()
            )
          );

          const restaurantsData = await Promise.all(restaurantPromises);
          const validRestaurants = restaurantsData.filter(
            (restaurant) => restaurant && !restaurant.error
          );

          setRestaurant(validRestaurants);
        } catch (error) {
          console.error("Error fetching restaurants:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    getRestaurant();
  }, [ids]);

  return { restaurant, loading };
};

export default useGetRestaurant;
