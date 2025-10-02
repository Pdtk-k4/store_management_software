import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
const ProductInformation: React.FC = () => {
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-4">
          <div className="bg-white p-4 rounded-lg shadow-md mb-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop"
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-4 gap-2 mt-4">
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop"
                      alt="Thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=100&h=100&fit=crop"
                      alt="Thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop"
                      alt="Thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop"
                      alt="Thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-semibold mb-2">
                  Cát than hoạt tính
                </h2>
                <p className="text-gray-600 mb-4">
                  Cát than hoạt tính Aboss cao cấp thấm hút tốt cà cải tiến
                </p>
                <div className="flex flex-wap gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    Cát mèo
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    Dồ chơi cho cún
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    Phụ kiện
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    Khay cát
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <p>Mã sản phẩm</p>
                  <p className="font-medium">PVNS240</p>
                </div>
                <div>
                  <p>Mã sản phẩm</p>
                  <p className="font-medium">PVNS240</p>
                </div>
                <div>
                  <p>Mã sản phẩm</p>
                  <p className="font-medium">PVNS240</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductInformation;
