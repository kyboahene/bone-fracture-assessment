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

  const {
    setCurrentImages,
    setActiveTotalCount,
    setCurrentImagesPerPage,
  } = useAppData();

  const PER_PAGE = 54;
  const pageCount = Math.ceil(data.length / PER_PAGE);

  useEffect(() => {
    if (data) {
      setActiveTotalCount(data.length);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      const temp = data.slice(
        currentPage * PER_PAGE,
        (currentPage + 1) * PER_PAGE
      );
      setCurrentImages(temp);
      setCurrentImagesPerPage(temp.length);
    }
  }, [currentPage, data]);

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
