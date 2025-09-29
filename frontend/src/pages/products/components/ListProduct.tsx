import React from "react";
import { useState } from "react";
import TypeProductUi from "../components/ui/TypeProductUi";
import DropdownMultiSelect from "../components/ui/TypeProductUi";
import DateFilterFormUi from "../components/ui/DateFilterFormUi";
import { LuFilter } from "react-icons/lu";
import { DatePicker, Button, Dropdown } from "antd";
import ProductFilter from "../components/ui/ProductFilter";
const productTypes = [
  { label: "Thức ăn chó", value: "food" },
  { label: "Balo", value: "balo" },
  { label: "Đồ chơi cho chó", value: "toy" },
  { label: "Dây dắt, vòng cổ, chuồng", value: "leash" },
];
const productBrands = [
  { label: "MrViet", value: "food" },
  { label: "RoiAlCnin", value: "balo" },
  { label: "DogToy", value: "toy" },
  { label: "CatsRang", value: "leash" },
];

const ListProduct: React.FC = () => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div>
      <div className="">
        <h3>Tất cả sản phẩm</h3>
        <hr />
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-10 gap-4 p-4">
            {/* Cột 1 */}
            <div className=" md:col-span-4">
              <div className="relative sm:block">
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
            <div className="md:col-span-4 flex ">
              <DropdownMultiSelect
                items={productTypes}
                title="Loại sản phẩm"
                onChange={(values) => console.log("Loại SP:", values)}
              />

              <DropdownMultiSelect
                items={productBrands}
                title="Thương hiệu sản phẩm"
                onChange={(values) => console.log("Loại SP:", values)}
              />
              <DateFilterFormUi />
              <Button className="">Bộ lọc khác</Button>
            </div>

            {/* Cột 1 */}
            <div className="md:col-span-2 ">
              <Button onClick={() => setShowFilter(true)} className="">
                <LuFilter />
                Lưu bộ lọc
              </Button>
              {showFilter && (
                <ProductFilter
                  open={showFilter}
                  onClose={() => setShowFilter(false)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListProduct;
