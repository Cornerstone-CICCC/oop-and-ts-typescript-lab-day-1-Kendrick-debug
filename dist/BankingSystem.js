"use strict";
// 🏦 Create a banking system where users can create accounts, deposit, withdraw, and check their balance.
// 1. Implement a function `createAccount` that adds a new account to the `accounts` array. It should return a `BankAccount` object.
// 2. Implement a function `processTransaction` that allows deposits and withdrawals and stores them in the transactions array. It should return a string.
// 3. Implement a function `getBalance` that returns the balance of a given account number.
// 4. Implement a function `getTransactionHistory` that returns the list of transactions for an account.
// 5. Implement a function `checkActiveStatus` that returns the active status of an account number.
// 6. Implement a function `closeAccount` that removes an account from the array and returns a confirmation string.
var TransactionType;
(function (TransactionType) {
    TransactionType[TransactionType["Deposit"] = 0] = "Deposit";
    TransactionType[TransactionType["Withdraw"] = 1] = "Withdraw";
})(TransactionType || (TransactionType = {}));
var accounts = [];
function createAccount(accountNo, firstname, lastname, initialDeposit, isActive) {
    if (isActive === void 0) { isActive = true; }
    var newAccount = {
        accountNo: accountNo,
        firstname: firstname,
        lastname: lastname,
        balance: initialDeposit,
        isActive: isActive,
        transactions: []
    };
    accounts.push(newAccount);
    return newAccount;
}
function processTransaction(accountNo, amount, transactionType) {
    var newTransaction = {
        accountNo: accountNo,
        type: TransactionType.Deposit,
        // withdrawal: TransactionType.Withdraw
        amount: amount
    };
    var account = accounts.find(function (acc) { return acc.accountNo === accountNo; });
    if (account) {
        account.transactions.push(newTransaction);
        if (transactionType === TransactionType.Deposit) {
            account.balance += amount;
            return "".concat(amount, " deposited into account number ").concat(accountNo);
        }
        else if (transactionType === TransactionType.Withdraw) {
            if (account.balance >= amount) {
                account.balance -= amount;
                return "".concat(amount, " withdrawn from account number ").concat(accountNo);
            }
            else {
                return "Insufficient funds for withdrawal";
            }
        }
    }
    return "Account not found";
}
function getBalance(accountNo) {
    var account = accounts.find(function (acc) { return acc.accountNo === accountNo; });
    if (account) {
        return account.balance;
    }
    return "Account not found";
}
function getTransactionHistory(accountNo) {
    var account = accounts.find(function (acc) { return acc.accountNo === accountNo; });
    return account ? account.transactions : "Account not found.";
}
function checkActiveStatus(accountNo) {
    var account = accounts.find(function (acc) { return acc.accountNo === accountNo; });
    return account ? account.isActive : "Account not found.";
}
function closeAccount(accountNo) {
    var index = accounts.findIndex(function (acc) { return acc.accountNo === accountNo; });
    if (index === -1) {
        return "Account not found.";
    }
    accounts.splice(index, 1);
    return "Account number ".concat(accountNo, " closed.");
}
// Test cases (students should add more)
console.log(createAccount(1, "John", "Smith", 100)); // { accountNo: 1, firstname: "John", lastname: "Smith", balance: 100, isActive: true, transactions: [] }
console.log(processTransaction(1, 50, TransactionType.Deposit)); // "50 deposited into account number 1"
console.log(processTransaction(1, 20, TransactionType.Withdraw)); // "20 withdrawn from account number 1"
console.log(processTransaction(1, 500, TransactionType.Withdraw)); // "Insufficient funds for withdrawal"
console.log(getBalance(1)); // 130
console.log(getTransactionHistory(1)); // [{ accountNo: 1, amount: 50, type: TransactionType.Deposit }, { accountNo: 1, amount: 20, type: TransactionType.Withdraw }]
console.log(checkActiveStatus(1)); // true
console.log(closeAccount(1)); // "Account number 1 closed"
