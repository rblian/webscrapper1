const axios = require("axios");
const cheerio = require("cheerio");

async function getLinks(url){
        try{
            let response = await axios.get(url);
            const $ = cheerio.load(response.data);
            const linkObjects =  $("a");
            const links = [];
            linkObjects.each((index, element) => {
                  links.push({
                    text: $(element).text(), 
                    href: $(element).attr('href'),
              });
            });
            return links
        }
        catch(error){
            console.log(error);
        }}


module.exports={
    getLinks: getLinks
}
