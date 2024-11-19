import Image from "next/image";

import { GrEmptyCircle } from "react-icons/gr";
// import CareerOpportunities from "@/components/UI/Career/CareerOppertunities";
import careerBanner from "../../../../public/assets/images/aboutBanner.png";
import CareerOpportunities from "@/components/UI/Career/CareerOpportunities";
import JoinUs from "@/components/UI/Career/JoinUs/JoinUs";
import FaqHome from "@/components/UI/Home/FaqHome/FaqHome";

const CareerPage = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/career-opportunities`,
      {
        next: {
          revalidate: 30,
        },
      }
    );
    const careerOpportunities = await res.json();

    return (
      <>
        <div>
          {careerOpportunities?.data.length > 0 ? (
            <div>
              <div>
                <Image
                  className="w-full md:h-[350px] h-[150px]"
                  src={careerBanner}
                  height={350}
                  width={900}
                  alt="careerBanner"
                />
              </div>
              <JoinUs />
              <CareerOpportunities careerOpportunities={careerOpportunities} />
              <FaqHome />
            </div>
          ) : (
            <div>
              <div>
                <Image
                  className="w-full md:h-[350px] h-[150px]"
                  src={careerBanner}
                  height={350}
                  width={900}
                  alt="careerBanner"
                />
              </div>
              <div className="container bg-[#f1f1f1] p-8 border-2 border-[#686C72] my-24 rounded-lg flex flex-col justify-center items-center gap-7">
                <GrEmptyCircle className="size-36 bg-[#D2D2D2] text-[72px] text-[#bebaba] p-4 rounded-full" />
                <h1 className="text-[32px] font-semibold text-[#4B4F56]">
                  We currently have no vacancies
                </h1>
              </div>
            </div>
          )}
        </div>
      </>
    );
  } catch (error) {
    console.error("Failed to fetch career opportunities:", error);
    return null;
  }
};

export default CareerPage;
