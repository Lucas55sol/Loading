function online(){
    let conexion = document.getElementById('conected');
    
    if(navigator.onLine){
        conexion.textContent = "Online";

        window.onload = function(){
              let contenedor = document.querySelector('#contenedor');
              
              setTimeout(()=>{
                  contenedor.style.visibility="hidden";
              },3000)
        }
    }else{
        conexion.textContent = "Offline";
        setTimeout(()=>{
            window.location.href = "offline.html";
        },3000);
    }
}

online();
