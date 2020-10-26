class Wallet {
    constructor(money){
        let _money = money;
        // gathering wallet value
        this.getWalletValue = () => _money;
    
    //  checking if user has enough money
    this.checkCanPlay = value => {
        if (_money >= value) return true;
        return false;
    }
// changing wallet value;
    this.changeWallet = (value, type ="+")=> {
        if (typeof value === "number" && !isNaN(value))
        {
        if (type === "+") {
          return _money += value;
        } else if (type === "-"){
          return _money -= value;
        } else {
        throw new Error("nieprawidłowy typ działania")
        }
        
    } else {
        console.log(typeof value);
        throw new Error ("nieprawidłowa liczba")
    }
}
    }


    }

