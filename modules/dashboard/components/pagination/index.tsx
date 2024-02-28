/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import ReactPaginate from "react-paginate";
import React, { useEffect, useState } from "react";

import { Record } from "@/lib/types";
import { useAppData } from "@/lib/context";

import ChevronLeft from "@/assets/icons/chevron-left";
import ChevronRight from "@/assets/icons/chevron-right";

type Props = {
  data: Record[];
};

const Paginate = ({ data }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(54);

  const {
    polygonRange,
    setCurrentImages,
    setActiveTotalCount,
    setCurrentImagesPerPage,
  } = useAppData();

  let pageCount = Math.ceil(data.length / perPage);

  useEffect(() => {
    if (data) {
      setActiveTotalCount(data.length);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      let temp = data;

      if (polygonRange > 0) {
        temp = temp.filter(
          (i) =>
            i.numberOfPolygons === polygonRange ||
            (polygonRange === 4 && i.numberOfPolygons > 4)
        );
        pageCount = Math.ceil(temp.length / perPage);

        setActiveTotalCount(temp.length);
        setPerPage(temp.length);
      }

      let slicedData = temp.slice(
        currentPage * perPage,
        (currentPage + 1) * perPage
      );

      setCurrentImages(slicedData);
      setCurrentImagesPerPage(slicedData.length);
    }
  }, [currentPage, data, polygonRange]);

  function handlePageClick(e: any) {
    setCurrentPage(e.selected);
  }
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={<ChevronRight />}
      containerClassName={"pagination"}
      pageClassName={"page-item"}
      activeClassName={"active"}
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel={<ChevronLeft />}
      renderOnZeroPageCount={null}
    />
  );
};

export default Paginate;
