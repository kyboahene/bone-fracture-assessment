"use client";

import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const BoneFractureTabs = () => {
  const [types] = useState({
    "All groups": [],
    Train: [],
    Value: [],
    Test: [],
  });

  return (
    <div className="w-full">
      <Tab.Group>
        <Tab.List className="flex space-x-1 border-b">
          {Object.keys(types).map((type) => (
            <Tab
              key={type}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm font-medium leading-5",
                  selected
                    ? "bg-[#FFD75C1A] text-[#FFD75C] border-b border-[#FFD75C]"
                    : ""
                )
              }
            >
              {type}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2"></Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default BoneFractureTabs;
