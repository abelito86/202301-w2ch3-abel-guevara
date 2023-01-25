const flights = [
    { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
    { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
    { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
    { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
    { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
    { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
    { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
    { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
    { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
    { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];


const flightsToday = () => {

    do {
        userId = prompt("Por favor introduzca su nombre");

        if (userId == "" || userId == null || userId == Number(userId)) {
            alert("Vuelva a introducir su nombre correctamente");
        }

    } while (userId == "" || userId == null || userId == Number(userId));

    alert("Bienvenido a ISDI Coders Airlines, los vuelos programados para hoy son: ");

    for (i = 0; i < flights.length; i++) {
        if (flights[i].scale == true) {
            scaleFlight = "SI"
        } else {
            scaleFlight = "NO"
        };
        console.log(`Los vuelos con origen: ${flights[i].to} y destino ${flights[i].from} tienen un coste de ${flights[i].cost}€, Escala: ` + scaleFlight)
    };


};


const aveCost = () => {
    let sum = flights.reduce((acumulador, actual) => acumulador + actual.cost, 0);
    let average = sum / flights.length;
    console.log(`El coste medio de los vuelos es de: ${average}€`);

};


const flightsScale = () => {
    for (i = 0; i < flights.length; i++) {
        if (flights[i].scale == true) {
            let flightsWithScaleTo = flights[i].to;
            let flightsWithScaleFrom = flights[i].from;
            console.log(`Los vuelos con escalas son => Origen: ${flightsWithScaleTo} Destino: ${flightsWithScaleFrom}`)
        }

    };
};



const lastFlightsDay = () => {
    let lastFive = flights.slice(5);

    console.log(`Los últimos 5 vuelos del día son:`)
    for (i in lastFive) {

        console.log(lastFive[i].from)
    }

}

flightsToday();
console.log("-------------------------------------------------------------------------------------------------");
aveCost();
console.log("-------------------------------------------------------------------------------------------------");
flightsScale();
console.log("-------------------------------------------------------------------------------------------------");
lastFlightsDay();


const adminUser = () => {
    let adminOrUser = prompt(`Hola ${userId} eres USUARIO o ADMIN?`);
    if (adminOrUser === null) {
        adminUser()
    } else if (adminOrUser.toUpperCase() !== "USUARIO" && adminOrUser.toUpperCase() !== "ADMIN") {
        adminUser()
    } else if (adminOrUser === "usuario" || adminOrUser === "admin") {
        adminUser()
    } else if (adminOrUser.toUpperCase() === "ADMIN") {
        admin()
    } else if (adminOrUser.toUpperCase() === "USUARIO") {
        user()
    } else {
        return adminOrUser.toUpperCase();
    }

}

const admin = () => {
    const askAdmin = prompt("Desea AÑADIR o BORRAR vuelos?");

    if (askAdmin === null) {
        alert("Gracias por visitar ISDI Coders Airlines")
    } else if (askAdmin.toUpperCase() !== "AÑADIR" && askAdmin.toUpperCase() !== "BORRAR") {
        admin()
    } else if (askAdmin === "AÑADIR") {
        const newflight = {};
        newflight.id = +flights.length + 1
        newflight.to = prompt("SALIDA")
        newflight.from = prompt("DESTINO")
        newflight.cost = prompt("PRECIO")
        newflight.scale = prompt("ESCALAS, true or false")
        if (newflight.scale === "true") {
            newflight.scale = true
        } else {
            newflight.scale = false
        }
        flights.push(newflight)

        for (i = 0; i < flights.length; i++) {
            if (flights[i].scale == true) {
                scaleFlight = "SI"
            } else {
                scaleFlight = "NO"
            };
            console.log(`Los vuelos con origen: ${flights[i].to} y destino ${flights[i].from} tienen un coste de ${flights[i].cost}€, Escala: ` + scaleFlight)
        };

    } else if (flights[i].id >= 15) {
        alert("Ha superado el número de vuelos para hoy");
        flightdelete = +prompt("Desea borrar algún vuelo?: inserte el ID");
    } else {
        let flightdelete = +prompt("Desea borrar algún vuelo?: inserte el ID");
        flights.splice(flightdelete, 1);

        for (i = 0; i < flights.length; i++) {
            if (flights[i].scale == true) {
                scaleFlight = "SI"
            } else {
                scaleFlight = "NO"
            };
            console.log(`Los vuelos con origen: ${flights[i].to} y destino ${flights[i].from} tienen un coste de ${flights[i].cost}€, Escala: ` + scaleFlight)
        };
    };
};

const user = () => {
    const findPriceFlights = +prompt("Inserte precio de los vuelos que quiera buscar");
    if (findPriceFlights === null) {
        alert("Gracias por visitar ISDI Coders Airlines")
    }
    console.log(`Los Vuelos con precios menores de ${findPriceFlights} son: `)
    flights.forEach(vuelos => {
        if (vuelos.cost <= findPriceFlights) {

            console.log(`Origen: ${vuelos.to} con Destino: ${vuelos.from}`)
        }

    })
};




console.log("-------------------------------------------------------------------------------------------------");
adminUser();