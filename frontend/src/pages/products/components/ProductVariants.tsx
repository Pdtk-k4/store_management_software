import React from "react";
import { RiAddLine } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { MdAdd } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

interface ProductVariantsProps {
  className?: string;
}
const ProductVariants: React.FC<ProductVariantsProps> = ({ className }) => {
  return (
    <>
      <div className={className}>
        {/* header */}
        <div className="bg-white shadow-md rounded-md border p-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Biến thể sản phẩm</h3>
                <p>Quản lý phiên bản và tồn kho theo chi nhánh</p>
              </div>
              <div>
                <button className="px-4 py-2 bg-blue-600 text-white border-none rounded hover:bg-blue-700 mr-2">
                  <RiAddLine className="align-middle h-4 w-4" />
                  Thêm phiên bản
                </button>
                <button className="px-4 py-2 bg-green-600 text-white border-none rounded hover:bg-green-700 mr-2">
                  Nhập kho
                </button>
                <button className="px-4 py-2 bg-white text-black border rounded  mr-2 hover:bg-gray-100 mt-2">
                  Xuất Excel
                </button>
              </div>
            </div>
            {/* Table của biến thể */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Hình ảnh
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Mã SKU
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Thuộc tính
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Giá bán
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Giá nhập
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tồn kho
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Có thể bán
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Trạng thái
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Thao tác
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500 overflow-hidden text-ellipsis truncate">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 "
                      />
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500 overflow-hidden text-ellipsis truncate">
                      <div className="text-sm font-medium text-gray-900">
                        Hình ảnh
                      </div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500 overflow-hidden text-ellipsis truncate">
                      <div className="text-sm font-medium text-gray-900">
                        CATABOS
                      </div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500 overflow-hidden text-ellipsis truncate">
                      <div className="text-sm font-medium text-gray-900">
                        Siêu thấm hút
                      </div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500 overflow-hidden text-ellipsis truncate">
                      <div className="text-sm font-medium text-gray-900">
                        150,000đ
                      </div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500 overflow-hidden text-ellipsis truncate">
                      <div className="text-sm font-medium text-gray-900">
                        120,000đ
                      </div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500 overflow-hidden text-ellipsis truncate">
                      <div className="text-sm font-medium text-gray-900">
                        100
                      </div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500 overflow-hidden text-ellipsis truncate">
                      <div className="text-sm font-medium text-gray-900">
                        80
                      </div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500 overflow-hidden text-ellipsis truncate">
                      <div className="text-sm font-medium text-gray-900">
                        Đang bán
                      </div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500 overflow-hidden text-ellipsis truncate">
                      <div className="text-sm font-medium text-gray-900">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 h-6 w-6 bg-none bg-transparent border-none hover:text-blue-900">
                            <BiEdit className="inline-block mr-1" />
                          </button>
                          <button className="text-red-600 h-6 w-6 bg-none bg-transparent border-none hover:text-red-900">
                            <RiDeleteBin5Line className="inline-block mr-1" />
                          </button>
                          <button className="text-green-600 h-6 w-6 bg-none bg-transparent border-none hover:text-green-900">
                            <MdAdd className="inline-block mr-1" />
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr id="variant-details" className=" bg-blue-50">
                    <td colSpan={10} className="p-4">
                      <div className="text-sm text-gray-500">
                        <div className="bg-white p-4 rounded-md border-blue-200 shadow-sm">
                          <p className="font-medium">
                            Chi tiết tồn kho theo chi nhánh
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
                            <div className="bg-gray-100 border p-2 rounded">
                              <div className=" flex justify-between items-center">
                                <p className="font-bold text-black">
                                  Chi nhánh A
                                </p>
                                <p>HN001</p>
                              </div>
                              <div className="space-y-1 text-sm text-gray-500">
                                <div className="bg-gray-100 border p-2 rounded flex justify-between items-center">
                                  <span>Tồn kho</span>
                                  <span className="font-medium text-gray-600">
                                    30
                                  </span>
                                </div>
                                <div className="bg-gray-100 font-medium  border p-2 rounded flex justify-between items-center">
                                  <span>Đã đặt</span>
                                  <span className="font-medium  text-red-600">
                                    10
                                  </span>
                                </div>
                                <div className="bg-gray-100 font-medium  border p-2 rounded flex justify-between items-center">
                                  <span>Có thể bán</span>
                                  <span className="text-green-600 font-medium ">
                                    30
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="bg-gray-100 border p-2 rounded">
                              <div className=" flex justify-between items-center">
                                <p className="font-bold text-black">
                                  Chi nhánh TP.HCM
                                </p>
                                <p>HN001</p>
                              </div>
                              <div className="space-y-1 text-sm text-gray-500">
                                <div className="bg-gray-100 border p-2 rounded flex justify-between items-center">
                                  <span>Tồn kho</span>
                                  <span className="font-medium text-gray-600">
                                    30
                                  </span>
                                </div>
                                <div className="bg-gray-100 font-medium  border p-2 rounded flex justify-between items-center">
                                  <span>Đã đặt</span>
                                  <span className="font-medium  text-red-600">
                                    10
                                  </span>
                                </div>
                                <div className="bg-gray-100 font-medium  border p-2 rounded flex justify-between items-center">
                                  <span>Có thể bán</span>
                                  <span className="text-green-600 font-medium ">
                                    30
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="bg-gray-100 border p-2 rounded">
                              <div className=" flex justify-between items-center">
                                <p className="font-bold text-black">
                                  Chi nhánh TP.Đà Nẵng
                                </p>
                                <p>HN001</p>
                              </div>
                              <div className="space-y-1 text-sm text-gray-500">
                                <div className="bg-gray-100 border p-2 rounded flex justify-between items-center">
                                  <span>Tồn kho</span>
                                  <span className="font-medium text-gray-600">
                                    30
                                  </span>
                                </div>
                                <div className="bg-gray-100 font-medium  border p-2 rounded flex justify-between items-center">
                                  <span>Đã đặt</span>
                                  <span className="font-medium  text-red-600">
                                    10
                                  </span>
                                </div>
                                <div className="bg-gray-100 font-medium  border p-2 rounded flex justify-between items-center">
                                  <span>Có thể bán</span>
                                  <span className="text-green-600 font-medium ">
                                    30
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="bg-gray-100 border p-2 rounded">
                              <div className=" flex justify-between items-center">
                                <p className="font-bold text-black">
                                  Chi nhánh TP.Hải Phòng
                                </p>
                                <p>HN001</p>
                              </div>
                              <div className="space-y-1 text-sm text-gray-500">
                                <div className="bg-gray-100 border p-2 rounded flex justify-between items-center">
                                  <span>Tồn kho</span>
                                  <span className="font-medium text-gray-600">
                                    30
                                  </span>
                                </div>
                                <div className="bg-gray-100 font-medium  border p-2 rounded flex justify-between items-center">
                                  <span>Đã đặt</span>
                                  <span className="font-medium  text-red-600">
                                    10
                                  </span>
                                </div>
                                <div className="bg-gray-100 font-medium  border p-2 rounded flex justify-between items-center">
                                  <span>Có thể bán</span>
                                  <span className="text-green-600 font-medium ">
                                    30
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className=" border p-2 rounded flex items-center justify-start">
                            <button className=" bg-blue-500 p-2 rounded-md border-none hover:bg-blue-600 mr-2">
                              <span className="text-white">Nhập kho</span>
                            </button>
                            <button className=" bg-green-500 p-2 rounded-md border-none hover:bg-green-600 mr-2">
                              <span className="text-white">Xuất kho</span>
                            </button>
                            <button className=" bg-orange-500 p-2 rounded-md border-none hover:bg-orange-600 mr-2">
                              <span className="text-white">Chuyển kho</span>
                            </button>
                            <button className=" bg-gray-100 p-2 rounded-md border-none hover:bg-gray-200 mr-2">
                              <span className="text-black">Xem lịch sử</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr id="variant-details" className=" bg-blue-50">
                    <td colSpan={10} className="p-4">
                      <div className="text-sm text-gray-500">
                        <div className="bg-white p-4 rounded-md border-blue-200 shadow-sm">
                          <p className="font-medium">
                            Chi tiết tồn kho theo chi nhánh
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
                            <div className="bg-gray-100 border p-2 rounded">
                              <div className=" flex justify-between items-center">
                                <p className="font-bold text-black">
                                  Chi nhánh A
                                </p>
                                <p>HN001</p>
                              </div>
                              <div className="space-y-1 text-sm text-gray-500">
                                <div className="bg-gray-100 border p-2 rounded flex justify-between items-center">
                                  <span>Tồn kho</span>
                                  <span className="font-medium text-gray-600">
                                    30
                                  </span>
                                </div>
                                <div className="bg-gray-100 font-medium  border p-2 rounded flex justify-between items-center">
                                  <span>Đã đặt</span>
                                  <span className="font-medium  text-red-600">
                                    10
                                  </span>
                                </div>
                                <div className="bg-gray-100 font-medium  border p-2 rounded flex justify-between items-center">
                                  <span>Có thể bán</span>
                                  <span className="text-green-600 font-medium ">
                                    30
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="bg-gray-100 border p-2 rounded">
                              <div className=" flex justify-between items-center">
                                <p className="font-bold text-black">
                                  Chi nhánh TP.HCM
                                </p>
                                <p>HN001</p>
                              </div>
                              <div className="space-y-1 text-sm text-gray-500">
                                <div className="bg-gray-100 border p-2 rounded flex justify-between items-center">
                                  <span>Tồn kho</span>
                                  <span className="font-medium text-gray-600">
                                    30
                                  </span>
                                </div>
                                <div className="bg-gray-100 font-medium  border p-2 rounded flex justify-between items-center">
                                  <span>Đã đặt</span>
                                  <span className="font-medium  text-red-600">
                                    10
                                  </span>
                                </div>
                                <div className="bg-gray-100 font-medium  border p-2 rounded flex justify-between items-center">
                                  <span>Có thể bán</span>
                                  <span className="text-green-600 font-medium ">
                                    30
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="bg-gray-100 border p-2 rounded">
                              <div className=" flex justify-between items-center">
                                <p className="font-bold text-black">
                                  Chi nhánh TP.Đà Nẵng
                                </p>
                                <p>HN001</p>
                              </div>
                              <div className="space-y-1 text-sm text-gray-500">
                                <div className="bg-gray-100 border p-2 rounded flex justify-between items-center">
                                  <span>Tồn kho</span>
                                  <span className="font-medium text-gray-600">
                                    30
                                  </span>
                                </div>
                                <div className="bg-gray-100 font-medium  border p-2 rounded flex justify-between items-center">
                                  <span>Đã đặt</span>
                                  <span className="font-medium  text-red-600">
                                    10
                                  </span>
                                </div>
                                <div className="bg-gray-100 font-medium  border p-2 rounded flex justify-between items-center">
                                  <span>Có thể bán</span>
                                  <span className="text-green-600 font-medium ">
                                    30
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="bg-gray-100 border p-2 rounded">
                              <div className=" flex justify-between items-center">
                                <p className="font-bold text-black">
                                  Chi nhánh TP.Hải Phòng
                                </p>
                                <p>HN001</p>
                              </div>
                              <div className="space-y-1 text-sm text-gray-500">
                                <div className="bg-gray-100 border p-2 rounded flex justify-between items-center">
                                  <span>Tồn kho</span>
                                  <span className="font-medium text-gray-600">
                                    30
                                  </span>
                                </div>
                                <div className="bg-gray-100 font-medium  border p-2 rounded flex justify-between items-center">
                                  <span>Đã đặt</span>
                                  <span className="font-medium  text-red-600">
                                    10
                                  </span>
                                </div>
                                <div className="bg-gray-100 font-medium  border p-2 rounded flex justify-between items-center">
                                  <span>Có thể bán</span>
                                  <span className="text-green-600 font-medium ">
                                    30
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className=" border p-2 rounded flex items-center justify-start">
                            <button className=" bg-blue-500 p-2 rounded-md border-none hover:bg-blue-600 mr-2">
                              <span className="text-white">Nhập kho</span>
                            </button>
                            <button className=" bg-green-500 p-2 rounded-md border-none hover:bg-green-600 mr-2">
                              <span className="text-white">Xuất kho</span>
                            </button>
                            <button className=" bg-orange-500 p-2 rounded-md border-none hover:bg-orange-600 mr-2">
                              <span className="text-white">Chuyển kho</span>
                            </button>
                            <button className=" bg-gray-100 p-2 rounded-md border-none hover:bg-gray-200 mr-2">
                              <span className="text-black">Xem lịch sử</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-700">
                  Hiển thị <span className="font-medium">1</span> đến{" "}
                  <span className="font-medium">4</span> trong tổng số{" "}
                  <span className="font-medium">4</span> phiên bản
                </div>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 border-none rounded text-sm text-gray-500 cursor-not-allowed hover:bg-gray-200">
                    Trước
                  </button>
                  <button className="px-3 py-1 bg-blue-500 text-white border-none rounded text-sm hover:bg-blue-600">
                    1
                  </button>
                  <button className="px-3 py-1 border-none rounded text-sm text-gray-500 cursor-not-allowed hover:bg-gray-200">
                    Sau
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductVariants;
