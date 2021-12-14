module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        lead: ["lead", "sans-serif"],
        arastin_pro: ["arastin_pro_free_demoregular", "sans-serif"],
        arastin_script: ["arastin_script_free_demoRg", "sans-serif"],
        arastin_std: ["arastin_std_free_demoregular", "sans-serif"],
        star_avenue: ["star_avenueregular", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      backgroundImage: {
        road: "url(../media/images/road_to_mist.jpg)",
        faith: "url('../media/images/faith.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
