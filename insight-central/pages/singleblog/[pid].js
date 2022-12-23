import React from "react";
import { useRouter } from "next/router";
import Singlepage from "../../Components/Singlepage/_singlepage";

export default function Dynamic_route() {
  const router = useRouter();
  // Calling useRouter() hook
  const { pid } = router.query;

  return (
    <>
      <Singlepage id={pid} />
    </>
  );
}
