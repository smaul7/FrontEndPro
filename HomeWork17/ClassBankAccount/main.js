class BankAccount {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }

    getBalance() {
        return this.balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            console.log("Сума для внесення має бути більшою за 0.");
            return;
        }
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.log("Сума для зняття має бути більшою за 0.");
            return;
        }
        if (amount > this.balance) {
            console.log("Недостатньо коштів на рахунку.");
            return;
        }
        this.balance -= amount;
    }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance());

account1.deposit(500);
console.log(account1.getBalance());

account1.withdraw(200);
console.log(account1.getBalance());
