const userCard = {
    name: "Jack",
    age: 25,
    town: "Palaheivka",
    favouriteDish: "Pampuskyy"
}

const keys = Object.keys(userCard);
const values = Object.values(userCard);
const entries = Object.entries(userCard);

console.log(`Список ключів: ${keys}`);
console.log(`Список значень: ${values}`)
console.log(`Список пар ключ-значення: ${entries}`)