/* 
    ==========================================================
    Para exportar funciones, metodos o variables a otro archivo
    JS debes colocarles un "export" al inicio, indicando que
    estos se exportaran a otro archivo .js.
    ==========================================================
*/

/* Clases */
/* 
    =================================================================================================
    Estas clases se encargan de modificar los botones y ventanas, tanto individualmente como en conjunto para
    dar la ilusion de movimiento al realizar ciertas acciones.
    =================================================================================================
*/

    /* 
        ==================================================================
        En las clases "Group" se agrupan todos los botones junto con las 
        ventanas, estado, texto, etc., esto para hacer posible mostrar
        y posicionar adecuadamente por encima de los demas el boton 
        que hayamos seleccionado al igual que su ventana correspondiente.
        ==================================================================
    */
class ButtonForInformationTopology{
    constructor(Button , pElementInButton , WindowForButton){
        this.Button = Button;
        this.pElementInButton = pElementInButton;
        this.TextInButton = pElementInButton.textContent;
        this.ActiveButton = false;
        this.WindowForButton = WindowForButton;
    }
    Back_To_Normal_State(){
        this.Hidden_Window_For_Button();
        this.Button.classList.remove("btn-info-topology-active");
        this.Button.classList.remove("inactive-btn-effect");
        this.pElementInButton.classList.remove("text-btn-info-topology-active");
        this.pElementInButton.textContent = this.TextInButton;
    }
    Change_State_Button(){
        if(this.ActiveButton){
            this.Button.classList.add("btn-info-topology-active");
            this.pElementInButton.classList.add("text-btn-info-topology-active");

            this.pElementInButton.textContent = "Cerrar " + this.pElementInButton.textContent;
        }
        else{
            this.Button.classList.add("inactive-btn-effect");
        }
    }
    Display_Window_For_Button(){
        this.WindowForButton.style.top = "20%";
    }
    Hidden_Window_For_Button(){
        this.WindowForButton.style.top = "120%";
    }
}

class HandlerButtonsForInformationTopology{
    constructor(CollectionButtonsInfoTopology){
        this.CollectionButtonsInfoTopology = CollectionButtonsInfoTopology;
    }
    Add_Event_Listener(){
        this.CollectionButtonsInfoTopology.forEach((button_info_class) => {
            button_info_class.Button.addEventListener("click" , () => {
                if(button_info_class.ActiveButton){
                    button_info_class.ActiveButton = false;
                    this.Change_State_All_Buttons(false);
                    button_info_class.Hidden_Window_For_Button();
                }
                else{
                    button_info_class.ActiveButton = true;
                    this.Change_State_All_Buttons(true);
                    button_info_class.Display_Window_For_Button();
                }
            })
        })
    }
    Change_State_All_Buttons(IsAnySelected){
        this.CollectionButtonsInfoTopology.forEach((button_info_class) =>{
            IsAnySelected ? button_info_class.Change_State_Button() : button_info_class.Back_To_Normal_State();
        })
    }
}

export class ConstructorInformationTopologySection{
    constructor(TitlesForInfoButtons , HTMLWithInfo){
        this.TitlesForInfoButtons = TitlesForInfoButtons;
        this.HTMLWithInfo = HTMLWithInfo;
    }
    Insert_HTML_In_DOM(SectionContainerContentInfoTopology){
        setTimeout(() => {
            this.TitlesForInfoButtons.forEach((title_button) => {
                SectionContainerContentInfoTopology.innerHTML += `<button class="btn-info-topology" id="BtnInformationTopology"><p class="text-btn-info-topology" id="TextForBtnInfoTopology">${title_button}</p></button>`; 
            });
        }, 0);

        setTimeout(() => {
            this.HTMLWithInfo.forEach((html_content) => {
                SectionContainerContentInfoTopology.innerHTML += `<div class="window-content-for-button-information-topology" id="WindowContentForButtonInformationTopology">${html_content}</div>`;
            })
        }, 0);
    }
    Catch_Inserted_Elements(SectionContainerContentInfoTopology){
        let collection_buttons_info = [];
        let buttons_info = SectionContainerContentInfoTopology.querySelectorAll("#BtnInformationTopology");
        let p_elements_in_buttons_info = SectionContainerContentInfoTopology.querySelectorAll("#TextForBtnInfoTopology");
        let windows_for_buttons = SectionContainerContentInfoTopology.querySelectorAll("#WindowContentForButtonInformationTopology");

        buttons_info.forEach((button , index) => {
            let button_info_class = new ButtonForInformationTopology(button , p_elements_in_buttons_info[index] , windows_for_buttons[index]);
            collection_buttons_info.push(button_info_class);
        });
        
        let ManagerButtonsInfoSection = new HandlerButtonsForInformationTopology(collection_buttons_info);
        ManagerButtonsInfoSection.Add_Event_Listener();
    }
}


