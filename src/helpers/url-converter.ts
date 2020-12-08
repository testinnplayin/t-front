import { postResource } from "../ajax/post-calls";

import { URLCorrespondance } from "../interfaces/url-correspondance";

import { BASE_ROUTE } from "../constants/base-route";

export const shortenURL = async function (originalURL: string) {
  const urlEndpoint = "urls";
  const body: URLCorrespondance = {
    originalURL: originalURL,
    shortenedURL: "",
  };
  return await postResource(`${BASE_ROUTE}/${urlEndpoint}`, body);
};

export const transformURLForBack = function (shortenedURL: string) {
  const bitsOfURL = shortenedURL.split("/");

  return bitsOfURL[bitsOfURL.length - 1];
};
