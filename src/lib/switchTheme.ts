export function switchTheme() {
	const { classList } = document.querySelector("html") as HTMLElement;
	const metaTheme = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement;

	if (classList.contains("dark")) {
		classList.remove("dark");
		metaTheme.setAttribute("content", "rgb(250, 250, 250)"); /* Updated to Lambda neutral 50 */
		localStorage.theme = "light";
	} else {
		classList.add("dark");
		metaTheme.setAttribute("content", "rgb(26, 26, 26)"); /* Updated to Lambda charcoal */
		localStorage.theme = "dark";
	}
}