class ButtonForSectionContentEachDevice{
    constructor(Button , WindowConfigurationCommands , WindowOnlyCommands){
        this.Button = Button;
        this.TextInButton = this.Button.textContent;
        this.ActiveButton = false;
        this.WindowConfigurationCommands = WindowConfigurationCommands;
        this.WindowOnlyCommands = WindowOnlyCommands;
        this.IsActiveWindowOnlyCommands = false;
    }
    Back_To_Normal_State(){
        this.Hidden_Windows_For_Button();
        this.Button.classList.remove("btn-device-active");
        this.Button.classList.remove("inactive-btn-effect");
        this.Button.textContent = this.TextInButton;
    }
    Change_State_Button(){
        if(this.ActiveButton){
            this.Button.classList.add("btn-device-active");
            this.Button.textContent = "Cerrar " + this.TextInButton;
        }
        else{
            this.Button.classList.add("inactive-btn-effect");
        }
    }
    Display_Windows_For_Button(DisplayOnlyCommands){
        this.IsActiveWindowOnlyCommands = DisplayOnlyCommands;

        if(this.IsActiveWindowOnlyCommands && this.ActiveButton){
            this.WindowConfigurationCommands.style.right = "120%";
            this.WindowOnlyCommands.style.right = "5%";
        }
        else if(this.ActiveButton){
            this.WindowConfigurationCommands.style.right = "5%";
            this.WindowOnlyCommands.style.right = "120%";
        }
    }
    Hidden_Windows_For_Button(){
        this.WindowConfigurationCommands.style.right = "120%";
        this.WindowOnlyCommands.style.right = "120%";
    }
}

class HandlerButtonsForSectionContentEachDevice{
    constructor(CollectionButtonsEachDevice , CheckboxOnlyCommands){
        this.CollectionButtonsEachDevice = CollectionButtonsEachDevice;
        this.CheckboxOnlyCommands = CheckboxOnlyCommands;
    }
    Add_Event_Listener(){
        this.CollectionButtonsEachDevice.forEach((button_each_device_class) => {
            button_each_device_class.Button.addEventListener("click" , () => {
                if(button_each_device_class.ActiveButton){
                    button_each_device_class.ActiveButton = false;
                    this.Change_State_All_Buttons(false);
                    button_each_device_class.Display_Windows_For_Button(this.CheckboxOnlyCommands.checked);
                }
                else{
                    button_each_device_class.ActiveButton = true;
                    this.Change_State_All_Buttons(true);
                    button_each_device_class.Display_Windows_For_Button(this.CheckboxOnlyCommands.checked);
                }
            })
        })
    }

    Change_State_All_Buttons(IsAnySelected){
        this.CollectionButtonsEachDevice.forEach((button_each_device_class) => {
            IsAnySelected ? button_each_device_class.Change_State_Button() : button_each_device_class.Back_To_Normal_State();
        }) 
    }

    Disable_All_Objets(){
        this.CollectionButtonsEachDevice.forEach((button_each_device_class) => {
            button_each_device_class.ActiveButton = false;
            button_each_device_class.Back_To_Normal_State();
        })
    }

    Switch_Windows(IsCheckedOnlyCommands){
        this.CollectionButtonsEachDevice.forEach((button_each_device_class) => {
            button_each_device_class.Display_Windows_For_Button(IsCheckedOnlyCommands);
        })
    }
}

export class ConstructorSectionContentForEachDevice{
    constructor(TitlesForButtons , HTMLConfigurationCommands , HTMLOnlyCommands){
        this.TitlesForButtons = TitlesForButtons;
        this.HTMLConfigurationCommands = HTMLConfigurationCommands;
        this.HTMLOnlyCommands = HTMLOnlyCommands;

        this.html_buttons = ``;
        this.html_content = ``;

        this.IDSection = this.TitlesForButtons.join("_");

        this.TitlesForButtons.forEach((title_button , index) => {
            this.html_buttons += `<button class="btn-device" id="ButtonForDevice_${title_button}">${title_button}</button>`;
            this.html_content += `<div class="container-for-configuration-commands" id="WindowForConfigurationCommands_${title_button}">${this.HTMLConfigurationCommands[index]}</div><div class="container-for-configuration-commands" id="WindowForOnlyCommands_${title_button}">${this.HTMLOnlyCommands[index]}</div>`;
        })

    }
    Insert_HTML_In_DOM(SectionContentForDeviceType){
        setTimeout(() => {
            SectionContentForDeviceType.innerHTML += `<div class="container-content-for-each-device" id="SectionContainerContentForEachDevice${this.IDSection}"><div class="container-content" id="SectionContentForEachDevice">${this.html_buttons}${this.html_content}</div></div>`;
        }, 0);
    }

