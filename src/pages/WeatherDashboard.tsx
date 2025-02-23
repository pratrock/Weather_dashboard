import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import React from "react";

const WeatherDashboard = () => {
  return (
    <div>
      <h1>My Location</h1>
      <Button variant={"outline"} size={"icon"}>
        <RefreshCw />
      </Button>
    </div>
  );
};

export default WeatherDashboard;
