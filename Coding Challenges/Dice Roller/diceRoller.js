// Random number generation in javascript

const diceRoller = (numDice, sizeDice) => {
	const min = 1;
	const max = sizeDice;
	let rolls = [];
	for (let i = 0; i < numDice; i++) {
		rolls.push(Math.trunc(Math.random() * max) + min);
	}
	return rolls;
};

const statRoller = () => {
	let statRolls = [];
	let statTotal = 0;
	while (statTotal < 72) {
		statRolls = [];
		statTotal = 0;
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
