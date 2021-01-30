const moodReducer = (state, action) => {
	switch (action.type) {
		case "HAPPY":
			console.log("HAPPY");
			return { ...state, mood: "꒡ꆚ꒡" };
		case "SAD":
			return { ...state, mood: "⊙︿⊙" };
		case "ANGRY":
			return { ...state, mood: "눈_눈" };
		case "CONFUSED":
			return { ...state, mood: "●.◉" };
		default:
			return { ...state, mood: "(ᴗ˳ᴗ)" };
	}
};

let currentMood;

const getMood = (state) => {
	return state.mood;
};

const handleChange = () => {
	let previousMood = currentMood;
	currentMood = getMood(store.getState());

	if (previousMood !== currentMood) {
		$("h1").text(store.getState().mood);
	}
};

const store = Redux.createStore(moodReducer);
store.subscribe(handleChange);
