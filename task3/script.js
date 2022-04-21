async function fetchData(){
    const respon = await fetch("https://dog.ceo/api/breeds/list/all");
    const data= await respon.json();
    console.log(data)
    createBreedList(data.message)
}
fetchData();
function createBreedList(breedList){
    document.getElementById("breed").innerHTML=`
      <select onchange="loadByBreed(this.value)">
         <option> Choose a dog breed </option>
         ${Object.keys(breedList).map(function (breed)
            {
                return `<option>${breed} </option> `
            }).join('')}
            </select>
    `
}
async function loadByBreed(breed){
    const response =await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const data =await response.json();
    console.log(data);
    createImages(data.message)
}

function createImages(images){
    document.getElementById("images").innerHTML="";
    images.forEach( image => {
       const x= document.getElementById("images")
        x.innerHTML += `
        <div class=""imagediv">
        <img src="${image}" alt="dog image" class="image">
        </div>
        `
    })
}
