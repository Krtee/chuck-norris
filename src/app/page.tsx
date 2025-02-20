import GooglyEye from "@/components/GooglyEye";
import { fetchJokeData } from "@/utils/jokeDataUtils";
import { incrementVisitorCount } from "@/utils/visitorCountUtils";
import Image from "next/image";

const Home = async () => {
  const joke: string = await fetchJokeData();
  const visitorCount: number = await incrementVisitorCount();

  return (
    <div className=" min-h-screen m-8 p-8 bg-white rounded-xl">
      <div className="w-full pb-8">
        <Image
          src="/logo.svg"
          alt="Next.js logo"
          width={101}
          height={66}
          priority
        />
      </div>
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

        <div className="flex-1 min-w-40 flex justify-center items-center">
          <p className="h-fit text-xl font-bold text-balance break-words hyphens-auto max-w-[500px]">
            {joke}
          </p>
        </div>
      </main>
      <footer className="pt-8  ">
        <p>{`Diese Webseite wurde bereits ${visitorCount} mal besucht.`}</p>
      </footer>
    </div>
  );
};

export default Home;
