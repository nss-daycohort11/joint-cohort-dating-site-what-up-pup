define(function (require) {

	return {
		loadProfile: function () {
			require(["hbs!../templates/profile"], function (profileLoad) {
				$("#catcher").html(profileLoad);
				console.log("load profile", profileLoad());
			});
		},

		buildProfiles: function (users) {
			require(["hbs!../templates/candidates"], function (candidates) {
				$("#main-content").append(candidates({users: users}));
			});
		}
	};
});