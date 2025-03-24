// const person = {
//     name:"shohan",
//     age:20,
//     friends: ["rohan","rakib","asa"]
// }

// const newPerson = JSON.stringify(person);
 
// console.log (newPerson);



const handleLoadData = () => {
    
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(date => console.log(date))
 
}   

const handlePost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then (res => res.json())
    .then (date => {
        console.log(date)
    })
}
