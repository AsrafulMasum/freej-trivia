import Image from "next/image";

const Avatar = () => {
  return (
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
  );
};

export default Avatar;
