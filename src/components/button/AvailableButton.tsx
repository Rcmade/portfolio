import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import BlinkCircle from "@/components/animated/BlinkCircle";

const AvailableButton = () => {
  return (
    <Button variant="outline" className="flex justify-center whitespace-nowrap" asChild>
      <Link href={process.env.CONTACT_UPWORK!}>
        <BlinkCircle />
        Available for work!
      </Link>
    </Button>
  );
};

export default AvailableButton;
