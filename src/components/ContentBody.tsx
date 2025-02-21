import Image from "next/image";
import GooglyEye from "./GooglyEye";
import JokeComponent from "./JokeComponent";

const ContentBody = () => {
  return (
    <main className="flex flex-col md:flex-row gap-8 max-w-full h-fit">
      <div className="  rounded-xl w-full md:w-[40%] 2xl:w-[25%] overflow-hidden relative">
        <GooglyEye className="top-[32%] left-[47%]" />
        <GooglyEye className="top-[32%] left-[54%]" />
        <Image
          className="  "
          src="/me.jpeg"
          alt="Picture of me"
          width={1706}
          height={2614}
          placeholder="blur"
          blurDataURL="/me.jpeg"
        />
      </div>
      <JokeComponent />
    </main>
  );
};

export default ContentBody;
