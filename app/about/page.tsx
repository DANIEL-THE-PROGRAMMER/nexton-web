import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="container mx-auto pt-[40px]">
        <div className="flex flex-col font-poppins gap-[12px]">
          <h4 className="text-[#111827] leading-[46px] text-[36px] font-semibold">
            About us
          </h4>
          <p className="flex flex-col text-[16px] font-medium leading-[24px] text-[#4B5563]">
            <span>
              We not only help you design exceptional products, but also make it
              easy for you
            </span>
            <span>to share your designs with more like-minded people.</span>
          </p>
        </div>
        <div className="flex justify-between items-center mt-[64px] gap-[120px]">
          <div className="relative w-[50%] h-[622px] shrink-0">
            <Image src="/assets/image (1).png" alt="" fill sizes="100vw" />
          </div>
          <div className="flex flex-col">
            <h4 className="text-[#111827] leading-[32px] text-[24px] font-semibold flex flex-col">
              <span>Provide fashionable and</span>
              <span>qualifed products</span>
            </h4>
            <p className="flex flex-col text-[16px] font-medium leading-[24px] text-[#4B5563] mt-[16px]">
              <span>
                Already millions of people are very satisfied by thi. s page
                builder
              </span>
              <span>
                and the number is growing more and more. Technolog developing,{" "}
              </span>
              <span>requirements are increasing. Riode has brought.</span>
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center  gap-[120px] py-[72px]">
          <div className="flex flex-col">
            <h4 className="text-[#111827] leading-[32px] text-[24px] font-semibold flex flex-col">
              <span>Provide fashionable and</span>
              <span>qualifed products</span>
            </h4>
            <p className="flex flex-col text-[16px] font-medium leading-[24px] text-[#4B5563] mt-[16px]">
              <span>
                Already millions of people are very satisfied by thi. s page
                builder
              </span>
              <span>
                and the number is growing more and more. Technolog developing,{" "}
              </span>
              <span>requirements are increasing. Riode has brought.</span>
            </p>
          </div>
          <div className="relative w-[50%] h-[622px] shrink-0">
            <Image src="/assets/image (2).png" alt="" fill sizes="100vw" />
          </div>
        </div>
      </div>
    </>
  );
}
