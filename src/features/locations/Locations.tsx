import { Card, CardHeader, CardContent, CardTitle, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Locations() {
  return <>
  <div className="grid grid-cols-3 gap-4 mx-4 pb-4">
    {true
      ? // Render 6 skeleton cards when loading is true
        Array.from({ length: 6 }).map((_, index) => (
          <Card key={index}>
            <CardHeader>
              <Skeleton className="mx-2 w-6/10 h-[32px]" />
            </CardHeader>
            <CardContent className="flex flex-col items-center align-middle">
              <Skeleton className="w-full ml-4 h-70 rounded-md" />
              <div className="min-h-12 w-full mt-2">
                <Skeleton className="mx-2 h-5 w-full mb-[3px]" />
                <Skeleton className="mx-2 h-5 w-3/4" />
              </div>
            </CardContent>
            <CardFooter className="flex flex-row justify-between px-4 m-0 items-center align-bottom">
              <Skeleton className="mx-2 h-8 w-40" />
            </CardFooter>
          </Card>
        )) : (<h1>123</h1>)}
  </div>
</>;
}
