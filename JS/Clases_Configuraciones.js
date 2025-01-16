
class Tipo_Dispositivo_Red{
    constructor (IDBtnOpenVentana,IDBtnCloseVentana,IDContenedorBtn,IDVentana, EstadoBtn, TipoDispositivo){
        this.BtnOpenVentana = document.getElementById(IDBtnOpenVentana);
        this.BtnCloseVentana = document.getElementById(IDBtnCloseVentana);
        this.ContenedorBtn = document.getElementById(IDContenedorBtn);
        this.Ventana = document.getElementById(IDVentana);
        this.EstadoBtn = EstadoBtn;
        this.TipoDispositivo = TipoDispositivo;
    }
    Mostrar_Boton(){
        this.BtnOpenVentana.style.transitionProperty = "opacity";
        this.BtnOpenVentana.style.transitionDuration = "0.5s";
        this.BtnOpenVentana.style.opacity= "1";
        this.BtnOpenVentana.style.pointerEvents = "all";
        this.BtnOpenVentana.style.transitionProperty = "all"; /*Esto para que despues se puedan aplicar otras transiciones, de lo contrario
                                                                se aplicaran solo transiciones a la opacidad*/

        this.ContenedorBtn.style.transitionProperty = "width height";
        this.ContenedorBtn.style.transitionDuration = "0.5s";
        this.ContenedorBtn.style.height = "40px";
        this.ContenedorBtn.style.width = "90%";
        this.ContenedorBtn.style.transitionProperty = "all";
    }
    Ocultar_Boton(){
        this.BtnOpenVentana.style.transitionProperty = "opacity";
        this.BtnOpenVentana.style.transitionDuration = "0.5s";
        this.BtnOpenVentana.style.pointerEvents = "none";
        this.BtnOpenVentana.style.opacity= "0";

        this.ContenedorBtn.style.transitionProperty = "width height";
        this.ContenedorBtn.style.transitionDuration = "0.5s";
        this.ContenedorBtn.style.height = "0%";
        this.ContenedorBtn.style.width = "0%";
    }
    Mostrar_Ventana(){
        this.Ventana.style.transitionProperty = "all";
        this.Ventana.style.transitionDuration = "1s";
        this.Ventana.style.transitionTimingFunction = "ease";
        this.Ventana.style.height = "530px";
        this.Ventana.style.overflowY = "hidden";
        this.Ventana.style.borderColor = "black";
        this.Ventana.style.borderWidth = "1pt";
        this.Ventana.style.borderStyle = "solid";

        this.EstadoBtn = true;

        if(this.TipoDispositivo == "Switch"){
            Titulo_Eleccion_Switch();
        }
        else if (this.TipoDispositivo == "Router"){
            Titulo_Eleccion_Router();
        }
    }
    Ocultar_Ventana(){
        this.Ventana.style.transitionProperty = "all";
        this.Ventana.style.transitionDuration = "1s";
        this.Ventana.style.transitionTimingFunction = "ease";
        this.Ventana.style.height = "0%";
        this.Ventana.style.overflowY = "hidden";
        this.Ventana.style.borderStyle = "none";

        this.EstadoBtn = false;

        Titulo_Inicial();
    }

}

