import Image from "next/image";
import { Cart, Search, UserIcon } from "./icons";

export const Nav = () => {
  return (
    <>
      <div className="border-b-[#E5E7EB] border-b-[1px] bg-white">
        <div className="flex justify-between items-center min-h-[64px] md:min-h-[100px] container w-[90%] mx-auto  ">
          <Image
            src="/assets/logo.png"
            alt=""
            width={119}
            height={32}
            className="md:block hidden"
          />
          <Image
            src="/assets/favicon.png"
            alt=""
            width={24}
            height={24}
            className="block md:hidden"
          />
          <div className="flex md:w-[400px] md:h-[52px] w-[200px] h-[36px] rounded-[9999px] bg-[#F8F8F8] px-[24px] gap-[10px] items-center">
            <Search />
            <input
              type="text"
              placeholder="Search in products..."
              className="bg-transparent outlin-none border-none text-[12px] md:text-sm"
              style={{ width: "calc(100% - 21px)" }}
            />
          </div>
          <div className="md:flex hidden items-center md:w-[78px]  justify-between">
            <UserIcon />
            <Cart />
          </div>
          <Image
            src="/assets/hamburger-menu.png"
            alt=""
            width={32}
            height={28}
            className="md:hidden block"
          />
        </div>
      </div>
    </>
  );
};
