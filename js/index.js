document.getElementById("error-message").style.display="none";

const searchPhones=()=>{
    const searchField=document.getElementById("search-field");
    const searchText=searchField.value;
    //console.log(searchText);
    searchField.value=" ";
    if (searchText=='') {
        alert("Please Select something");
    }
    else {
        const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`
        fetch(url)
        .then(response=>response.json())
        .then(data=>console.log(data.data[0].brand))

    }
}

const displaySearchResult=phones=>{
    const searchResult= document.getElementById("search-result");


}