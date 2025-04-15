import FoodItem from "@/types/FoodItem";
import Subtitle from "./components/Subtitle";
import SkeletonGrid from "./components/MenuSkeleton";
import FoodItemGrid from "./components/FoodItemGrid";
import { useEffect, useState } from "react";

async function getBurgers(): Promise<FoodItem[]> {
  const result = await fetch("http://localhost:4000/burgers");
  return result.json();
}
async function getSides(): Promise<FoodItem[]> {
  const result = await fetch("http://localhost:4000/sides");
  return result.json();
}
async function getDrinks(): Promise<FoodItem[]> {
  const result = await fetch("http://localhost:4000/drinks");
  return result.json();
}

export default function Menu() {
  const [burgers, setBurgers] = useState<FoodItem[]>([]);
  const [sides, setSides] = useState<FoodItem[]>([]);
  const [drinks, setDrinks] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const delayPromise = new Promise((resolve) =>
          setTimeout(resolve, 500)
        );
        const [burgersData] = await Promise.all([getBurgers(), delayPromise]);
        const [sidesData] = await Promise.all([getSides(), delayPromise]);
        const [drinksData] = await Promise.all([getDrinks(), delayPromise]);
        setBurgers(burgersData);
        setSides(sidesData);
        setDrinks(drinksData);

      } catch (err: any) {
        setError(err.message || "Failed to fetch menu items");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }  
  
  return (
      <>
        <Subtitle text="Burgers" />
        {loading ? <SkeletonGrid count={6} /> : <FoodItemGrid items={burgers} />}
        <Subtitle text="Sides" />
        {loading ? <SkeletonGrid count={3} /> : <FoodItemGrid items={sides} />}
        <Subtitle text="Drinks" />
        {loading ? <SkeletonGrid count={3} /> : <FoodItemGrid items={drinks} />}
      </>
    );
}