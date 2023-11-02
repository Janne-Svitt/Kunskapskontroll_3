let inputSearch = document.getElementById("inputSearch");
const sectionContent = document.getElementById("sectionContent");


async function fetchData(){
    sectionContent.innerHTML="";
    const response = await fetch(`https://omdbapi.com/?apikey=b63e2782&s=${inputSearch.value}`);
    const responseContent = await response.json();
    console.log(responseContent.Response);
    if(responseContent.Response==="True"){
        for(let i=0; i<responseContent.Search.length; i++){
            const addArticle = document.createElement("article");
            const addH2 = document.createElement("h2");
            const addImg = document.createElement("img");
            console.log(responseContent.Search[i]);
            sectionContent.append(addArticle);
            addArticle.append(addH2);
            addArticle.append(addImg);
            addH2.innerText=responseContent.Search[i].Title;
            addImg.setAttribute("src", responseContent.Search[i].Poster);
        }
    } else {
        sectionContent.innerHTML="To Many Result, Need To Be More Specific!";
    };
}