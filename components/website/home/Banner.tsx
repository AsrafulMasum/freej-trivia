import Image from "next/image";

const Banner = () => {
  return (
    <div className="text-white flex flex-col items-center h-screen gap-4 pt-10">
      <h2 className="text-7xl font-bold mb-2">
        Created by Around OurAround Our{" "}
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

      <div className="flex gap-4 mt-10">
        <div
          style={{
            boxShadow: "0 11px 9.7px 5px rgba(0, 0, 0, 0.07)",
          }}
          className="w-28 h-28 overflow-hidden rounded-full border-3 border-[#F8CB17]"
        >
          <Image
            className="rounded-full scale-[180%]"
            src="/avater/avater3.png"
            alt="hero"
            width={100}
            height={100}
          />
        </div>
        <div
          style={{
            boxShadow: "0 11px 9.7px 5px rgba(0, 0, 0, 0.07)",
          }}
          className="w-28 h-28 overflow-hidden rounded-full border-3 border-[#C387F7]"
        >
          <Image
            className="rounded-full scale-[180%]"
            src="/avater/avater.jpg"
            alt="hero"
            width={100}
            height={100}
          />
        </div>
        <div
          style={{
            boxShadow: "0 11px 9.7px 5px rgba(0, 0, 0, 0.07)",
          }}
          className="w-28 h-28 overflow-hidden rounded-full border-3 border-[#F87171]"
        >
          <Image
            className="rounded-full scale-[180%]"
            src="/avater/avater2.png"
            alt="hero"
            width={100}
            height={100}
          />
        </div>
        <div
          style={{
            boxShadow: "0 11px 9.7px 5px rgba(0, 0, 0, 0.07)",
          }}
          className="w-28 h-28 overflow-hidden rounded-full border-3 border-[#63A3F6]"
        >
          <Image
            className="rounded-full scale-[180%]"
            src="/avater/avater4.png"
            alt="hero"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
