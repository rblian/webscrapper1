function searchObjects(objectArray, searchTerm){
    let primaryMatches = [];
    let secondaryMatches = [];
    for (let i of objectArray){
        let object = Object.values(i);
        text = object[0].toLowerCase()
        if (text == searchTerm.toLowerCase()){
            primaryMatches.push(object[1]);
        } else if(text.includes(searchTerm.toLowerCase()) == true){
            secondaryMatches.push(object[1]);
        }
    }
    let newObject = {
        primary: primaryMatches,
        secondary: secondaryMatches,
    };
    return newObject;
}

module.exports = {
    searchObjects: searchObjects
}
