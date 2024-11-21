import HeroBanners from "@/components/shared/hero-banners/HeroBanners";

const PrivacyPage = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/terms-and-conditions`,
      {
        next: {
          revalidate: 30,
        },
      }
    );
    const termsConditions = await res.json();
    return (
      <>
        <div>
          <HeroBanners />
        </div>

        <div className="md:mt-28 mt-12 md:pb-10 pb-5 container">
          <div
            dangerouslySetInnerHTML={{
              __html: termsConditions?.data?.description || "",
            }}
            className="description text-[#292929] my-4 pt-4"
          ></div>
        </div>
      </>
    );
  } catch {
    return null;
  }
};

export default PrivacyPage;
