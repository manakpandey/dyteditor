import axios from "axios";

interface IGetDataFromLinkProps {
  code?: string;
}

export default async function getDataFromLink({
  code,
}: IGetDataFromLinkProps): Promise<{
  html: string;
  css: string;
  js: string;
} | null> {
  if (!code) {
    return null;
  }

  const API_URL = `https://cors.bridged.cc/https://pastebin.com/raw`;

  try {
    const response = await axios.get(`${API_URL}/${code}`);
    const { data } = response;
    const resp = {
      html: "",
      css: "",
      js: "",
    };
    for (const i in data) {
      const res = await axios.get(`${API_URL}/${data[i]}`);
      switch (i) {
        case "0":
          resp.html = res.data;
          break;
        case "1":
          resp.css = res.data;
          break;
        case "2":
          resp.js = res.data;
          break;
      }
    }

    return resp;
  } catch (e) {
    console.log(e);
    return null;
  }
}
