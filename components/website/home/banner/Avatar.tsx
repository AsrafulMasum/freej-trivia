import Image from "next/image";

const avatars = [
  { src: "/avater/avater3.png", border: "#F8CB17", offset: "0px" },
  { src: "/avater/avater2.png", border: "#F87171", offset: "-50px" },
  { src: "/avater/avater.jpg", border: "#C387F7", offset: "-50px" },
  { src: "/avater/avater4.png", border: "#63A3F6", offset: "0px" },
];

export default function Avatar() {
  return (
    <div className="flex gap-4 mt-10 py-10">
      {avatars.map((avatar, index) => (
        /* Outermost wrapper: WHOLE CIRCLE bounces */
        <div
          key={index}
          className="w-28 h-28 overflow-hidden rounded-full border-3 bounce"
          style={{
            transform: `translateY(${avatar.offset})`,
            boxShadow: "0 11px 9.7px 5px rgba(0, 0, 0, 0.07)",
            borderColor: avatar.border,
            animationDelay: `${index * 0.25}s`,
          }}
        >
          {/* Inner wrapper shifts upward ALWAYS (middle avatars only) */}
          <div className="w-full h-full">
            {/* Image DOES NOT MOVE — stable inside */}
            <Image
              className="rounded-full scale-[180%]"
              src={avatar.src}
              alt={`avatar-${index}`}
              width={100}
              height={100}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