    Catch_Inserted_Elements(CheckboxOnlyCommands){
        let CollectionButtonsEachDevice = [];

        this.TitlesForButtons.forEach((title_button) => {
            let button_device = document.getElementById(`ButtonForDevice_${title_button}`);
            let window_configuration_commands = document.getElementById(`WindowForConfigurationCommands_${title_button}`);
            let window_only_commands = document.getElementById(`WindowForOnlyCommands_${title_button}`);

            let button_each_device_class = new ButtonForSectionContentEachDevice(button_device , window_configuration_commands , window_only_commands);
            CollectionButtonsEachDevice.push(button_each_device_class);
        })

        let SectionContainerContentForEachDevice = document.getElementById(`SectionContainerContentForEachDevice${this.IDSection}`);
        
        let ManagerButtonsDevices = new HandlerButtonsForSectionContentEachDevice(CollectionButtonsEachDevice , CheckboxOnlyCommands);
        ManagerButtonsDevices.Add_Event_Listener();

        return [SectionContainerContentForEachDevice , ManagerButtonsDevices];
    }
}

export function Add_Event_Listener_Checkbox_Only_Commands(CheckboxOnlyCommands , CollectionManagersButtonsDevices){
    CheckboxOnlyCommands.addEventListener("click" , () => {
        CollectionManagersButtonsDevices.forEach((manager_button_device) => {
            manager_button_device.Switch_Windows(CheckboxOnlyCommands.checked)
        })
    })
}

class ButtonForDeviceType{
    constructor(Button , ManagerButtonsDevices , SectionContainerContentForEachDevice){
        this.Button = Button;
        this.ActiveButton = false;
        this.ManagerButtonsDevices = ManagerButtonsDevices;
        this.SectionContainerContentForEachDevice = SectionContainerContentForEachDevice;
    }

    Back_To_Normal_State(){
        this.Button.classList.remove("btn-for-device-type-active");
        this.Button.classList.remove("inactive-btn-effect");

        this.ManagerButtonsDevices.Disable_All_Objets();
    }

    Change_State_Button(){
        if(this.ActiveButton){
            this.Button.classList.add("btn-for-device-type-active");
        }
        else{
            this.Button.classList.add("inactive-btn-effect");
        }
    }

    Display_Window_Devices(){
        this.SectionContainerContentForEachDevice.style.top = "7%";
    }

    Hidden_Window_Devices(){
        this.SectionContainerContentForEachDevice.style.top = "120%";
    }
}

class HandlerButtonsForDeviceType{
    constructor(CollectionButtonsForDeviceType){
        this.CollectionButtonsForDeviceType = CollectionButtonsForDeviceType;
    }

    Add_Event_Listener(){
        this.CollectionButtonsForDeviceType.forEach((button_device_type_class) => {
            button_device_type_class.Button.addEventListener("click" , () => {
                if(button_device_type_class.ActiveButton){
                    button_device_type_class.ActiveButton = false;
                    this.Change_State_All_Buttons(false);
                    button_device_type_class.Hidden_Window_Devices();
                }
                else{
                    button_device_type_class.ActiveButton = true;
                    this.Change_State_All_Buttons(true);
                    button_device_type_class.Display_Window_Devices();
                }
            })
        })
    }

    Change_State_All_Buttons(IsAnySelected){
        this.CollectionButtonsForDeviceType.forEach((button_device_type_class) => {
            IsAnySelected ? button_device_type_class.Change_State_Button() : button_device_type_class.Back_To_Normal_State();
        })
    }
}

export class ConstructorSectionContentForDeviceType{
    constructor(TitlesForButtons){
        this.TitlesForButtons = TitlesForButtons;
    }
    Insert_HTML_In_DOM(SectionContentForDeviceType){
        let html_buttons = ``;
        this.TitlesForButtons.forEach((title_button) => {
            html_buttons += `<button class="btn-for-device-type" id="BtnForDeviceType">${title_button}</button>`;
        })

        setTimeout(() => {
            SectionContentForDeviceType.innerHTML += html_buttons;
        }, 0);
    }
    Catch_Inserted_Elements(SectionContentForDeviceType , CollectionManagersButtonsDevices , CollectionSectionsContainerContentForEachDevice){
        let collection_buttons_device_type = []; 

        let buttons_devices = SectionContentForDeviceType.querySelectorAll("#BtnForDeviceType");
        buttons_devices.forEach((button , index) => {
            let button_device_type_class = new ButtonForDeviceType(button , CollectionManagersButtonsDevices[index] , CollectionSectionsContainerContentForEachDevice[index]);
            collection_buttons_device_type.push(button_device_type_class);
        })
        let ManagerButtonsDeviceType = new HandlerButtonsForDeviceType(collection_buttons_device_type);
        ManagerButtonsDeviceType.Add_Event_Listener();
    }
}


