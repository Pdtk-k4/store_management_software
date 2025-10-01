import React, { useState, useRef, useLayoutEffect } from "react";
import { DatePicker, Button, Dropdown } from "antd";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;

interface DateFilterFormUiProps {
  className?: string;
}

export default function DateFilterFormUi({ className }: DateFilterFormUiProps) {
  const [range, setRange] = useState<[dayjs.Dayjs, dayjs.Dayjs] | null>(null);
  const [label, setLabel] = useState("Chọn ngày");
  const [btnWidth, setBtnWidth] = useState<number | null>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    if (btnRef.current) {
      setBtnWidth(btnRef.current.offsetWidth);
    }
  }, []);

  const dropdownContent = (
    <div
      className="p-2 bg-white shadow rounded-lg"
      style={{ width: btnWidth && btnWidth > 200 ? btnWidth : 288 }} // 288px = w-72
    >
      <div className="flex justify-between mb-2 gap-4">
        <Button className="flex-1" onClick={() => setToday()}>
          Hôm nay
        </Button>
        <Button className="flex-1" onClick={() => setYesterday()}>
          Hôm qua
        </Button>
      </div>
      <div className="flex justify-between mb-2 gap-2">
        <Button className="flex-1" onClick={() => setThisWeek()}>
          Tuần này
        </Button>
        <Button className="flex-1" onClick={() => setThisMonth()}>
          Tháng này
        </Button>
      </div>
      <RangePicker
        value={range as any}
        format="DD/MM/YYYY"
        onChange={(dates) => {
          setRange(dates as any);
          if (dates) {
            setLabel(
              `${dates[0]?.format("DD/MM/YYYY")} - ${dates[1]?.format(
                "DD/MM/YYYY"
              )}`
            );
          }
        }}
        className="w-full"
      />
    </div>
  );

  const setToday = () => {
    const today = dayjs();
    setRange([today.startOf("day"), today.endOf("day")]);
    setLabel("Hôm nay");
  };

  const setYesterday = () => {
    const yesterday = dayjs().subtract(1, "day");
    setRange([yesterday.startOf("day"), yesterday.endOf("day")]);
    setLabel("Hôm qua");
  };

  const setThisWeek = () => {
    setRange([dayjs().startOf("week"), dayjs().endOf("week")]);
    setLabel("Tuần này");
  };

  const setThisMonth = () => {
    setRange([dayjs().startOf("month"), dayjs().endOf("month")]);
    setLabel("Tháng này");
  };

  return (
    <Dropdown
      dropdownRender={() => dropdownContent}
      trigger={["click"]}
      placement="bottom"
      getPopupContainer={(trigger) => trigger.parentElement!}
    >
      <Button ref={btnRef} className={`${className} flex justify-start`}>
        {label}
      </Button>
    </Dropdown>
  );
}
