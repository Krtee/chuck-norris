"use client";
import { fetchJokeData } from "@/utils/jokeDataUtils";
import { useEffect, useState } from "react";

export const dynamic = "force-dynamic";

const JokeComponent = () => {
  const [joke, setJoke] = useState<string | undefined>();

  /**
   * Updates the joke every time the component mounts
   */
  useEffect(() => {
    updateJoke();
  }, []);

  /**
   * fetches a random Chuck Norris Joke from the API: https://api.chucknorris.io/jokes/random and updates the state
   */
  const updateJoke = async (): Promise<void> => {
    setJoke(await fetchJokeData());
  };

  return (
    <div className="flex-1 min-w-40 flex justify-center items-center">
      {joke ? (
        <p className="h-fit text-xl font-bold text-balance break-words hyphens-auto max-w-[500px]">
          {joke}
        </p>
      ) : (
        <div className="flex flex-col gap-4 w-full  max-w-[500px]">
          <div className="animate-pulse h-4 bg-gray-400 w-full rounded-full" />
          <div className="animate-pulse h-4 bg-gray-400 w-full rounded-full" />
          <div className="animate-pulse h-4 bg-gray-400 w-2/3 rounded-full" />
        </div>
      )}
    </div>
  );
};

export default JokeComponent;
