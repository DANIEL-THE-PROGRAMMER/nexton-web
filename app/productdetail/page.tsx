import { Star } from "../components/icons";
import Image from "next/image";

export default function ProductDetail() {
  return (
    <>
      <div className="pt-[40px]">
        <div className="flex container mx-auto">
          <div className="flex gap-[32px] w-full items-start">
            <div className="grow-[1] flex flex-col">
              <div className="flex grow-[1] gap-[24px]">
                <div className="w-[180px] flex flex-col shrink-0 gap-[16px]">
                  <div className="flex rounded-[16px] overflow-hidden relative gap-[16px] h-[187px]">
                    <Image src="/assets/image.png" alt="" fill sizes="true" />
                  </div>
                  <div className="flex rounded-[16px] overflow-hidden relative gap-[16px] h-[187px]">
                    <Image src="/assets/image.png" alt="" fill sizes="true" />
                  </div>
                  <div className="flex rounded-[16px] overflow-hidden relative gap-[16px] h-[187px]">
                    <Image
                      src="/assets/product-27-3 1.png"
                      alt=""
                      fill
                      sizes="true"
                    />
                  </div>
                  <div className="flex rounded-[16px] overflow-hidden relative gap-[16px] h-[187px]">
                    <Image
                      src="/assets/product-27-4 1.png"
                      alt=""
                      fill
                      sizes="true"
                    />
                  </div>
                </div>
                <div className="grow-[1] rounded-[16px] overflow-hidden relative">
                  <Image src="/assets/image.png" alt="" fill sizes="true" />
                </div>
              </div>
              <div className="h-[1px] bg-[#E5E7EB] grow-[1] mt-[52px] mb-[52px]"></div>
              <div className="flex flex-col gap-[60px]">
                <div className="flex flex-col gap-[16px]">
                  <h3 className="leading-[40px] text-[36px] font-poppins font-semibold">
                    Black Automatic Watch
                  </h3>
                  <p className="font-poppins text-[#4B5563] leading-[20px] text-[16px] flex flex-col">
                    <span>
                      The St. Louis Meramec Canoe Company was founded by Alfred
                      Wickett in 1922. Wickett had
                    </span>
                    <span>
                      previously worked for the Old Town Canoe Co from 1900 to
                      1914. Manufacturing of the classic{" "}
                    </span>
                    <span>
                      wooden canoes in Valley Park, Missouri ceased in 1978.
                    </span>
                  </p>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <h3 className="leading-[32px] text-[24px] font-poppins font-semibold">
                    Fabric + Care
                  </h3>
                  <p className="font-poppins text-[#4B5563] leading-[20px] text-[16px] flex flex-col">
                    <span>Color: Various</span>
                  </p>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <h3 className="leading-[32px] text-[24px] font-poppins font-semibold">
                    Sale performance
                  </h3>
                  <p className="font-poppins text-[#4B5563] leading-[20px] text-[16px] flex flex-col">
                    <span>Sales: 0</span>
                    <span>Review Count: -</span>
                    <span>Review Average: -</span>
                  </p>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <h3 className="leading-[32px] text-[24px] font-poppins font-semibold">
                    Keywords
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-[560px] min-h-[463px] shrink-0 rounded-[16px] border-[#E5E7EB] border-[1px] bg-[rgba(255,255,255,0.00)] flex flex-col p-[33px] gap-[32px]">
              <div className="flex justify-between items-start">
                <div className="flex justify-between ">
                  <span className="flex items-center">
                    <Star />
                    <div className="w-[11px]"></div>
                    <span className="underline text-[#4B5563] font-medium text-[16px] leading-[24px]">
                      142 reviews
                    </span>
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[24px] text-[#111827] font-semibold leading-[32px]">
                    $169.99
                  </span>
                  <span className="text-[#4B5563] text-sm leading-[20px] text-medium line-through">
                    $169.99
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-[96px] flex gap-[40px] flex-col pb-[72px]">
          <h4>
            <span className="text-[#111827] text-[36px] font-poppins leading-[40px] font-semibold">
              Recommendations.
            </span>
          </h4>
          <div className="flex gap-[20px]">
            {Array.from({ length: 4 }, (inx, index) => {
              return (
                <div className="flex flex-col grow-[1] gap-[20px]" key={index}>
                  <div className="h-[390px] relative w-full">
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
      </div>
    </>
  );
}
