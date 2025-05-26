import axios from "axios";

(async () => {
  const response = await axios.get("https://api.github.com/repos/microsoft/playwright");
  console.log("Repository full name:", response.data.full_name);
})();
