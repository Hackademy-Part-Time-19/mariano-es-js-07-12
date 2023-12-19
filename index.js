let products = [];



function linkCatalogo() {

    let nome = document.getElementById("inputNome").value;
    let tipo = document.getElementById("inputTipo").value;
    let prezzo = document.getElementById("inputPrezzo").value;

    window.location.href = `catalogo.html?prezzo=${prezzo}&nome=${nome}&tipo=${tipo}`;

}

window.addEventListener("load", function () {

    let url = new URL(window.location.href);

    if(url.searchParams.has("tipo")) {
        
        let prezzo = url.searchParams.get("prezzo");
        let nome = url.searchParams.get("nome");
        let tipo = url.searchParams.get("tipo");
        
        getProdotti(prezzo,nome,tipo);
    
    }

    if (url.searchParams.has("id")) {

        let item_id = url.searchParams.get("id");

        fetch("https://fakestoreapi.com/products/" + item_id)
        .then((result) => result.json())
        .then((data) => {

            let item = data;

            document.getElementById("item-title").innerHTML = `${item.title}`
            document.getElementById("item-desc").innerHTML = `${item.description}`
            document.getElementById("item-main-image").src = `${item.image}`
            document.getElementById("item-price").innerHTML = `&euro;&nbsp;${item.price}`

        })
        .catch((error) => console.error)

    }

})

function clickCard(id) {

    if (id == 0) {

        window.location.href = `catalogo.html?prezzo=&nome=&tipo=women's clothing`;


    } else if (id == 1) {

        window.location.href = `catalogo.html?prezzo=&nome=&tipo=men's clothing`;


    } else if (id == 2) {

        window.location.href = `catalogo.html?prezzo=&nome=&tipo=electronics`;


    } else if (id == 3) {

        window.location.href = `catalogo.html?prezzo=&nome=&tipo=jewelery`;


    }

}

