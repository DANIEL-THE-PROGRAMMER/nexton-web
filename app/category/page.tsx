import { PArrowLeft, PArrowRight, Star } from "../components/icons";
import Image from "next/image";
export default function Categories() {
  return (
    <div className="">
      <div className="container w-[90%] mx-auto flex gap-[20px] pt-[40px]">
        <div className="hidden md:flex flex-col pr-[40px] w-[309px] shrink-0">
          <div className="flex flex-col gap-[23px] pb-[40px] border-b-[1px] border-b-[#94A3B8]">
            <h5 className="font-poppins text-[#111827] leading-[20px] text-[18px] font-semibold">
              Categories
            </h5>
            <div className="flex flex-col gap-[16px]">
              {ItemsCart.map((item, index) => {
                return (
                  <div className="flex gap-[12px] items-center" key={index}>
                    <input
                      type="checkbox"
                      checked={item.checked}
                      className="outline-none border-[#94A3B8] border-[1px] rounded-[4px] w-[20px] h-[20px]"
                    />
                    <span className="text-[#4B5563] text-sm font-poppins leading-[20px]">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="grow-[1] md:w-auto w-full flex gap-[52px] flex-col">
          <div className="flex gap-[20px] md:flex-row flex-col">
            {Array.from({ length: 3 }, (inx, index) => {
              return (
                <div className="flex flex-col grow-[1] gap-[20px]" key={index}>
                  <div className="h-[410px] relative w-full">
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
          <div className="flex gap-[20px] md:flex-row flex-col">
            {Array.from({ length: 3 }, (inx, index) => {
              return (
                <div className="flex flex-col grow-[1] gap-[20px]" key={index}>
                  <div className="h-[410px] relative w-full">
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
          <div className="md:flex hidden gap-[20px]">
            {Array.from({ length: 3 }, (inx, index) => {
              return (
                <div className="flex flex-col grow-[1] gap-[20px]" key={index}>
                  <div className="h-[410px] relative w-full">
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
          <div className="flex justify-center md:justify-end font-poppins">
            <div className="flex items-center">
              <span className="w-[12px] h-[12px] flex items-center justify-center mr-[12px]">
                <PArrowLeft />
              </span>
              <div className="w-[36px] h-[36px] flex items-center justify-center  rounded-[12px] bg-[rgba(229,231,235,0.50)]">
                1
              </div>
              <div className="w-[36px] h-[36px] flex items-center justify-center  rounded-[12px]">
                2
              </div>
              <div className="w-[36px] h-[36px] flex items-center justify-center  rounded-[12px]">
                3
              </div>
              <div className="w-[36px] h-[36px] flex items-center justify-center  rounded-[12px]">
                4
              </div>
              <div className="w-[36px] h-[36px] flex items-center justify-center  rounded-[12px]">
                5
              </div>
              <span className="w-[12px] h-[12px] flex items-center justify-center ml-[12px]">
                <PArrowRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ItemsCart = [
  { name: "Men’s fashion", checked: false },
  { name: "Women’s fashion", checked: false },
  { name: "Kids & Toys", checked: false },
  { name: "Accessories", checked: false },
  { name: "Cosmetics", checked: false },
  { name: "Shoes", checked: false },
  { name: "sports", checked: false },
];
