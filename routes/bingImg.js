const axios = require("../module/axiosA");
module.exports = (req, res) => {
	axios.$get("https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US")
		.then((resA) => {
			res.end(JSON.stringify(resA.data));
		})
		.catch((err) => {
			console.log(err);
		});
};
