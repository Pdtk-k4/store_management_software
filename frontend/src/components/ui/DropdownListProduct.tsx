import { useState, useRef, useEffect, type ReactNode } from "react";
import { FaCaretDown } from "react-icons/fa";
export interface DropdownItem {
  label: ReactNode;
  onClick: () => void;
}

interface DropdownProps {
  label: ReactNode;
  items: DropdownItem[];
  align?: "left" | "right" | "center";
  width?: string; // ví dụ: "w-40" | "w-full"
}

const DropdownListProduct: React.FC<DropdownProps> = ({
  label,
  items,
  align = "left",
  width = "w-60",
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Đóng khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const alignClass =
    align === "left"
      ? "left-0"
      : align === "right"
      ? "right-0"
      : "left-1/2 transform -translate-x-1/2";

  return (
    <div ref={ref} className="relative inline-block text-left">
      {/* Button mở */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center bg-transparent bg-none border-none border-gray-300 rounded-md text-sm"
      >
        {label}
        <FaCaretDown
          className={`h-4 w-4 text-white transition-transform duration-200 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Menu */}
      {open && (
        <div
          className={`absolute ${alignClass} mt-2 ${width} bg-white border border-gray-200 rounded-lg shadow-lg z-10`}
        >
          <div className="flex flex-col bg-white">
            {items.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  item.onClick();
                  setOpen(false);
                }}
                className="text-left text-sm px-4 py-2 bg-transparent bg-none border-none hover:bg-gray-100 w-full focus:outline-none"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownListProduct;
