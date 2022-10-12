const createAccount = (balance) => {
	balance += 10; // Bonus for opening an account.
	return {
		deposit: (amount) => {
			balance += amount;
		},
		withdraw: (amount) => {
			balance -= amount;
		},
		getBalance: () => balance,
	};
};

const harrysAccount = createAccount(200);
// undefined

harrysAccount.getBalance();
// 200

harrysAccount.deposit(500);
// undefined

harrysAccount.getBalance();
// 700

harrysAccount.withdraw(200);
harrysAccount.getBalance();
// 500
