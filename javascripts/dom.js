define(function (require) {

	return {
		buildProfiles: function (users) {
			require(["hbs!../templates/candidates"], function (candidates) {
				$("#main-content").append(candidates({users: users}));
			});
		}
	};
});