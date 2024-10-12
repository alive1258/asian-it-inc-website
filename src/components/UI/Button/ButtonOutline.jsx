"use client";

import { useScroll } from "@/utils/scrollUtils";

const ButtonOutline = ({ content }) => {
  const isScrolled = useScroll();

  return (
    <div className="text-center group">
      <button
        className={`outline-btn  ${
          isScrolled ? "text-gray-900 " : "text-white "
        }`}
      >
        <span>{content}</span>
      </button>
    </div>
  );
};

export default ButtonOutline;
