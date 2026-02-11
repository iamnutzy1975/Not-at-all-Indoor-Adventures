module.exports = function(eleventyConfig) {
    
    // 1. Passthrough Copy
    // This tells 11ty to move these files/folders directly to the build folder (_site)
    // without changing them. This is vital for your AI manifest.
    eleventyConfig.addPassthroughCopy("llms.txt");
    
    // If you ever add an 'images' or 'assets' folder inside src, 
    // uncomment the line below:
    // eleventyConfig.addPassthroughCopy("src/assets");

    // 2. Watch Targets
    // This helps the local preview refresh when you change the llms.txt
    eleventyConfig.addWatchTarget("./llms.txt");

    return {
        // Control which folder 11ty should read and where it should write
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes" // This points to your layout.njk location
        },
        // Set the template engine to Nunjucks (njk) for HTML and Markdown files
        templateFormats: ["md", "njk", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk"
    };
};