export class ConstructorSectionMultimediaTopology{
    constructor(ImageTopology , FileTopology = NaN , DocumentTopology = NaN){

        this.HTMLImageTopology = `<img class="image-modal" src="${ImageTopology}" alt="Imagen de la Topologia">`;
        this.HTMLButtonDownloadImageTopology = `<a class="btn-download-image-topology" id="BtnDownloadImageTopology" href="${ImageTopology}" download="ImagenTopologia">Descargar Imagen</a>`;

        this.HTMLButtonDownloadFileTopology = ``;
        this.HtMLButtonDownloadDocumentTopology = ``;

        if(FileTopology){
            this.HTMLButtonDownloadFileTopology += `<a class="btn-download-file-topology" id="BtnDownloadFileTopology" href="${FileTopology}" download="Topologia">Descargar Topologia</a>`;
        }
        if(DocumentTopology){
            this.HtMLButtonDownloadDocumentTopology += `<a class="btn-download-document-topology" id="BtnDownloadDocumentTopology" href="${DocumentTopology}" download="DocumentoTopologia">Descargar Documento</a>`;
        }

        this.HTMLButtonCloseModal = `<button class="btn-close-modal" id="BtnCloseModal">Cerrar</button>`;

        this.HTMLButtons = this.HTMLButtonDownloadImageTopology + this.HTMLButtonDownloadFileTopology + this.HtMLButtonDownloadDocumentTopology + this.HTMLButtonCloseModal;
    }

    Insert_HTML_In_DOM(SectionModalDownloadMultimedia){
        setTimeout(() => {
            SectionModalDownloadMultimedia.innerHTML += `<div class="content-section-modal-download-multimedia-topology">${this.HTMLImageTopology}<div class="container-buttons-modal">${this.HTMLButtons}</div></div>`;
        }, 0);
    }

    Catch_Inserted_Elements(SectionModalDownloadMultimedia , LeftSection , RigthSection){
        let button_close_modal = document.getElementById("BtnCloseModal");

        button_close_modal.addEventListener("click" , () => {
            SectionModalDownloadMultimedia.style.top = "120%";

            LeftSection.classList.remove("inactive-section-effect");
            RigthSection.classList.remove("inactive-section-effect");
        })
    }
}


export class ButtonDisplaySectionStepsForConfiguration{
    constructor(Button , SectionCommandsConfiguration , SectionStepsForConfiguration){
        this.Button = Button;
        this.TextInButton = "Explicacion Paso a Paso";
        this.ActiveButton = false;
        this.SectionCommandsConfiguration = SectionCommandsConfiguration;
        this.SectionStepsForConfiguration = SectionStepsForConfiguration;
    }

    
    Add_Event_Listener(){
        this.Button.addEventListener("click" , () => {
            if(this.ActiveButton){
                this.ActiveButton = false;
                this.Button.textContent = "Mostrar " + this.TextInButton;
            }
            else{
                this.ActiveButton = true;
                this.Button.textContent = "Ocultar " + this.TextInButton;
            }

            this.Move_Sections();
        })
    }

    Move_Sections(){
        if(this.ActiveButton){
            this.SectionCommandsConfiguration.classList.add("inactive-section-effect");
            this.SectionStepsForConfiguration.style.left = "0%";
        }
        else{
            this.SectionCommandsConfiguration.classList.remove("inactive-section-effect");
            this.SectionStepsForConfiguration.style.left = "120%";
        }
    }
}

class ButtonStepsSection{
    constructor(Button , WindowStep){
        this.Button = Button;
        this.ActiveButton = false;
        this.WindowStep = WindowStep;
    }

    Change_State_Button(){
        if(this.ActiveButton){
            this.Button.classList.add("btn-step-active");
        }
        else{
            this.Button.classList.add("");
        }
    }
}

export class Type_Network_Device{
    constructor (IDBtn , IDWindowSelectionDevice){
        this.Btn = document.getElementById(IDBtn);
        this.WindowSelectionDevice = document.getElementById(IDWindowSelectionDevice);
        this.Active = false;
        this.TextBtn = ""; // Declara todas las variables aunque sea con un valor vacio.
    }
    Display_Button(){
        this.Btn.style.transition = "opacity 300ms ease-in-out , transform 200ms ease-in-out , background-color 200ms ease-in-out , box-shadow 200ms ease-in-out";
        this.Btn.style.opacity = "1";
        this.Btn.style.pointerEvents = "all";
    }

    Hidden_Button(){
        this.Btn.style.transition = "opacity 300ms ease-in-out , transform 200ms ease-in-out , background-color 200ms ease-in-out , box-shadow 200ms ease-in-out";
        this.Btn.style.opacity = "0";
        this.Btn.style.pointerEvents = "none";
    }

