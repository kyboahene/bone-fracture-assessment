"use client";

import { useState } from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import ImagePreview from "../image-preview";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const BoneFractureTabs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const [types] = useState({
    "All groups": [],
    Train: [],
    Value: [],
    Test: [],
  });

  function openModal(image: string) {
    console.log("running...");

    setIsOpen(true);
    setSelectedImage(image);
  }

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
        <Tab.Panels className="mt-2">
          {Object.values(types).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames("grid grid-cols-9 gap-4")}
            >
              {[1, 2, 3, 44, 5, 6, 7, 7, 8, 9].map((i, index) => (
                <div key={index}>
                  <div
                    className="relative h-32 cursor-pointer"
                    onClick={() => openModal("/fracture.svg")}
                  >
                    <Image
                      src="/fracture.svg"
                      className="absolute object-cover"
                      alt="fracture"
                      fill
                    />
                  </div>

                  <p>Finger {index}</p>
                </div>
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>

      <ImagePreview
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        image={selectedImage}
      />
    </div>
  );
};

export default BoneFractureTabs;