function getProdotti(prezzo,nome,tipo) {

    document.getElementById("art_container").innerHTML = 
        ` 
        <div onclick="layerAcquista()" style="height: 964px; padding: 50px 20px; border-radius: 20px;" class="col-12 col-md-6 col-lg-4">
                
                
        <div  style=" width: 100%; height: 100%; border-radius: 20px; cursor:pointer;display: flex; flex-direction: column;" >
            
            <div  id="layer-" style="display: flex; flex-direction: column; width: 100%; height: 100%; background-color: transparent; border-radius: 20px; transition: 0.2s;">
                
                <div id="button-acq-" style=" top: 60%; justify-self: center; align-self: center; z-index: 1; display: block;opacity: 0; transition: 0.2s;"><button class="buy_button">Aggiungi al carrello</button></div>
                
                <div style="z-index: auto;" id="layer-image-prod-" class="div_immagine_dummy">
                    
                    
                    
                    
                    
                </div>
                
                <div style="z-index: auto;" id="layer-prod-" class="div_info_prod_dummy">
                    
                    <br>
                    
                    
                    
                    <br>
                    <br>
                    <br>
                    
                    <p style="font-weight: 800; line-height: 1;"></p>
                    <div class="link_account"><i></i></div>
                    
                    <br>
                    
                    
                    <div class="miscellaneous_bottom_card_dummy" style="display: flex; justify-content: space-between; padding: 0px 10px;">
                        
                        <div class="miscellaneous_bottom_card_dummy" ></div>
                        
                        <div>
                            
                            <span class="miscellaneous_bottom_card_dummy" style=" font-size: 25px;"></span>
                            
                            <span  class="miscellaneous_bottom_card_dummy" style="font-weight: 700; font-size: 30px;"></span>
                            
                        </div>
                        
                        
                    </div>
                    
                    
                    
                </div>
                
            </div>
            
        </div>
        
    </div>

    <div onclick="layerAcquista()" style="height: 964px; padding: 50px 20px; border-radius: 20px;" class="col-12 col-md-6 col-lg-4">
                
                
        <div  style=" width: 100%; height: 100%; border-radius: 20px; cursor:pointer;display: flex; flex-direction: column;" >
            
            <div  id="layer-" style="display: flex; flex-direction: column; width: 100%; height: 100%; background-color: transparent; border-radius: 20px; transition: 0.2s;">
                
                <div id="button-acq-" style=" top: 60%; justify-self: center; align-self: center; z-index: 1; display: block;opacity: 0; transition: 0.2s;"><button class="buy_button">Aggiungi al carrello</button></div>
                
                <div style="z-index: auto;" id="layer-image-prod-" class="div_immagine_dummy">
                    
                    
                    
                    
                    
                </div>
                
                <div style="z-index: auto;" id="layer-prod-" class="div_info_prod_dummy">
                    
                    <br>
                    
                    
                    
                    <br>
                    <br>
                    <br>
                    
                    <p style="font-weight: 800; line-height: 1;"></p>
                    <div class="link_account"><i></i></div>
                    
                    <br>
                    
                    
                    <div class="miscellaneous_bottom_card_dummy" style="display: flex; justify-content: space-between; padding: 0px 10px;">
                        
                        <div class="miscellaneous_bottom_card_dummy" ></div>
                        
                        <div>
                            
                            <span class="miscellaneous_bottom_card_dummy" style=" font-size: 25px;"></span>
                            
                            <span  class="miscellaneous_bottom_card_dummy" style="font-weight: 700; font-size: 30px;"></span>
                            
                        </div>
                        
                        
                    </div>
                    
                    
                    
                </div>
                
            </div>
            
        </div>
        
    </div>


    <div onclick="layerAcquista()" style="height: 964px; padding: 50px 20px; border-radius: 20px;" class="col-12 col-md-6 col-lg-4">
                
                
        <div  style=" width: 100%; height: 100%; border-radius: 20px; cursor:pointer;display: flex; flex-direction: column;" >
            
            <div  id="layer-" style="display: flex; flex-direction: column; width: 100%; height: 100%; background-color: transparent; border-radius: 20px; transition: 0.2s;">
                
                <div id="button-acq-" style=" top: 60%; justify-self: center; align-self: center; z-index: 1; display: block;opacity: 0; transition: 0.2s;"><button class="buy_button">Aggiungi al carrello</button></div>
                
                <div style="z-index: auto;" id="layer-image-prod-" class="div_immagine_dummy">
                    
                    
                    
                    
                    
                </div>
                
                <div style="z-index: auto;" id="layer-prod-" class="div_info_prod_dummy">
                    
                    <br>
                    
                    
                    
                    <br>
                    <br>
                    <br>
                    
                    <p style="font-weight: 800; line-height: 1;"></p>
                    <div class="link_account"><i></i></div>
                    
                    <br>
                    
                    
                    <div class="miscellaneous_bottom_card_dummy" style="display: flex; justify-content: space-between; padding: 0px 10px;">
                        
                        <div class="miscellaneous_bottom_card_dummy" ></div>
                        
                        <div>
                            
                            <span class="miscellaneous_bottom_card_dummy" style=" font-size: 25px;"></span>
                            
                            <span  class="miscellaneous_bottom_card_dummy" style="font-weight: 700; font-size: 30px;"></span>
                            
                        </div>
                        
                        
                    </div>
                    
                    
                    
                </div>
                
            </div>
            
        </div>
        
    </div>

    

            

            
        
        
        `

    fetch("https://fakestoreapi.com/products")
        .then((response) => products = response.json())
        .then ((data) => { 

            products = data;

            filtraProdotti(prezzo,nome,tipo)
        
        })
        .catch((error) => console.error)

    


}


