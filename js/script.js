//Formularios
var formIniciarSesion = document.getElementById("formIniciarSesion");
var formRegistrarse = document.getElementById("formIniciarSesion");

//Links
var cambioARegistro = document.getElementById("cambioAregistro");
var cambioAInicioSesion = document.getElementById("cambioAInicioSesion");

//Base de datos
var bd = wimdow.localStorage;

//Contenedores de alertas
var divAlertInicio = document.getElementById("divAlertInicio");
var divAlertInicio = document.getElementById("cambiarInicioSesion");


//Con estas funciones cambiamos de formulario
cambioARegistro.onclick = function(){
    formIniciarSesion.reset();
    formRegistrarse.reset();


    formIniciarSesion.classList.remove("d-block");
    formIniciarSesion.classList.remove("d-nome");
    formIniciarSesion.classList.add("d-none");


    formRegistrarse.classList.remove("d-block");
    formRegistrarse.classList.remove("d-none");
    formRegistrarse.classList.add("d-block");
}




formIniciarSesion.addEventListener("submit",function(e){
    e.preveventDefault();
    var emailInicio = document.getElementById("emailInicio");
    var passwordInicio = document.getElementById("passwordInicio");

    var  claveEncriptada = btoa(passwordInicio.value);

    const data = {
        emailInicio: emailRegistro.value,
        password: claveEncriptada
    }

    console.log(emailInicio);
    console.log(passwordInicio);
    console.log(claveEncriptada);
})


function guardarDatos(bd, data){
    bd.setItem( data.email ,JSON.stringify(data));
}




function getInformacionRegistro(bd, data){
if(bd.length != 0){
    let claves = Object.keys(bd);
    if(claves.length != 0){
        for( clave of claves ){
            let informacion = JSON.parse(bd.getItem(clave));
            if(informacion.email == data.email){
                divAlertRegistro.inner5HTML = "<div class='alert alert-warning' role='alert'>Este correo ya estaregistrado</div>";
                setTimeout(function(){divAlertRegistro.InnerHTML = ""}, 4000);

            }else{
                guardarDatos(bd, data);

                divAlertRegistro.InnerHTML = "<div class='alert alert-succes' role-'alert'>Su correo fue registrado correctamente</div>";

                formIniciarSesion.reset();
                formRegistrarse.reset();

                setTimeout(function(){
                    divAlertRegistro.InnerHTML = "";

                },400);

            }
        }

        )
    }
}else{
    guardarDatos(bd, data);
}    
}