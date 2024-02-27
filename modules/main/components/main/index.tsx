import BoneFractureTabs from "../tabs";
import { getData } from "@/services/s3";

const Main = async () => {
  // const data = await getData();

  return (
    <section className="py-4">
      <div className="mx-auto w-full max-w-screen-xl px-2.5 flex flex-col gap-12">
        <div className="flex justify-between">
          <h1 className="font-bold text-3xl">Bone-fraction-detection</h1>

          <p>
            <span className="font-bold">54</span> of{" "}
            <span className="font-bold">100</span> images
          </p>
        </div>

        <BoneFractureTabs />
      </div>
    </section>
  );
};

export default Main;
