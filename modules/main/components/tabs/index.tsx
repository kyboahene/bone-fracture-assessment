"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import ImagePreview from "../image-preview";
import ReactPaginate from "react-paginate";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  filterData: {
    id: number;
    name: string;
  }[];
  setFilterData: (data: any) => void;
};

const BoneFractureTabs = ({ filterData, setFilterData }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(1);

  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("");

  const mockArray = Array.from({ length: 66 }, (_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`,
  }));
  const pageCount = Math.ceil(mockArray.length / 54);

  const [types] = useState({
    "All groups": [],
    Train: [],
    Value: [],
    Test: [],
  });

  function openModal(image: string, fileName: string) {
    setIsOpen(true);
    setSelectedImage(image);
    setSelectedFileName(fileName);
  }

  function handlePageClick(e: any) {
    setPage(e.selected);
  }

  function handlePageDataFilter() {
    const temp = mockArray.filter(
      (item, index) => index >= page * 54 && index < (page + 1) * 54
    );
    setFilterData(temp);
  }

  useEffect(() => {
    handlePageDataFilter();
  }, [page]);

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
            <Tab.Panel key={idx} className={classNames("flex flex-col gap-4")}>
              <div className="grid grid-cols-9 overflow-auto h-[700px] gap-4 scrollable-div">
                {filterData.map((i, index) => (
                  <div key={index} className="h-[200px]">
                    <div
                      className="relative h-[180px] cursor-pointer"
                      onClick={() =>
                        openModal("/fracture.svg", `Finger ${index + 1}`)
                      }
                    >
                      <Image
                        src="/fracture.svg"
                        className="absolute object-cover"
                        alt="fracture"
                        fill
                      />
                    </div>

                    <span>Finger {index}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center items-center py-4">
                <ReactPaginate
                  breakLabel="..."
                  nextLabel={
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </>
                  }
                  containerClassName={"pagination"}
                  pageClassName={"page-item"}
                  activeClassName={"active"}
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={pageCount}
                  previousLabel={
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 19.5 8.25 12l7.5-7.5"
                        />
                      </svg>
                    </>
                  }
                  renderOnZeroPageCount={null}
                />
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>

      <ImagePreview
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        fileName={selectedFileName}
        image={selectedImage}
      />
    </div>
  );
};

export default BoneFractureTabs;
