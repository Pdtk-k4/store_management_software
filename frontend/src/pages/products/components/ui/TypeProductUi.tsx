import { useState } from "react";
import { Button, Dropdown, Input, Checkbox } from "antd";

const items = [
  { label: "Thức ăn chó", value: "food" },
  { label: "Balo", value: "balo" },
  { label: "Đồ chơi cho chó", value: "toy" },
  { label: "Dây dắt, vòng cổ, chuồng", value: "leash" },
];

export default function TypeProductUi() {
  const [selected, setSelected] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  const toggleSelect = (val: string) => {
    setSelected((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
    );
  };

  const onSelectAll = () => {
    if (selected.length === items.length) {
      setSelected([]);
    } else {
      setSelected(items.map((i) => i.value));
    }
  };

  const filtered = items.filter((i) =>
    i.label.toLowerCase().includes(search.toLowerCase())
  );

  const dropdownContent = (
    <div className="w-64 p-2 max-h-[60vh] overflow-y-auto">
      <Input.Search
        placeholder="Tìm kiếm"
        allowClear
        onChange={(e) => setSearch(e.target.value)}
        className="mb-2"
      />

      <Checkbox
        checked={selected.length === items.length}
        indeterminate={selected.length > 0 && selected.length < items.length}
        onChange={onSelectAll}
      >
        Chọn tất cả
      </Checkbox>

      {/* ✅ Bọc riêng danh sách checkbox với thanh cuộn */}
      <div className="max-h-48 overflow-y-auto mt-2 flex flex-col gap-1 pr-2">
        {filtered.map((item) => (
          <Checkbox
            key={item.value}
            checked={selected.includes(item.value)}
            onChange={() => toggleSelect(item.value)}
          >
            {item.label}
          </Checkbox>
        ))}
      </div>

      <Button
        type="primary"
        block
        className="mt-3"
        onClick={() => console.log("Đã chọn:", selected)}
      >
        Lọc
      </Button>
    </div>
  );

  return (
    <Dropdown
      dropdownRender={() => dropdownContent}
      trigger={["click"]}
      placement="bottomLeft" // luôn thả xuống dưới bên trái => tránh che nút
      getPopupContainer={(trigger) => trigger.parentElement!} // gắn cùng container với button
      overlayStyle={{ minWidth: "260px", maxWidth: "90vw" }} // co giãn theo màn hình nhỏ
    >
      <Button>
        Loại sản phẩm {selected.length > 0 && `(${selected.length})`}
      </Button>
    </Dropdown>
  );
}
