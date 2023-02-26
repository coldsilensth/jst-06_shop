fetch("https://6108e442d71b67001763960c.mockapi.io/clothes") 
  .then((res) => res.json()) 
  .then((data) => { 
    const box = document.querySelector(".section-cards"); 

    const filterCategory = document.getElementById("filter-category")
 
    const searchName = document.getElementById("search-name")

    let arrAll = [...data]

    //

    function displayCards() { 
        box.innerHTML = ""
      data.map((item) => { 
        return (box.innerHTML += ` 
                <div class="section-cards__card"> 
                <div class="section-cards__box-img"> 
                    <img src="${item.img}" alt=""> 
                </div> 
                <ul class="section-cards__list"> 
                    <li>${item.name}</li> 
                    <li class ="${item.sale ? "section-cards__list-sale" : ""}">Цена: ${item.sale ? (Math.floor(item.price  / 100 * 70)) : item.price}сом</li> 
                    <li>Размеры: XXL, L, M, S</li> 
                </ul> 
                <div class="section-cards__box-bottom"> 
                    <span>+</span> 
                    <img src="../images/header/basket.png" alt=""> 
                </div> 
            </div> 
                `); 
      }); 
    }
 
    displayCards() 
    filterCategory.addEventListener("change", (e) =>{
        switch(e.target.value){
            case "increasing":
               data = data.sort((a, b) => a.price - b.price)
                break;
            case "decreasing":
                data = data.sort((a, b) => b.price - a.price)
                break;
            case "alphabet":
                data = data.sort((a, b) => {
                    if(a.name > b.name) return 1
                    if(a.name < b.name) return -1
                    return 0
                })
                break;
            case "sale":
                data = data.filter((item) => item.sale)
                break; 
            default:
                data = arr
        }
        displayCards()
    })
  });