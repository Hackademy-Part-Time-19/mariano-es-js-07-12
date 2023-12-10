

function layerAcquista(id) {
    
    
    
    if (document.getElementById(`layer-image-prod-${id}`).style.zIndex == "-1") {
        
        
        
        document.getElementById(`layer-image-prod-${id}`).style.zIndex = "auto";
        document.getElementById(`layer-prod-${id}`).style.zIndex = "auto";
        document.getElementById(`button-acq-${id}`).style.opacity = "0";

        

        
    } else {
        
        
        document.getElementById(`layer-image-prod-${id}`).style.zIndex = "-1";
        document.getElementById(`layer-prod-${id}`).style.zIndex = "-1";
        document.getElementById(`button-acq-${id}`).style.opacity = "1";

       
        
    }
    
    
    
    
    
    
    
}