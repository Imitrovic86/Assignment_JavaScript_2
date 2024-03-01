let prvi_broj = prompt("Unesite prvi broj:")
const operator = prompt("Unesite operaciju (+, -, *, /):")
let drugi_broj = prompt("Unesite drugi broj:")

prvi_broj = Number(prvi_broj)
drugi_broj = Number(drugi_broj)


switch (operator) {
    case "+": {
        alert("Rezultat sabiranja je:" + (prvi_broj + drugi_broj))
        break
    }
    case "-": {
        alert("Rezultat oduzimanja je:" + (prvi_broj - drugi_broj))
        break
    }
    case "*": {
        alert("Rezultat mnozenja je:" + (prvi_broj * drugi_broj))
        break
    }
    case "/": {
        if (drugi_broj!==0){
            alert("Rezultat deljenja je:" + (prvi_broj / drugi_broj))
        }else {
            alert("Deljenje sa 0 nije dozvoljeno")
        }
         break
    }
    default: {
        alert("Molimo unesite validan operator (+,-,*,/)")
}
}
