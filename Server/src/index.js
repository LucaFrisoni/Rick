const app = require("./app")

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
   console.log(`Server raised in port: http://localhost:${PORT}`);
});

// const http = require("http");
// const PORT = 3001;
// const getCharById = require("./controllers/getCharById");

// http
//   .createServer((req, res) => {
//     const {url} = req
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     if (url.includes("/rickandmorty/character")) {
//       const id = url.split("/").at(-1);
//       getCharById(res, id);
//     }
//   })
//   .listen(PORT, () => {
//     console.log("In port http://localhost:3001");
//   });)
