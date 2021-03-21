module.exports = function(config) {

  config.addCollection("posts", function(collection) {
    const coll = collection.getFilteredByTag("post")
    for(let i = 0; i < coll.length; i++) {
      const prevPost = coll[i-1]
      const nextPost = coll[i+1]
      coll[i].data["prevPost"] = prevPost
      coll[i].data["nextPost"] = nextPost
    }
    return coll
  });

	return {
		dir: {
			input : "./src/pages",
			output : "dist",
			includes : "../_includes",
			data : "../_data"
		},
		templateFormats : ["html", "md", "njk", "css"],
		htmlTemplateEngine : "njk",
		markdownTemplate : "njk"
	};
}