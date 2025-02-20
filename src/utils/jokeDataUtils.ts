/**
 *  fetches a random Chuck Norris Joke from the API: https://api.chucknorris.io/jokes/random
 * @returns A random Chuck Norris Joke
 * @onerror returns a default Joke
 */
export const fetchJokeData = async (): Promise<string> => {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  const ChuckNorrisJokeBody = await res.json();

  const defaultJoke = "Chuck Norris can divide by zero.";

  if (!ChuckNorrisJokeBody.value) return defaultJoke;

  return ChuckNorrisJokeBody.value;
};
