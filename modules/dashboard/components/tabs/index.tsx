"use client";

import { useState } from "react";
import { Tab } from "@headlessui/react";

import Paginate from "../pagination";
import ImagePreview from "../image-popup";
import TabPanelContent from "./tab-panel-content";

// lib
import { useAppData } from "@/lib/context";
import { FracturedImages, Record } from "@/lib/types";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  isLoading: boolean;
  data: FracturedImages | undefined;
};

const BoneFractureTabs = ({ data, isLoading }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Record | null>(null);

  const { currentImages } = useAppData();

  return (
    <div className="w-full">
      {!isLoading && data ? (
        <Tab.Group>
          <Tab.List className="flex space-x-1 border-b">
            {data &&
              Object.keys(data).map((type) => (
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
            {Object.values(data).map((type, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames("flex flex-col gap-4")}
              >
                <div className="grid grid-cols-6 overflow-auto h-[380px] gap-4 scrollable-div">
                  {currentImages &&
                    currentImages.map((i, index) => (
                      <TabPanelContent
                        key={index}
                        i={i}
                        setIsOpen={setIsOpen}
                        setSelectedImage={setSelectedImage}
                      />
                    ))}
                </div>
                <div className="flex justify-center items-center py-4">
                  <Paginate data={type} />
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      ) : (
        <div className="border">
          <p className="font-bold">Loading...</p>
        </div>
      )}

      <ImagePreview
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        image={selectedImage}
      />
    </div>
  );
};

export default BoneFractureTabs;