    Place_Button_on_Top(Btn_Position){
        const Valor = 10;
        this.Btn.style.transition = "top 200ms ease-in-out , transform 200ms ease-in-out , background-color 200ms ease-in-out , box-shadow 200ms ease-in-out";
        this.Btn.style.top = `-${Valor * Btn_Position}%`;
    }
    Place_Button_on_Original_Place(){
        this.Btn.style.transition = "top 400ms ease-in-out , transform 200ms ease-in-out , background-color 200ms ease-in-out , box-shadow 200ms ease-in-out";
        this.Btn.style.top = "0%";
    }
    Display_Window(){
        this.WindowSelectionDevice.style.transition = "400ms ease-in-out";
        this.WindowSelectionDevice.style.top = "9%";

        this.Active = true;

        this.TextBtn = this.Btn.textContent; /* Texto actual del boton */
        const TextoCerrar = "Cerrar Ventana "
        this.Btn.textContent = TextoCerrar + this.TextBtn; /* Nuevo texto del boton */
        /* Usa las comilla simples para poder insertar variables */
    } 

    Hidden_Window(){
        this.WindowSelectionDevice.style.transition = "400ms ease-in-out";
        this.WindowSelectionDevice.style.top = "100%";

        this.Active = false;

        if(!(this.TextBtn == "")){
            this.Btn.textContent = this.TextBtn;
            this.TextBtn = "";
        }
    }
}

export class Group_Type_Network_Devices{
    constructor ( Array_Type_Network_Devices ){
        this.Type_Network_Devices = Array_Type_Network_Devices;
    }
    Hidden_Buttons_Type_Network_Devices(){
        for (let n=0;n<this.Type_Network_Devices.length;n++){
            if(!this.Type_Network_Devices[n].Active){
                this.Type_Network_Devices[n].Hidden_Button();
            }
            else{
                this.Type_Network_Devices[n].Place_Button_on_Top(n);
            }
        }
    }
    Display_Buttons_Type_Network_Devices(){
        for (let n=0;n<this.Type_Network_Devices.length;n++){
            if(!this.Type_Network_Devices[n].Active){
                this.Type_Network_Devices[n].Display_Button();
            }
            else{
                this.Type_Network_Devices[n].Place_Button_on_Original_Place();
            }
        }
    }
    Function_EventListener(N_Position_Btn_Type_Network_Device){
        N_Position_Btn_Type_Network_Device--;
        if(!this.Type_Network_Devices[N_Position_Btn_Type_Network_Device].Active){
            this.Type_Network_Devices[N_Position_Btn_Type_Network_Device].Display_Window();

            this.Hidden_Buttons_Type_Network_Devices();
        }
        else{
            this.Display_Buttons_Type_Network_Devices();
            
            this.Type_Network_Devices[N_Position_Btn_Type_Network_Device].Hidden_Window();
        }
    }
}

export class Network_Device_Number{
    constructor (IDBtn , IDWindowCommandsMode , IDWindowOnlyCommands , Active){
        this.Btn = document.getElementById(IDBtn);
        this.WindowCommandsPlusMode = document.getElementById(IDWindowCommandsMode);
        this.WindowOnlyCommands = document.getElementById(IDWindowOnlyCommands);
        this.Active = Active;
        this.TextBtn = "";
    }
    Display_Button(){
        this.Btn.style.transition = "opacity 300ms ease-in-out , transform 200ms ease-in-out , color 200ms ease-in-out , box-shadow 200ms ease-in-out";
        this.Btn.style.opacity = "1";
        this.Btn.style.pointerEvents = "all";
    }
    Hidden_Button(){
        this.Btn.style.transition = "opacity 300ms ease-in-out , transform 200ms ease-in-out , color 200ms ease-in-out , box-shadow 200ms ease-in-out";
        this.Btn.style.opacity = "0";
        this.Btn.style.pointerEvents = "none";
    }
    Place_Button_on_Original_Place(){
        this.Btn.style.transition = "top 400ms ease-in-out , transform 200ms ease-in-out , color 200ms ease-in-out , box-shadow 200ms ease-in-out";
        this.Btn.style.top = "0%";
    }
    Place_Button_on_Top(N_Btn){
        const Value = 15;
        this.Btn.style.transition = "top 200ms ease-in-out , transform 200ms ease-in-out , color 200ms ease-in-out , box-shadow 200ms ease-in-out";
        this.Btn.style.top = `-${Value * N_Btn}%`;
    }
    Display_Window_Commands(Checked_CheckBox){
        if(Checked_CheckBox){
            this.WindowOnlyCommands.style.transition = "400ms ease-in-out";
            this.WindowOnlyCommands.style.left = "5%";
            this.WindowOnlyCommands.style.opacity = "1";
            this.WindowOnlyCommands.style.transform = "scale(1)";

            this.TextBtn = this.Btn.textContent;
            const TextClose = "Cerrar Ventana ";
            this.Btn.textContent = TextClose + this.TextBtn;

            this.Active = true;
        }
        else{
            this.WindowCommandsPlusMode.style.transition = "400ms ease-in-out";
            this.WindowCommandsPlusMode.style.left = "5%";
            this.WindowCommandsPlusMode.style.opacity = "1";
            this.WindowCommandsPlusMode.style.transform = "scale(1)";

            this.TextBtn = this.Btn.textContent;
            const TextClose = "Cerrar Ventana ";
            this.Btn.textContent = TextClose + this.TextBtn;

            this.Active = true;
        }
    }
    Hidden_Window_Commands(Checked_CheckBox){
        if(Checked_CheckBox){
            this.WindowOnlyCommands.style.transition = "500ms ease-in-out";
            this.WindowOnlyCommands.style.opacity = "0.5";
            this.WindowOnlyCommands.style.transform = "scale(.8)";
            this.WindowOnlyCommands.style.left = "-100%";

            if(!(this.TextBtn == "")){
                this.Btn.textContent = this.TextBtn;
                this.TextBtn = "";
            }

            this.Active = false;
        }
        else{
            this.WindowCommandsPlusMode.style.transition = "500ms ease-in-out";
            this.WindowCommandsPlusMode.style.opacity = "0.5";
            this.WindowCommandsPlusMode.style.transform = "scale(.8)";
            this.WindowCommandsPlusMode.style.left = "-100%";

            if(!(this.TextBtn == "")){
                this.Btn.textContent = this.TextBtn;
                this.TextBtn = "";
            }
            
            this.Active = false;
        }

    }
}

