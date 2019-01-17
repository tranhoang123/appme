var keystone = require('keystone');
var Carreer = keystone.List('Carreer');
module.exports = function (req, res) {
	if (!req.body.fName || !req.body.lName || !req.body.phone || !req.body.email) {
		return res.sendError('incomplete data set');
	}
	var newCarreer = new Carreer.model();
	Carreer.updateItem(newCarreer, req.body, function (err) {
		res.locals.enquirySubmitted = true;
		if (err) res.locals.saveError = true;
		res.render('carreer');
	});
};
