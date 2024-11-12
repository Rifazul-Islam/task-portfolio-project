import { Card } from "flowbite-react";
import Navbar from "./Pages/Shared/Navbar/Navber";

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-4">
        {Array.from({ length: 14 }).map((_, ind) => {
          return (
            <Card href="#" className=" mx-auto mt-3">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default App;
