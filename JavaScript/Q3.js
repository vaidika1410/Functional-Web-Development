// mapping over an array of user data to create user cards

const users = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Doe', age: 25 },
    { id: 3, name: 'Bob Smith', age: 40 }
];

const userCards = users.map(user => {
    return `<div class="user-card">
    <h2>${user.name}</h2>
    <p>Age: ${user.age}</p>
    `;
    });

console.log(userCards)    