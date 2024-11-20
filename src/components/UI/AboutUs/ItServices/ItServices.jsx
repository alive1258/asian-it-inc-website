import ServiceDetails from "./ServiceDetails";

const ItServices = async ({ aboutData }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/professional-services`,
      {
        next: {
          revalidate: 30,
        },
      }
    );
    return (
      <>
        <div className="bg-[#17181A]  py-14">
          <div className="container md:flex items-center gap-5">
            <ServiceDetails aboutData={aboutData} />
          </div>
        </div>
      </>
    );
  } catch {
    return null;
  }
};

export default ItServices;
