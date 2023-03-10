import useDemoQuery from "@/app/hooks/useDemoQuery";
import BrandList from "../components/Brand/BrandList";
import Category from "../components/Category/Category";
import ProductList from "../components/Product/ProductList";
type Props = {};

const Shop = (props: Props) => {
  // const { data, isLoading } = useDemoQuery();

  return (
    <>
      <div className="dark:bg-bg-dark md:p-10 bg-white space-y-6">
        <div className="categories">
          <Category />
        </div>
        <div className="cards lg:w-2/3 w-full m-auto">
          <BrandList />
          <ProductList />
        </div>
      </div>
    </>
  );
};

export default Shop;
