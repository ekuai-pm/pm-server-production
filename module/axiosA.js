const axiosA = require("axios");
const qs = require("qs");

module.exports = {
	$get: axiosA.get,
	"$post": (url, data) => {
		return axiosA.post(url, qs.stringify(data));
	},
	...axiosA,
};
