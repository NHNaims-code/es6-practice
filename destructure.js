const personDetails = {name: 'Arman', age: 25, school: 'Kurigram Govt. High', college: 'Kurigram government college', phone: '01784905517',address:'Ulipur Kurigram'}

const{name, phone} = personDetails;

console.log(name, phone);


const complexObject = {
    name : 'Jamal',
    info : {
        address : 'Rampura Dhaka',
        leader : 'Tiger Leader'
    }
}

const {leader} = complexObject.info;
console.log(leader);