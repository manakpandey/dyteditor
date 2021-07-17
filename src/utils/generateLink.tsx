import axios from "axios";

interface IGenerateLink {
  html: string;
  css: string;
  js: string;
}

const API_URL = "https://cors.bridged.cc/https://pastebin.com/api/api_post.php";

export default async function generateLink({
  html,
  css,
  js,
}: IGenerateLink): Promise<string | number> {
  const data = new FormData();
  data.append("api_option", "paste");
  data.append("api_dev_key", process.env.REACT_APP_PB_KEY as string);
  data.append("api_paste_code", "");

  const keys: Record<number, string> = {};
  let lk=0
  const files = [html, css, js];

  try {
    for (let i = 0; i < 3; i++) {
      const file = files[i];
      if (file) {
        data.set("api_paste_code", file);
        const res = await axios.post(API_URL, data);
        const paste_id = res.data.substring(21);
        keys[i] = paste_id;
        lk++;
      }
    }

    if(lk===0){
      return -1
    }

    data.set("api_paste_code", JSON.stringify(keys));
    const fin = await axios.post(API_URL, data);
    return fin.data.substring(21);
  } catch (e) {
    return -2;
  }
}
