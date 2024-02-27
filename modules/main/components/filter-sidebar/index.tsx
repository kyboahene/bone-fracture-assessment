"use client";

import { useState } from "react";
import ClassFilter from "../class-filter/class-filter";
import Image from "next/image";

const FilterSidebar = () => {
  const [selectedClassFilter, setSelectedClassFilter] = useState<string[]>([]);

  const classFilters = [
    "Elbow positive",
    "Fingers positive",
    "Humerus",
    "Forearm fracture",
    "Humerus fracture",
    "Shoulder fracture",
    "Wrist positive",
  ];

  return (
    <div className="border rounded-md flex justify-center p-4 h-full">
      <div className="flex flex-col gap-8">
        <div className="relative h-15">
          <Image src="/Logo.svg" alt="logo" className="absolute" fill />
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-bold">Classes filter</p>

          <div className="flex items-center gap-4 text-[12px]">
            <p className="text-blue-500">Select all</p>
            <p className="text-gray-400">Deselect all</p>
          </div>
          <ClassFilter
            items={classFilters}
            item={selectedClassFilter}
            setItem={setSelectedClassFilter}
          />

          <div>
            <p className="font-bold">Poligon range</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
