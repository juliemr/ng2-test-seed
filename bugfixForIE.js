// temporary bugfix for IE (since beta 1; beta 0 works without this)
// https://github.com/angular/angular/issues/6501
// https://github.com/AngularClass/angular2-webpack-starter/issues/213
if (!Object.hasOwnProperty("name")) {
	Object.defineProperty(Function.prototype, "name", {
		get: function() {
			let matches = this.toString().match(/^\s*function\s*(\S*)\s*\(/);
			let name = matches && matches.length > 1 ? matches[1] : "";
			Object.defineProperty(this, "name", { value: name });
			return name;
		}
	});
}