let yourName = "Frank Bourdier"

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    console.log(gb) 
    gb = gb + 1
    console.log(gb)
    console.log('Ginger bread + button was clicked!')
    document.getElementById('qty-gb').textContent = gb;
    document.getElementById('qty-total').textContent = gb + cc + sugar;
})
document.getElementById('minus-gb').addEventListener('click', function() {
    console.log(gb)
    gb = gb - 1
    console.log(gb)
    document.getElementById('qty-gb').textContent = gb;
    document.getElementById('qty-total').textContent = gb + cc + sugar
})
document.getElementById('add-cc').addEventListener('click', function() {
    console.log(cc) 
    cc = cc + 1
    console.log(cc)
    document.getElementById('qty-cc').textContent = cc;
    document.getElementById('qty-total').textContent = gb + cc + sugar
    console.log('Chocolate Chip + button clicked!')
})
document.getElementById('minus-cc').addEventListener('click', function() {  console.log(gb)
    cc = cc - 1
    console.log(cc)
    document.getElementById('qty-cc').textContent = cc;
    document.getElementById('qty-total').textContent = gb + cc + sugar
})

document.getElementById('add-sugar').addEventListener('click',function() {
    console.log(sugar) 
    sugar = sugar + 1
    console.log(sugar)
    document.getElementById('qty-sugar').textContent = sugar;
    document.getElementById('qty-total').textContent = gb + cc + sugar
})
document.getElementById('minus-sugar').addEventListener('click', function() {  console.log(gb)
    sugar = sugar - 1
    console.log(sugar)
    document.getElementById('qty-sugar').textContent = sugar;
    document.getElementById('qty-total').textContent = gb + cc + sugar
})

