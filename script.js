
//1
let body = document.querySelector("body");
let input = document.getElementById("inputContainer");

const promise = fetch("https://www.reddit.com/r/aww/.json")
.then(results => results.json());

//2
promise.then(data => {
    for (let i = 0; i < 10; i++ ) { // changed to only load first 10
        console.log(data.data.children[i]);
        console.log(data.data.children[i].data.title);
        console.log(data.data.children[i].data.thumbnail);

        let div = document.createElement("div");
        div.innerText = (data.data.children[i].data.title);
        let img = document.createElement("img");
        img.src = (data.data.children[i].data.thumbnail);
        let link = document.createElement('a');
        let permalink = data.data.children[i].data.permalink;
        link.href = "https://www.reddit.com" + permalink;
        link.innerHTML = "link to post";
    
        body.append(div); 
        body.append(img);
        body.append(link);

    }});

    //extended challenge didn't finish yet
        input.addEventListener("submit", () => {
            let enterName = document.getElementById("enterSubredditName");

            const newPromise = fetch("https://www.reddit.com/r/" + enterName + "/.json")
            .then(results => results.json());

            newPromise.then(data => {
                for (let i = 0; i < 10; i++ ) {
                    console.log(data.data.children[i]);
            
                    console.log(data.data.children[i].data.title);
                    console.log(data.data.children[i].data.thumbnail);
            
                    let div = document.createElement("div");
                    div.innerText = (data.data.children[i].data.title);
                    let img = document.createElement("img");
                    img.src = (data.data.children[i].data.thumbnail);
                    let link = document.createElement('a');
                    link.innerHTML = "link to post"
                    link.href = "https://www.reddit.com" + data.data.children[i].data.permalink;
                
                    body.append(div); 
                    body.append(img);
                    body.append(link);           
        }})});