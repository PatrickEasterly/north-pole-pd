///     is severe
function isSevere(caseObj) {
    return caseObj.severity >= 4;
}
// console.log(isSevere(database["cases"][4]))

///     is open
function isOpen(caseObj) {
    return caseObj.status == "open";
}
// console.log(isOpen(database["cases"][0]))

///     open cases
function openCases(data){
    return data.cases.filter(isOpen);
    // console.log(data.cases[0]["status"])
}
// console.log(openCases(database));
///     severe cases
function severeCases(data) {
    return data.cases.filter(isSevere);
}
// console.log(severeCases(database));
///     meh cases
// first, make a notSevere function
function notSevere(item){
    return !isSevere(item);
}

function mehCases(data) {
    return openCases(data).filter(notSevere);
}
// console.log(mehCases(database));

