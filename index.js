let products = [];



function linkCatalogo() {

    let nome = document.getElementById("inputNome").value;
    let tipo = document.getElementById("inputTipo").value;
    let prezzo = document.getElementById("inputPrezzo").value;

    window.location.href = `catalogo.html?prezzo=${prezzo}&nome=${nome}&tipo=${tipo}`;

    

}

window.addEventListener("load", function () {

    let url = new URL(window.location.href);

    let prezzo = url.searchParams.get("prezzo");
    let nome = url.searchParams.get("nome");
    let tipo = url.searchParams.get("tipo");

    filtraProdotti(prezzo,nome,tipo);

})



async function filtraProdotti(prezzo,nome,tipo) {

    const response = await fetch("https://fakestoreapi.com/products");
    products = await response.json();

    console.log(products)
    
    let updatedProducts = products.filter((prodotto) => {

        if (prezzo && nome && tipo) {
            return prodotto.price < prezzo && prodotto.title === nome && prodotto.category === tipo;
        } else if (prezzo && nome) {
            return prodotto.price < prezzo && prodotto.title === nome;
        } else if (prezzo && tipo) {
            return prodotto.price < prezzo && prodotto.category === tipo;
        } else if (nome && tipo) {
            return prodotto.title === nome && prodotto.category === tipo;
        } else if (prezzo) {
            return prodotto.price < prezzo;
        } else if (nome) {
            return prodotto.title === nome;
        } else if (tipo) {
            return prodotto.category === tipo;
        } else {
            return true; 
        }
        


    })

    console.log(updatedProducts)

    let articoli_index = 0;

    for (i = 0; i < updatedProducts.length; i++) {

        document.getElementById("art_container").innerHTML += 
        `

            <div onclick="layerAcquista(${articoli_index})" style="height: 964px; padding: 50px 20px; border-radius: 20px;" class="col-12 col-md-6 col-lg-4">
                
                
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
