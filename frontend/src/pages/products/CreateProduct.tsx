import React from "react";
import { Card, Form, Input, Button, message, Select } from "antd";
import { useNavigate } from "react-router-dom";
import {
  PlusOutlined,
  FileDoneOutlined,
  EyeOutlined,
  DollarCircleOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { FaAnglesDown, FaImage, FaBoxArchive } from "react-icons/fa6";
import { MdOutlineSettingsSuggest, MdOutlineAdUnits } from "react-icons/md";
import { LuImagePlus } from "react-icons/lu";

const CreateProduct: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    //
    console.log("Product created:", values);
    message.success("Sản phẩm đã được tạo thành công!");
    navigate("/products"); // Redirect to products list after creation
  };

  return (
    <div className="space-y-6">
      <div className="bg-white shadow p-4 border-b mb-4 rounded max-w-10xl mx-auto ">
        <h2 className="col-span-3 text-left m-px">Thêm sản phẩm mới </h2>
        <p className="col-span-3 text-left m-px">
          Vui lòng điền thông tin sản phẩm để thêm vào hệ thống
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6 ">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <FileDoneOutlined />
          Thông Tin Cơ Bản
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="md:col-span-2">
            <label className=" text-left block text-sm font-medium text-gray-700 mb-2">
              Tên Sản Phẩm *
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Nhập tên sản phẩm"
            />
          </div>

          <div>
            <label className="text-left block text-sm font-medium text-gray-700 mb-2">
              Loại Sản Phẩm
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
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
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="SKU001"
            />
          </div>

          <div>
            <label className="text-left block text-sm font-medium text-gray-700 mb-2">
              Barcode
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
                className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="500"
              />
              <select className="px-3 py-2 border-l-0 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-primary focus:border-transparent">
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
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
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
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
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
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Nhập tags, cách nhau bởi dấu phẩy"
            />
          </div>
        </div>

        <div className="mt-4 flex text-primary-600 hover:text-blue-700 cursor-pointer">
          <EyeOutlined className="" /> Thêm mô tả sản phẩm
          <div id="descriptionBox" className="hidden mt-3">
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              rows={4}
              placeholder="Nhập mô tả chi tiết sản phẩm..."
            ></textarea>
          </div>
        </div>
      </div>
      {/* chính sách giá */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
        <h4 className="text-left">
          <DollarCircleOutlined /> Chính sách giá
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4">
          <div>
            <label className="block text-left text-sm font-medium text-gray-700 mb-2">
              Giá Bán Lẻ *
            </label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="0"
            />
          </div>
          <div>
            <label className="block text-left text-sm font-medium text-gray-700 mb-2">
              Giá Nhập *
            </label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="0"
            />
          </div>

          <label className="block text-left text-sm font-medium text-gray-700 mb-2">
            <a href="">
              <FaAnglesDown className="pr-2 size-4 align-middle mb-1" />
              hiển thị thêm chính sách giá
            </a>
          </label>
          <div id="pricePolicySection" className="hidden space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tên Chính Sách
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Giá VIP"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Giá Áp Dụng
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="40000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Điều Kiện
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Mua từ 10 sản phẩm"
                  />
                </div>
              </div>
            </div>

            <button
              type="button"
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
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
          <FaImage className="align-middle mb-1 mr-1" />
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
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="0"
            />
          </div>
          <div>
            <label className="block text-left text-sm font-medium text-gray-700 mb-2">
              Giá vốn*
            </label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="0"
            />
          </div>

          <div>
            <label className="text-left block text-sm font-medium text-gray-700 mb-2">
              Kho lưu trữ
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
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
            <MdOutlineSettingsSuggest className="align-middle size-6 mb-2" />
            Thuộc tính sản phẩm
          </h4>
          <label className="flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only" />
            <div className="relative">
              <div className="block bg-gray-600 w-12 h-6 rounded-full"></div>
              <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
            </div>
            <span className="ml-3 text-gray-700 font-medium">
              Bật thuộc tính
            </span>
          </label>
        </div>
        <div id="attributesSection" className="hidden space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tên Thuộc Tính
                </label>
                <input
                  type="text"
                  value="Size"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Giá Trị (mỗi dòng một giá trị)
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  // rows="3"
                  placeholder="S&#10;M&#10;L"
                ></textarea>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="text-primary hover:text-blue-700 font-medium flex items-center"
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
            <MdOutlineAdUnits className="align-middle size-6 mb-2" />
            Thuộc tính sản phẩm
          </h4>
          <label className="flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only" />
            <div className="relative">
              <div className="block bg-gray-600 w-12 h-6 rounded-full"></div>
              <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
            </div>
            <span className="ml-3 text-gray-700 font-medium">
              Bật đơn vị quy đổi
            </span>
          </label>
        </div>
        <div id="attributesSection" className="hidden space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tên Thuộc Tính
                </label>
                <input
                  type="text"
                  value="Size"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Giá Trị (mỗi dòng một giá trị)
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  // rows="3"
                  placeholder="S&#10;M&#10;L"
                ></textarea>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="text-primary hover:text-blue-700 font-medium flex items-center"
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
    </div>
  );
};
export default CreateProduct;