export class Group_Network_Devices_Number{
    constructor ( Array_Devices ){
        this.Devices = Array_Devices;
    }
    Hidden_Buttons_Number_Device(){
        for(let n=0;n<this.Devices.length;n++){
            if(!this.Devices[n].Active){
                this.Devices[n].Hidden_Button();
            }
            else{
                this.Devices[n].Place_Button_on_Top(n);
            }
        }
    }
    Display_Buttons_Number_Device(){
        for(let n=0;n<this.Devices.length;n++){
            if(!this.Devices[n].Active){
                this.Devices[n].Display_Button();
            }
            else{
                this.Devices[n].Place_Button_on_Original_Place();
            }
        }
    }
    Hidden_Window_Btn_Active(End_Device=false){
        /* Esta funcion se usa para ocultar todas las ventanas abiertas cuando cerramos la ventana principal Routers o Switches etc. */
        for(let n=0;n<this.Devices.length;n++){
            if(End_Device){
                if(this.Devices[n].Active){
                    this.Devices[n].Hidden_Window_Commands(false);
                    this.Devices[n].Place_Button_on_Original_Place();
                }
                else{
                    this.Devices[n].Display_Button();
                }
            }
            else{
                if(this.Devices[n].Active){
                    this.Devices[n].Hidden_Window_Commands(false); /* Oculta la ventana comandos y solo comandos */
                    this.Devices[n].Hidden_Window_Commands(true);
                    this.Devices[n].Place_Button_on_Original_Place();
                }
                else{
                    this.Devices[n].Display_Button();
                }
            }
        }
    }
    Function_EventListener(N_Device, Checked_CheckBox=false){
        N_Device--;
        if(!this.Devices[N_Device].Active){
            this.Devices[N_Device].Display_Window_Commands(Checked_CheckBox);

            this.Hidden_Buttons_Number_Device();
        }
        else{
            this.Display_Buttons_Number_Device();

            this.Devices[N_Device].Hidden_Window_Commands(Checked_CheckBox);
        }
    }
}

