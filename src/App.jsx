import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import NavBar from "./components/NavBar";
import * as Sentry from "@sentry/react";
const App = () => {
  // * Sentry test element
  // return (
  //   <button
  //     onClick={() => {
  //       throw new Error("This is your first error!");
  //     }}
  //   >
  //     Break the world
  //   </button>
  // );
  return (
    <main className="bg-black">
      <NavBar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  );
};

export default Sentry.withProfiler(App);
