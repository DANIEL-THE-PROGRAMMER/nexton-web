import Image from "next/image";
import { Star } from "../icons";

export const Products = () => {
  return (
    <>
      <div className="flex w-[90%] container mx-auto flex-col gap-[40px] font-poppins py-[52px] md:py-[88px]">
        <h4>
          <span className="text-[#111827] text-[24px] md:text-[36px] font-poppins leading-[32px] md:leading-[40px] font-semibold">
            Recommendations.
          </span>
          <span className="text-[rgba(75,85,99,0.80)] text-[36px] font-poppins leading-[40px] hidden md:inline-block font-semibold">
            {" "}
            Best matching products for you
          </span>
        </h4>
        <div className="flex gap-[20px] overflow-auto">
          {Array.from({ length: 4 }, (inx, index) => {
            return (
              <div
                className="flex w-[100%] md:w-auto flex-col grow-[1] gap-[20px] shrink-0"
                key={index}
              >
                <div className="h-[430px] md:h-[390px] relative w-full">
                  <Image
                    src="/assets/image.png"
                    alt=""
                    fill
                    sizes="100vw"
                    className="rounded-[16px]"
                  />
                </div>
                <div className="flex gap-[15px] flex-col px-[16px]">
                  <div className="flex flex-col">
                    <div className="flex justify-between text-[#111827] text-[16px] font-semibold leading-[24px] w-full">
                      <span className="">Black Automatic Watch</span>
                      <span className="">$169.99</span>
                    </div>
                    <div className="flex justify-between text-[#4B5563] text-sm  leading-[20px] w-full">
                      <span className="">Accessories</span>
                      <span className="line-through">$199.99</span>
                    </div>
                  </div>
                  <div className="flex gap-[4px]">
                    <Star />
                    <span className="text-[#4B5563] text-sm  leading-[20px]">
                      4.9 (98)
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex w-[90%] container mx-auto flex-col gap-[40px] font-poppins py-[88px]">
        <h4>
          <span className="text-[#111827] text-[24px] md:text-[36px] font-poppins leading-[32px] md:leading-[40px] font-semibold">
            Best Sellers.
          </span>
          <span className="text-[rgba(75,85,99,0.80)] text-[36px] font-poppins leading-[40px] hidden md:inline-block font-semibold">
            {" "}
            Best selling of the month
          </span>
        </h4>
        <div className="flex gap-[20px] overflow-auto">
          {Array.from({ length: 4 }, (inx, index) => {
            return (
              <div
                className="flex w-[100%] md:w-auto flex-col grow-[1] gap-[20px] shrink-0"
                key={index}
              >
                <div className="h-[430px] md:h-[390px] relative w-full">
                  <Image
                    src="/assets/image.png"
                    alt=""
                    fill
                    sizes="100vw"
                    className="rounded-[16px]"
                  />
                </div>
                <div className="flex gap-[15px] flex-col px-[16px]">
                  <div className="flex flex-col">
                    <div className="flex justify-between text-[#111827] text-[16px] font-semibold leading-[24px] w-full">
                      <span className="">Black Automatic Watch</span>
                      <span className="">$169.99</span>
                    </div>
                    <div className="flex justify-between text-[#4B5563] text-sm  leading-[20px] w-full">
                      <span className="">Accessories</span>
                      <span className="line-through">$199.99</span>
                    </div>
                  </div>
                  <div className="flex gap-[4px]">
                    <Star />
                    <span className="text-[#4B5563] text-sm  leading-[20px]">
                      4.9 (98)
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
