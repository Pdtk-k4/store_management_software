import React from "react";

const ListProduct: React.FC = () => {
  return (
    <div>
      <div className="">
        <h3>Tất cả sản phẩm</h3>
        <hr />
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 p-4">
            {/* Cột 1 */}
            <div className="md:col-span-1">
              <div className="relative hidden sm:block">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-search text-gray-400"></i>
                </div>
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  className="pl-10 pr-4 py-2 w-64 lg:w-80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Cột 4 */}
            <div className="md:col-span-4 bg-green-200">
              <p>Giữa</p>
            </div>

            {/* Cột 1 */}
            <div className="md:col-span-1 bg-blue-200">
              <p>Phải</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListProduct;
