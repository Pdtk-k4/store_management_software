import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
const ProductDetails: React.FC = () => {
  return (
    <div>
      {/* Header productDetails */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-800 focus:outline-none border-none bg-none bg-transparent">
                <FiChevronLeft size={24} />
              </button>
              <h4>Chi tiết sản phẩm </h4>
            </div>
            <div className="flex items-center space-x-3">
              <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-500 border-none transition-colors duration-200">
                Chỉnh sửa
              </button>
              <button className="text-gray-600 hover:text-gray-800 focus:outline-none border-none bg-none bg-transparent">
                <BsThreeDotsVertical size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
