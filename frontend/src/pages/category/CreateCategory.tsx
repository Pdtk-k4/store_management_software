import React from "react";
import { Switch } from "antd";
import {
  PlusOutlined,
  FileDoneOutlined,
  EyeOutlined,
  DollarCircleOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { FaAnglesDown, FaImage, FaBoxArchive } from "react-icons/fa6";
import TableProduct from "../../components/ui/TableProduct";
import { MdOutlineSettingsSuggest, MdOutlineAdUnits } from "react-icons/md";
const CreateCategory: React.FC = () => {
  function toggleDescription(): void {
    const box = document.getElementById("descriptionBox") as HTMLElement | null;
    if (box) {
      box.classList.toggle("hidden");
    }
  }
  return (
    <div>
      <div className="mb-6">
        <h3 className="col-span-3 text-left m-px">Thêm danh mục mới </h3>
        <p className="col-span-3 text-left m-px mt-2">
          Vui lòng điền thông tin danh mục để thêm vào hệ thống
        </p>
      </div>

      <div className="bg-white shadow p-4 border-b mb-4 rounded max-w-10xl mx-auto ">
        <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
          Thông Tin Cơ Bản
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div className=" col-start-1 col-end-4 text-left">
            <label className="text-left block text-sm font-medium text-gray-700 ">
              Tên danh mục *
            </label>
            <input
              type="text"
              className="w-full py-2 border border-gray-300 rounded-lg mt-2 focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Nhập tên danh mục"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-2">
          <div>
            <label className="text-left block text-sm font-medium text-gray-700">
              Mã danh mục *
            </label>
            <input
              type="text"
              className="w-full py-2 border mt-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Nhập mã danh mục"
            />
          </div>
          <div>
            <label className="text-left block text-sm font-medium text-gray-700 ">
              Thương Hiệu
            </label>
            <select className="w-full py-2 border mt-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
              <option>Chọn thương hiệu</option>
              <option>Coca Cola</option>
              <option>Pepsi</option>
              <option>Unilever</option>
            </select>
          </div>
        </div>
        <div className="mt-4 text-left">
          <button
            onClick={toggleDescription}
            className="text-slate-800 hover:text-blue-700 font-medium bg-transparent border-none bg-none flex items-center"
          >
            <FaAnglesDown className="" />
            nhập mô tả cho danh mục onClick
          </button>
          <div id="descriptionBox" className="hidden mt-3 ">
            <textarea
              className="w-full py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              rows={4}
              placeholder="Nhập mô tả chi tiết sản phẩm..."
            ></textarea>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-2">
          <div className="">
            <label className="text-left block text-sm font-medium text-gray-700">
              Trạng thái*
            </label>
            <select className="w-full py-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
              <option>Chọn trạng thái</option>
              <option>Hoạt động</option>
              <option>Ngừng hoạt động</option>
            </select>
          </div>
          <div className="">
            <label className="text-left block text-sm font-medium text-gray-700">
              Thứ tự sắp xếp
            </label>
            <input
              type="text"
              className="w-full py-2 border mt-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>
        <hr className="text-gray-700 border-t my-4 mt-6" />
        <p>Thông tin sản phẩm </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-2">
          <div className="col-span-2">
            <TableProduct />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCategory;