export class Explain_Steps{
    constructor (IDBtn, IDWindowStep){
        this.Btn = document.getElementById(IDBtn);
        this.WindowStep = document.getElementById(IDWindowStep);
        this.Active = false;
        this.TextBtn = "";
    }
    Display_Button(){
        this.Btn.style.transition = "opacity 300ms ease-in-out , transform 150ms ease-in-out, background-color 150ms ease-in-out , box-shadow 150ms ease-in-out";
        this.Btn.style.opacity = "1";
        this.Btn.style.pointerEvents = "all";
    }
    Hidden_Button(){
        this.Btn.style.transition = "opacity 300ms ease-in-out , transform 150ms ease-in-out, background-color 150ms ease-in-out , box-shadow 150ms ease-in-out";
        this.Btn.style.opacity = "0";
        this.Btn.style.pointerEvents = "none";
    }
    Place_Button_on_Original_Place(){
        this.Btn.style.transition = "top 400ms ease-in-out , transform 150ms ease-in-out, background-color 150ms ease-in-out , box-shadow 150ms ease-in-out";
        this.Btn.style.top = "0%";
    }
    Place_Button_on_Top(N_Btn){
        const Value = 9.5;
        this.Btn.style.transition = "top 300ms ease-in-out , transform 150ms ease-in-out, background-color 150ms ease-in-out , box-shadow 150ms ease-in-out";
        this.Btn.style.top = `-${Value * N_Btn}%`; /* Para colocar variables se usa otro tipo de comilla: backticks (`) */
    }
    Display_Window(){
        this.WindowStep.style.transition = "400ms ease-in-out";
        this.WindowStep.style.top = "10%";

        this.Active = true;

        this.TextBtn = this.Btn.textContent;
        const TextClose = "Cerrar Ventana ";
        this.Btn.textContent = TextClose + this.TextBtn;
    }
    Hidden_Window(){
        this.WindowStep.style.transition = "400ms ease-in-out";
        this.WindowStep.style.top = "100%";

        this.Active = false;

        if(!(this.TextBtn == "")){
            this.Btn.textContent = this.TextBtn;
            this.TextBtn = "";
        }
    }
}

export class Group_Btn_Explain_Steps{
    constructor ( Array_Btn_Steps , IDBtnPreviousStep, IDBtnNextStep){
        this.ButtonsSteps = Array_Btn_Steps;
        this.BtnPreviousStep = document.getElementById(IDBtnPreviousStep);
        this.BtnNextStep = document.getElementById(IDBtnNextStep);
        this.Actual_Position = null;
    }
    Hidden_Buttons_Steps(){
        for (let n=0;n<this.ButtonsSteps.length;n++){
            if(!this.ButtonsSteps[n].Active){
                this.ButtonsSteps[n].Hidden_Button();
            }
            else{
                this.ButtonsSteps[n].Display_Button();
                this.ButtonsSteps[n].Place_Button_on_Top(n);
            }
        }
    }
    Display_Buttons_Steps(){
        for (let n=0;n<this.ButtonsSteps.length;n++){
            if(!this.ButtonsSteps[n].Active){
                this.ButtonsSteps[n].Display_Button();
            }
            else{
                this.ButtonsSteps[n].Place_Button_on_Original_Place();
            }
        }
    }
    Activate_Btn_Next_Step(){
        this.BtnNextStep.classList.add('next');
        this.BtnNextStep.style.pointerEvents = "all";
        this.BtnNextStep.style.cursor = "pointer";
    }
    Disable_Btn_Next_Step(){
        this.BtnNextStep.classList.remove('next');
        this.BtnNextStep.style.pointerEvents = "none";
        this.BtnNextStep.style.cursor = "default";
    }
    Activate_Btn_Previous_Step(){
        this.BtnPreviousStep.classList.add('previous');
        this.BtnPreviousStep.style.pointerEvents = "all";
        this.BtnPreviousStep.style.cursor = "pointer";
    }
    Disable_Btn_Previous_Step(){
        this.BtnPreviousStep.classList.remove('previous');
        this.BtnPreviousStep.style.pointerEvents = "none";
        this.BtnPreviousStep.style.cursor = "default";
    }
    Change_State_Btn_Previous_Next_When_Open_Window_Step(){
        for(let r=0;r<this.ButtonsSteps.length;r++){
            if(this.ButtonsSteps[r].Active){
                this.Actual_Position = r;
            }
        }
        if(this.Actual_Position == 0){
            this.Disable_Btn_Previous_Step();

            this.Activate_Btn_Next_Step();
        }
        else if(this.Actual_Position == this.ButtonsSteps.length-1){
            this.Activate_Btn_Previous_Step();

            this.Disable_Btn_Next_Step();
        }
        else {
            this.Activate_Btn_Previous_Step();

            this.Activate_Btn_Next_Step();
        }
        if(this.Actual_Position == null){
            this.Disable_Btn_Previous_Step();

            this.Disable_Btn_Next_Step();
        }
    }
    Go_Next_Step(){
        this.ButtonsSteps[this.Actual_Position].Hidden_Window();
        this.ButtonsSteps[this.Actual_Position].Place_Button_on_Original_Place();

        this.ButtonsSteps[this.Actual_Position+1].Display_Window();

        this.Hidden_Buttons_Steps();

        if(this.Actual_Position<this.ButtonsSteps.length-1){
            this.Actual_Position++;
        }
        if(this.Actual_Position==this.ButtonsSteps.length-1){
            this.Disable_Btn_Next_Step();
        }
        else{
            this.Activate_Btn_Next_Step();
            this.Activate_Btn_Previous_Step();
        }
    }
    Go_Previous_Step(){
        this.ButtonsSteps[this.Actual_Position].Hidden_Window();
        this.ButtonsSteps[this.Actual_Position].Place_Button_on_Original_Place();

        this.ButtonsSteps[this.Actual_Position-1].Display_Window();

        this.Hidden_Buttons_Steps(); /* Se ocultan todos los demas, excepto el actual */
            
        if(this.Actual_Position>0){
            this.Actual_Position--;
        }

        if(this.Actual_Position==0){
            this.Disable_Btn_Previous_Step();
        }
        else{
            this.Activate_Btn_Previous_Step();
            this.Activate_Btn_Next_Step();
        }

    }
    Function_EventListener(N_Paso){
        N_Paso--;
        if(!this.ButtonsSteps[N_Paso].Active){
            this.ButtonsSteps[N_Paso].Display_Window();

            this.Hidden_Buttons_Steps();

            this.Change_State_Btn_Previous_Next_When_Open_Window_Step();
        }
        else{
            this.Display_Buttons_Steps();

            this.ButtonsSteps[N_Paso].Hidden_Window();

            this.Actual_Position = null;

            this.Change_State_Btn_Previous_Next_When_Open_Window_Step();
        }
    }
    Hidden_Window_Btn_Active(){
        this.Display_Buttons_Steps();

        for(let n=0;n<this.ButtonsSteps.length;n++){
            if(this.ButtonsSteps[n].Active){
                this.ButtonsSteps[n].Hidden_Window();
            }
        }
        this.Actual_Position = null;
        this.Disable_Btn_Next_Step();
        this.Disable_Btn_Previous_Step();
    }
}

