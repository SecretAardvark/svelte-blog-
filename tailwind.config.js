/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./src/**/*.svelte"],
  // darkmode: true,
  // content: [],
    extend: {},
  plugins: [require("daisyui")],
  daisyui: { 
    themes: true, 
    darkTheme: "synthwave",
    base:true,

  }
}

