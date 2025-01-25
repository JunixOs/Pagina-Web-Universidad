/* 
    ==========================================================
    Para exportar funciones, metodos o variables a otro archivo
    JS debes colocarles un "export" al inicio, indicando que
    estos se exportaran a otro archivo .js.
    ==========================================================
*/

/* Clases Botones */

export class Type_Network_Device{
    constructor (IDBtn , IDWindowSelectionDevice){
        this.Btn = document.getElementById(IDBtn);
        this.WindowSelectionDevice = document.getElementById(IDWindowSelectionDevice);
        this.Active = false;
        this.TextBtn = ""; // Declara todas las variables aunque sea con un valor vacio.
    }
    Display_Button(){
        this.Btn.style.transition = "800ms ease-in-out";
        this.Btn.style.opacity = "1";
        this.Btn.style.pointerEvents = "all";
    }

    Hidden_Button(){
        this.Btn.style.transition = "400ms ease-in-out";
        this.Btn.style.opacity = "0";
        this.Btn.style.pointerEvents = "none";
    }

    Place_Button_on_Top(Btn_Position){
        const Valor = 10;
        this.Btn.style.transition = "550ms ease-in-out";
        this.Btn.style.top = `-${Valor * Btn_Position}%`;
    }
    Place_Button_on_Original_Place(){
        this.Btn.style.transition = "600ms ease-in-out";
        this.Btn.style.top = "0%";
    }
    Display_Window(){
        this.WindowSelectionDevice.style.transitionDuration = "0.6s";
        this.WindowSelectionDevice.style.transitionTimingFunction = "ease-in-out";
        this.WindowSelectionDevice.style.top = "9%";

        this.Active = true;

        
        this.TextBtn = this.Btn.textContent; /* Texto actual del boton */
        const TextoCerrar = "Cerrar Ventana "
        this.Btn.textContent = TextoCerrar + this.TextBtn; /* Nuevo texto del boton */
        /* Usa las comilla simples para poder insertar variables */
    } 

    Hidden_Window(){
        this.WindowSelectionDevice.style.transitionDuration = "0.6s";
        this.WindowSelectionDevice.style.transitionTimingFunction = "ease-in-out";
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
        this.Btn.style.transitionProperty = "box-shadow, color, transform, opacity";
        this.Btn.style.transitionDuration = "400ms";
        this.Btn.style.transitionTimingFunction = "ease-in-out";
        this.Btn.style.opacity = "1";
        this.Btn.style.pointerEvents = "all";
    }
    Hidden_Button(){
        this.Btn.style.transitionProperty = "box-shadow, color, opacity, transform";
        this.Btn.style.transitionDuration = "400ms";
        this.Btn.style.transitionTimingFunction = "ease-in-out";
        this.Btn.style.opacity = "0";
        this.Btn.style.pointerEvents = "none";
    }
    Place_Button_on_Original_Place(){
        this.Btn.style.transition = "400ms ease-in-out";
        this.Btn.style.top = "0%";
    }
    Place_Button_on_Top(N_Btn){
        const Value = 15;
        this.Btn.style.transition = "400ms ease-in-out";
        this.Btn.style.top = `-${Value * N_Btn}%`;
    }
    Display_Window_Commands(Checked_CheckBox){
        if(Checked_CheckBox){
            this.WindowOnlyCommands.style.transition = "800ms ease-in-out";
            this.WindowOnlyCommands.style.left = "5%";
            this.WindowOnlyCommands.style.opacity = "1";
            this.WindowOnlyCommands.style.transform = "scale(1)";

            this.TextBtn = this.Btn.textContent;
            const TextClose = "Cerrar Ventana ";
            this.Btn.textContent = TextClose + this.TextBtn;

            this.Active = true;
        }
        else{
            this.WindowCommandsPlusMode.style.transition = "800ms ease-in-out";
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
            this.WindowOnlyCommands.style.transition = "600ms ease-in-out";
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
            this.WindowCommandsPlusMode.style.transition = "600ms ease-in-out";
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
        this.Btn.style.transition = "400ms ease-in-out";
        this.Btn.style.opacity = "1";
        this.Btn.style.pointerEvents = "all";
    }
    Hidden_Button(){
        this.Btn.style.transition = "400ms ease-in-out";
        this.Btn.style.opacity = "0";
        this.Btn.style.pointerEvents = "none";
    }
    Place_Button_on_Original_Place(){
        this.Btn.style.transition = "500ms ease-in-out";
        this.Btn.style.top = "0%";
    }
    Place_Button_on_Top(N_Btn){
        const Value = 23;
        this.Btn.style.transition = "400ms ease-in-out";
        this.Btn.style.top = `-${Value * N_Btn}%`; /* Para colocar variables se usa otro tipo de comilla: backticks (`) */
    }
    Display_Window(){
        this.WindowStep.style.transition = "600ms ease-in-out";
        this.WindowStep.style.top = "10%";

        this.Active = true;

        this.TextBtn = this.Btn.textContent;
        const TextClose = "Cerrar Ventana ";
        this.Btn.textContent = TextClose + this.TextBtn;
    }
    Hidden_Window(){
        this.WindowStep.style.transition = "600ms ease-in-out";
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
                this.ButtonsSteps[n].Place_Button_on_Top(n);
                this.ButtonsSteps[n].Display_Button();
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