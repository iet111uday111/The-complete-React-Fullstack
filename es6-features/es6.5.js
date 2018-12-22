const previous = 200;
const current = [
    {expense: 'Guitar', amount:200},
    {expense: 'Mic', amount:100},
    {expense: 'starp', amount:100}
]

const results = current.reduce((sum, expense) => {
    return sum + expense.amount
});

console.log(results);
