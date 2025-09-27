import React, { useState } from "react";
import { Switch, Select } from "antd";
import { Input, Button, Dropdown, Menu } from "antd";
import { FaAnglesDown, FaImage, FaBoxArchive } from "react-icons/fa6";
import TableProduct from "../../components/ui/TableProduct";
import { FilterOutlined } from "@ant-design/icons";
import { LuImagePlus } from "react-icons/lu";
const CreateCategory: React.FC = () => {
  const [status, setStatus] = useState<string | undefined>(undefined);
  const menu = (
    <Menu
      onClick={(e) => setStatus(e.key)}
      items={[
        { key: "active", label: "Đang bán" },
        { key: "inactive", label: "Ngừng bán" },
      ]}
    />
  );
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

      <div className="bg-white space-y-4 shadow p-4 border-b mb-4 rounded max-w-10xl mx-auto ">
        <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
          Thông Tin Cơ Bản
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 ">
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
        {/* <hr className="text-gray-700 border-t my-4 mt-6" /> */}

        <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-2">
          <div className="border-gray-200 shadow-sm border rounded-lg">
            <div className="bg-gray-100 p-4 border-b border-gray-200 rounded-t-lg flex flex-wrap justify-between items-center gap-2">
              <p className="text-gray-800 font-medium">Thông tin sản phẩm</p>
              <div className="flex items-center gap-4">
                <Dropdown overlay={menu} trigger={["click"]}>
                  <FilterOutlined className="text-xl cursor-pointer text-gray-600 hover:text-blue-600" />
                </Dropdown>
                {status && (
                  <span className="text-sm text-gray-700">
                    Đang chọn: {status}
                  </span>
                )}
              </div>
            </div>

            <TableProduct />
          </div>
          <div className="bg-white border-gray-200 shadow-sm border rounded-lg">
            <div className="bg-gray-100 p-4 border-b border-gray-200 rounded-t-lg mb-4 flex flex-wrap justify-between items-center gap-2">
              <p>Thông tin người thao tác</p>
              <div className="flex items-center gap-4">
                <Dropdown overlay={menu} trigger={["click"]}>
                  <FilterOutlined className="text-xl cursor-pointer text-gray-600 hover:text-blue-600" />
                </Dropdown>
                {status && (
                  <span className="text-sm text-gray-700">
                    Đang chọn: {status}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="">
                <label>Người tạo</label>
                <input
                  type="text"
                  className="w-full py-2 border mt-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div className="">
                <label>Người cập nhật</label>
                <input
                  type="text"
                  className="w-full py-2 border mt-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div className="">
                <label>Ngày tạo</label>
                <input
                  type="text"
                  className="w-full py-2 border mt-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div className="">
                <label>Ngày cập nhật</label>
                <input
                  type="text"
                  className="w-full py-2 border mt-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border-gray-200 shadow-sm border rounded-lg p-4">
        <h4 className="text-gray-900 text-left">
          <FaImage className="align-middle mb-1 text-purple-800 mr-1" />
          Hình ảnh danh mục
        </h4>
        <div className="border-2 border-dashed text-gray-300  rounded-lg p-10 text-center transition-colors hover:border-primary-600">
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
                Tải lên hình ảnh danh mục
              </span>
            </label>
            <p className=""> PNG, JPG, GITF 50MB tối đa mỗi file </p>
          </div>
        </div>
      </div>
      <div className="bg-white border-gray-200 shadow-sm border rounded-lg p-4">
        <div className="git grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div>
            <div>
              <h4>Tùy chọn bổ sung</h4>
              <div className="flex flex-col space-y-4 mt-4">
                <div className="justify-between flex">
                  <span className="text-gray-700">Danh mục nổi bật</span>
                  <Switch className="ml-6" />
                </div>
                <div className="justify-between flex">
                  <span className="text-gray-700">Hiển thị trên trang chủ</span>
                  <Switch className="ml-6" />
                </div>
                <div className="justify-between flex">
                  <span className="text-gray-700">
                    cho phép bình luận sẩn phẩm
                  </span>
                  <Switch className="ml-6" />
                </div>
                <div className="justify-between flex">
                  <span className="text-gray-700">
                    Gửi thông báo khi có sản phẩm mới
                  </span>
                  <Switch className="ml-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-start space-x-4 mt-6 max-w-10xl mx-auto">
        <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">
          Tạo danh mục
        </button>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Lưu nháp
        </button>
        <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">
          Xem trước
        </button>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Hủy
        </button>
      </div>
    </div>
  );
};

export default CreateCategory;
