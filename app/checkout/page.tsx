import Link from "next/link";
import { Contact, PaymentIcon, ShippingIcon, Size } from "../components/icons";
import Image from "next/image";

export default function Checkout() {
  return (
    <>
      <div className="">
        <div className="container w-[90%] mx-auto pt-[40px] font-poppins">
          <div className="hidden md:flex flex-col gap-[12px]">
            <h4 className="text-[#111827] text-[36px] leading-[40px] font-semibold">
              Checkout
            </h4>
            <span className="flex gap-[12px] text-[#4B5563] font-medium leading-[24px] text-[16px]">
              <Link className="" href="/">
                Homepage
              </Link>
              <span>/</span>
              <span className="">Checkout</span>
            </span>
          </div>

          <div className="md:mt-[52px] flex md:flex-row flex-col gap-[40px]">
            <div className="md:w-[50%] shrink-[1] order-2 flex flex-col gap-[40px]">
              <div className="border-[#E5E7EB] border-[1px] rounded-[16px] mt-[40px] md:mt-0">
                <div className="flex p-[24px] gap-[12px] items-center border-b-[#E5E7EB] border-b-[1px]">
                  <span className="flex items-center shrink-0">
                    <Contact />
                  </span>
                  <span className="text-[#4B5563] text-sm leading-[20px] md:text-[16px] md:leading-[24px] mt-[3px]">
                    CONTACT INFO
                  </span>
                </div>
                <div className="flex flex-col md:flex-row px-[24px] pt-[24px] pb-[32px] gap-[24px]">
                  <div className="flex flex-col gap-[8px] grow-[1]">
                    <label className="font-semibold text-sm md:text-[16px] leading-[20px] text-[#111827]">
                      Your phone number
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="grow-[1] h-[43px] inline-block w-full px-[16px] border-[1px] border-[#E5E7EB] bg-white rounded-[12px]"
                    />
                  </div>
                  <div className="flex flex-col gap-[8px] grow-[1]">
                    <label className="font-semibold text-sm md:text-[16px] leading-[20px] text-[#111827]">
                      Email address
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="grow-[1] h-[43px] inline-block w-full px-[16px] border-[1px] border-[#E5E7EB] bg-white rounded-[12px]"
                    />
                  </div>
                </div>
              </div>
              <div className="border-[#E5E7EB] border-[1px] rounded-[16px]">
                <div className="flex p-[24px] gap-[12px] items-center border-b-[#E5E7EB] border-b-[1px]">
                  <span className="flex items-center shrink-0">
                    <ShippingIcon />
                  </span>
                  <span className="text-[#4B5563] text-[16px] leading-[24px] mt-[3px]">
                    SHIPPING ADDRESS
                  </span>
                </div>
                <div className="flex px-[24px] pt-[24px] pb-[32px] flex-col gap-[24px]">
                  <div className="flex gap-[24px]">
                    <div className="flex flex-col gap-[8px] grow-[1]">
                      <label className="font-semibold text-sm md:text-[16px] leading-[20px] text-[#111827]">
                        First name
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="grow-[1] h-[43px] inline-block w-full px-[16px] border-[1px] border-[#E5E7EB] bg-white rounded-[12px]"
                      />
                    </div>
                    <div className="flex flex-col gap-[8px] grow-[1]">
                      <label className="font-semibold text-sm md:text-[16px] leading-[20px] text-[#111827]">
                        Last name
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="grow-[1] h-[43px] inline-block w-full px-[16px] border-[1px] border-[#E5E7EB] bg-white rounded-[12px]"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-row flex-col gap-[24px]">
                    <div className="flex flex-col gap-[8px] grow-[2]">
                      <label className="font-semibold text-sm md:text-[16px] leading-[20px] text-[#111827]">
                        Address line 1
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="grow-[1] h-[43px] inline-block w-full px-[16px] border-[1px] border-[#E5E7EB] bg-white rounded-[12px]"
                      />
                    </div>
                    <div className="flex flex-col gap-[8px] md:w-[180px]">
                      <label className="font-semibold text-sm md:text-[16px] leading-[20px] text-[#111827]">
                        Apt, suite
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="grow-[1] h-[43px] inline-block w-full px-[16px] border-[1px] border-[#E5E7EB] bg-white rounded-[12px]"
                      />
                    </div>
                  </div>
                  <div className="flex gap-[24px]">
                    <div className="flex flex-col gap-[8px] grow-[1]">
                      <label className="font-semibold text-sm md:text-[16px] leading-[20px] text-[#111827]">
                        Address line 2
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="grow-[1] h-[43px] inline-block w-full px-[16px] border-[1px] border-[#E5E7EB] bg-white rounded-[12px]"
                      />
                    </div>
                  </div>
                  <div className="flex gap-[24px]">
                    <div className="flex flex-col gap-[8px] grow-[1]">
                      <label className="font-semibold text-sm md:text-[16px] leading-[20px] text-[#111827]">
                        City
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="grow-[1] h-[43px] inline-block w-full px-[16px] border-[1px] border-[#E5E7EB] bg-white rounded-[12px]"
                      />
                    </div>
                    <div className="flex flex-col gap-[8px] grow-[1]">
                      <label className="font-semibold text-sm md:text-[16px] leading-[20px] text-[#111827]">
                        Country
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="grow-[1] h-[43px] inline-block w-full px-[16px] border-[1px] border-[#E5E7EB] bg-white rounded-[12px]"
                      />
                    </div>
                  </div>
                  <div className="flex gap-[24px]">
                    <div className="flex flex-col gap-[8px] grow-[1]">
                      <label className="font-semibold text-sm md:text-[16px] leading-[20px] text-[#111827]">
                        State/Province
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="grow-[1] h-[43px] inline-block w-full px-[16px] border-[1px] border-[#E5E7EB] bg-white rounded-[12px]"
                      />
                    </div>
                    <div className="flex flex-col gap-[8px] grow-[1]">
                      <label className="font-semibold text-sm md:text-[16px] leading-[20px] text-[#111827]">
                        Postal code
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="grow-[1] h-[43px] inline-block w-full px-[16px] border-[1px] border-[#E5E7EB] bg-white rounded-[12px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-[#E5E7EB] border-[1px] rounded-[16px]">
                <div className="flex p-[24px] gap-[12px] items-center border-b-[#E5E7EB] border-b-[1px]">
                  <span className="flex items-center shrink-0">
                    <PaymentIcon />
                  </span>
                  <span className="text-[#4B5563] text-[16px] leading-[24px] mt-[3px]">
                    PAYMENT
                  </span>
                </div>
                <div className="flex px-[24px] pt-[24px] pb-[32px] gap-[24px] flex-col">
                  <div className="flex flex-col gap-[8px] grow-[1]">
                    <label className="font-semibold text-sm md:text-[16px] leading-[20px] text-[#111827]">
                      Card number
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="grow-[1] h-[43px] inline-block w-full px-[16px] border-[1px] border-[#E5E7EB] bg-white rounded-[12px]"
                    />
                  </div>
                  <div className="flex flex-col gap-[8px] grow-[1]">
                    <label className="font-semibold text-sm md:text-[16px] leading-[20px] text-[#111827]">
                      Name on the card
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="grow-[1] h-[43px] inline-block w-full px-[16px] border-[1px] border-[#E5E7EB] bg-white rounded-[12px]"
                    />
                  </div>
                  <div className="flex gap-[24px]">
                    <div className="flex flex-col gap-[8px] grow-[2]">
                      <label className="font-semibold text-sm md:text-[16px] leading-[20px] text-[#111827]">
                        Expiration date {"(MM/YY)"}
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="grow-[1] h-[43px] inline-block w-full px-[16px] border-[1px] border-[#E5E7EB] bg-white rounded-[12px]"
                      />
                    </div>
                    <div className="flex flex-col gap-[8px] w-[180px]">
                      <label className="font-semibold text-sm md:text-[16px] leading-[20px] text-[#111827]">
                        CVC
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="grow-[1] h-[43px] inline-block w-full px-[16px] border-[1px] border-[#E5E7EB] bg-white rounded-[12px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-[50%] order-1 shrink-[1] font-poppins">
              <h5 className="text-[#111827] text-sm md:text-[24px] font-semibold leading-[20px] md:leading-[32px] mb-[24px]">
                Order summary
              </h5>
              <div className="border-t-[1px] border-t-[#E5E7EB] py-[24px] flex items-center gap-[24px]">
                <div className="shrink-0 relative w-[96px] overflow-hidden h-[108px] rounded-[12px]">
                  <Image src="/assets/image.png" alt="" fill sizes="100vw" />
                </div>
                <div className="flex grow-[1] items-center justify-between">
                  <div className="flex flex-col  md:grow-0 grow">
                    <h5 className="leading-[24px] text-[16px] text-[#111827]">
                      Black Automatic Watch
                    </h5>
                    <div className="mt-[4px] flex gap-[4px]">
                      <Size />
                      <span className="text-sm leading-[20px] text-[#4B5563]">
                        One size
                      </span>
                    </div>
                    <div className="mt-[32px] flex justify-between">
                      <div className="flex md:hidden flex-col">
                        <span className="text-[#111827] text-[14px] leading-[20px] font-semibold">
                          $169.99
                        </span>
                        <span className="text-[#4B5563] text-[12px] leading-[16px] line-through">
                          $199.99
                        </span>
                      </div>
                      <div className="px-[12px] py-[8px] bg-[#F8F8F8] flex gap-[5px] items-center rounded-[9999px] justify-between w-[110px]">
                        <div className="flex rounded-[9999px] justify-center items-center border-[1px] border-[#E5E7EB]  bg-white text-black w-[24px] h-[24px]">
                          -
                        </div>
                        <input
                          className="inline-block bg-transparent text-center w-[24px] border-none outline-none"
                          type="text"
                        />
                        <div className="flex rounded-[9999px] justify-center items-center border-[1px] border-[#E5E7EB]  bg-white text-black w-[24px] h-[24px]">
                          +
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex flex-col">
                    <span className="text-[#111827] text-[16px] leading-[24px] font-semibold">
                      $169.99
                    </span>
                    <span className="text-[#4B5563] text-sm leading-[20px] line-through">
                      $199.99
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-t-[1px] border-t-[#E5E7EB] py-[24px] flex items-center gap-[24px]">
                <div className="shrink-0 relative w-[96px] overflow-hidden h-[108px] rounded-[12px]">
                  <Image src="/assets/image.png" alt="" fill sizes="100vw" />
                </div>
                <div className="flex grow-[1] items-center justify-between">
                  <div className="flex flex-col  md:grow-0 grow">
                    <h5 className="leading-[24px] text-[16px] text-[#111827]">
                      Black Automatic Watch
                    </h5>
                    <div className="mt-[4px] flex gap-[4px]">
                      <Size />
                      <span className="text-sm leading-[20px] text-[#4B5563]">
                        One size
                      </span>
                    </div>
                    <div className="mt-[32px] flex justify-between">
                      <div className="flex md:hidden flex-col">
                        <span className="text-[#111827] text-[14px] leading-[20px] font-semibold">
                          $169.99
                        </span>
                        <span className="text-[#4B5563] text-[12px] leading-[16px] line-through">
                          $199.99
                        </span>
                      </div>
                      <div className="px-[12px] py-[8px] bg-[#F8F8F8] flex gap-[5px] items-center rounded-[9999px] justify-between w-[110px]">
                        <div className="flex rounded-[9999px] justify-center items-center border-[1px] border-[#E5E7EB]  bg-white text-black w-[24px] h-[24px]">
                          -
                        </div>
                        <input
                          className="inline-block bg-transparent text-center w-[24px] border-none outline-none"
                          type="text"
                        />
                        <div className="flex rounded-[9999px] justify-center items-center border-[1px] border-[#E5E7EB]  bg-white text-black w-[24px] h-[24px]">
                          +
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex flex-col">
                    <span className="text-[#111827] text-[16px] leading-[24px] font-semibold">
                      $169.99
                    </span>
                    <span className="text-[#4B5563] text-sm leading-[20px] line-through">
                      $199.99
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
