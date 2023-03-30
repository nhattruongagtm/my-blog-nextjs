import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import Pagination from "../Pagination/Pagination";
import GradientText from "../Typography/GradientText";
import { Product } from "./interfaces";
import ProductItem from "./Product";

interface ShoppeResp {
  landingPageBaseInfo: {
    name: string;
    headPortrait: string;
    description: string;
    region: string;
    affiliateId: string;
    shopLink: string;
    background: string;
    groupList: {
      groupId: string;
      groupName: string;
      groupType: string;
    }[];
    topFiveExternalLinkImages: any[];
  };
  landingPageLinkList: {
    totalCount: number;
    linkList: Product[];
  };
}

type ProductListProps = {};

const PRODUCT_LIST = gql`
  query getBaseInfoAndLinks(
    $urlSuffix: String!
    $pageSize: String
    $pageNum: String
    $groupId: String
    $linkNameKeyword: String
  ) {
    landingPageBaseInfo(urlSuffix: $urlSuffix) {
      name
      headPortrait
      description
      region
      affiliateId
      shopLink
      background
      groupList {
        groupId
        groupName
        groupType
      }
      topFiveExternalLinkImages
    }
    landingPageLinkList(
      urlSuffix: $urlSuffix
      pageSize: $pageSize
      pageNum: $pageNum
      groupId: $groupId
      linkNameKeyword: $linkNameKeyword
    ) {
      totalCount
      linkList {
        linkId
        link
        linkName
        image
        linkType
        groupIds
      }
    }
  }
`;

const ProductList = (props: ProductListProps) => {
  // const [list, setList] = useState<Product[]>([]);
  const limit = 3;
  const [page, setPage] = useState(1);
  const pageNumber = Math.ceil(20 / limit);

  const handleChangePage = (page: number) => {
    setPage(page);
  };

  const { data, loading } = useQuery<ShoppeResp>(PRODUCT_LIST, {
    variables: {
      pageNum: "1",
      pageSize: "40",
      urlSuffix: "truong.agtm75_",
    },
  });

  const list = data?.landingPageLinkList.linkList;

  return (
    <div className="flex-col">
      <GradientText>Product List</GradientText>
      <div className="cards w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-1 m-auto min-h-[400px]">
        <>
          {loading ? (
            <>Loading...</>
          ) : (
            <>
              {list &&
                list.map((item, index) => (
                  <ProductItem key={`product-${index}`} product={item} />
                ))}
            </>
          )}
        </>
      </div>
      <Pagination pageNumber={pageNumber} setPage={handleChangePage} />
    </div>
  );
};

export default ProductList;
