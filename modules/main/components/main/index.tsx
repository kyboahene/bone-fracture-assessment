"use client";

import { useState } from "react";
import BoneFractureTabs from "../tabs";

interface Data {
  id: number;
  name: string;
}

const Main = () => {
  const [filterData, setFilterData] = useState<Data[]>([]);

  return (
    <section className="py-4">
      <div className="mx-auto w-full max-w-screen-xl px-2.5 flex flex-col gap-12">
        <div className="flex justify-between">
          <h1 className="font-bold text-3xl">Bone-fraction-detection</h1>

          <p>
            <span className="font-bold">{filterData.length}</span> of{" "}
            <span className="font-bold">66</span> images
          </p>
        </div>

        <BoneFractureTabs
          filterData={filterData}
          setFilterData={setFilterData}
        />
      </div>
    </section>
  );
};

export default Main;
