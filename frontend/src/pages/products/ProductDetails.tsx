import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import ProductInformation from "./components/ProductInformation";
import ProductVariants from "./components/ProductVariants";
const ProductDetails: React.FC = () => {
  return (
    <div>
      <ProductInformation />
    </div>
  );
};

export default ProductDetails;
