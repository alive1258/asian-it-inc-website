import ServiceDetails from "./ServiceDetails";

const ItServices = async ({ aboutData }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/professional-services`
    );
    return (
      <>
        <div className="bg-[#17181A]  py-14">
          <div className="container">
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
