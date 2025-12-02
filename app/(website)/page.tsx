import Banner from "@/components/website/home/banner/Banner";
import { HowItWorks } from "@/components/website/home/how-it-works/HowItWorks";
import { JoinLiveRoom } from "@/components/website/home/live-room/JoinLiveRoom";
import { PlayersFeedback } from "@/components/website/home/testimonials/PlayersFeedback";
import ContainerLayout from "@/layout/ContainerLayout";
import Image from "next/image";

const page = () => {
  return (
    <div className="min-h-screen bg-[linear-gradient(181deg,#FE3131_0.62%,#FF7D36_47.14%,#FF8937_99.35%)]">
      <ContainerLayout>
        <Banner />
        <JoinLiveRoom />
        <HowItWorks />
      </ContainerLayout>
      <Image
        className="w-full"
        src="/downloadBanner.png"
        alt="divider"
        width={1000}
        height={100}
      />
      <ContainerLayout>
        <PlayersFeedback />
      </ContainerLayout>
    </div>
  );
};

export default page;
