// try
let input = "user inputer";
try {
	let data = JSON.parse(input);
	console.log("If you're seeing this, input is valid.");
} catch {
	console.log("Invalid input");
}
