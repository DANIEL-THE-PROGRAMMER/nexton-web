import { ArrowRight } from "../icons";

export const Exploring = () => {
  return (
    <>
      <div className="flex container mx-auto flex-col gap-[40px] font-poppins py-[88px]">
        <h4>
          <span className="text-[#111827] text-[36px] font-poppins leading-[40px] font-semibold">
            Start exploring.
          </span>
          <span className="text-[rgba(75,85,99,0.80)] text-[36px] font-poppins leading-[40px] font-semibold">
            {" "}
            Good things are waiting for you
          </span>
        </h4>
        <div className="flex gap-[20px] font-poppins">
          <div className="flex justify-between items-center bg-[#F8F8F8] p-[40px] rounded-[16px] grow-[1] shrink-0">
            <div className="flex flex-col">
              <span className="text-[#111827] text-[24px] font-semibold leading-[32px]">
                For Men{"'"}s
              </span>
              <span className="text-sm leading-[20px] text-[#4B5563]">
                Starting at $24
              </span>
            </div>
            <div className="flex gap-[8px] items-center">
              <div className="flex items-center px-[12px] uppercase border-l-[3px] border-l-[#E5E7EB]">
                <span>Shop now </span>
              </div>
              <ArrowRight />
            </div>
          </div>
          <div className="flex justify-between items-center bg-[#F8F8F8] p-[40px] rounded-[16px] grow-[1] shrink-0">
            <div className="flex flex-col">
              <span className="text-[#111827] text-[24px] font-semibold leading-[32px]">
                For Women{"'"}s
              </span>
              <span className="text-sm leading-[20px] text-[#4B5563]">
                Starting at $19
              </span>
            </div>
            <div className="flex gap-[8px] items-center">
              <div className="flex items-center px-[12px] uppercase border-l-[3px] border-l-[#E5E7EB]">
                <span>Shop now </span>
              </div>
              <ArrowRight />
            </div>
          </div>
          <div className="flex justify-between items-center bg-[#F8F8F8] p-[40px] rounded-[16px] grow-[1] shrink-0">
            <div className="flex flex-col">
              <span className="text-[#111827] text-[24px] font-semibold leading-[32px]">
                Accessories
              </span>
              <span className="text-sm leading-[20px] text-[#4B5563]">
                Explore accessories
              </span>
            </div>
            <div className="flex gap-[8px] items-center">
              <div className="flex items-center px-[12px] uppercase border-l-[3px] border-l-[#E5E7EB]">
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
