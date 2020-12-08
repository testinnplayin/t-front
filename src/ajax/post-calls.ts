const reqOptions = {
  body: "",
  headers: {
    "Content-Type": "application/json",
  },
  method: "POST",
};

export const postResource = async (url: string, data: any) => {
  reqOptions.body = JSON.stringify(data);
  const postRequest = new Request(url, reqOptions);

  return await (await fetch(postRequest)).json();
};
