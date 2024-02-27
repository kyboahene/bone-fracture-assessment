"use client";
import Image from "next/image";

import ClassFilter from "../class-filter/class-filter";
import { useFilters } from "@/lib/context/filter-context";

const FilterSidebar = () => {
  const { selectedClassFilter, setSelectedClassFilter } = useFilters();

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
        <div className="relative h-20">
          <Image
            src="/Logo.svg"
            alt="logo"
            className="absolute object-contain"
            fill
          />
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

          <div className="flex flex-col gap-4">
            <p className="font-bold">Poligon range</p>
            <div>
              <div className="flex justify-between text-[12px]">
                <div className="flex items-center gap-1">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </div>
                  <span className="font-bold">Clear Filters</span>
                </div>

                <p className="text-gray-400">Need help?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
