const { getLinks } = require("./scripts/link.js");
const searchLinks = require("./scripts/searchLinks.js"); 
/* test */
const prompt = require("prompt-sync")();

const searchUrl = prompt("Enter a url: ");

async function performSearch(url){
    const searchWord = prompt("Enter a name of a subpage you want found: ");
    const links = await getLinks(searchUrl);
    const result = searchLinks.searchObjects(links, searchWord);
    return result;
}

function processText(array){

    for (i of array){
        if(i.includes("https") == true){
            console.log(i)
        }else{
            let array1 = i.split("/");
            array1.shift();
            let array2 = searchUrl.split("/");
            array2.splice(1, 1);
            for(x of array2){
                if(array1.includes(x)){
                    array2.splice(array2.indexOf(x));
                }
            }
            textToAdd = array2.join("/");
            console.log(textToAdd+i);
    }
}
}

async function display(){
    const results = await performSearch(searchUrl);
    const array = Object.values(results);
    console.log("Exact Matches:")
    
    if (array[0].length == 0){
        console.log("No exact matches.");
    } else{
        processText(array[0]);
    }
    console.log("\nOther matches");
    if (array[1].length == 0){
        console.log("No other matches");
    }else{ 
        processText(array[1]);
}}

display();