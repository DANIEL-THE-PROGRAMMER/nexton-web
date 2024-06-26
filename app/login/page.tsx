import Link from "next/link";

export default function Login() {
  return (
    <div className="">
      <div className="container w-[90%] mx-auto pt-[40px] pb-[72px] flex flex-col items-center font-poppins">
        <h2 className="text-[24px] md:text-[36px] font-poppins leading-[32px] md:leading-[40px] font-semibold text-[#111827]">
          Login
        </h2>
        <div className="mt-[60px] flex flex-col gap-[24px] w-full md:w-auto">
          <div className="flex flex-col gap-[8px]">
            <label className="font-semibold md:text-[16px] text-sm leading-[20px] text-[#111827]">
              Email
            </label>
            <input
              type="text"
              placeholder="example@example.com"
              className="md:w-[440px] w-full h-[43px] px-[16px] border-[1px] border-[#E5E7EB] bg-white rounded-[12px]"
            />
          </div>
          <div className="flex flex-col gap-[8px]">
            <label className="font-semibold md:text-[16px] text-sm leading-[20px] text-[#111827]">
              Password
            </label>
            <input
              type="text"
              placeholder="example@example.com"
              className="md:w-[440px] w-full h-[43px] px-[16px] border-[1px] border-[#E5E7EB] bg-white rounded-[12px]"
            />
          </div>

          <button className="bg-[#111827] md:text-[16px] text-sm leading-[24px] text-white w-full flex justify-center shadow-bs items-center h-[52px] rounded-[9999px]">
            Continue
          </button>
          <div className="flex gap-[16px] items-center">
            <div className="grow-[1] h-[1.6px] bg-[#F3F4F6]"></div>
            <span className="text-[#4B5563] text-sm leading-[20px] font-medium">
              OR
            </span>
            <div className="grow-[1] h-[1.6px] bg-[#F3F4F6]"></div>
          </div>
          <div className="md:text-[16px] text-sm leading-[24px] font-poppins text-center">
            <span className="text-[#4B5563]">New user?{" "}</span>
            <Link href="/register" className="text-[#0EA5E9]">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
