import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import { Badge } from "@/components/ui/badge";
  import FoodItem from "@/types/FoodItem";
  
  interface FoodItemProps {
    items: FoodItem[];
  }
  
 export default function FoodItemGrid({ items: foodItems }: FoodItemProps) {
    return (
      <div className="grid grid-cols-3 gap-4 mx-4 pb-4">
        {foodItems.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle className="overflow-visible p-0 font-organical text-2xl">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center align-middle">
              <img
                className="w-100 h-70 object-cover object-bottom rounded-md"
                src={`/images/${item.image}`}
                alt={item.title}
              />
              <div className="min-h-12">
                <p className="line-clamp-2">{item.description}</p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-row justify-between px-4 m-0 align-bottom">
              <Button variant="outline" className="font-organical text-lg">
                Add to Cart
              </Button>
              {item.limitedEdition && (
                <Badge className="mx-2 align-bottom">Limited Edition!</Badge>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }