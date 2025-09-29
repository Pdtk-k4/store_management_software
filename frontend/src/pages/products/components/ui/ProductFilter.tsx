import React, { useState } from "react";
import { Button, Drawer } from "antd";

interface ProductFilterProps {
  open: boolean;
  onClose: () => void;
}

export default function ProductFilter({ open, onClose }: ProductFilterProps) {
  const [shouldRender, setShouldRender] = useState(open);

  return (
    <Drawer
      title="Bộ lọc sản phẩm"
      placement="right"
      onClose={onClose}
      open={open}
      width={400}
      destroyOnClose={false} // giữ lại DOM
      maskClosable={true} // bấm ra ngoài để đóng
    >
      {shouldRender && (
        <>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Tìm theo tên"
              className="border p-2 w-full rounded"
            />
            <input
              type="number"
              placeholder="Giá từ"
              className="border p-2 w-full rounded"
            />
            <input
              type="number"
              placeholder="Giá đến"
              className="border p-2 w-full rounded"
            />
          </div>

          <div className="flex justify-end space-x-2 mt-4">
            <Button onClick={onClose}>Đóng</Button>
            <Button type="primary">Lọc</Button>
          </div>
        </>
      )}
    </Drawer>
  );
}
