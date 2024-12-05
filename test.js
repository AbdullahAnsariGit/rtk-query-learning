let filter = {
  search: "my query",
  age: 14,
  budget: 2000,
};

const makeDynamicParams = new URLSearchParams(filter);

//Its return query parameter formet like -> search=alex&age=12
console.log("makeDynamicParams", makeDynamicParams.toString());
// console.log("filter", filter);

// Remove nullish value
// function createQueryString(params) {
//   try {
//     return new URLSearchParams(
//       Object.fromEntries(
//         Object.entries(params).filter(([_, v]) => v != null && v != "")
//       )
//     ).toString();
//   } catch (error) {
//     console.log(error);
//   }
// }

// console.log("createQueryString", createQueryString(filter));
