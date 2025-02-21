"use server";

/**
 *  fetches a random Chuck Norris Joke from the API: https://api.chucknorris.io/jokes/random
 * @returns A random Chuck Norris Joke
 * @onerror returns a default Joke
 */
export const fetchJokeData = async (): Promise<string> => {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  const ChuckNorrisJokeBody = await res.json();

  const defaultJoke =
    "The four corners of the Earth are all in Chuck Norris' back yard";
  if (!ChuckNorrisJokeBody.value) return defaultJoke;

  return ChuckNorrisJokeBody.value;
};
