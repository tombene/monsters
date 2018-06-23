	// user creation

	app.post("/api/user", function (req, res) {
		db.User.findOrCreate({
			where: {
				user_id: req.body.user_id,
			},
			defaults: {
				user_id: req.body.user_id,
				id_token: req.body.user_id,
				user_name: req.body.user_name,
				user_email: req.body.user_email,
				user_photo: req.body.user_photo
			}

		}).then(function (dbuser) {
			res.json(dbuser)
		})
	});
	
	app.get("/api/user/info", function (req, res) {
		db.User.find({
			where: {
				id_token: req.query.id_token
			}
		}).then(function (dbuser) {
			res.json(dbuser)
		});
	});