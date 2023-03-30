import Head from "next/head";
import BrandList from "../../app/components/Brand/BrandList";
import Category from "../../app/components/Category/Category";
import ProductList from "../../app/components/Product/ProductList";
type Props = {};

const Shop = (props: Props) => {
  // const { data, isLoading } = useDemoQuery();

  return (
    <>
      <Head>
        <title>My Shop</title>
        <meta name="description" content={'My Shop'} />
        <meta property="og:title" content={'My Shop'} />
      </Head>
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
