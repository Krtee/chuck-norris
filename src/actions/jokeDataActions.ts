"use server";

/**
 *  fetches a random Chuck Norris Joke from the API: https://api.chucknorris.io/jokes/random
 * @returns A random Chuck Norris Joke
 * @onerror returns a default Joke
 */
export const fetchJokeData = async (): Promise<string> => {
  const chuckNorrisResp = await fetch(
    "https://api.chucknorris.io/jokes/random"
  );
  const chuckNorrisJokeBody = await chuckNorrisResp.json();

  const defaultJoke =
    "The four corners of the Earth are all in Chuck Norris' back yard";
  if (!chuckNorrisJokeBody.value) return defaultJoke;

  return chuckNorrisJokeBody.value;
};