class Numero_Dispositivo_Red{
    constructor (IDBtnOpenVentana,IDBtnCloseVentana,IDVentana, EstadoBtn,IDContenedorComandos,IDContenedorSoloComandos, IDContenedorBtnOpen){
        this.BtnOpenVentana = document.getElementById(IDBtnOpenVentana);
        this.BtnCloseVentana = document.getElementById(IDBtnCloseVentana);
        this.Ventana = document.getElementById(IDVentana);
        this.EstadoBtn = EstadoBtn;
        this.ContenedorComandos = document.getElementById(IDContenedorComandos);
        this.ContenedorSoloComandos = document.getElementById(IDContenedorSoloComandos);
        this.ContenedorBtnOpen = document.getElementById(IDContenedorBtnOpen);
    }
    Mostrar_Boton(){
        this.BtnOpenVentana.style.transitionProperty = "all";
        this.BtnOpenVentana.style.transitionDuration = "0.8s";
        this.BtnOpenVentana.style.transitionTimingFunction = "ease";
        this.BtnOpenVentana.style.opacity = "1";
        this.BtnOpenVentana.style.width = "12%";
        this.BtnOpenVentana.style.height = "30px";
        this.BtnOpenVentana.style.overflow = "hidden";
        this.BtnOpenVentana.style.pointerEvents = "all";

        this.ContenedorBtnOpen.style.transitionDuration = "0.8s";
        this.ContenedorBtnOpen.style.gap = "10px";
    }
    Ocultar_Boton(){
        this.BtnOpenVentana.style.transitionProperty = "all";
        this.BtnOpenVentana.style.transitionDuration = "0.8s";
        this.BtnOpenVentana.style.transitionTimingFunction = "ease";
        this.BtnOpenVentana.style.opacity = "0";
        this.BtnOpenVentana.style.width = "0%";
        this.BtnOpenVentana.style.height = "0%";
        this.BtnOpenVentana.style.overflow = "hidden";
        this.BtnOpenVentana.style.pointerEvents = "none";

        this.ContenedorBtnOpen.style.transitionDuration = "0.8s";
        this.ContenedorBtnOpen.style.gap = "0px";
    }
    Mostrar_Ventana(){
        this.Ventana.style.transitionProperty = "height";
        this.Ventana.style.transitionDuration = "0.8s";
        this.Ventana.style.transitionTimingFunction = "ease";
        this.Ventana.style.height = "480px";
        this.Ventana.style.overflowY = "auto";
        this.Ventana.style.paddingTop = "4px";

        this.EstadoBtn = true;

        Titulo_Cuando_Seleccion_Dispositivo();
    }
    Ocultar_Ventana(){
        this.Ventana.style.transitionProperty = "height";
        this.Ventana.style.transitionDuration = "0.8s";
        this.Ventana.style.transitionTimingFunction = "ease";
        this.Ventana.style.height = "0%";
        this.Ventana.style.overflowY = "hidden";
        this.Ventana.style.paddingTop = "0px";

        this.EstadoBtn = false;
    }
    Mostrar_Ventana_Comandos(){
        this.ContenedorComandos.style.transitionDuration = "0.6s";
        this.ContenedorComandos.style.opacity = "1";
        this.ContenedorComandos.style.height = "82%";
        this.ContenedorComandos.style.borderStyle = "solid";
        this.ContenedorComandos.style.overflowY = "auto";
    }
    Ocultar_Ventana_Comandos(){
        this.ContenedorComandos.style.transitionDuration = "0.3s";
        this.ContenedorComandos.style.opacity = "0";
        this.ContenedorComandos.style.height = "0%";
        this.ContenedorComandos.style.borderStyle = "hidden";
        this.ContenedorComandos.style.overflowY = "hidden";
    }
    Mostrar_Ventana_Solo_Comandos(){
        this.ContenedorSoloComandos.style.transitionDuration = "0.6s";
        this.ContenedorSoloComandos.style.opacity = "1";
        this.ContenedorSoloComandos.style.height = "82%";
        this.ContenedorSoloComandos.style.borderStyle = "solid";
        this.ContenedorSoloComandos.style.overflowY = "auto";
    }
    Ocultar_Ventana_Solo_Comandos(){
        this.ContenedorSoloComandos.style.transitionDuration = "0.3s";
        this.ContenedorSoloComandos.style.opacity = "0";
        this.ContenedorSoloComandos.style.height = "0%";
        this.ContenedorSoloComandos.style.borderStyle = "hidden";
        this.ContenedorSoloComandos.style.overflowY = "hidden";
    }
}

