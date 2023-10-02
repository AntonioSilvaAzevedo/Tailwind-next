module.exports = {
  plugins: [require("prettier-plugin-tailwindcss")],
};
// module.exports = {
//   plugins: [
//     async () => {
//       const tailwindPlugin = await import("prettier-plugin-tailwindcss");
//       return tailwindPlugin.default;
//     },
//   ],
// };