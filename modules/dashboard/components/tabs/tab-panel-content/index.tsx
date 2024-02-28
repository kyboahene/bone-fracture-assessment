"use client";

import React from "react";
import Image from "next/image";
import { Record } from "@/lib/types";

type Props = {
  i: Record;
  setIsOpen: (value: boolean) => void;
  setSelectedImage: (value: Record) => void;
};

const TabPanelContent = ({ i, setIsOpen, setSelectedImage }: Props) => {
  function openModal(image: Record) {
    setIsOpen(true);
    setSelectedImage(image);
  }

  return (
    <div className="h-[200px]">
      <div
        className="relative h-[170px] cursor-pointer"
        onClick={() => openModal(i)}
      >
        <Image
          src={i.image}
          className="absolute object-cover"
          alt="fracture"
          fill
        />
      </div>

      <p className="truncate">{i.name}</p>
    </div>
  );
};

export default TabPanelContent;
