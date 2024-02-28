"use client";

import React from "react";
import Image from "next/image";
import { Record } from "@/lib/types";
import PolygonOverlay from "../polygon-overlay";
import PolygonOnImage from "../polygon-overlay/try";

type Props = {
  i: Record;
  setIsOpen: (value: boolean) => void;
  setSelectedImage: (value: React.ReactNode) => void;
  setFileName: (value: string) => void;
};

const TabPanelContent = ({
  i,
  setIsOpen,
  setSelectedImage,
  setFileName,
}: Props) => {
  function openModal(image: React.ReactNode, fileName: string) {
    setIsOpen(true);
    setSelectedImage(image);
    setFileName(fileName);
  }

  return (
    <div className="h-[200px]">
      <div
        className="relative h-[170px] border cursor-pointer"
        onClick={() =>
          openModal(
            <PolygonOverlay polygonData={i.label} imageUrl={i.image} />,
            i.name
          )
        }
      >
        {/* <Image
          src={i.image}
          className="absolute object-cover z-10"
          alt="fracture"
          fill
        /> */}
        <PolygonOverlay polygonData={i.label} imageUrl={i.image} />
        {/* <PolygonOnImage
          imageUrl={i.image}
          polygons={[
            {
              classIndex: 0,
              vertices: i.label
                .split(" ")
                .map((coord) => Math.round(parseFloat(coord) * 1000)),
            },
          ]}
        /> */}
      </div>

      <p className="truncate">{i.name}</p>
    </div>
  );
};

export default TabPanelContent;
