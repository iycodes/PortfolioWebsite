import { sleep } from "@/app/helpers/helperFunctions";
import React from "react";

export const Something = async () => {
  await sleep(3000);
  return <div>Something</div>;
};
