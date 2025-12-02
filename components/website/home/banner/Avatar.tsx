import Image from "next/image";

const avatars = [
  { src: "/avater/avater3.png", border: "#F8CB17" },
  { src: "/avater/avater.jpg", border: "#C387F7" },
  { src: "/avater/avater2.png", border: "#F87171" },
  { src: "/avater/avater4.png", border: "#63A3F6" },
];

const Avatar = () => {
  return (
    <div className="flex gap-4 mt-10 py-10">
      {avatars.map((avatar, index) => (
        <div
          key={index}
          style={{
            boxShadow: "0 11px 9.7px 5px rgba(0, 0, 0, 0.07)",
            borderColor: avatar.border,
            animationDelay: `${Math.random()}s`,
          }}
          className="w-28 h-28 overflow-hidden rounded-full border-3 animate-bounce-up"
        >
          <Image
            className="rounded-full scale-[180%]"
            src={avatar.src}
            alt="avatar"
            width={100}
            height={100}
          />
        </div>
      ))}
    </div>
  );
};

export default Avatar;
