$("#happy").on("click", (e) => {
	store.dispatch({ type: "HAPPY" });
});

$("#sad").on("click", (e) => {
	store.dispatch({ type: "SAD" });
});

$("#angry").on("click", (e) => {
	store.dispatch({ type: "ANGRY" });
});

$("#confused").on("click", (e) => {
	store.dispatch({ type: "CONFUSED" });
});
