import HeroBanners from "@/components/shared/hero-banners/HeroBanners";

export async function generateMetadata() {
  return {
    title: `Privacy policy |  Core Mind Soft`,
    description:
      " Core Mind Soft provides custom web and mobile app solutions for businesses.",
  };
}

const PrivacyPage = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/privacy-policy`,
      {
        next: {
          revalidate: 30,
        },
      }
    );
    const privacyPolicies = await res.json();
    return (
      <>
        <div>
          <HeroBanners />
        </div>

        <div className="md:mt-28 mt-12 md:pb-10 pb-5 container">
          <div
            dangerouslySetInnerHTML={{
              __html: privacyPolicies?.data?.description,
            }}
          ></div>
        </div>
      </>
    );
  } catch {
    return null;
  }
};

export default PrivacyPage;
