import WorkDetails from "@/components/UI/Home/OurWorks/WorkDetails/WorkDetails";

export async function generateMetadata({ params }) {
  try {
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/our-works/${params?.id}`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch Work Details with id: ${params?.id}`);
    }
    let ourWorks = await response.json();
    // Extract necessary fields for SEO
    const name =
      ourWorks?.data?.name + " ||   " + " Asian it i inc" ||
      "Work Details || Asian it i inc";
    const description =
      ourWorks?.data?.meta_data ||
      ourWorks?.data?.sort_description ||
      ourWorks?.data?.meta_key ||
      "ourWorks .";
    const image = `${process.env.NEXT_PUBLIC_IMAGE_URL}${ourWorks?.data?.photo}`;
    return {
      title: name,
      description: description,
      openGraph: {
        title: name,
        description: description,
        images: [
          {
            url: image,
            alt: name,
          },
        ],
        type: "article", // or "article", "object", etc.
      },
    };
  } catch (error) {
    console.error("Error fetching Work Details metadata:", error);
    return {
      title: "Work Details Details",
      description: "Detailed view of the Work Details.",
    };
  }
}

const WorkDetailsPage = async ({ params }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/our-works/${params?.id}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch blogs");
    }

    const ourWorkData = await res.json();

    return (
      <div className="">
        <WorkDetails worksData={ourWorkData?.data} />
      </div>
    );
  } catch (error) {
    return <div>error</div>;
  }
};

export default WorkDetailsPage;
