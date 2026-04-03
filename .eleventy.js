module.exports = function(eleventyConfig) {
  // Pass through assets and admin files directly to the compiled site
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");

  return {
    dir: {
      input: "src",    
      output: "_site", 
      includes: "_includes"
    }
  };
};
