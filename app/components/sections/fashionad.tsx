import Image from "next/image";

export const FashionAd = () => {
  return (
    <>
      <div className="py-[52px] container mx-auto hidden md:flex">
        <div className="px-[120px] py-[49px] flex items-center  rounded-[24px] bg-[#F5F5F5] min-h-[497px] w-full relative overflow-hidden">
          <div className="absolute w-[55%] h-full top-0 right-0">
            <div className="relative w-full h-full">
              <Image
                src="/assets/bg-image.png"
                alt="bg-image"
                fill
                sizes="100vw"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[24px] relative z-10">
            <small className="text-[#48B5563] font-medium text-[20px] font-poppins leading-[28px]">
              100% Original Products
            </small>
            <h3 className="flex flex-col text-[#111827] text-[36px] leading-[40px] font-semibold">
              <span>The All New Fashion</span>
              <span>Collection Items</span>
            </h3>
            <small className="text-[#48B5563] font-medium text-[20px] font-poppins leading-[28px]">
              Starting from: $59.99
            </small>
            <button className="flex outline-none  border-none min-h-[63px] w-[144px] justify-center gap-[10px] items-center bg-[#111827] rounded-[9999px]">
              <span className="text-[16px] font-poppins font-medium leading-[24px] text-white">
                Shop now
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