class Seccion_Paso_N{
    constructor (IDBtnOpen, IDBtnCerrarVentana, IDContenedorBtnOpen, IDVentana, IDContenedorTextoExplicacion, EstadoBtn){
        this.BtnOpen = document.getElementById(IDBtnOpen);
        this.BtnCloseVentana = document.getElementById(IDBtnCerrarVentana);
        this.ContenedorBtnOpen = document.getElementById(IDContenedorBtnOpen);
        this.Ventana = document.getElementById(IDVentana);
        this.ContenedorTextoExplicacion = document.getElementById(IDContenedorTextoExplicacion);
        this.EstadoBtn = EstadoBtn;
    }
    Ocultar_Boton(){
        this.BtnOpen.style.transitionDuration = "0.4s";
        this.BtnOpen.style.transitionTimingFunction = "ease-in-out";
        this.BtnOpen.style.opacity = "0";
        this.BtnOpen.style.pointerEvents = "none";

        this.ContenedorBtnOpen.style.transitionDuration = "0.4s";
        this.ContenedorBtnOpen.style.transitionTimingFunction = "ease-in-out";
        this.ContenedorBtnOpen.style.width = "0%";
        this.ContenedorBtnOpen.style.height = "0%";
    }
    Mostrar_Boton(){
        this.BtnOpen.style.transitionDuration = "0.4s";
        this.BtnOpen.style.transitionTimingFunction = "ease-in-out";
        this.BtnOpen.style.opacity = "1";
        this.BtnOpen.style.pointerEvents = "all";

        this.ContenedorBtnOpen.style.transitionDuration = "0.4s";
        this.ContenedorBtnOpen.style.transitionTimingFunction = "ease-in-out";
        this.ContenedorBtnOpen.style.width = "90%";
        this.ContenedorBtnOpen.style.height = "50px";
    }
    Ocultar_Ventana(){
        this.Ventana.style.transitionDuration = "0.6s";
        this.Ventana.style.transitionTimingFunction = "ease-in-out";
        this.Ventana.style.height = "0%";
        this.Ventana.style.borderStyle = "hidden";

        this.ContenedorTextoExplicacion.style.overflowY = "hidden";

        this.BtnOpen.style.pointerEvents = "all";

        this.EstadoBtn = false;

        Ocultar_Btn_Move_Pasos();
    }
    Mostrar_Ventana(){
        this.Ventana.style.transitionDuration = "0.6s";
        this.Ventana.style.transitionTimingFunction = "ease-in-out";
        this.Ventana.style.height = "540px";
        this.Ventana.style.borderStyle = "solid";

        this.ContenedorTextoExplicacion.style.overflowY = "auto";

        this.BtnOpen.style.pointerEvents = "none";

        this.EstadoBtn = true;

        Mostrar_Btn_Move_Pasos();
    }
}

class Carrusel_Class{
    constructor (ID,IDBtnSiguiente, IDBtnAnterior,IDTituloImagenes,N_Imagenes_Carrusel, Titulos_Imagenes_Carrusel){
        this.Carrusel = document.getElementById(ID);
        this.BtnSiguiente = document.getElementById(IDBtnSiguiente);
        this.BtnAnterior = document.getElementById(IDBtnAnterior);
        this.TituloImagenes = document.getElementById(IDTituloImagenes);
        this.N_Imagenes_Carrusel = N_Imagenes_Carrusel;
        this.Titulos_Imagenes_Carrusel = Titulos_Imagenes_Carrusel;
    }
    //GETTERS
    get get_BtnSiguiente(){
        return this.BtnSiguiente;
    }
    get get_N_Imagenes_Carrusel(){
        return this.N_Imagenes_Carrusel;
    }
    //FIN GETTERS


    Mostrar_Imagen_Anterior(){
        const ImagenAnterior = this.Carrusel.scrollLeft - this.Carrusel.clientWidth;

        this.Carrusel.scrollTo({
            left: ImagenAnterior,
            behavior: 'smooth'
        })
    }
    Mostrar_Imagen_Siguiente(){
        const ImagenSiguiente = this.Carrusel.scrollLeft + this.Carrusel.clientWidth;

        this.Carrusel.scrollTo({
            left: ImagenSiguiente,
            behavior: 'smooth'
        })
    }

    Mostrar_Titulos_Carrusel(Numero_Titulo_A_Mostrar) //Se pasa la posicion del carrusel
    {
        Numero_Titulo_A_Mostrar--;
        this.TituloImagenes.textContent = this.Titulos_Imagenes_Carrusel[Numero_Titulo_A_Mostrar];
    }
    Funcion_Inicial(){
        this.Carrusel.style.cursor = "pointer";
        setTimeout(() => {
            this.Mostrar_Titulos_Carrusel(1);
        }, 50);
    }
}