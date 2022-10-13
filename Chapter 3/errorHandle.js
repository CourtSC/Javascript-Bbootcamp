try {
	// Acquire resources.
	console.log("Do work.");
} catch (e) {
	console.log(e);
	throw e; // Rethrow to a handler that deals with the failure.
} finally {
	// Relinquish resources
}
