import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";

const VariantsDetails: React.FC = () => {
  return (
    <div className="px-4">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="col-span-6 p-2 rounded-md border bg-slate-100">
          <h4 className="text-lg font-semibold">
            Thông tin chi tiết phiên bản
          </h4>
          <hr />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white p-4 rounded-md">
            {/* Cột trái */}
            <div className="grid grid-cols-2 gap-4 ">
              <div>
                <p className="text-gray-600">Tên phiên bản sản phẩm :</p>
              </div>
              <div>
                <p className="font-medium">Cát mèo Aboss 9L</p>
              </div>
              <div>
                <p className="text-gray-600">Mã SKU :</p>
              </div>
              <div>
                <p className="font-medium">PVNS240-001</p>
              </div>
              <div>
                <p className="text-gray-600">Mã barcode :</p>
              </div>
              <div>
                <p className="font-medium">PVNS446544</p>
              </div>
              <div>
                <p className="text-gray-600">Khối lượng :</p>
              </div>
              <div>
                <p className="font-medium">100g</p>
              </div>
              <div>
                <p className="text-gray-600">Đơn vị tính :</p>
              </div>
              <div>
                <p className="font-medium">Túi 9l</p>
              </div>
              <div>
                <p className="text-gray-600">Kích thước</p>
              </div>
              <div>
                <p className="font-medium">túi 9l</p>
              </div>
            </div>

            {/* Cột phải: ảnh */}
            <div className="flex justify-end items-start">
              <img
                src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=100&h=100&fit=crop"
                alt="Thumbnail"
                className="rounded"
              />
            </div>
          </div>
        </div>
        <div className="col-span-4 p-2 bg-slate-100">
          <h4 className="text-lg font-semibold">Thông tin thêm </h4>
          <hr />
          <div className="p-2 bg-white rounded-md  ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded ali"
                />
                <p className="font-medium">Áp dụng thuế</p>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded ali"
                />
                <p className="font-medium">Cho phép bán</p>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded ali"
                />
                <p className="font-medium">Áp dụng bảo hành</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VariantsDetails;
