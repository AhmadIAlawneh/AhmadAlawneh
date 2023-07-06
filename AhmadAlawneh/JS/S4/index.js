let data = [
    { Name: "Ahmad Alawneh", Age: 22, Address:"Nablus Azmout" },
    {Name: "zeyad", Age: 30, Address:"Nablus" },
    { Name: "Ahmad Ibraheem", Age: 35, Address:"Nablus"}
];

function logInfo() {
    console.log("My", "Info");
}

function logWarning() {
    console.warn("My Warning");
}

function logError() {
    console.error("My Error");
}


    function populateTable() {
    console.table(data);
}