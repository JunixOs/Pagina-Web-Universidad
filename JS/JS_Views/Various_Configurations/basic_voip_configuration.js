import {
    Type_Network_Device , Network_Device_Number , Group_Network_Devices_Number , 
    Explain_Steps , Group_Btn_Explain_Steps,
    Group_Type_Network_Devices, Preview_Image_Topology
} from "../../JS_Core/Core_Views/buttons-configurations-base.js";

var CheckBox = document.getElementById("checkbox");  // Checkbox "Mostrar solo configuraciones"

var Routers = new Type_Network_Device('BtnRouters' , 'WindowSelectionN°Router'); /* Position = 1 */
var Switches = new Type_Network_Device('BtnSwitches' , 'WindowSelectionN°Switch'); /* Position = 2 */
var Hosts = new Type_Network_Device('BtnHosts' , 'WindowSelectionHost');
    var R1 = new Network_Device_Number('BtnR1' , 'WindowCommandsPlusModeR1' , 'WindowOnlyCommandsR1' , false);
    var Group_Rn = new Group_Network_Devices_Number( [R1] );

    var S1 = new Network_Device_Number('BtnS1' , 'WindowCommandsPlusModeS1' , 'WindowOnlyCommandsS1' , false);
    var Group_Sn = new Group_Network_Devices_Number( [S1] );

    var PC = new Network_Device_Number('BtnPC' , 'WindowPc' , '' , false); // Aqui solo usare una ventana, ya que solo sera descripcion e indicaciones
    var VoIP = new Network_Device_Number('BtnTelVoip' , 'WindowVoip' , '' , false);
    var Group_end_devices = new Group_Network_Devices_Number( [PC , VoIP] );

var Group_Type_NetD = new Group_Type_Network_Devices( [Routers , Switches , Hosts] );

var Preview = new Preview_Image_Topology('ImgTopology' , 'WindowPreview' , "/Images/Configuraciones Variadas/Topologia-VoIP-1.png" , 'BtnPrevImgTopology' , '.section-prev-indications' , 'TextWindowPrev');

/* Section Image Topology */
var Click_Image = false;
Preview.BtnPreview.addEventListener('click', () =>{
    Preview.Function_EventListener();
})
Preview.ImageTopology.addEventListener('click', () =>{
    if(!Click_Image){
        Click_Image = true;
        Preview.Display_Hidden_Text_Window_Preview(true);
    }
    else{
        Click_Image = false;
        Preview.Display_Hidden_Text_Window_Preview(false);
    }
})
Preview.ImageTopology.addEventListener('mousemove', (e) =>{
    Preview.Function_Mousemove(e, Click_Image);
});
Preview.ImageTopology.addEventListener('mouseout', ()=>{
    Preview.Function_Mouseout();
})

Routers.Btn.addEventListener('click',()=>{
    Group_Type_NetD.Function_EventListener(1);

    Group_Rn.Hidden_Window_Btn_Active();
})

    R1.Btn.addEventListener('click', () =>{
        Group_Rn.Function_EventListener(1 , CheckBox.checked);
    })

Switches.Btn.addEventListener('click', ()=>{
    Group_Type_NetD.Function_EventListener(2);

    Group_Sn.Hidden_Window_Btn_Active();
})

    S1.Btn.addEventListener('click', () =>{
        Group_Sn.Function_EventListener(1 , CheckBox.checked );
    })

Hosts.Btn.addEventListener('click', () =>{
    Group_Type_NetD.Function_EventListener(3);

    Group_end_devices.Hidden_Window_Btn_Active(true);
})
    PC.Btn.addEventListener('click', () =>{
        Group_end_devices.Function_EventListener(1);
    })
    VoIP.Btn.addEventListener('click', ()=>{
        Group_end_devices.Function_EventListener(2);
    })

CheckBox.addEventListener('change', () =>{
    /* 
        Si hay algun cambio en el check, se detecta y se busca el boton activo para que cuando se este viendo una ventana
        se cambie de manera dinamica a la  otra ventana  sin necesidad de cerrar y volver a abrir.
        Se pueden excluir algunos tipos de dispositivo, esto cuando queremos que no cuente con 2 ventanas, solo con 1 donde se muestre informacion concreta
        como indicaciones o descripciones
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