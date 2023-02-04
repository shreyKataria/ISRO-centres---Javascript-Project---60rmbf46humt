// // // console.clear();
// let URL = 'https://isro.vercel.app/api/centres';

// fetch(URL)
// .then(response => response.json())
// .then(data =>{
//       console.log(data);
// })
// getAPI
const url = "https://isro.vercel.app/api/centres";
fetch(url)
  .then((responce) => {
    return responce.json();
  })
  .then((data) => {
    const result_container = document.getElementById("result-container");
    for (let i = 0; i < data.centres.length; i++) {
      var newli = document.createElement("li");
      newli.className = "card fc hover ";
      result_container.appendChild(newli);
      newli.innerHTML =
       `<div class="nameliItems liItems">
          <h3>Center Name</h3>
          <p class="nameinfo">${data.centres[i].name}</p>
        </div>
        <div class="cityliItems liItems">
          <h3>City Name</h3>
          <p class="cityinfo">${data.centres[i].Place}</p>
        </div>
        <div class="stateliItems liItems">
          <h3>State Name</h3>
          <p class="stateinfo">${data.centres[i].State}</p>
        </div>`;
    }
  })
  .catch( ()=> {
    const result_container = document.getElementById("result-container");
    result_container.innerHTML=`<div id="error">
        <img id="err" src="img/warning.png" alt="">
        <h1>Something Went Wrong !!! Try Again</h1>
    </div>`;
  });

// declarations

const citybtn = document.getElementById("city-btn");
const statebtn = document.getElementById("state-btn");
const centerbtn = document.getElementById("center-btn");
const clear = document.getElementById('CLR');
const search_btn = document.getElementById('searchBtn');
const search_input = document.getElementById('searchInput');


function handleBtn(e){
  citybtn.classList.remove("active");
  statebtn.classList.remove("active")
  centerbtn.classList.remove("active");

  e.target.classList.add("active");

  if(e.target === citybtn) {
    searchByCity();
  } else if (e.target === statebtn) {
    searchByState();
  } else if (e.target === centerbtn) {
    searchByCenter();
  }
}

// city search
function searchByCity(){
  const search_text = search_input.value.toLowerCase();
  const city = document.getElementsByClassName('cityinfo');

  search_input.setAttribute('placeholder', 'Type here.......');

  for(let k=0; k<city.length; k++){
    if(city[k].innerText.toLowerCase().indexOf(search_text) === -1){
      city[k].parentElement.parentElement.style.display = "none";
    }else{
      city[k].parentElement.parentElement.style.display = "flex";
    }
  }
}

//centersearch
function searchByCenter(){
  const search_text = search_input.value.toLowerCase();
  const cen = document.getElementsByClassName('nameinfo');
  search_input.setAttribute('placeholder', 'Type here.......');

  for(let l=0; l<cen.length; l++){
    if(cen[l].innerText.toLowerCase().indexOf(search_text) === -1){
      cen[l].parentElement.parentElement.style.display = "none";
    }else{
      cen[l].parentElement.parentElement.style.display = "flex";
    }
  }
}

//state search
function searchByState(){
  const search_text = search_input.value.toLowerCase();
  const state = document.getElementsByClassName('stateinfo');

  search_input.setAttribute('placeholder', 'Type here.......');

  for(let m=0; m<state.length; m++){
    if(state[m].innerText.toLowerCase().indexOf(search_text) === -1){
      state[m].parentElement.parentElement.style.display = "none";
    }else{
      state[m].parentElement.parentElement.style.display = "flex";
    }
  }
}

// listeners
citybtn.addEventListener("click", handleBtn);
statebtn.addEventListener("click", handleBtn);
centerbtn.addEventListener("click", handleBtn);

// searchBtn
search_btn.addEventListener('click', () => {
  const search_text = search_input.value.toLowerCase();

  if (citybtn.classList.contains("active")) {
    searchByCity(search_text);
  } else if (statebtn.classList.contains("active")) {
    searchByState(search_text);
  } else if (centerbtn.classList.contains("active")) {
    searchByCenter(search_text);
  }
});

// make  default
clear.addEventListener('click', () => {

  const all_li = document.getElementsByTagName("li");
  search_input.value = "";
  for(let n=0; n<all_li.length; n++){
    all_li[n].style.display = "grid";
  }
});