export class Preview_Image_Topology{
    constructor ( IDImageTopology , IDWindowPreview , URLImageTopology , IDBtnPreview , ClassWindowPrevIndications , IDTextWindowPrev){
        this.ImageTopology = document.getElementById(IDImageTopology);
        this.WindowPreview = document.getElementById(IDWindowPreview);
        this.URLImageTopology = URLImageTopology;
        this.BtnPreview = document.getElementById(IDBtnPreview);
        this.WindowPrevIndications = document.querySelector(ClassWindowPrevIndications);
        this.Active = false;
        this.TextBtn = "";
        this.e = null;
        this.TextWindowPrev = document.getElementById(IDTextWindowPrev);
    }
    Function_Mousemove(e, Click){
        if(Click){
            e = this.e;
            this.ImageTopology.style.cursor = "default";
        }
        else{
            this.e = e;
            this.ImageTopology.style.cursor = "zoom-in";
        }
        let x = this.WindowPreview.offsetWidth / 110;
        let y = this.WindowPreview.offsetHeight / 110;

        this.WindowPreview.style.backgroundImage =
        `image-set('${ this.URLImageTopology }')`;
        this.WindowPreview.style.backgroundSize = this.ImageTopology.width * x +
            "px " + this.ImageTopology.height * y + "px";

        let posX = e.offsetX * (-1);
        let posY = e.offsetY * (-1);

        this.WindowPreview.style.backgroundPosition =
            ((posX * x) + (170)) + "px " + ((posY * y) + (110)) + "px";
    }
    Function_Mouseout(){
        this.Function_Mousemove(this.e); // Al salir el mause de la ventana el valor "e" ya no se modifica y queda constante, 
                                         // por lo que dara el efecto de que la imagen se queda estatica en esa posicion
    }
    Function_EventListener(){
        if(!this.Active){
            this.WindowPreview.style.transition = "600ms ease-in-out";
            this.WindowPreview.style.top = "0%";

            this.WindowPrevIndications.style.transition = "500ms ease-in-out";
            this.WindowPrevIndications.style.opacity = "0";
            this.WindowPrevIndications.style.top = "-100%";

            this.ImageTopology.style.cursor = "zoom-in";

            this.TextBtn = this.BtnPreview.textContent;
            const TextClose = "Cerrar ";
            this.BtnPreview.textContent = TextClose + this.TextBtn;
            this.Active = true;
        }
        else{
            this.WindowPreview.style.transition = "500ms ease-in-out";
            this.WindowPreview.style.top = "-100%";

            this.WindowPrevIndications.style.transition = "400ms ease-in-out";
            this.WindowPrevIndications.style.opacity = "1";
            this.WindowPrevIndications.style.top = "0%";

            this.ImageTopology.style.cursor = "default";

            this.BtnPreview.textContent = this.TextBtn;

            this.Active = false;
        }
    }
    Display_Hidden_Text_Window_Preview(Fixed){
        if(Fixed){
            this.TextWindowPrev.textContent = "Fijado";

            this.TextWindowPrev.style.transition = "800ms ease-in-out";
            this.TextWindowPrev.style.opacity = "1";
        }
        else{
            this.TextWindowPrev.textContent = "No Fijado";

            this.TextWindowPrev.style.transition = "800ms ease-in-out";
            this.TextWindowPrev.style.opacity = "0";
        }
    }
}