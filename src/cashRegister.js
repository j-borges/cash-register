const cashRegister = {
    items: []
}

function addItem(register, name, cost) {
    const item = {
        name: name,
        cost: cost
    }

    register.items.push(item)
}


function getTotal(register) {
    return register.items.reduce((prev, curr) => prev.cost + curr.cost)
}




////////usage//////

addItem(cashRegister, 'shoes', 50)
addItem(cashRegister,'shirt', 15)

const total = getTotal(cashRegister)
console.log('Total is:', total)



console.log(cashRegister)