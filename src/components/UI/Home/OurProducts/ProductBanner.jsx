import Image from "next/image";
import productPic from "../../../../../public/assets/images/productBg.png";

const ProductBanner = () => {
  return (
    <div>
      <Image
        className="w-full md:h-[350px] h-[170px]"
        src={productPic}
        height={350}
        width={900}
        alt="productPic"
      />
    </div>
  );
};

export default ProductBanner;
