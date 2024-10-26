// grouping an array of objects by a specific property(e.g. grouping users by role)

const users = [
    { id: 1, name: 'John', role: 'admin' },
    { id: 2, name: 'Jane', role: 'user' },
    { id: 3, name: 'Bob', role: 'admin' },
    { id: 4, name: 'Alice', role: 'user' },
]

const groupedUsers = users.reduce((acc, user) => {
    if (!acc[user.role]) {
        acc[user.role] = []
        }
        acc[user.role].push(user)
        return acc
        }, {})
        console.log(groupedUsers) 
        // Output: { admin: [ { id: 1, name: 'John', role: 'admin' }, { id: 3, name: 'Bob ', role: 'admin' } ], user: [ { id: 2, name: ' Jane', role: 'user' }, { id: 4, name: 'Alice', role : 'user' } ] } 
        
