import React, { Suspense } from "react";
import { LoadingScreen } from "./components/LoadingScreen/LoadingScreen";
import { sleep } from "./helpers/helperFunctions";
import Home from "./Home";
import { Something } from "./components/something/something";

// const Home = React.lazy(() => import("./Home"));
//
export default async function Page() {
  await sleep(3000);
  return (
    <div>
      {/* <Suspense fallback={<LoadingScreen />}> */}
      <div>some text</div>

      {/* </Suspense> */}
    </div>
  );
}
