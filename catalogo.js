
let prod_attivo;
let open_menu;

function layerAcquista(id) {
    
    if (prod_attivo == null) {
        
        
        if (document.getElementById(`layer-image-prod-${id}`).style.zIndex == "-1") {
            
            
            
            document.getElementById(`layer-image-prod-${id}`).style.zIndex = "auto";
            document.getElementById(`layer-prod-${id}`).style.zIndex = "auto";
            document.getElementById(`button-acq-${id}`).style.opacity = "0";
            
            
            
            
        } else {
            
            
            document.getElementById(`layer-image-prod-${id}`).style.zIndex = "-1";
            document.getElementById(`layer-prod-${id}`).style.zIndex = "-1";
            document.getElementById(`button-acq-${id}`).style.opacity = "1";
            
            prod_attivo = id;
            
            
        }
        
    } else {
        
        document.getElementById(`layer-image-prod-${prod_attivo}`).style.zIndex = "auto";
        document.getElementById(`layer-prod-${prod_attivo}`).style.zIndex = "auto";
        document.getElementById(`button-acq-${prod_attivo}`).style.opacity = "0";
        
        document.getElementById(`layer-image-prod-${id}`).style.zIndex = "-1";
        document.getElementById(`layer-prod-${id}`).style.zIndex = "-1";
        document.getElementById(`button-acq-${id}`).style.opacity = "1";
        
        prod_attivo = id;
        
        
    }
    
    
    
    
    
    
}



function menu() {
    
    if (open_menu == null || open_menu == false) {
        
        document.getElementById("menu_card").style.display = "flex";
        
        open_menu = true;
        
    }
    else {

        
        document.getElementById("menu_card").style.display = "none";

        open_menu = false;

    }
}