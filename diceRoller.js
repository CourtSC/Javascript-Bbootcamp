// Random number generation in javascript

// function that accepts the size and number of dice

// function diceRoller(numDice, sizeDice) {
// 	const min = 1;
// 	const max = sizeDice;
// 	const rolls = [];
// 	for (let i = 0; i < numDice; i++) {
// 		rolls.push(Math.floor(Math.random() * (max - min) + min));
// 	}
// 	return rolls;
// }

const diceRoller = (numDice, sizeDice) => {
	const min = 1;
	const max = sizeDice;
	let rolls = [];
	for (let i = 0; i < numDice; i++) {
		rolls.push(Math.floor(Math.random() * (max - min) + min));
	}
	return rolls;
};

// function statRoller() {
//     let statRolls = []
// 	for (let i = 0; i < 6; i++) {
// 		const rolls = diceRoller(4, 6);
// 		let rollTotal = 0;
// 		for (let j = 0; j < rolls.length; j++) {
// 			rollTotal += rolls[j];
// 		}
// 		rollTotal -= Math.min(...rolls);
// 		statRolls.push(rollTotal);
// 	}
// 	return statRolls;
// }

const statRoller = () => {
	let statRolls = [];
	while (statTotal < 60) {
		statRolls = [];
		let statTotal = 0;
		for (let i = 0; i < 6; i++) {
			const rolls = diceRoller(4, 6);
			let rollTotal = 0;
			rolls.map((roll) => (rollTotal += roll));
			rollTotal -= Math.min(...rolls);
			statRolls.push(rollTotal);
		}
		statRolls.map((stat) => (statTotal += stat));
	}
	return statRolls;
};
