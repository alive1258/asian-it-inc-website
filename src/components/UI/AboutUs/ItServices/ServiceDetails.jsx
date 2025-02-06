import ServicesImage from "./ServicesImage";

import ItServiceCard from "./ItServiceCard";
const ServiceDetails = ({ aboutData }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-x-14 gap-y-10">
        <ItServiceCard aboutData={aboutData} />

        <ServicesImage aboutData={aboutData} />
      </div>
    </>
  );
};

export default ServiceDetails;
