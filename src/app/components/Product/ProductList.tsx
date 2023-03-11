import { dummyProductList } from "@/pages/api/dummyProductList";
import { useState } from "react";
import Pagination from "../Pagination/Pagination";
import GradientText from "../Typography/GradientText";
import { Product } from "./interfaces";
import ProductItem from "./Product";

type Props = {};

const ProductList = (props: Props) => {
  const [list, setList] = useState<Product[]>(dummyProductList);
  const limit = 3;
  const [page, setPage] = useState(1);
  const pageNumber = Math.ceil(20 / limit);

  const handleChangePage = (page: number) => {
    setPage(page);
  };

  // useEffect(() => {
  //   setList(
  //     // Array.from(new Array(Math.floor(Math.random() * 10 + 2)).fill("AAAAAAA"))
  //     []
  //   );
  // }, [page]);

  return (
    <div className="flex-col">
      <GradientText>Product List</GradientText>
      <div className="cards w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-1 m-auto min-h-[400px]">
        {list.map((item, index) => (
          <ProductItem key={`product-${index}`} product={item} />
        ))}
      </div>
      <Pagination pageNumber={pageNumber} setPage={handleChangePage} />
    </div>
  );
};

export default ProductList;
