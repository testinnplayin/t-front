const reqOptions = {
  method: "GET",
};

export const getResources = async (url: string) => {
  const getRequest = new Request(url, reqOptions);

  return await (await fetch(getRequest)).json();
};
