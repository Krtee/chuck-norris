import { fetchJokeData } from "@/utils/jokeDataUtils";

const JokeComponent = async () => {
  const joke: string = await fetchJokeData();

  return (
    <div className="flex-1 min-w-40 flex justify-center items-center">
      <p className="h-fit text-xl font-bold text-balance break-words hyphens-auto max-w-[500px]">
        {joke}
      </p>
    </div>
  );
};

export default JokeComponent;
