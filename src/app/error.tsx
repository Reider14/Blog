"use client";

import ErrorMessage from "@/components/ErrorMessage";
import { useEffect } from "react";

type RootErrorPage = {
  error: Error;
  reset: () => void;
};

export default function RootErrorPage({ error }: RootErrorPage) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <ErrorMessage
      pageTitle="Internal server erro"
      contentTitle="501"
      content="Ocorreu um erro do qual nossa aplicação não conseguiu ser recuperar. Tente novamente mais tarde."
    />
  );
}
