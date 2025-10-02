import React from "react";
import { useState } from "react";
import { Card, Form, Input, Button, message, Select } from "antd";
import { useNavigate } from "react-router-dom";
import {
  PlusOutlined,
  FileDoneOutlined,
  EyeOutlined,
  DollarCircleOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Switch } from "antd";
import { FaAnglesDown, FaImage, FaBoxArchive } from "react-icons/fa6";
import { MdOutlineSettingsSuggest, MdOutlineAdUnits } from "react-icons/md";
import { LuImagePlus } from "react-icons/lu";
import { TbH5 } from "react-icons/tb";

const CreateProduct: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [enabled, setEnabled] = useState(false);
  const [enabledUnit, setEnabledUnit] = useState(false);

  const onFinish = (values: any) => {
    //
    console.log("Product created:", values);
    message.success("Sản phẩm đã được tạo thành công!");
    navigate("/products"); // Redirect to products list after creation
  };

  function toggleDescription(): void {
    const box = document.getElementById("descriptionBox") as HTMLElement | null;
    if (box) {
      box.classList.toggle("hidden");
    }
  }

  function togglePricePolicy(): void {
    const section = document.getElementById(
      "pricePolicySection"
    ) as HTMLElement | null;
    if (section) {
      section.classList.toggle("hidden");
    }
  }

  function addPricePolicy(): void {
    // Add new price policy row logic here
    console.log("Adding new price policy");
  }

  const toggleConversion = (check: boolean) => {
    const section = document.getElementById("conversionSection");
    if (!section) return;
    if (check) {
      section.classList.remove("hidden");
    } else {
      section.classList.add("hidden");
    }
  };
  function addAttribute(): void {
    // Add new attribute logic here
    console.log("Adding new attribute");
  }

  const toggleAttributes = (checked: boolean) => {
    const section = document.getElementById("attributesSection");
    if (!section) return;

    if (checked) {
      section.classList.remove("hidden");
    } else {
      section.classList.add("hidden");
    }
  };
  function addConversion(): void {
    // Add new conversion logic here
    console.log("Adding new conversion");
  }

  return (
    <div className="space-y-2 shadow p-4 lg:p-6 border-b mb-4 rounded-md">
      <div className="bg-white shadow p-4 border-b mb-4 rounded max-w-10xl mx-auto ">
        <h3 className="col-span-3 text-left m-px">Thêm sản phẩm mới </h3>
        <p className="col-span-3 text-left m-px">
          Vui lòng điền thông tin sản phẩm để thêm vào hệ thống
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6 ">
        <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
          <FileDoneOutlined />
          Thông Tin Cơ Bản
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="md:col-span-2">
            <label className=" text-left block text-sm font-medium text-gray-700 mb-2">
              Tên Sản Phẩm *
            </label>
            <input
              type="text"
              className="w-full py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Nhập tên sản phẩm"
            />
          </div>

          <div>
            <label className="text-left block text-sm font-medium text-gray-700 mb-2">
              Loại Sản Phẩm
            </label>
            <select className="w-full py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
              <option>Sản phẩm thường</option>
              <option>Sản phẩm combo</option>
              <option>Sản phẩm dịch vụ</option>
              <option>Sản phẩm số</option>
            </select>
          </div>

          <div>
            <label className="text-left block text-sm font-medium text-gray-700 mb-2">
              Mã SKU *
            </label>
            <input
              type="text"
              className="w-full py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="SKU001"
            />
          </div>

          <div>
            <label className="text-left block text-sm font-medium text-gray-700 mb-2">
              Barcode
            </label>
            <input
              type="text"
              className="w-full py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="123456789"
            />
          </div>

          <div>
            <label className="text-left block text-sm font-medium text-gray-700 mb-2">
              Khối Lượng
            </label>
            <div className="flex">
              <input
                type="number"
                className="flex-1 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="500"
              />
              <select className=" py-2 border-l-0 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                <option>g</option>
                <option>kg</option>
                <option>ml</option>
                <option>l</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-left block text-sm font-medium text-gray-700 mb-2">
              Đơn Vị Tính
            </label>
            <select className="w-full py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
              <option>Cái</option>
              <option>Lon</option>
              <option>Chai</option>
              <option>Hộp</option>
              <option>Túi</option>
              <option>Gói</option>
            </select>
          </div>

          <div>
            <label className="text-left block text-sm font-medium text-gray-700 mb-2">
              Thương Hiệu
            </label>
            <select className="w-full py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
              <option>Chọn thương hiệu</option>
              <option>Coca Cola</option>
              <option>Pepsi</option>
              <option>Unilever</option>
            </select>
          </div>

          <div>
            <label className="text-left block text-sm font-medium text-gray-700 mb-2">
              Tags
            </label>
            <input
              type="text"
              className="w-full py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Nhập tags, cách nhau bởi dấu phẩy"
            />
          </div>
        </div>

        <div className="mt-4">
          <button
            type="button"
            onClick={toggleDescription}
            className="text-primary hover:text-blue-700 font-medium bg-transparent border-none bg-none flex items-center"
          >
            <EyeOutlined className="mr-1" />
            Thêm mô tả sản phẩm
          </button>
          <div id="descriptionBox" className="hidden mt-3">
            <textarea
              className="w-full py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              rows={4}
              placeholder="Nhập mô tả chi tiết sản phẩm..."
            ></textarea>
          </div>
        </div>
      </div>
      {/* chính sách giá */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
        <h4 className="text-left">
          <DollarCircleOutlined className="text-yellow-500 " /> Chính sách giá
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4">
          <div>
            <label className="block text-left text-sm font-medium text-gray-700 mb-2">
              Giá Bán Lẻ *
            </label>
            <input
              type="number"
              className="w-full py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="0"
            />
          </div>
          <div>
            <label className="block text-left text-sm font-medium text-gray-700 mb-2">
              Giá Nhập *
            </label>
            <input
              type="number"
              className="w-full py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="0"
            />
          </div>

          <label className="block text-left text-sm font-medium text-gray-700 mb-2">
            <button
              onClick={togglePricePolicy}
              className="text-primary hover:text-blue-700 font-medium bg-transparent border-none bg-none flex items-center"
            >
              <FaAnglesDown className="pr-2 size-4 align-middle mb-1" />
              hiển thị thêm chính sách giá
            </button>
          </label>
          <div
            id="pricePolicySection"
            className="hidden space-y-4 col-span-2  bg-slate-100 p-4 rounded-lg border"
          >
            <div className="border border-gray-200 rounded-lg">
              <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                    Tên Chính Sách
                  </label>
                  <input
                    type="text"
                    className="w-full py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Giá VIP"
                  />
                </div>
                <div>
                  <label className="block text-left  text-sm font-medium text-gray-700 mb-2">
                    Giá Áp Dụng
                  </label>
                  <input
                    type="number"
                    className="w-full py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="40000"
                  />
                </div>
                <div>
                  <label className="block text-sm text-left  font-medium text-gray-700 mb-2">
                    Điều Kiện
                  </label>
                  <input
                    type="text"
                    className="w-full py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Mua từ 10 sản phẩm"
                  />
                </div>
              </div>
            </div>

            <button
              type="button"
              className="bg-primary text-black px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition-colors flex items-center"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                />
              </svg>
              Thêm Chính Sách Giá
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white border-gray-200 shadow-sm border rounded-lg p-4">
        <h4 className="text-gray-900 text-left">
          <FaImage className="align-middle mb-1 text-purple-800 mr-1" />
          Hình ảnh sản phẩm
        </h4>
        <div className="border-2 border-dashed  text-gray-300  rounded-lg p-10 text-center transition-colors hover:border-primary-600">
          <LuImagePlus className="size-20 text-gray-300 border-gray-200" />
          <div className="mt-4">
            <label className="cursor-pointer">
              <input
                type="file"
                className="sr-only"
                multiple
                accept="image/*"
              />
              <span className="mt-2 text-zinc-950">
                Tải lên hình ảnh sản phẩm
              </span>
            </label>
            <p className=""> PNG, JPG, GITF 50MB tối đa mỗi file </p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
        <h4 className="text-left">
          <FaBoxArchive className="text-pink-500 align-middle  size-4" /> Quản
          lý kho hàng
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 md:gap-6 mb-4">
          <div>
            <label className="block text-left text-sm font-medium text-gray-700 mb-2">
              Tông kho ban đầu *
            </label>
            <input
              type="number"
              className="w-full py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="0"
            />
          </div>
          <div>
            <label className="block text-left text-sm font-medium text-gray-700 mb-2">
              Giá vốn*
            </label>
            <input
              type="number"
              className="w-full py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="0"
            />
          </div>

          <div>
            <label className="text-left block text-sm font-medium text-gray-700 mb-2">
              Kho lưu trữ
            </label>
            <select className="w-full py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
              <option>Hà Nội</option>
              <option>Hồ Chí Minh</option>
              <option>Hải Phòng</option>
            </select>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
        <div className="flex items-center justify-between space-x-4">
          <h4 className="">
            <MdOutlineSettingsSuggest className="align-middle text-blue-800 size-6 mb-2" />
            Thuộc tính sản phẩm
          </h4>
          <label className="flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only" />
            <Switch
              checked={enabled}
              onChange={(checked) => {
                setEnabled(checked); // cập nhật state
                toggleAttributes(checked); // gọi logic toggle
              }}
            />
            <span className="ml-3 text-gray-700 font-medium">
              Bật thuộc tính
            </span>
          </label>
        </div>
        <div
          id="attributesSection"
          className="hidden space-y-4 col-span-2  bg-slate-50 p-4 rounded-lg border"
        >
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                  Tên Thuộc Tính
                </label>
                <input
                  type="text"
                  value="Size"
                  className="w-full py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm text-left font-medium text-gray-700 mb-2">
                  Giá Trị (mỗi dòng một giá trị)
                </label>
                <textarea
                  className="w-full py-2 border border-gray-300 rounded-lg h-24 focus:ring-2 focus:ring-primary focus:border-transparent"
                  // rows="3"
                  placeholder="S&#10;M&#10;L"
                ></textarea>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="text-primary hover:text-white font-medium flex items-center py-2 px-2 rounded-lg ml-4 hover:bg-blue-700 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              />
            </svg>
            Thêm thuộc tính
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
        <div className="flex items-center justify-between space-x-4">
          <h4 className="">
            <MdOutlineAdUnits className="align-middle text-lime-700 size-6 mb-2" />
            Đơn vị sản phẩm
          </h4>
          <label className="flex items-center cursor-pointer">
            <Switch
              checked={enabledUnit}
              onChange={(check) => {
                setEnabledUnit(check); // cập nhật state
                toggleConversion(check); // gọi logic toggle
              }}
            />
            <span className="ml-3 text-gray-700 font-medium">
              Bật đơn vị quy đổi
            </span>
          </label>
        </div>
        <div
          id="conversionSection"
          className="hidden space-y-4 bg-slate-200 col-span-2  bg-slate-50 p-4 rounded-lg border"
        >
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                  Đơn Vị Gốc
                </label>
                <input
                  type="text"
                  value="Thùng"
                  className="w-full py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                  Đơn Vị Quy Đổi
                </label>
                <input
                  type="text"
                  value="Chai"
                  className="w-full py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                  Tỷ Lệ Quy Đổi
                </label>
                <input
                  type="number"
                  value="24"
                  className="w-full py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={addConversion}
            className="text-primary hover:text-white font-medium flex items-center py-2 px-2 rounded-lg ml-4 hover:bg-blue-700 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              />
            </svg>
            Thêm quy đổi
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <svg
            className="w-5 h-5 mr-2 text-gray-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
            />
          </svg>
          Cài Đặt Khác
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="flex items-center bg-gray-100 justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <h3 className="font-medium text-gray-900">Trạng Thái</h3>
              <p className="text-sm text-gray-500">Kích hoạt sản phẩm</p>
            </div>
            <label className="flex items-center cursor-pointer">
              <Switch />
            </label>
          </div>

          <div className=" bg-gray-100  border border-gray-200 rounded-lg">
            <div className="flex gap-10">
              <label className="text-sm font-medium text-gray-700 my-2 mx-2">
                Thuế (%)
              </label>
              <Switch className=" items-center cursor-pointer ml-[110px] my-2 mx-2 " />
            </div>
            <select className="w-full px-2 py-2 bg-gray-100  border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
              <option value="0">0% - Không thuế</option>
              <option value="5">5% - Thuế giảm</option>
              <option value="10">10% - Thuế tiêu chuẩn</option>
              <option value="15">15% - Thuế cao</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        <button
          type="button"
          className="flex-1 bg-gray-200 text-black px-6 py-3 rounded-lg hover:bg-red-600 transition-colors font-medium"
        >
          Hủy
        </button>
        <button
          type="button"
          className="flex-1 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
        >
          Lưu Nháp
        </button>
        <button
          type="submit"
          className="flex-1 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Thêm Sản Phẩm
        </button>
      </div>
    </div>
  );
};
export default CreateProduct;
