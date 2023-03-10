import LeftArrow from "@/app/assets/icons/LeftArrow";
import RightArrow from "@/app/assets/icons/RightArrow";
import React, { useRef, useState } from "react";
import ReactPaginate from "react-paginate";

type Props = {
  setPage: (page: number) => void;
  pageNumber: number;
};

export type SelectedItem = {
  selected: number;
};

const Pagination = ({ pageNumber, setPage }: Props) => {
  const pagination = useRef<any>();

  return (
    <div className="lg:mb-0 mb-10">
      <ReactPaginate
        className="flex items-center p-1 justify-center mt-2 gap-0.5 text-vsm"
        ref={pagination}
        pageCount={pageNumber}
        pageRangeDisplayed={4}
        marginPagesDisplayed={1}
        onPageChange={({ selected }) => {
          setPage(selected + 1);
        }}
        containerClassName="pagination"
        activeClassName="active bg-blue-light bg-gradient-to-r from-blue-light to-cyan text-white"
        pageLinkClassName="page-link"
        breakLinkClassName="page-link"
        nextLinkClassName="page-link"
        previousLinkClassName="page-link"
        pageClassName="page-item w-5 h-5 rounded-full flex items-center justify-center p-1 hover:bg-gradient-to-r hover:from-blue-light hover:to-cyan cursor-pointer dark:bg-gray-light"
        breakClassName="page-item w-5 h-5 rounded-full flex items-center justify-center p-1 hover:bg-gradient-to-r hover:from-blue-light hover:to-cyan cursor-pointer dark:bg-gray-light"
        nextClassName="page-item w-5 h-5 rounded-full flex items-center justify-center p-1 hover:bg-gradient-to-r hover:from-blue-light hover:to-cyan cursor-pointer dark:bg-gray-light"
        previousClassName="page-item w-5 h-5 rounded-full flex items-center justify-center p-1 hover:bg-gradient-to-r hover:from-blue-light hover:to-cyan cursor-pointer dark:bg-gray-light"
        previousLabel={<LeftArrow />}
        nextLabel={<RightArrow />}
      />
    </div>
  );
};

export default Pagination;
