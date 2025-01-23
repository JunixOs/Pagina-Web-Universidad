/* 
    ==========================================================
    Aqui se importan las clases y las funciones de 
    "buttons-configurations-base.js".
    ==========================================================
*/

import {
    Type_Network_Device , Network_Device_Number , Group_Network_Devices_Number , 
    Explain_Steps , Group_Btn_Explain_Steps,
    Group_Type_Network_Devices
} from "./buttons-configurations-base.js";

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

var CheckBox = document.getElementById("checkbox");  // Checkbox "Mostrar solo configuraciones"
/* Fin Variables Principales */


BtnOpenModal.addEventListener('click', () =>{

    WindowModalTopology.style.transition = "800ms 200ms ease-in-out";
    WindowModalTopology.style.top = "50%";

    LeftSection.style.transition = "400ms ease-in-out";
    LeftSection.style.opacity = ".3";
    LeftSection.style.transform = "scale(.7)";

    RightSection.style.transition = "400ms ease-in-out";
    RightSection.style.opacity = ".3";
    RightSection.style.transform = "scale(.7)";

    BtnOpenModal.style.pointerEvents = "none";
})
BtnCloseModal.addEventListener('click', () =>{

    WindowModalTopology.style.transition = "500ms ease-in-out";
    WindowModalTopology.style.top = "-100%";

    LeftSection.style.transition = "800ms ease-in-out";
    LeftSection.style.opacity = "1";
    LeftSection.style.transform = "scale(1)";

    RightSection.style.transition = "800ms ease-in-out";
    RightSection.style.opacity = "1";
    RightSection.style.transform = "scale(1)";

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



/* ############################### SECCION COMANDOS DE CONFIGURACION ############################### */

CheckBox.addEventListener('change', () =>{
    /* 
        Si hay algun cambio en el check, se detecta y se busca el boton activo para que cuando se este viendo una ventana
        se cambie de manera dinamica a la  otra ventana  sin necesidad de cerrar y volver a abrir. 
    */
    if(CheckBox.checked){
        // ROUTERS (R1, R2, R3, ...)
        for(let n=0;n<Group_Rn.Devices.length;n++){
            if(Group_Rn.Devices[n].Active){
                Group_Rn.Devices[n].Hidden_Window_Commands(false);
                Group_Rn.Devices[n].Display_Window_Commands(true);
            }
        }

        // SWITCHES (S1, S2, S3, ...)
        for(let n=0;n<Group_Sn.Devices.length;n++){
            if(Group_Sn.Devices[n].Active){
                Group_Sn.Devices[n].Hidden_Window_Commands(false);
                Group_Sn.Devices[n].Display_Window_Commands(true);
            }
        }
    }
    else{
        for(let n=0;n<Group_Rn.Devices.length;n++){
            if(Group_Rn.Devices[n].Active){
                Group_Rn.Devices[n].Hidden_Window_Commands(true);
                Group_Rn.Devices[n].Display_Window_Commands(false);

                Group_Rn.Devices[n].Active = true;
            }
        }

        for(let n=0;n<Group_Sn.Devices.length;n++){
            if(Group_Sn.Devices[n].Active){
                Group_Sn.Devices[n].Hidden_Window_Commands(true);
                Group_Sn.Devices[n].Display_Window_Commands(false);

                Group_Sn.Devices[n].Active = true;
            }
        }
    }
})

var Routers = new Type_Network_Device('BtnRouters' , 'WindowSelectionN°Router'); /* Position = 1 */
var Switches = new Type_Network_Device('BtnSwitches' , 'WindowSelectionN°Switch'); /* Position = 2 */
    var R1 = new Network_Device_Number('BtnR1' , 'WindowCommandsPlusModeR1' , 'WindowOnlyCommandsR1' , false);
    var R2 = new Network_Device_Number('BtnR2' , 'WindowCommandsPlusModeR2' , 'WindowOnlyCommandsR2' , false);
    var R3 = new Network_Device_Number('BtnR3' , 'WindowCommandsPlusModeR3' , 'WindowOnlyCommandsR3' , false);
    var Group_Rn = new Group_Network_Devices_Number( [R1,R2,R3] );

    var S1 = new Network_Device_Number('BtnS1' , 'WindowCommandsPlusModeS1' , 'WindowOnlyCommandsS1' , false);
    var S2 = new Network_Device_Number('BtnS2' , 'WindowCommandsPlusModeS2' , 'WindowOnlyCommandsS2' , false);
    var S3 = new Network_Device_Number('BtnS3' , 'WindowCommandsPlusModeS3' , 'WindowOnlyCommandsS3' , false);
    var Group_Sn = new Group_Network_Devices_Number( [S1,S2,S3] );

var Group_Type_NetD = new Group_Type_Network_Devices( [Routers , Switches] );

Routers.Btn.addEventListener('click',()=>{
    Group_Type_NetD.Function_EventListener(1);

    Group_Rn.Hidden_Window_Btn_Active();
})

    R1.Btn.addEventListener('click', () =>{
        Group_Rn.Function_EventListener(1 , CheckBox.checked);
    })
    R2.Btn.addEventListener('click', ()=>{
        Group_Rn.Function_EventListener(2 , CheckBox.checked );
    })
    R3.Btn.addEventListener('click', () =>{
        Group_Rn.Function_EventListener(3, CheckBox.checked );
    })


Switches.Btn.addEventListener('click', ()=>{
    Group_Type_NetD.Function_EventListener(2);

    Group_Sn.Hidden_Window_Btn_Active();
})

    S1.Btn.addEventListener('click', () =>{
        Group_Sn.Function_EventListener(1 , CheckBox.checked );
    })
    S2.Btn.addEventListener('click', () =>{
        Group_Sn.Function_EventListener(2 , CheckBox.checked );
    })
    S3.Btn.addEventListener('click', () =>{
        Group_Sn.Function_EventListener(3 , CheckBox.checked );
    })

/* ############################### SECCION EXPLICACION COMANDOS DE CONFIGURACION ############################### */





var Paso1 = new Explain_Steps('BtnPaso1' , 'WindowStep1');
var Paso2 = new Explain_Steps('BtnPaso2' , 'WindowStep2');
var Paso3 = new Explain_Steps('BtnPaso3' , 'WindowStep3');
var Paso4 = new Explain_Steps('BtnPaso4' , 'WindowStep4');
var Paso5 = new Explain_Steps('BtnPaso5' , 'WindowStep5');

    var Group_Steps = new Group_Btn_Explain_Steps( [Paso1,Paso2,Paso3,Paso4,Paso5] , 'BtnPreviousStep', 'BtnNextStep');

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

        Group_Steps.Hidden_Window_Btn_Active();
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

Paso1.Btn.addEventListener('click', () => {
    Group_Steps.Function_EventListener(1);
})
Paso2.Btn.addEventListener('click', () =>{
    Group_Steps.Function_EventListener(2);
})
Paso3.Btn.addEventListener('click', () =>{
    Group_Steps.Function_EventListener(3);
})
Paso4.Btn.addEventListener('click', () =>{
    Group_Steps.Function_EventListener(4);
})
Paso5.Btn.addEventListener('click', () =>{
    Group_Steps.Function_EventListener(5);
})

Group_Steps.BtnPreviousStep.addEventListener('click' , () =>{
    Group_Steps.Go_Previous_Step();
})
Group_Steps.BtnNextStep.addEventListener('click' , () =>{
    Group_Steps.Go_Next_Step();
})