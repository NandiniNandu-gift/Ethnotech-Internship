class BankAccount {
    #balance = 0;
    #pin;
    transactions = [];

    constructor(name, pin) {
        this.name = name;
        this.#pin = pin;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            this.transactions.push("Deposited " + amount);
            console.log("Deposited:", amount);
        }
    }

    withdraw(amount, pin) {
        if (pin !== this.#pin) {
            console.log("Wrong PIN");
            return;
        }

        if (amount > this.#balance) {
            console.log("Not enough balance");
        } else {
            this.#balance -= amount;
            this.transactions.push("Withdraw " + amount);
            console.log("Withdraw:", amount);
        }
    }

    checkBalance(pin) {
        if (pin === this.#pin) {
            console.log("Balance:", this.#balance);
        } else {
            console.log("Wrong PIN");
        }
    }

    showHistory() {
        console.log("Transactions:", this.transactions);
    }
}

// Savings Account
class SavingsAccount extends BankAccount {
    addInterest() {
        console.log("Interest added (5%)");
    }
}

// Current Account
class CurrentAccount extends BankAccount {
}


// 🚀 RUN
const acc = new SavingsAccount("Nandini", 1234);

acc.deposit(1000);
acc.withdraw(200, 1234);
acc.checkBalance(1234);
acc.showHistory();
acc.addInterest();