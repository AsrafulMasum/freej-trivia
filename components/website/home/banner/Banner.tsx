import CustomButton from "@/components/shared/CustomButton";
import Avatar from "./Avatar";
import { FaPlay } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="text-white flex flex-col items-center gap-4 py-16">
      <h2 className="text-7xl font-bold mb-2">
        Created by Around Our{" "}
        <span className="bg-linear-to-r from-[#F4000C] via-[#770088] to-[#0A00F5] bg-clip-text text-transparent">
          Freej
        </span>
      </h2>
      <p className="text-xl font-semibold uppercase">
        Play, Laugh, Win Together!
      </p>
      <p className="text-xl font-semibold uppercase">
        70+ categories, power-ups, and live rooms for friends & family
      </p>

      <Avatar />

      <div className="flex gap-5 mt-16">
        <CustomButton
          style="bg-[linear-gradient(191deg,#0080FF_1.79%,#04A3FF_95.03%)] rounded-full w-[310px] h-[96px] text-xl font-medium cursor-pointer shadow-[0_2px_4px_0_rgba(0,0,0,0.16)]"
          text="Start Offline Game"
          leftIcon={<FaPlay className="mr-2" />}
        />
        <CustomButton
          style="bg-[linear-gradient(123deg,#FF3636_16.52%,#FF6262_86.4%)] rounded-full w-[310px] h-[96px] text-xl font-medium cursor-pointer shadow-[0_2px_4px_0_rgba(0,0,0,0.16)]"
          text="Melas vs Melas Game"
          leftIcon={<FaPlay className="mr-2" />}
        />
      </div>
    </div>
  );
};

export default Banner;
