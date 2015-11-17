define(function (require) {

	return {
		dom: function (users) {
			require(["hbs!../templates/candidates"], function (candidates) {
				$("#main-content").append(candidates({users: users}));
			});
		}
	}
});