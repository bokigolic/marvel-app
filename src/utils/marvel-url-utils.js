

// https://gateway.marvel.com/v1/public/characters?ts=!&apikey=b027cdf1fd36f0d697a69c7ea2cf09c1&hash=
const md5_digest = 'cc1f9cdb07ac470ba5cc5f44b0abdfdb';
const my_url_sufix = 'ts=1&apikey=b027cdf1fd36f0d697a69c7ea2cf09c1&hash=' + md5_digest;


const ENDPOINT_CHARACTERS = 'https://gateway.marvel.com/v1/public/characters?';

export const apiUrlMarvelCharacters = () => {
  return ENDPOINT_CHARACTERS + my_url_sufix;
};

export const apiUrlMarvelSearchCharacterName = (name) => {
  return ENDPOINT_CHARACTERS + my_url_sufix + '&name=' + name;
};