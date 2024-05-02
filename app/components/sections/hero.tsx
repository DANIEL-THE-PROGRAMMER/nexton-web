import { Bus, RefundsIcon, ReturnIcon, SearchWhite, WorldIcon } from "../icons";
import Image from "next/image";

export const Header = () => {
  return (
    <>
      <div className=" min-h-[700px] relative flex items-center hero">
        <Image
          src="/assets/hero-bg.png"
          alt=""
          width={0}
          height={0}
          style={{
            width: "100%",
            height: "100% ",
            objectFit:"cover"
          }}
          layout="responsive"
          sizes="100vw"
          className="z-0 absolute top-0 left-0"
        />
        <div className=" container mx-auto font-poppins">
          <div className="flex flex-col gap-[24px] relative z-10">
            <small className="text-[#48B5563] font-medium text-[20px] font-poppins leading-[28px]">
              Starting from: $49.99
            </small>
            <h3 className="flex flex-col text-[#111827] text-[64px] leading-[72px] font-semibold">
              <span>Exclusive collection</span>
              <span>for everyone</span>
            </h3>
            <button className="flex outline-none  border-none min-h-[63px] w-[198px] justify-center gap-[10px] items-center bg-[#111827] rounded-[9999px]">
              <span className="text-[16px] font-poppins font-medium leading-[24px] text-white">
                Explore now
              </span>
              <SearchWhite />
            </button>
          </div>
        </div>
      </div>
      <div className="flex pt-[52px] pb-[32px] justify-center">
        <div className="py-[24px] px-[40px] flex border-[1px] border-[#E5E7EB] bg-white font-poppins rounded-[16px]">
          <div className="flex items-center gap-[16px] w-[303px]">
            <Bus />
            <div className="flex flex-col gap-[2px]">
              <span className="text-[#111827] text-[18px] font-semibold leading-[28px]">
                Free shipping
              </span>
              <span>On orders over $50.00</span>
            </div>
          </div>
          <div className="flex w-[1px] bg-[#E5E7EB]"></div>
          <div className="flex items-center gap-[16px] px-[32px]">
            <ReturnIcon />
            <div className="flex flex-col gap-[2px]">
              <span className="text-[#111827] text-[18px] font-semibold leading-[28px]">
                Very easy to return
              </span>
              <span>Just phone number</span>
            </div>
          </div>
          <div className="flex w-[1px] bg-[#E5E7EB]"></div>
          <div className="flex items-center gap-[16px] px-[32px]">
            <WorldIcon />
            <div className="flex flex-col gap-[2px]">
              <span className="text-[#111827] text-[18px] font-semibold leading-[28px]">
                Worldwide delivery
              </span>
              <span>Fast delivery worldwide</span>
            </div>
          </div>
          <div className="flex w-[1px] bg-[#E5E7EB]"></div>
          <div className="flex items-center gap-[16px] px-[32px]">
            <RefundsIcon />
            <div className="flex flex-col gap-[2px]">
              <span className="text-[#111827] text-[18px] font-semibold leading-[28px]">
                Refunds policy
              </span>
              <span>60 days return for any reason</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