function filtraProdotti(prezzo,nome,tipo) {

    console.log(products)
    
    let updatedProducts = products.filter((prodotto) => {

        if (prezzo && nome && tipo) {
            return prodotto.price < prezzo && prodotto.title.startsWith(nome)  && prodotto.category === tipo;
        } else if (prezzo && nome) {
            return prodotto.price < prezzo && prodotto.title.startsWith(nome);
        } else if (prezzo && tipo) {
            return prodotto.price < prezzo && prodotto.category === tipo;
        } else if (nome && tipo) {
            return prodotto.title.startsWith(nome) && prodotto.category === tipo;
        } else if (prezzo) {
            return prodotto.price < prezzo;
        } else if (nome) {
            return prodotto.title.startsWith(nome);
        } else if (tipo) {
            return prodotto.category === tipo;
        } else {
            return true; 
        }
        
        

    })

    

    console.log(updatedProducts)

    let articoli_index = 0;

    document.getElementById("art_container").innerHTML = ``;

    for (i = 0; i < updatedProducts.length; i++) {

        document.getElementById("art_container").innerHTML += 
        `

            <div onclick="layerAcquista(${updatedProducts[i].id})" style="height: 964px; padding: 50px 20px; border-radius: 20px;" class="col-12 col-md-6 col-lg-4">
                
                
                <div  style=" width: 100%; height: 100%; border-radius: 20px; cursor:pointer;display: flex; flex-direction: column;" >
                    
                    <div  id="layer-${articoli_index}" style="display: flex; flex-direction: column; width: 100%; height: 100%; background-color: transparent; border-radius: 20px; transition: 0.2s;">
                        
                        <div id="button-acq-${articoli_index}" style=" top: 60%; justify-self: center; align-self: center; z-index: 1; display: block;opacity: 0; transition: 0.2s;"><button class="buy_button">Aggiungi al carrello</button></div>
                        
                        <div style="z-index: auto;" id="layer-image-prod-${articoli_index}" class="div_immagine">
                            
                            
                            <img src="${updatedProducts[i].image}" class="immagine_prod" alt="">
                            
                            
                        </div>
                        
                        <div style="z-index: auto;" id="layer-prod-${articoli_index}" class="div_info_prod">
                            
                            <br>
                            
                            <button class="tipo_prod"></i>&nbsp;${updatedProducts[i].category}</i></button>
                            
                            <br>
                            <br>
                            <br>
                            
                            <p style="font-weight: 800; line-height: 1;">${updatedProducts[i].title}</p>
                            <div class="link_account"><i>${updatedProducts[i].description}</i></div>
                            
                            <br>
                            
                            
                            <div class="miscellaneous_bottom_card" style="display: flex; justify-content: space-between; padding: 0px 10px;">
                                
                                <div class="miscellaneous_bottom_card" ></div>
                                
                                <div>
                                    
                                    <span class="miscellaneous_bottom_card" style=" font-size: 25px;"><a title="Spedizione veloce" style="text-decoration: none; color: black;" class="fa-solid fa-truck-fast"></a></span>
                                    
                                    <span  class="miscellaneous_bottom_card" style="font-weight: 700; font-size: 30px;">&nbsp;€ ${updatedProducts[i].price}</span>
                                    
                                </div>
                                
                                
                            </div>
                            
                            
                            
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
        
        
        `
        articoli_index += 1;

    }

}

function layerAcquista(id) {


    window.location.href = `item.html?id=${id}`;

    
}

document.addEventListener("scroll", function () {

    let scrollTop = document.documentElement.scrollTop;
    let totalPageHeight = document.documentElement.scrollHeight;
    let windowHeight = document.documentElement.clientHeight;

    let scrollPercentage = (scrollTop / (totalPageHeight - windowHeight)) * 100;

    let nav = document.getElementById("navbar_container");

    if (scrollPercentage > 40) {
        nav.style.backgroundImage = "none";
    } else {
        nav.style.backgroundImage = "linear-gradient(0deg, transparent, black)";
    }

});