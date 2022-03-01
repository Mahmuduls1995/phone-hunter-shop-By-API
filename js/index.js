document.getElementById("error-message").style.display="none";

const searchPhones=()=>{
    const searchField=document.getElementById("search-field");
    const searchText=searchField.value;
    searchField.value=" ";
    document.getElementById('error-message').style.display = 'none'
    if (searchText== " ") {
        alert("Please Select something");
    }
    else {
        const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`
        fetch(url)
        .then(response=>response.json())
        .then(data=>displaySearchResult(data.data))
        .catch(error=>displayError(error))
    }
}

const displayError=(error)=>{
    document.getElementById('error-message').style.display = 'block';
}

const displaySearchResult=phones=>{
    const searchResult= document.getElementById("search-result");

    searchResult.textContent= '';
    if (phones.length == 0) {
        document.getElementById('error-message').style.display = 'block';
    }
    const first20Phones = phones.slice(0,20);
   
    first20Phones.forEach(phone=>{
        
        const div = document.createElement('div');
        
        div.classList.add('col')
            div.innerHTML=`
            <div class="card h-100 p-4 bg-secondary shadow bg-body rounded ">
            <img height="350px" src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h2 class="card-title">${phone.phone_name}</h2>
                <h4 class="card-title">${phone.brand}</h4>
                <button onclick="detailsPhones('${phone.slug}')" class="btn btn-outline-secondary bg-primary px-3 text-light" type="button">Details</button>
            </div>
            </div>
            `
            searchResult.appendChild(div);
       
    })

    const h3=document.createElement('h3');
    h3.innerHTML=`
    <br>
    <h3 class="text-center">Total: ${first20Phones.length}</h3>
    `
    searchResult.appendChild(h3);
    const searchDetailResult= document.getElementById("detail-result");
    searchDetailResult.textContent = ' ';

}

const detailsPhones=id => {
    const searchDetailResult= document.getElementById("detail-result");
    searchDetailResult.textContent =' ';
    const url=`https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
    .then(response => response.json())
    .then(data=>detailsResult(data.data))
}

const detailsResult=details=>{
   
    const searchDetailResult= document.getElementById("detail-result");
    
    const div = document.createElement('div');
        
        div.classList.add('col')

        div.innerHTML=`
        <div class="card h-100 p-4 bg-secondary shadow bg-body rounded ">
        <img height="350px" src="${details.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h2 class="card-title">${details.name}</h2>
           
            <h4 class="card-title">${details.releaseDate?details.releaseDate:'Not Released Now'}</h4>
            <ul class="list-group list-group-flush">
                    <li class="list-group-item text-primary"><span class="text-dark">Storage:</span>${details.mainFeatures.storage}
                    </li>
                    <li class="list-group-item text-primary"><span class="text-dark">Memory:</span>${details.mainFeatures.memory}</li>
                    <li class="list-group-item text-primary"><span class="text-dark">DisplaySize:</span>
                    ${details.mainFeatures.displaySize}</li>
                    <li class="list-group-item text-primary"><span class="text-dark">ChipSet:</span>${details.mainFeatures.chipSet}</li>
                    <li class="list-group-item text-primary"><span class="text-dark">Others Feature:</span>
                    ${Object.entries(details.others)}</li>
                    <li class="list-group-item text-primary"><span class="text-dark">Sensors:</span>${details.mainFeatures.sensors}</li>

            </ul>
        </div>
        </div>
        `
        searchDetailResult.appendChild(div);
}



