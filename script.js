//
const freelancers = [
    {
        name: "Alice",
        occupation: "Writer",
        price: 30,
},
{
    name: "Bob",
    occupation: "Teacher",
    price: 50,
},
];

const newFreelancers = [
    {name: "Carol", occupation: "Programmer", price: 70},
    {name: "Julian", occupation: "Chef", price: 35},
    {name: "Tyler", occupation: "Designer", price: 60},
    {name: "Sravan", occupation: "Writer", price: 35},
    {name: "Eden", occupation: "Marketer", price: 55},
    {name: "Margaret", occupation: "Designer", price: 40},
];

avg ();
render();

const addFreelancerIntervalId = setInterval(addFreelancer, 2000);

function avg() {
    const avgElement = document.querySelector("#avg");
    const total = freelancers.reduce((sum, person) => sum + person.price, 0);
    const average = total / freelancers.length;
    avgElement.textContent = `Average Starting Price: $${average.toFixed(2)}`;
    };

function render() {
    const start = document.querySelector("#freelancers");
    const addFreelancer = freelancers.map((person) => {
        const element = document.createElement("p");
        element.textContent = `${person.name} (${person.occupation}): $${person.price}`;
        return element;
    });
    start.replaceChildren(...addFreelancer);
}

function addFreelancer() {
    if (newFreelancers.length > 0) {
        const added = newFreelancers.shift();
        freelancers.push(added);
        render();
        avg();
    } else {
        clearInterval(addFreelancerIntervalId);
    }
}