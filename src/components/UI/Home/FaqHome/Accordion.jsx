import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

const Accordion = ({ accordion, isActive, onClick }) => {
  return (
    <div
      className={`rounded-lg p-4 ${
        isActive
          ? "border-2 border-[#6D71FA]"
          : "border-2 border-transparent hover:border-[#6D71FA]"
      }`}
    >
      <div
        className={`flex items-center justify-between font-medium cursor-pointer w-full rounded-lg duration-150 ${
          isActive ? "" : "text-black-base group"
        }`}
        onClick={onClick}
      >
        <h1 className={`text-sm md:text-base text text-white`}>
          {accordion?.name}
        </h1>
        <div className={`text-[#6D71FA]`}>
          {isActive ? (
            <FiMinus className="text-2xl" />
          ) : (
            <GoPlus className="text-2xl" />
          )}
        </div>
      </div>
      {isActive && (
        <div className="flex gap-1.5 md:gap-3 pt-2">
          <p className="text-[#5A5FF9]">Ans:</p>
          <h6 className="text-[13px] text-gray-base pr-4">
            {accordion?.description}
          </h6>
        </div>
      )}
    </div>
  );
};

export default Accordion;
