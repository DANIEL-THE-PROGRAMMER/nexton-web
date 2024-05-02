import Image from "next/image";
import { Cart, Search, UserIcon } from "./icons";

export const Nav = () => {
  return (
    <>
      <div className="flex justify-between items-center min-h-[100px] border-b-[#E5E7EB] container mx-auto border-b-[1px] bg-white">
        <Image src="/assets/logo.png" alt="" width={119} height={32} />
        <div className="flex w-[400px] h-[52px] rounded-[9999px] bg-[#F8F8F8] px-[24px] gap-[10px] items-center">
          <Search />
          <input
            type="text"
            placeholder="Search in products..."
            className="bg-transparent outlin-none border-none"
            style={{ width: "calc(100% - 21px)" }}
          />
        </div>
        <div className="flex items-center w-[78px] justify-between">
          <UserIcon />
          <Cart />
        </div>
      </div>
    </>
  );
};
