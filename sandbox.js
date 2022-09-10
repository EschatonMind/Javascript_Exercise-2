const names = ['A', 'B', 'C']
for(let i = 0; i < names.length; i++) {
    let html = `<div>${names[i]}</div>`
    console.log(html)
}

const bill = (products, tax) => {
    let total = 0
    for(let i = 0; i < products.length; i++){
        total += products[i] = products[i]*tax
    }
    return total
}

console.log(bill([10,20,100],50))