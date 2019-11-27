export class Account {
    private accountNo: number;
    private password: string;
    private amount: number;
    private customerName: string;

    constructor(accountNo: number, password: string, amount: number, customerName: string) {
        this.accountNo = accountNo;
        this.password = password;
        this.amount = amount;
        this.customerName = customerName;
    }

    public getAccountNo() {
        return this.accountNo;
    }

    public getPassword() {
        return this.password;
    }

    public getAmount() {
        return this.amount;
    }

    public getCustomerName() {
        return this.customerName;
    }
}
