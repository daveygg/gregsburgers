import { createFileRoute } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/menu")({
  component: Menu,
});

interface Burger {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  limitedEdition: boolean;
}

async function getBurgers(): Promise<Burger[]> {
  const result = await fetch("http://localhost:4000/burgers");

  return result.json();
}

function Menu() {
  const [burgers, setBurgers] = useState<Burger[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBurgers();
        setBurgers(data);
      } catch (err: any) {
        setError(err.message || "Failed to fetch burgers");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-4 mx-4 pb-4">
        {burgers.map((burger) => (
          <Card key={burger.id}>
            <CardHeader>
              <CardTitle className="overflow-visible p-0 font-organical text-2xl">
                {burger.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center align-middle">
              <img
                className="w-100 h-70 object-cover object-bottom"
                src={`/images/${burger.image}`}
              />
              <div className="min-h-12">
                <p className="line-clamp-2">{burger.description}</p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-row justify-between px-4 m-0 items-center align-bottom">
              <Button variant="outline" className="font-organical text-lg">
                Add to Cart
              </Button>
              {burger.limitedEdition && <Badge>Limited Edition!</Badge>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
export default Menu;
