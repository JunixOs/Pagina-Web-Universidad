/* Variables Principales*/
var BtnDisplayExplain = document.getElementById("BtnDisplayExplain");
var ConfigurationWindow = document.getElementById("ConfigurationWindow");
var ExplainWindows = document.getElementById("ExplainWindows");

var LeftSection = document.querySelector(".left-section");
var RightSection = document.querySelector(".right-section");
var WindowModalTopology = document.getElementById("ModalTopology");
    var BtnOpenModal = document.getElementById("BtnOpenModal");
    var BtnCloseModal = document.getElementById("BtnCloseModal");

var BtnLvlConfiguration = document.getElementById("LevelConfiguration");
var BtnUsedDevices = document.getElementById("UsedDevices");
    var WindowLvlConfiguration = document.getElementById("WindowLvlConfiguration");
    var WindowUsedDevices = document.getElementById("WindowUsedDevices");
/* Fin Variables Principales */


BtnOpenModal.addEventListener('click', () =>{

    WindowModalTopology.style.transition = "800ms 200ms ease-in-out";
    WindowModalTopology.style.top = "50%";

    LeftSection.style.transition = "400ms ease-in-out";
    LeftSection.style.opacity = ".3";
    LeftSection.style.transform = "scale(.7)";
    LeftSection.style.pointerEvents = "none";

    RightSection.style.transition = "400ms ease-in-out";
    RightSection.style.opacity = ".3";
    RightSection.style.transform = "scale(.7)";
    RightSection.style.pointerEvents = "none";

    BtnOpenModal.style.pointerEvents = "none";
})
BtnCloseModal.addEventListener('click', () =>{

    WindowModalTopology.style.transition = "500ms ease-in-out";
    WindowModalTopology.style.top = "-100%";

    LeftSection.style.transition = "800ms ease-in-out";
    LeftSection.style.opacity = "1";
    LeftSection.style.transform = "scale(1)";
    LeftSection.style.pointerEvents = "all";

    RightSection.style.transition = "800ms ease-in-out";
    RightSection.style.opacity = "1";
    RightSection.style.transform = "scale(1)";
    RightSection.style.pointerEvents = "all";

    BtnOpenModal.style.pointerEvents = "all";
})

var Open_LvlConfiguration = false;
BtnLvlConfiguration.addEventListener('click', () =>{
    if(!Open_LvlConfiguration){
        BtnLvlConfiguration.style.transition = "600ms ease-in-out";
        BtnLvlConfiguration.style.top = "-23%"; /* Como el elemento es relative, solo necesito modificar el top */
        BtnLvlConfiguration.classList.add('modified'); /* Se añade el estilo CSS para cambiar el ::before */

        BtnUsedDevices.style.transition = "400ms ease-in-out";
        BtnUsedDevices.style.opacity = "0";
        BtnUsedDevices.style.pointerEvents = "none";

        WindowLvlConfiguration.style.transition = "400ms ease-in-out";
        WindowLvlConfiguration.style.top = "35%";

        Open_LvlConfiguration = true;
    }
    else{
        BtnLvlConfiguration.style.transition = "600ms ease-in-out";
        BtnLvlConfiguration.style.top = "0%";
        BtnLvlConfiguration.classList.remove('modified');

        BtnUsedDevices.style.transition = "400ms ease-in-out";
        BtnUsedDevices.style.opacity = "1";
        BtnUsedDevices.style.pointerEvents = "all";

        WindowLvlConfiguration.style.transition = "400ms ease-in-out";
        WindowLvlConfiguration.style.top = "100%";

        Open_LvlConfiguration = false;
    }
})
var Open_UsedDevices = false;
BtnUsedDevices.addEventListener('click', () => {
    if(!Open_UsedDevices){
        BtnUsedDevices.style.transition = "600ms ease-in-out";
        BtnUsedDevices.style.top = "-53%";
        BtnUsedDevices.classList.add('modified');

        BtnLvlConfiguration.style.transition = "400ms ease-in-out";
        BtnLvlConfiguration.style.opacity = "0";
        BtnLvlConfiguration.style.pointerEvents = "none";

        WindowUsedDevices.style.transition = "600ms ease-in-out";
        WindowUsedDevices.style.top = "35%";

        Open_UsedDevices = true;
    }
    else{
        BtnUsedDevices.style.transition = "600ms ease-in-out";
        BtnUsedDevices.style.top = "0%";
        BtnUsedDevices.classList.remove('modified');

        BtnLvlConfiguration.style.transition = "500ms ease-in-out";
        BtnLvlConfiguration.style.opacity = "1";
        BtnLvlConfiguration.style.pointerEvents = "all";

        WindowUsedDevices.style.transition = "500ms ease-in-out";
        WindowUsedDevices.style.top = "100%";

        Open_UsedDevices = false;
    } 
})

var BtnDisplayExplain_Active = false;
BtnDisplayExplain.addEventListener('click',() =>{
    if(BtnDisplayExplain_Active){
        ExplainWindows.style.transitionDuration = "0.6s";
        ExplainWindows.style.transitionTimingFunction = "ease-in-out";
        ExplainWindows.style.left = "102%";

        ConfigurationWindow.style.transitionDuration = "1.2s";
        ConfigurationWindow.style.transitionTimingFunction = "ease-in-out";
        ConfigurationWindow.style.transform = "scale(1,1)";
        ConfigurationWindow.style.filter = "blur(0px) brightness(100%)";

        BtnDisplayExplain_Active = false;
        BtnDisplayExplain.textContent = "Mostrar explicacion paso a paso";
    }
    else{
        ExplainWindows.style.transitionDuration = "0.8s";
        ExplainWindows.style.transitionTimingFunction = "ease-in-out";
        ExplainWindows.style.left = "0%";

        ConfigurationWindow.style.transitionDuration = "0.6s";
        ConfigurationWindow.style.transitionTimingFunction = "ease-in-out";
        ConfigurationWindow.style.transform = "scale(0.9,0.9)";
        ConfigurationWindow.style.filter = "blur(4px) brightness(50%)";

        BtnDisplayExplain_Active = true;
        BtnDisplayExplain.textContent = "Ocultar explicacion paso a paso";
    }
})