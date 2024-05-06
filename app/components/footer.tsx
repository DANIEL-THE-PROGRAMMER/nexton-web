import Image from "next/image";
import { FaceBook, Telegram, Twitter, Youtube } from "./icons";

export const Footer = () => {
  return (
    <>
      <div className="border-y-[1px] border-y-[#E5E7EB] mt-[72px] font-poppins">
        <div className="py-[60px] mx-auto container w-[90%] md:w-auto flex md:flex-row flex-col md:gap-0 gap-[60px]">
          <div className="flex flex-col gap-[20px] grow-[1]">
            <Image src="/assets/logo.png" alt="" width={119} height={32} />
            <div className="flex flex-col gap-[12px]">
              <div className="flex gap-[8px] items-center">
                <FaceBook />
                <span className="text-[#4B5563] text-[16px] leading-[24px] mt-[6px]">
                  Facebook
                </span>
              </div>
              <div className="flex gap-[8px] items-center">
                <Youtube />
                <span className="text-[#4B5563] text-[16px] leading-[24px] mt-[6px]">
                  Youtube
                </span>
              </div>
              <div className="flex gap-[8px] items-center">
                <Telegram />
                <span className="text-[#4B5563] text-[16px] leading-[24px] mt-[6px]">
                  Telegram
                </span>
              </div>
              <div className="flex gap-[8px] items-center">
                <Twitter />
                <span className="text-[#4B5563] text-[16px] leading-[24px] mt-[6px]">
                  Twitter
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[20px] grow-[1]">
            <span className="text-[16px] leading-[24px] text-[#111827] font-semibold">
              Getting started
            </span>
            <span className="text-[16px] leading-[24px] text-[#4B5563]">
              Release Notes
            </span>
            <span className="text-[16px] leading-[24px] text-[#4B5563]">
              Upgrade Guide
            </span>
            <span className="text-[16px] leading-[24px] text-[#4B5563]">
              Browser Support
            </span>
            <span className="text-[16px] leading-[24px] text-[#4B5563]">
              Dark Mode
            </span>
          </div>
          <div className="flex flex-col gap-[20px] grow-[1]">
            <span className="text-[16px] leading-[24px] text-[#111827] font-semibold">
              Explore
            </span>
            <span className="text-[16px] leading-[24px] text-[#4B5563]">
              Prototyping
            </span>
            <span className="text-[16px] leading-[24px] text-[#4B5563]">
              Design systems
            </span>
            <span className="text-[16px] leading-[24px] text-[#4B5563]">
              Pricing
            </span>
            <span className="text-[16px] leading-[24px] text-[#4B5563]">
              Security
            </span>
          </div>
          <div className="flex flex-col gap-[20px] grow-[1]">
            <span className="text-[16px] leading-[24px] text-[#111827] font-semibold">
              Community
            </span>
            <span className="text-[16px] leading-[24px] text-[#4B5563]">
              Discussion Forums
            </span>
            <span className="text-[16px] leading-[24px] text-[#4B5563]">
              Code of Conduct
            </span>
            <span className="text-[16px] leading-[24px] text-[#4B5563]">
              Contributing
            </span>
            <span className="text-[16px] leading-[24px] text-[#4B5563]">
              API Reference
            </span>
          </div>
        </div>
      </div>
      <div className="font-poppins py-[32px]">
        <div className="flex justify-between items-center mx-auto container md:flex-row flex-col gap-[12px]">
          <span className="text-[#4B5563] text-[16px] leading-[24px]">
            Nexton eCommerce. © 2024
          </span>
          <div className="flex gap-[4px] items-center">
            <div className="relative md:w-[58px] md:h-[32px] w-[40px] h-[23px]">
              <Image src="/assets/visa.png" alt="" fill sizes="100vw" />
            </div>
            <div className="relative md:w-[58px] md:h-[32px] w-[40px] h-[23px]">
              <Image src="/assets/paypal.png" alt="" fill sizes="100vw" />
            </div>
            <div className="relative md:w-[58px] md:h-[32px] w-[40px] h-[23px]">
              <Image src="/assets/Vector.png" alt="" fill sizes="100vw" />
            </div>
            <div className="relative md:w-[58px] md:h-[32px] w-[40px] h-[23px]">
              <Image src="/assets/verisign.png" alt="" fill sizes="100vw" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
