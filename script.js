const collection = [
    {
        name: "Chilling Adventures of Sabrina",
        picture: "assets/Sabrina.jpg",
        duration: "2018-2020",
        genre: ["Horror","Suspence"],
        seasons: "4 seasons",
        episodes: "36 episodes",
        casting: 
        [
            "Kiernan Shipka", 
            "Gavin Leatherwood",
            "Ross Lynch",
            "Michelle Gomez",
        ]   
        
    }

    ,
    {
        name: "The hook Up Plan",
        picture: "assets/Plan Coeur.jpg",
        duration: "2018-2022",
        genre: ["Romance","Comedy"],
        seasons: "3 seasons",
        episodes: "21 episodes",
        casting:
        [
            "Zita Hanrot",
            "Marc Ruchmann",
            "Joséphine Draï",
            "Sabrina Ouazani",
        ]
    }
    ,
    {
        name: "Santa Clarita Diet",
        picture: "assets/SCD.jpg",
        duration: "2017-2019",
        genre:["Horror","Comedy"],
        seasons: "3 seasons",
        episodes: "30 episodes",
        casting:
        [
            "Timothy Olyphant",
            "Drew Barrymore",
            "Liv Hewson",
            "Skyler Gisondo"
        ]

    }
    ,
    {
        name: "Sense 8",
        picture: "assets/sense8.jpg",
        duration: "2015-2018",
        genre: ["Suspence","Science fiction"],
        seasons: "2 seasons",
        episodes: "24 episodes",
        casting: 
        [
            "Jamie Clayton",
            "Max Riemelt",
            "Brian J. Smith",
            "Miguel Ángel Silvestre",
        ],
    }
    ,
    {
        name: "You",
        picture: "assets/you.jpg",
        duration: "2018 - Present",
        genre: ["Thriller","Crime"],
        seasons: "3 seasons",
        episodes: "30 episodes",
        casting:
        [
            "Penn Badgley",
            "Victoria Pedretti",
            "Tati Gabrielle",
            "Jenna Ortega",
        ],
    }
    ,
    {
        name: "Stranger Things",
        picture: "assets/Stranger.jpg",
        duration: "2016 - Present",
        genre: ["Horror","Suspence"],
        seasons: "4 seasons",
        episodes: "34 episodes",
        casting:
        [
            "Millie Bobby Brown",
            "Finn Wolfhard",
            "Noah Schnapp",
            "Caleb McLaughlin",
        ]

    }
    ,
    {
        name: "Games of Thrones",
        picture: "assets/GoT.jpg",
        duration: "2011-2019",
        genre: ["Fantasy","Adventure"],
        seasons: "8 seasons",
        episodes: "73 episodes",
        casting:
        [
            "Emilia Clarke",
            "Kit Harington",
            "Sophie Turner",
            "Maisie Williams",
        ]
    }
    ,
    {
        name: "WandaVision",
        picture: "assets/wanda.jpg",
        duration: 2021,
        genre: ["Science fiction","Action"],
        seasons: "1 season",
        episodes: "9 episodes",
        casting:
        [
            "Elizabeth Olsen",
            "Evan Peters",
            "Kathryn Hahn",
            "Kat Dennings",
        ]
    }
    ,
    {
        name: "The Originals",
        picture: "assets/Originals.jpg",
        duration: "2013-2018",
        genre: ["Horror","Mystery"],
        seasons: "5 seasons",
        episodes: "92 episodes",
        casting: 
        [
            "Joseph Morgan",
            "Daniel Gillies",
            "Phoebe Tonkin",
            "Claire Holt",
        ]
    }
    ,
    {
        name: "Gossip Girl",
        picture: "assets/xoxo.jpg",
        duration: "2007-2012",
        genre: ["Romance","Drama"],
        seasons: "6 seasons",
        episodes: "121 episodes",
        casting:
        [
            "Blake Lively",
            "Leighton Meester",
            "Ed Westwick",
            "Chace Crawford",
        ]
    }

]

for(let elem of collection){
    let carte= document.createElement('div');
    document.getElementsByClassName('container')[0].appendChild(carte);

    //name
    let names= document.createElement('h2');
    names.textContent=elem['name'];
    carte.appendChild(names);

    //duration
    let dur= document.createElement("p")
    dur.classList.add("duration")
    dur.textContent=elem['duration'];
    carte.appendChild(dur)

    //genre
    let gen= document.createElement("p")
    gen.classList.add("genre")
    gen.textContent=elem['genre'];
    carte.appendChild(gen)

    //seasons
    let sea= document.createElement("p")
    sea.classList.add("seasons")
    sea.textContent=elem['seasons'];
    carte.appendChild(sea)

    //episodes
    let ep= document.createElement("p")
    ep.classList.add("episodes")
    ep.textContent=elem['episodes'];
    carte.appendChild(ep)

    //casting
    let cast= document.createElement("p")
    cast.classList.add("casting")
    cast.textContent=elem['casting'];
    carte.appendChild(cast)

     //images
     let image= document.createElement('img');
     image.classList.add()
     image.src=elem['picture'];
     carte.appendChild(image);
}
