import React from "react";
import DropdownListProduct from "../../components/ui/DropdownListProduct";
import { IoCloudUploadOutline, IoCloudDownloadOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import ListProduct from "../products/components/ListProduct";
import ProductTable from "../products/components/ProductTable";
const ListProductPage: React.FC = () => {
  return (
    <div className="bg-[rgba(240,241,241,1)] space-y-2">
      <div>
        <div>
          <p className="text-left m-px mt-2">
            <h3 className="text-left m-px">Danh sách sản phẩm</h3>
            Quản lý thông tin sản phẩm, hàng hóa kinh doanh tại cửa hàng
          </p>
        </div>
        <div className="flex justify-start flex-wrap justify-between space-x-4 gap-2 mr-4 items-center">
          <div className="flex justify-start space-x-4 mr-4 items-center">
            <p className="text-left m-px mt-2 cursor-pointer hover:underline">
              <IoCloudUploadOutline className="align-middle" /> Nhập file
            </p>
            <p className="text-left m-px mt-2 cursor-pointer  hover:underline">
              <IoCloudDownloadOutline className="align-middle" /> Xuất file
            </p>
            <div className="w-px h-5 bg-gray-300 mt-2" />
            <p className="text-left m-px mt-2 cursor-pointer  hover:underline">
              <IoCloudDownloadOutline className="align-middle" /> Loại sản phẩm
            </p>
            <p className="text-left m-px mt-2 cursor-pointer  hover:underline">
              <div className="relative inline-block">
                <span className="absolute inset-0 bg-blue-600 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">
                  {
                    <DropdownListProduct
                      label={
                        <span className="flex items-center">
                          Loại sản phẩm{" "}
                          <FaCaretDown className="ml-1 text-slate-600" />
                        </span>
                      }
                      items={[
                        {
                          label: "Tất cả",
                          onClick: () => console.log("Tất cả"),
                        },
                        {
                          label: "Điện thoại",
                          onClick: () => console.log("Điện thoại"),
                        },
                        {
                          label: "Máy tính",
                          onClick: () => console.log("Máy tính"),
                        },
                      ]}
                    />
                  }
                </span>
              </div>
            </p>
            <div className="flex">
              {/* Nút chính */}
              <button className="px-3 py-1 bg-blue-500 text-white rounded-l-sm hover:bg-blue-600 border border-blue-500">
                <IoIosAdd className="align-middle w-7 h-7" />
                Thêm sản phẩm
              </button>

              {/* Nút mũi tên */}
              <button className="px-3 py-1 bg-blue-500 text-white rounded-r-sm  hover:bg-blue-600 border border-blue-500 border-l-0">
                <DropdownListProduct
                  label=""
                  items={[
                    { label: "Tất cả", onClick: () => console.log("Tất cả") },
                    {
                      label: "Sản phẩm thường",
                      onClick: () => <Link to="/products/add-product" />,
                    },
                    {
                      label: "Thêm sản phẩm cho combo",
                      onClick: () => <Link to="/products/add-combo" />,
                    },
                    {
                      label: "Thêm sản phẩm có đơn vị quy đổi",
                      onClick: () => <Link to="/products/add-conversion" />,
                    },
                    {
                      label: "Thêm sản phẩm Serial/IMEI",
                      onClick: () => <Link to="/products/add-serial" />,
                    },
                    {
                      label: "Thêm sản phẩm quản lý theo lô - hạn sử dụng",
                      onClick: () => <Link to="/products/add-batch" />,
                    },
                  ]}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white marker:rounded-ms mt-4">
        <ListProduct />
        <ProductTable />
      </div>
    </div>
  );
};
export default ListProductPage;
