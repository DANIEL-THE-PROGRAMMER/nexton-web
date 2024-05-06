import { Bus, RefundsIcon, ReturnIcon, SearchWhite, WorldIcon } from "../icons";
import Image from "next/image";

export const Header = () => {
  return (
    <>
      <div className="min-h-[650px] md:min-h-[700px] relative flex items-center hero bg-[#F8F8F8]">
        <Image
          src="/assets/hero-bg.png"
          alt=""
          width={0}
          height={0}
          style={{
            width: "100%",
            height: "100% ",
            objectFit: "cover",
          }}
          layout="responsive"
          sizes="100vw"
          className="z-0 absolute top-0 left-0 md:block hidden"
        />
        <div className="w-[90%] md:container mx-auto font-poppins">
          <div className="flex flex-col gap-[24px] relative z-10">
            <small className="text-[#48B5563] text-sm font-medium md:text-[20px] font-poppins leading-[28px]">
              Starting from: $49.99
            </small>
            <h3 className="flex flex-col text-[#111827] text-[30px] md:text-[64px] leading-[38px] md:leading-[72px] font-semibold">
              <span>Exclusive collection</span>
              <span>for everyone</span>
            </h3>
            <button className="flex outline-none  border-none w-[156px] min-h-[44px] md:min-h-[63px] md:w-[198px] justify-center gap-[10px] items-center bg-[#111827] rounded-[9999px]">
              <span className="text-sm md:text-[16px] font-poppins font-medium leading-[20px] md:leading-[24px] text-white">
                Explore now
              </span>
              <SearchWhite />
            </button>
          </div>
        </div>
      </div>
      <div className="flex pt-[52px]  pb-[32px] md:justify-center md:flex-row flex-col">
        <div className="md:hidden flex font-poppins text-[16px] font-semibold text-[#111827] leading-[24px] mb-[24px] w-[90%] mx-auto">
          Nexton® always with you
        </div>
        <div className="py-[24px] px-[20px] md:px-[40px] overflow-auto flex md:border-[1px] md:border-[#E5E7EB] bg-white font-poppins rounded-[16px] md:gap-0 gap-[22px]">
          <div className="flex items-center gap-[16px] md:w-[303px] shrink-0">
            <Bus />
            <div className="flex flex-col gap-[2px]">
              <span className="text-[#4B5563] md:text-[#111827] text-sm md:text-[18px] font-semibold leading-[28px]">
                Free shipping
              </span>
              <span className="md:inline-block hidden">
                On orders over $50.00
              </span>
            </div>
          </div>
          <div className="md:flex hidden w-[1px] bg-[#E5E7EB] shrink-0"></div>
          <div className="flex items-center gap-[16px] md:px-[32px]  shrink-0">
            <ReturnIcon />
            <div className="flex flex-col gap-[2px]">
              <span className="text-[#4B5563] md:text-[#111827] text-sm md:text-[18px] font-semibold leading-[28px]">
                Very easy to return
              </span>
              <span className="md:inline-block hidden">Just phone number</span>
            </div>
          </div>
          <div className="md:flex hidden w-[1px] bg-[#E5E7EB] shrink-0"></div>
          <div className="flex items-center gap-[16px] md:px-[32px] shrink-0">
            <WorldIcon />
            <div className="flex flex-col gap-[2px]">
              <span className="text-[#4B5563] md:text-[#111827] text-sm md:text-[18px] font-semibold leading-[28px]">
                Worldwide delivery
              </span>
              <span className="md:inline-block hidden">
                Fast delivery worldwide
              </span>
            </div>
          </div>
          <div className="md:flex hidden w-[1px] bg-[#E5E7EB] shrink-0"></div>
          <div className="flex items-center gap-[16px] dm:px-[32px] shrink-0">
            <RefundsIcon />
            <div className="flex flex-col gap-[2px]">
              <span className="text-[#4B5563] md:text-[#111827] text-sm md:text-[18px] font-semibold leading-[28px]">
                Refunds policy
              </span>
              <span className="md:inline-block hidden">
                60 days return for any reason
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
