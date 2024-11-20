import Image from "next/image";

const ImageGallery = async ({ photos }) => {
  const photoNewData = photos?.split(",");
  console.log(photoNewData, "photoNewDataphotoNewDataphotoNewDataphotoNewData");
  return (
    <>
      <div className="container md:-mt-10 mt-32 md:mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {photoNewData?.map((gallery, index) => (
          <div key={gallery?._id}>
            <Image
              className={`rounded-lg md:h-[420px] h-[300px] w-full shadow-md cursor-pointer hover:scale-105 transition-all ease-in-out hover:shadow-2xl duration-500 ${
                index === 1 || index === 3 ? "md:mt-20" : ""
              }`}
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${gallery}`}
              width={305}
              height={420}
              alt="gallery image"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageGallery;
