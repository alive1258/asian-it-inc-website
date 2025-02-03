import React from "react";
const Industries = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/industries-we-cover`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const data = await res.json();
  const industriesCover = data?.data || [];

  return (
    <>
      <div className="">
        <div className=" py-16">
          <div className="container">
            <h1
              className="md:text-[54px] text-[30px] font-semibold flex justify-center items-center"
              style={{
                background:
                  "linear-gradient(91deg, #A26AFF 0.69%, #3238F8 99.63%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Industries We Cover
            </h1>

            <div className="pt-16 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-12">
              {industriesCover?.map((item) => (
                <div key={item?.id} className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_118_2210)">
                      <path
                        d="M23.7744 6.08672C23.1444 3.76781 20.7327 1.35562 18.4133 0.725625C16.9911 0.37125 15.0861 0.00609375 12.5 0C9.91391 0.00609375 8.00891 0.37125 6.58672 0.725625C4.26781 1.35562 1.85562 3.76734 1.22562 6.08672C0.87125 7.50891 0.506094 9.41391 0.5 12C0.506094 14.5861 0.87125 16.4911 1.22562 17.9133C1.85562 20.2327 4.26781 22.6444 6.58672 23.2744C8.00891 23.6287 9.91484 23.9939 12.5 24C15.0856 23.9939 16.9911 23.6287 18.4133 23.2744C20.7327 22.6444 23.1444 20.2327 23.7744 17.9133C24.1287 16.4911 24.4939 14.5852 24.5 12C24.4939 9.41391 24.1287 7.50891 23.7744 6.08672Z"
                        fill="#E5F4D9"
                      />
                      <path
                        d="M12.5 4.03125C10.9239 4.03125 9.38326 4.49861 8.0728 5.37423C6.76235 6.24984 5.74097 7.49439 5.13784 8.95049C4.5347 10.4066 4.37689 12.0088 4.68437 13.5546C4.99185 15.1004 5.7508 16.5203 6.86525 17.6348C7.9797 18.7492 9.39959 19.5082 10.9454 19.8156C12.4912 20.1231 14.0934 19.9653 15.5495 19.3622C17.0056 18.759 18.2502 17.7377 19.1258 16.4272C20.0014 15.1167 20.4688 13.5761 20.4688 12C20.4688 9.88656 19.6292 7.85967 18.1348 6.36524C16.6403 4.87081 14.6134 4.03125 12.5 4.03125Z"
                        fill="url(#paint0_linear_118_2210)"
                      />
                      <path
                        d="M17.0461 10.6803L12.2541 15.7109C12.1236 15.848 11.9667 15.9572 11.793 16.0322C11.6193 16.1072 11.4322 16.1464 11.243 16.1473H11.2369C11.0487 16.1473 10.8625 16.1096 10.6893 16.0363C10.516 15.963 10.3592 15.8557 10.2281 15.7208L7.68609 13.1019C7.54785 12.9716 7.43742 12.8147 7.36147 12.6407C7.28552 12.4666 7.24562 12.2789 7.24418 12.089C7.24274 11.8991 7.27979 11.7108 7.35309 11.5356C7.42639 11.3604 7.53442 11.2018 7.67067 11.0695C7.80692 10.9372 7.96857 10.8338 8.14585 10.7657C8.32314 10.6975 8.51239 10.666 8.70219 10.673C8.89199 10.68 9.07841 10.7254 9.2502 10.8064C9.42198 10.8874 9.57558 11.0024 9.70172 11.1444L11.2252 12.7142L15.0075 8.74203C15.1348 8.60818 15.2872 8.5007 15.456 8.42573C15.6248 8.35077 15.8067 8.30979 15.9913 8.30513C16.176 8.30048 16.3597 8.33223 16.5321 8.39859C16.7045 8.46495 16.8621 8.56461 16.9959 8.69187C17.1298 8.81914 17.2373 8.97153 17.3122 9.14034C17.3872 9.30914 17.4282 9.49106 17.4328 9.67571C17.4375 9.86035 17.4057 10.0441 17.3394 10.2165C17.273 10.3888 17.1734 10.5465 17.0461 10.6803Z"
                        fill="url(#paint1_linear_118_2210)"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_118_2210"
                        x1="18.1358"
                        y1="17.6358"
                        x2="6.86422"
                        y2="6.36422"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#13B601" />
                        <stop offset="0.52" stop-color="#13B601" />
                        <stop offset="1" stop-color="#CBF4B4" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_118_2210"
                        x1="14.6855"
                        y1="13.2805"
                        x2="10.118"
                        y2="8.7125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#CBF4B4" />
                        <stop offset="0.57" stop-color="white" />
                        <stop offset="1" stop-color="white" />
                      </linearGradient>
                      <clipPath id="clip0_118_2210">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-[#fff] text-base md:text-lg font-medium">
                    {item?.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="bg-[#5A5FF9] size-96 opacity-20 rounded-[1077.908px] relative  left-[400px]"></div> */}
      </div>
    </>
  );
};

export default Industries;
