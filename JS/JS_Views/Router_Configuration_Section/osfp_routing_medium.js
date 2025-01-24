/* 
    ==========================================================
    Aqui se importan las clases y las funciones de 
    "buttons-configurations-base.js".
    ==========================================================
*/

import {
    Type_Network_Device , Group_Type_Network_Devices,
    Network_Device_Number , Group_Network_Devices_Number , 
    Explain_Steps , Group_Btn_Explain_Steps
} from "../../JS_Core/Core_Views/buttons-configurations-base.js";

/* ############################### SECCION COMANDOS DE CONFIGURACION ############################### */
var CheckBox = document.getElementById("checkbox");  // Checkbox "Mostrar solo configuraciones"

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
/* ############################### SECCION EXPLICACION COMANDOS DE CONFIGURACION ############################### */

var Paso1 = new Explain_Steps('BtnPaso1' , 'WindowStep1');
var Paso2 = new Explain_Steps('BtnPaso2' , 'WindowStep2');
var Paso3 = new Explain_Steps('BtnPaso3' , 'WindowStep3');
var Paso4 = new Explain_Steps('BtnPaso4' , 'WindowStep4');
var Paso5 = new Explain_Steps('BtnPaso5' , 'WindowStep5');

    var Group_Steps = new Group_Btn_Explain_Steps( [Paso1,Paso2,Paso3,Paso4,Paso5] , 'BtnPreviousStep', 'BtnNextStep');

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