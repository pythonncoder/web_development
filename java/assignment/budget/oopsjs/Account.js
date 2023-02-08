class account
{
    min_bal = 500;
    acc_bal = 0;
    open_acc(){
        console.log("account opened")

    }
    deposite_acc(balance){
        this.acc_bal = this.min_bal + balance;
    }
}
 let obj1 = new account();
 let obj2 = new account();
 obj1.deposite_acc(500)
 obj2.deposite_acc(2000)
 obj1.open_acc()
 console.log(obj1.acc_bal)
 console.log(obj2.acc_bal)
