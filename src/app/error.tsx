"use client";

import EmptyStete from "@/components/EmptyStete";
import { useEffect } from "react";

interface ErrorStateProps {
  error: Error;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <EmptyStete 
      title="Uh Oh"
      subtitle="Something went wrong!"
    />
  )
}

export default ErrorState;