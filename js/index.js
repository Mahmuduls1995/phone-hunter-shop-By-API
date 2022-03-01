document.getElementById("error-message").style.display="none";

const searchPhones=()=>{
    const searchField=document.getElementById("search-field");
    const searchText=searchField.value;
    //console.log(searchText);
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
    //console.log(first10Phones);

    first20Phones.forEach(phone=>{
        //console.log(phone.brand);
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
            //console.log(meals.length);
       
    })

    const h3=document.createElement('h3');
    h3.innerHTML=`
    <br>
    <h3 class="text-center">Total: ${first20Phones.length}</h3>
    `
    searchResult.appendChild(h3);

}



const detailsPhones=id => {
    const url=`https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
    .then(response => response.json())
    .then(data=>detailsResult(data.data))
}

const detailsResult=details=>{

    // const sensorDetails=details.mainFeatures.sensors;
    // const sensorDetail=(sensorDetails)=>{
    //     sensorDetails.forEach(sensor=>{
    //        console.log(sensor);
    //     })
    
    // }

//     const sensorDetail=details.mainFeatures.sensors;
//    const sensor= sensorDetail.forEach(sensor=>(sensor))

    const searchResult= document.getElementById("detail-result");
    //console.log(details.mainFeatures.sensors[0]);
   
    const div = document.createElement('div');
        
        div.classList.add('col')

        div.innerHTML=`
        <div class="card h-100 p-4 bg-secondary shadow bg-body rounded ">
        <img height="350px" src="${details.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h2 class="card-title">${details.name}</h2>
           
            <h4 class="card-title">${details.releaseDate?details.releaseDate:'Not Released Now'}</h4>
            <ul class="list-group list-group-flush">
                    <li class="list-group-item text-primary">Storage: ${details.mainFeatures.storage}</li>
                    <li class="list-group-item text-primary">ChipSet: ${details.mainFeatures.chipSet}</li>
                    <li class="list-group-item text-primary">DisplaySize: ${details.mainFeatures.displaySize}</li>
                    <li class="list-group-item text-primary">Memory: ${details.mainFeatures.memory}</li>
                    <li class="list-group-item text-primary">Others: ${Object.entries(details.others)}</li>
                    <li class="list-group-item text-primary">Sensors: ${details?.mainFeatures?.sensors}</li>

            </ul>
           
            <h4 class="card-title" ></h4>
            
        </div>
        </div>
        `
        searchResult.appendChild(div);

}

        //    {/* <li class="list-group-item text-primary">Others: ${sensorDetails.forEach(sensor=>{sensor})}</li>
        //             <li class="list-group-item text-primary">Others:${sensorDetail(sensorDetails)}</li> */}
// const sensorDetail=()=>{
//     const sensorDetail=details.mainFeatures.sensors;
//      sensorDetail.forEach(sensor=>{
//        console.log(sensor);
//      })
// }












// if (${details.releaseDate.length== 0}) {
                
//     <h4 class="card-title">${details.releaseDate.innerText='no relese date'}</h4>
    
// }
// else{

// }
//<p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
//<button onclick="searchPhones()" class="btn btn-outline-secondary" type="button"id="button-search">search</button>

