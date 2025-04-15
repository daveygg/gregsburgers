import { createFileRoute } from "@tanstack/react-router";
import Locations from "@/features/locations/Locations";
import ErrorScreen from "@/components/ErrorScreen";

export const Route = createFileRoute("/locations/")({
  component: Locations,
  errorComponent: ErrorScreen,
});
