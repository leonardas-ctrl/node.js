import casual from "casual";

const city = casual.city;

const randomNum = Math.floor(Math.random() * 10) + 1;

console.log(
  city,
  randomNum,
  casual.suffix[Math.floor(Math.random() * 11) + 1],
  casual.first_name[Math.floor(Math.random())],
  casual.last_name[Math.floor(Math.random())]
);
