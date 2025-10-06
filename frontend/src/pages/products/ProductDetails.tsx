import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import ProductInformation from "./components/ProductInformation";
import ProductVariants from "./components/ProductVariants";
import VariantsDetails from "./components/VariantsDetails";
const ProductDetails: React.FC = () => {
  return (
    <div>
      <ProductInformation />
      <VariantsDetails />
      <ProductVariants />
    </div>
  );
};

export default ProductDetails;
