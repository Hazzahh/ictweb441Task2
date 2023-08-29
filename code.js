//This function is to make a button in which you change to dark or light mode
const btn = document.getElementById("myButton");
const element = document.body;
btn.addEventListener("click", function() {
    element.classList.toggle("dark-mode");
    element.classList.toggle("light-mode");
});

//Create a var from a button 
const newsBtn = document.getElementById("myBtn");

//Create a var for the url you're using for RSS
const rssUrl = "https://rss.app/feeds/fbw1cC3PTPDhp8dT.xml";

//Creating a function once you click the button
newsBtn.addEventListener("click",function() {
    
    //This fetches informaiton from the url that you wanted infromation from.
    fetch(rssUrl)
        
        //this a response to form through a string
        .then(response => response.text())
        .then(str=> {
            
            //This allows to parse the XML code to a DOM document 
            const parser = new DOMParser();

            //This makes the string into a xml text
            const xmlDoc = parser.parseFromString(str, 'text/xml');
            
            //This makes it so that it will grab every information that is in item tag
            const items = xmlDoc.querySelectorAll('item');

            //Creating var from a extisting html element 
            const rssFeedContainer = document.getElementById('rssFeed');
            const linkInfo = document.getElementById('info');
            const newsTitle = document.getElementById('idTitle');

            //This function will show the information you wanting to grab from the xml of the website
            items.forEach(item => {
                var title = item.querySelector('title').textContent;
                var link = item.querySelector('link').textContent;
                var description = item.querySelector('description').textContent;
                
                //This is a funciton in which the information that you wanted to put into html elements
                rssFeedContainer.innerHTML = description;
                newsTitle.innerHTML = title;
                linkInfo.innerHTML = link;
                              
            })
        })
    });

/*
const newsBtn = document.getElementById("myBtn");
//const rssUrl = "https://www.toptal.com/developers/feed2json/convert?url=http://fetchrss.com/rss/64ec1893af6bde2a6e662e8264ec16ba1682e446e346a6a2.xml"
const rssUrl = "https://rss.app/feeds/twN78H4H15lbUJgJ.xml"
newsBtn.addEventListener("click",function() {
    fetch(rssUrl,{
        //method: 'GET',
        //mode: 'no-cors',
        //headers: headers,
    })
    .then(response => {response.text();
        //alert(response);
        console.log(typeof response);
        console.log(response.status); })
        .then(data => {
            console.log(typeof data);
        })})
      */