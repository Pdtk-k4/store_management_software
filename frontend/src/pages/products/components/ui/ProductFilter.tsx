import React, { useState } from "react";
import { Button, Drawer, Select } from "antd";
import DateFilterFormUi from "./DateFilterFormUi";
import { DatePicker, Dropdown } from "antd";
import DropdownMultiSelect from "./TypeProductUi";
const { Option } = Select;

interface ProductFilterProps {
  open: boolean;
  onClose: () => void;
}

export default function ProductFilter({ open, onClose }: ProductFilterProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const clearAll = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedTags([]);
  };

  const productTypes = [
    { label: "Thức ăn chó", value: "food" },
    { label: "Balo", value: "balo" },
    { label: "Đồ chơi cho chó", value: "toy" },
    { label: "Dây dắt, vòng cổ, chuồng", value: "leash" },
  ];
  // Hàm gom filters
  const handleFilter = () => {
    const filters = {
      categories: selectedCategories,
      brands: selectedBrands,
      tags: selectedTags,
    };

    console.log("Filters gửi API:", filters);

    // Ví dụ giả lập gọi API:
    // fetch("/api/products/filter", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(filters),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log("Kết quả:", data));

    onClose(); // đóng drawer sau khi lọc
  };

  return (
    <Drawer
      title="Bộ lọc sản phẩm"
      placement="right"
      onClose={onClose}
      open={open}
      width={400}
      destroyOnClose={false}
      maskClosable={true}
    >
      <div className="space-y-3">
        {(selectedCategories.length > 0 ||
          selectedBrands.length > 0 ||
          selectedTags.length > 0) && (
          <div className="flex items-center gap-2">
            <span>
              Đã chọn:{" "}
              {selectedCategories.length +
                selectedBrands.length +
                selectedTags.length}
            </span>
            <Button size="small" onClick={clearAll}>
              Xóa tất cả
            </Button>
          </div>
        )}

        {/* Select loại sản phẩm */}
        <p>Loại sản phẩm</p>
        <Select
          mode="multiple"
          showSearch
          placeholder="Chọn loại sản phẩm"
          optionFilterProp="children"
          className="w-full"
          value={selectedCategories}
          onChange={(values) => setSelectedCategories(values)}
          allowClear
        >
          <Option value="dog">Thức ăn cho chó</Option>
          <Option value="cat">Thức ăn cho mèo</Option>
          <Option value="bird">Thức ăn cho chim</Option>
        </Select>

        {/* Select nhãn hiệu */}
        <p>Nhãn hiệu</p>
        <Select
          mode="multiple"
          showSearch
          placeholder="Chọn nhãn hiệu"
          optionFilterProp="children"
          className="w-full"
          value={selectedBrands}
          onChange={(values) => setSelectedBrands(values)}
          allowClear
        >
          <Option value="MrViet">MrViet</Option>
          <Option value="RoiAlCnin">RoiAlCnin</Option>
          <Option value="CatsRang">CatsRang</Option>
        </Select>

        {/* Select Tag */}
        <p>Tag</p>
        <Select
          mode="multiple"
          showSearch
          placeholder="Chọn Tag"
          optionFilterProp="children"
          className="w-full"
          value={selectedTags}
          onChange={(values) => setSelectedTags(values)}
          allowClear
        >
          <Option value="kitten">Mèo con</Option>
          <Option value="adultCat">Mèo trưởng thành</Option>
          <Option value="bird">Chim cảnh</Option>
        </Select>
        {/* Chọn ngày */}
        <p>Ngày tạo</p>
        <DateFilterFormUi className="w-full" />
        {/* Trạng thái */}
        <p>Trạng thái</p>
        <DropdownMultiSelect
          items={productTypes}
          className="w-full"
          title="Trạng thái"
          onChange={(values) => console.log("Trạng thái:", values)}
        />
        {/* Phân loại */}
        <p>Phân loại</p>
        <DropdownMultiSelect
          items={productTypes}
          className="w-full"
          title="Phân loại "
          onChange={(values) => console.log("Phân loại:", values)}
        />
      </div>

      <div className="flex justify-end space-x-2 mt-80">
        <Button onClick={onClose}>Đóng</Button>
        <Button type="primary" onClick={handleFilter}>
          Lọc
        </Button>
      </div>
    </Drawer>
  );
}
