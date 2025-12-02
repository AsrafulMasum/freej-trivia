import Banner from "@/components/website/home/Banner";
import ContainerLayout from "@/layout/ContainerLayout";

const page = () => {
  return (
    <div className="min-h-screen">
      <ContainerLayout>
        <Banner />
      </ContainerLayout>
    </div>
  );
};

export default page;
