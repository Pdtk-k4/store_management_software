import { useState } from "react";
import { Button, Dropdown, Input, Checkbox } from "antd";

export interface OptionItem {
  label: string;
  value: string;
}

interface DropdownMultiSelectProps {
  items: OptionItem[];
  title?: string;
  onChange?: (values: string[]) => void;
}

export default function DropdownMultiSelect({
  items,
  title = "Chọn",
  onChange,
}: DropdownMultiSelectProps) {
  const [selected, setSelected] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  const toggleSelect = (val: string) => {
    setSelected((prev) => {
      const newSelected = prev.includes(val)
        ? prev.filter((v) => v !== val)
        : [...prev, val];
      onChange?.(newSelected);
      return newSelected;
    });
  };

  const onSelectAll = () => {
    let newSelected: string[] = [];
    if (selected.length !== items.length) {
      newSelected = items.map((i) => i.value);
    }
    setSelected(newSelected);
    onChange?.(newSelected);
  };

  const filtered = items.filter((i) =>
    i.label.toLowerCase().includes(search.toLowerCase())
  );

  const dropdownContent = (
    <div className="w-64 bg-white p-2 max-h-[60vh] overflow-y-auto">
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

      <Button type="primary" block className="mt-3">
        Lọc
      </Button>
    </div>
  );

  return (
    <Dropdown
      dropdownRender={() => dropdownContent}
      trigger={["click"]}
      placement="bottomLeft"
      getPopupContainer={(trigger) => trigger.parentElement!}
      overlayStyle={{ minWidth: "260px", maxWidth: "90vw" }}
    >
      <Button>
        {title} {selected.length > 0 && `(${selected.length})`}
      </Button>
    </Dropdown>
  );
}
