import React, { useState } from "react";
import { FaAngleDoubleRight, FaAngleDoubleDown } from "react-icons/fa";

interface Variation {
  id: number;
  name: string;
  code: string;
  stock: number;
  inTrade: number;
  retailPrice: number;
  wholesalePrice: number;
  importPrice: number;
}

interface Product {
  id: number;
  name: string;
  stock: number;
  createdAt: string;
  variations?: Variation[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Cát than hoạt tính Aboss",
    stock: 27,
    createdAt: "26/09/2025",
    variations: [
      {
        id: 101,
        name: "Cát than hoạt tính Aboss hương bạc hà - Túi 18L",
        code: "CTHTA18B",
        stock: 27,
        inTrade: 0,
        retailPrice: 110000,
        wholesalePrice: 0,
        importPrice: 0,
      },
      {
        id: 102,
        name: "Cát than hoạt tính Aboss hương bạc hà - Túi 3 túi",
        code: "PVNS240",
        stock: 9,
        inTrade: 9,
        retailPrice: 300000,
        wholesalePrice: 0,
        importPrice: 0,
      },
    ],
  },
  {
    id: 2,
    name: "Hạt cho chó S2 V1 topping",
    stock: 3,
    createdAt: "26/09/2025",
  },
];

export default function ProductTable() {
  const [expanded, setExpanded] = useState<number[]>([]);
  const [selected, setSelected] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleSelect = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selected.length === products.length) {
      setSelected([]);
    } else {
      setSelected(products.map((p) => p.id));
    }
  };

  return (
    <div className="border rounded-md overflow-hidden">
      {/* Bulk action bar */}
      {selected.length > 0 && (
        <div className="p-3 bg-gray-50 border-b flex items-center justify-between">
          <span className="text-sm">
            Đã chọn <b>{selected.length}</b> sản phẩm
          </span>
          <select className="border rounded px-2 py-1 text-sm">
            <option>Chọn thao tác</option>
            <option>Kiểm tra tồn kho</option>
            <option>In mã vạch</option>
            <option>Đang giao dịch</option>
            <option>Ngừng giao dịch</option>
          </select>
        </div>
      )}

      {/* Table */}
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-100 text-sm border-b border-gray-300">
          <tr>
            <th className="p-2 border-r border-gray-300">
              <input
                type="checkbox"
                checked={selected.length === products.length}
                onChange={toggleSelectAll}
              />
            </th>
            <th className="p-2 border-r border-gray-300 text-left">Sản phẩm</th>
            <th className="p-2 border-r border-gray-300 text-center">
              Có thể bán
            </th>
            <th className="p-2 text-center">Ngày tạo</th>
          </tr>
        </thead>
        <tbody className="text-sm divide-y divide-gray-200">
          {products.map((p, idx) => (
            <React.Fragment key={p.id}>
              {/* Hàng cha */}
              <tr
                className={`hover:bg-gray-50 ${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="p-2 border-r border-gray-200 text-center">
                  <input
                    type="checkbox"
                    checked={selected.includes(p.id)}
                    onChange={() => toggleSelect(p.id)}
                  />
                </td>
                <td
                  className="p-2 border-r border-gray-200 cursor-pointer"
                  onClick={() => toggleExpand(p.id)}
                >
                  <div className="flex items-center space-x-2">
                    {p.variations && (
                      <span className="text-gray-400 mt-2">
                        {expanded.includes(p.id) ? (
                          <FaAngleDoubleDown size={16} />
                        ) : (
                          <FaAngleDoubleRight size={16} />
                        )}
                      </span>
                    )}
                    <span className="font-medium">{p.name}</span>
                  </div>
                </td>
                <td className="p-2 border-r border-gray-200 text-center">
                  {p.stock}
                </td>
                <td className="p-2 text-center">{p.createdAt}</td>
              </tr>

              {/* Hàng con là table */}
              {expanded.includes(p.id) && p.variations && (
                <tr>
                  <td colSpan={4} className="p-0 border-t">
                    <div className="pl-40">
                      <table className="w-full text-xs border border-gray-200 bg-blue-50">
                        <thead className="bg-blue-100">
                          <tr>
                            <th className="p-2 border border-gray-300 text-left">
                              Phiên bản
                            </th>
                            <th className="p-2 border border-gray-300 text-center">
                              Mã SP
                            </th>
                            <th className="p-2 border border-gray-300 text-center">
                              Có thể bán
                            </th>
                            <th className="p-2 border border-gray-300 text-center">
                              Đang giao dịch
                            </th>
                            <th className="p-2 border border-gray-300 text-center">
                              Giá bán lẻ
                            </th>
                            <th className="p-2 border border-gray-300 text-center">
                              Giá bán buôn
                            </th>
                            <th className="p-2 border border-gray-300 text-center">
                              Giá nhập
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {p.variations.map((v, vIdx) => (
                            <tr
                              key={v.id}
                              className={`${
                                vIdx % 2 === 0 ? "bg-blue-50" : "bg-blue-100"
                              }`}
                            >
                              <td className="p-2 border border-gray-200">
                                <a href="#" className="text-blue-600 underline">
                                  {v.name}
                                </a>
                              </td>
                              <td className="p-2 border border-gray-200 text-center">
                                {v.code}
                              </td>
                              <td className="p-2 border border-gray-200 text-center">
                                {v.stock} <br />
                                <span className="text-xs text-gray-500">
                                  (có 2 phiên bản)
                                </span>
                              </td>
                              <td className="p-2 border border-gray-200 text-center">
                                {v.inTrade}
                              </td>
                              <td className="p-2 border border-gray-200 text-center">
                                {v.retailPrice.toLocaleString()} đ
                              </td>
                              <td className="p-2 border border-gray-200 text-center">
                                {v.wholesalePrice.toLocaleString()} đ
                              </td>
                              <td className="p-2 border border-gray-200 text-center">
                                {v.importPrice.toLocaleString()} đ
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
