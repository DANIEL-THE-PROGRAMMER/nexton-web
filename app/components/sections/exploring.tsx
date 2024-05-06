import { ArrowRight } from "../icons";

export const Exploring = () => {
  return (
    <>
      <div className="flex w-[90%] container mx-auto flex-col gap-[40px] font-poppins md:py-[88px] py-[52px]">
        <h4>
          <span className="text-[#111827] text-[24px] md:text-[36px] font-poppins leading-[32px] md:leading-[40px] font-semibold">
            Start exploring.
          </span>
          <span className="text-[rgba(75,85,99,0.80)] text-[36px] font-poppins leading-[40px] hidden md:inline-block font-semibold">
            {" "}
            Good things are waiting for you
          </span>
        </h4>
        <div className="flex gap-[20px] font-poppins overflow-auto">
          <div className="flex justify-between items-center bg-[#F8F8F8] md:p-[40px] px-[24px] md:px-[40px] rounded-[16px] grow-[1] shrink-0 w-[312px] md:w-auto">
            <div className="flex flex-col">
              <span className="text-[#111827] text-[20px] md:text-[24px] font-semibold leading-[28px] md:leading-[32px]">
                For Men{"'"}s
              </span>
              <span className="text-[12px] md:text-sm leading-[16px] md:leading-[20px] text-[#4B5563]">
                Starting at $24
              </span>
            </div>
            <div className="flex gap-[8px] items-center">
              <div className="flex items-center px-[12px] uppercase border-l-[3px] border-l-[#E5E7EB] text-[12px] md:text-sm leading-[16px] md:leading-[20px]">
                <span>Shop now</span>
              </div>
              <ArrowRight />
            </div>
          </div>
          <div className="flex justify-between items-center bg-[#F8F8F8] p-[40px] rounded-[16px] grow-[1] shrink-0 w-[312px] md:w-auto">
            <div className="flex flex-col">
              <span className="text-[#111827] text-[20px] md:text-[24px] font-semibold leading-[28px] md:leading-[32px]">
                For Women{"'"}s
              </span>
              <span className="text-[12px] md:text-sm leading-[16px] md:leading-[20px] text-[#4B5563]">
                Starting at $19
              </span>
            </div>
            <div className="flex gap-[8px] items-center">
              <div className="flex items-center px-[12px] uppercase border-l-[3px] border-l-[#E5E7EB] text-[12px] md:text-sm leading-[16px]">
                <span>Shop now </span>
              </div>
              <ArrowRight />
            </div>
          </div>
          <div className="flex justify-between items-center bg-[#F8F8F8] p-[40px] rounded-[16px] grow-[1] shrink-0 w-[312px] md:w-auto">
            <div className="flex flex-col">
              <span className="text-[#111827] text-[20px] md:text-[24px] font-semibold leading-[28px] md:leading-[32px]">
                Accessories
              </span>
              <span className="text-[12px] md:text-sm leading-[16px] md:leading-[20px] text-[#4B5563]">
                Explore accessories
              </span>
            </div>
            <div className="flex gap-[8px] items-center">
              <div className="flex items-center px-[12px] uppercase border-l-[3px] border-l-[#E5E7EB] text-[12px] md:text-sm leading-[16px]">
                <span>Shop now </span>
              </div>
              <ArrowRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
