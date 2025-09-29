import React, { useState } from "react";
import { DatePicker, Button, Dropdown } from "antd";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;

export default function DateFilterFormUi() {
  const [range, setRange] = useState<[dayjs.Dayjs, dayjs.Dayjs] | null>(null);

  const setToday = () => {
    const today = dayjs();
    setRange([today.startOf("day"), today.endOf("day")]);
  };

  const setYesterday = () => {
    const yesterday = dayjs().subtract(1, "day");
    setRange([yesterday.startOf("day"), yesterday.endOf("day")]);
  };

  const setThisWeek = () => {
    setRange([dayjs().startOf("week"), dayjs().endOf("week")]);
  };

  const setThisMonth = () => {
    setRange([dayjs().startOf("month"), dayjs().endOf("month")]);
  };

  const dropdownContent = (
    <div className="p-2 bg-white shadow rounded-lg w-72">
      <div className="flex justify-between mb-2 gap-4">
        <Button className="flex-1" onClick={setToday}>
          Hôm nay
        </Button>
        <Button className="flex-1" onClick={setYesterday}>
          Hôm qua
        </Button>
      </div>
      <div className="flex justify-between mb-2 gap-2">
        <Button className="flex-1" onClick={setThisWeek}>
          Tuần này
        </Button>
        <Button className="flex-1" onClick={setThisMonth}>
          Tháng này
        </Button>
      </div>
      <RangePicker
        value={range as any}
        format="DD/MM/YYYY"
        onChange={(dates) => setRange(dates as any)}
        className="w-full"
      />
    </div>
  );

  return (
    <Dropdown
      dropdownRender={() => dropdownContent}
      trigger={["click"]}
      placement="bottomLeft"
      getPopupContainer={(trigger) => trigger.parentElement!}
    >
      <Button>Chọn ngày</Button>
    </Dropdown>
  );
}
