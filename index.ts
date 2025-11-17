class BankAccount{
    private owner:string;
    private balance:number;
    private accountNumber:number;

    constructor(owner:string,balance:number=0){
        this.owner=owner;
        this.balance=balance;
        this.accountNumber=Math.floor(Math.random()*1000000000);
    }


    deposit(amount:number):void{
            this.balance+=amount;
            console.log(`Balans: ${this.balance}`);
    }
    wihtdraw(amount:number):void{
        if(this.balance>=amount){
            this.balance-=amount;
            console.log(`Balans: ${this.balance}`);
        }else{
            console.log("Kifayət qədər balans yoxdur");
        }
    }
    getBalance():number{
        return this.balance;
    }
    getOwner():string{
        return this.owner;
    }
    getAccountNumber():number{
        return this.accountNumber;
    }
    displayInfo():void{
    console.log(`Sahib: ${this.owner}`);
    console.log(`Balans: ${this.balance}`);
    console.log(`Hesab nömrəsi: ${this.accountNumber}`);
    }





}

class SavingAccount extends BankAccount{
    private interestRate:number;
    private withdrawCount:number;


   constructor(owner:string,initialBalance:number,interestRate:number){
    super(owner,initialBalance);
    this.interestRate=interestRate;
    this.withdrawCount=0;
   }


   applyInterest() {
    const interest = this.getBalance() * this.interestRate;
    this.deposit(interest); 
    console.log(`${interest} faiz balansa əlavə olundu.`);
    }

    withdraw(amount:number){
        if(this.withdrawCount>=2){
            console.log(`Çıxarış sayı:${this.withdrawCount}`);
            console.log(`Ayda yalnız 2 dəfə çıxarış edə bilərsiniz.`);
        }
        else{
            super.wihtdraw(amount);
            this.withdrawCount++;
            console.log(`Bu ay ${this.withdrawCount} dəfə pul çıxarmısınız.`);
        }
    }


   displayInfo():void{
    super.displayInfo();
    console.log(`  Faiz dərəcəsi:${this.interestRate}`);
    }

}

class CheckingAccount extends BankAccount{
    private transactionFee:number;

    constructor(owner:string,balance:number,transactionFee:number=2){
        super(owner,balance);
        this.transactionFee=transactionFee;
    }
    withdraw(amount:number):void{
        const totalAmount=amount+this.transactionFee;
        if(this.getBalance()>=totalAmount){
            super.wihtdraw(totalAmount);
            console.log(`Balans:${this.getBalance()}`);
            console.log(`Çıxarılan məbləğ:${amount}`);
            console.log(`Kommisiya:${this.transactionFee}`);
        }
        else{
            console.log(`Kifayət qədər balans yoxdur.`);
        }
    }
    displayInfo(): void {
        super.displayInfo();
        console.log(` Kommisiya: ${this.transactionFee}`);
    }
}

class BusinessAccount extends BankAccount{

    private loanLimit:number;

    constructor(owner:string,balance:number,loanLimit:number){
        super(owner,balance);
        this.loanLimit=loanLimit;
    }

    requestLoan(amount:number){
        if(amount>this.loanLimit){
            console.log("Loan denied: Loan amount exceeds the limit");
        }
        else{
            this.deposit(amount);
            console.log(`${this.getOwner()} recived a loan of $${amount}`);
            
        }
    }

    displayInfo(): void {
        super.displayInfo();
        console.log(` Loan limit: ${this.loanLimit}`);
    }

}


const acc1=new SavingAccount("Emma",1150,0.05)
const acc2=new CheckingAccount("Liam",500,2)
const acc3=new BusinessAccount("Ava Corp",2000,5000)

acc1.deposit(100)
acc1.applyInterest()
acc2.withdraw(50)
acc3.requestLoan(3000)
acc1.displayInfo()
acc2.displayInfo()
acc3.displayInfo()


