/* 
    =======================================================================
    Aqui se realizan todas las inserciones de HTML y la captura de
    elementos del DOM para dar interactividad al sitio.
    =======================================================================
*/

class ButtonForIndex{
    constructor(IDBtnIndex){
        this.BtnIndex = document.getElementById(IDBtnIndex);
        this.ActiveBtn = false;
    }
    DisableHoverEffect(){
        this.BtnIndex.classList.remove("btn-for-index-hover");
        if(this.ActiveBtn){
            this.BtnIndex.classList.add("no-blurred-effect");
        }
        else{
            this.BtnIndex.classList.add("blurred-effect");
        }
    }
    EnableHoverEffect(){
        this.BtnIndex.classList.remove("blurred-effect");
        this.BtnIndex.classList.remove("no-blurred-effect");
        this.BtnIndex.classList.add("btn-for-index-hover");
    }
    DisableButton(){
        this.BtnIndex.classList.add("blurred-effect");
        this.BtnIndex.classList.remove("no-blurred-effect");
        this.BtnIndex.classList.remove("btn-for-index-hover");
        this.BtnIndex.classList.remove("btn-topics-active-effect");
    }
    EnableButton(){
        this.BtnIndex.classList.remove("blurred-effect");
    }
}


class HandlerButtonsForIndex{
    constructor(CollectionButtonsForIndex , CollectionOfHTMLWithContentTopics , ContainerIndexButtonsForTopics){
        this.CollectionButtonsForIndex = CollectionButtonsForIndex;
        this.CollectionOfHTMLWithContentTopics = CollectionOfHTMLWithContentTopics;
        this.ContainerIndexButtonsForTopics = ContainerIndexButtonsForTopics;
    }
    Manipulate_HTML_With_Content(Active){
        if(Active){
            this.ContainerIndexButtonsForTopics.style.top = "0%";
        }
        else{
            this.ContainerIndexButtonsForTopics.style.top = "120%";
        }
    }
    Activate_Event_Listener(){
        this.CollectionButtonsForIndex.forEach((button , index) => {
            button.BtnIndex.addEventListener("click" , () => {
                if(button.ActiveBtn){
                    button.ActiveBtn = false;
                    button.BtnIndex.classList.remove("btn-topics-active-effect");
                    this.CollectionOfHTMLWithContentTopics[index].style.left = "120%";
                    this.Change_Hover_Effect(true);
                }
                else{
                    button.ActiveBtn = true;
                    button.BtnIndex.classList.add("btn-topics-active-effect");
                    this.CollectionOfHTMLWithContentTopics[index].style.left = "0%";
                    this.Change_Hover_Effect(false);
                }
            })
        })
    }
    Change_Hover_Effect(ActiveHover){
        this.CollectionButtonsForIndex.forEach((button , index) => {
            if(ActiveHover){
                this.ContainerIndexButtonsForTopics.classList.add("container-buttons-index-for-topics-hover");
                button.EnableHoverEffect();
            }
            else{
                this.ContainerIndexButtonsForTopics.classList.remove("container-buttons-index-for-topics-hover");
                button.DisableHoverEffect();
            }
        })
    }
    Disable_All_Objets(){
        this.CollectionButtonsForIndex.forEach((button , index) => {
            button.ActiveBtn = false;
            button.BtnIndex.classList.remove("btn-topics-active-effect");
            this.CollectionOfHTMLWithContentTopics[index].style.left = "120%";
            this.Change_Hover_Effect(true);
        })
        this.Manipulate_HTML_With_Content(false);
    }
}


class ConstructorIndexSection{
    constructor(IDContainerContentForTopicsOrEv , TitleTopics , HTMLWithTopicsContent, UnitNumber){
        this.ContainerContentForTopicsOrEv = document.getElementById(IDContainerContentForTopicsOrEv);
        this.TitleTopics = TitleTopics;
        this.HTMLWithTopicsContent = HTMLWithTopicsContent;
        this.UnitNumber = UnitNumber;

        this.CollectionButtonsForIndex = []
        this.CollectionOfHTMLWithContentTopics = []
        this.ManagerForIndexButtons = NaN;
        this.ContainerIndexButtonsForTopics = NaN;
    }
    Insert_Index_Buttons_In_DOM(SectionIndexForTopics){
        let buttons_html = ``;
        this.TitleTopics.forEach((title , index) => {
            buttons_html += `<button class="btn-for-index-hover" id="BtnForIndexForUnit${this.UnitNumber}Number${index}">${title}</button>`;
        })
        setTimeout(() => {
            SectionIndexForTopics.innerHTML += `<div class="container-buttons-index-for-topics container-buttons-index-for-topics-hover" id="ContainerIndexButtonsForTopicsUnit${this.UnitNumber}">${buttons_html}</div>`;
        }, 0);
    }
    Insert_HTML_With_Content_In_DOM(){
        setTimeout(() => {
            this.HTMLWithTopicsContent.forEach((html_with_content) => {
                if(html_with_content){
                    this.ContainerContentForTopicsOrEv.innerHTML += html_with_content;
                }
            })
        }, 0);
    }
    Catch_Inserted_Elements(SectionIndexForTopics){
        let html_in_dom = this.ContainerContentForTopicsOrEv.querySelectorAll(`#unit${this.UnitNumber}`);
        html_in_dom.forEach((html) => {
            this.CollectionOfHTMLWithContentTopics.push(html);
        })

        this.ContainerIndexButtonsForTopics = SectionIndexForTopics.querySelector(`#ContainerIndexButtonsForTopicsUnit${this.UnitNumber}`);
        for(let i=0 ; i < this.TitleTopics.length ; i++){
            let button_index = new ButtonForIndex(`BtnForIndexForUnit${this.UnitNumber}Number${i}`);
            this.CollectionButtonsForIndex.push(button_index);
        }
        
        this.ManagerForIndexButtons = new HandlerButtonsForIndex(this.CollectionButtonsForIndex , this.CollectionOfHTMLWithContentTopics , this.ContainerIndexButtonsForTopics);
        this.ManagerForIndexButtons.Activate_Event_Listener();
    }
}


class ButtonForUnit{
    constructor(BtnUnit){
        this.BtnUnit = BtnUnit;
        this.ActiveBtn = false;
    }
    DisableHoverEffect(){
        this.BtnUnit.classList.remove("btn-units-hover");
        if(this.ActiveBtn){
            this.BtnUnit.classList.add("no-blurred-effect");
        }
        else{
            this.BtnUnit.classList.add("blurred-effect");
        }
    }
    EnableHoverEffect(){
        this.BtnUnit.classList.remove("blurred-effect");
        this.BtnUnit.classList.remove("no-blurred-effect");
        this.BtnUnit.classList.add("btn-units-hover");
    }
    DisableButton(){
        this.BtnUnit.classList.add("blurred-effect");
        this.BtnUnit.classList.remove("no-blurred-effect");
        this.BtnUnit.classList.remove("btn-units-hover");
        this.BtnUnit.classList.remove("btn-units-active-effect");
    }
    EnableButton(){
        this.BtnUnit.classList.remove("blurred-effect");
    }
}


class HandlerButtonsForUnits{
    constructor(CollectionButtonsUnits , IDSectionBtnUnits , CollectionManagersForIndexButtons){
        this.CollectionButtonsUnits = CollectionButtonsUnits;
        this.SectionBtnUnits = document.getElementById(IDSectionBtnUnits);
        this.CollectionManagersForIndexButtons = CollectionManagersForIndexButtons;
    }
    Activate_Event_Listener(){
        this.CollectionButtonsUnits.forEach((btn , index) => {
            btn.BtnUnit.addEventListener("click" , () => {
                if(btn.ActiveBtn){
                    btn.ActiveBtn = false;
                    this.Change_Hover_Effect(true);
                    btn.BtnUnit.classList.remove("btn-units-active-effect");
                    this.CollectionManagersForIndexButtons[index].Manipulate_HTML_With_Content(false);
                    this.CollectionManagersForIndexButtons[index].Disable_All_Objets();
                }
                else{
                    btn.ActiveBtn = true;
                    this.Change_Hover_Effect(false);
                    btn.BtnUnit.classList.add("btn-units-active-effect");
                    this.CollectionManagersForIndexButtons[index].Manipulate_HTML_With_Content(true);
                }
            });
        })
    }
    Change_Hover_Effect(ActiveHover){
        this.CollectionButtonsUnits.forEach((btn) => {
            if(ActiveHover){
                this.SectionBtnUnits.classList.add("section-btn-units-hover");
                btn.EnableHoverEffect();
            }
            else{
                this.SectionBtnUnits.classList.remove("section-btn-units-hover");
                btn.DisableHoverEffect();
            }
        })
    }
    Change_State_All_Buttons(ActiveState){
        this.CollectionButtonsUnits.forEach((btn) => {
            if(ActiveState){
                btn.ActiveBtn = false;
                btn.EnableButton();
            }
            else{
                btn.ActiveBtn = false;
                btn.DisableButton();
            }
        })

        if(ActiveState){
            this.Change_Hover_Effect(true);
        }
        else{
            this.Change_Hover_Effect(false);
            for(let i=0 ; i < this.CollectionManagersForIndexButtons.length ; i++){
                this.CollectionManagersForIndexButtons[i].Disable_All_Objets();
            }
        }
    }
}


class ConstructorUnitsSection{
    constructor(TitleButtonsUnit , UnitsNumber , CollectionManagersForIndexButtons){
        this.TitlesForButtonsUnits = TitleButtonsUnit;
        this.UnitsNumber = UnitsNumber;
        this.ManagerForButtonsUnits = NaN;
        this.CollectionManagersForIndexButtons = CollectionManagersForIndexButtons;
    }

    Insert_Buttons_For_Units_In_DOM(SectionBtnUnits){
        let buttons_html = ``;
        this.TitlesForButtonsUnits.forEach((title_button , index) => {
            buttons_html += `<button class="blurred-effect" id="BtnUnit${this.UnitsNumber[index]}">${title_button}</button>`;
        })

        setTimeout(() => {
            SectionBtnUnits.innerHTML += buttons_html;
        }, 0);
    }

    Catch_Buttons_In_DOM(){
        let collection_buttons_units = [];
        this.UnitsNumber.forEach((unit_number) => {
            let button_in_dom = document.getElementById(`BtnUnit${unit_number}`);
            let button_unit = new ButtonForUnit(button_in_dom);
            collection_buttons_units.push(button_unit);
        })

        this.ManagerForButtonsUnits = new HandlerButtonsForUnits(collection_buttons_units , 'SectionBtnUnits' , this.CollectionManagersForIndexButtons);
        this.ManagerForButtonsUnits.Activate_Event_Listener();

    }
}


class ButtonForEvaluations{
    constructor(BtnInDetailsTag){
        this.Button = BtnInDetailsTag;
        this.ActiveBtn = false;
    }
    DisableHoverEffect(){
        this.Button.classList.remove("btn-select-evaluation-hover");
        if(this.ActiveBtn){
            this.Button.classList.add("no-blurred-effect");
        }
        else{
            this.Button.classList.add("blurred-effect");
        }
    }
    EnableHoverEffect(){
        this.Button.classList.remove("blurred-effect");
        this.Button.classList.remove("no-blurred-effect");
        this.Button.classList.remove("btn-evaluations-active-effect");
        this.Button.classList.add("btn-select-evaluation-hover");
    }
    DisableButton(){
        this.Button.classList.add("blurred-effect");
        this.Button.classList.remove("no-blurred-effect");
        this.Button.classList.remove("btn-select-evaluation-hover");
        this.Button.classList.remove("btn-evaluations-active-effect");
    }
    EnableButton(){
        this.Button.classList.remove("blurred-effect");
    }
}


class HandlerButtonsForEvaluations{
    constructor(ButtonsForEvaluations , InsertedHTMLInDOM , IDContainerButtonsForEvaluations){
        this.ButtonsForEvaluations = ButtonsForEvaluations;
        this.InsertedHTMLInDOM = InsertedHTMLInDOM;
        this.ContainerButtonsForEvaluations = document.getElementById(IDContainerButtonsForEvaluations);
    }
    Activate_Event_Listener(){
        this.ButtonsForEvaluations.forEach((btnclass , index) =>{
            btnclass.Button.addEventListener("click" , () =>{
                if(btnclass.ActiveBtn){
                    btnclass.ActiveBtn = false;
                    btnclass.Button.classList.remove("btn-evaluations-active-effect");
                    this.InsertedHTMLInDOM[index].style.left = "120%";
                    this.Change_Hover_Effect(true);
                }
                else{
                    btnclass.ActiveBtn = true;
                    btnclass.Button.classList.add("btn-evaluations-active-effect");
                    this.InsertedHTMLInDOM[index].style.left = "0%";
                    this.Change_Hover_Effect(false);
                }
            })
        })
    }

    Change_Hover_Effect(ActiveHover){
        this.ButtonsForEvaluations.forEach((btnclass) => {
            if(ActiveHover)
            {
                btnclass.EnableHoverEffect()
            }
            else{
                btnclass.DisableHoverEffect()
            }
        })

        if(ActiveHover){
            this.ContainerButtonsForEvaluations.classList.add("container-buttons-for-evaluations-hover");
        }
        else{
            this.ContainerButtonsForEvaluations.classList.remove("container-buttons-for-evaluations-hover");
        }
    }

    Disable_All_Objets(){
        this.ButtonsForEvaluations.forEach((btnclass , index) =>{
            if(btnclass.ActiveBtn){
                btnclass.ActiveBtn = false;
                this.InsertedHTMLInDOM[index].style.left = "120%";
            }
        })
        this.Change_Hover_Effect(true);
    }
}


class DetailsTagForEvaluations{
    constructor(IDDetailsTag , IDSummaryTagInDetailsTag){
        this.DetailsTag = document.getElementById(IDDetailsTag);
        this.SummaryTagInDetailsTag = document.getElementById(IDSummaryTagInDetailsTag);
        this.ActiveDetails = false;
    }
    DisableHoverEffect(){
        this.DetailsTag.classList.remove("evaluation-details-hover");
        if(this.ActiveDetails){
            this.DetailsTag.classList.add("no-blurred-effect");
        }
        else{
            this.DetailsTag.classList.add("blurred-effect");
        }
    }
    EnableHoverEffect(){
        this.DetailsTag.classList.remove("blurred-effect");
        this.DetailsTag.classList.remove("no-blurred-effect");
        this.DetailsTag.classList.add("evaluation-details-hover");
    }

}


class HandlerDetailsTagForEvaluations{
    constructor(DetailsTagEvaluations , CollectionManagersButtonsEvaluations , IDSectionEvaluationsSelection){
        this.DetailsTagEvaluations = DetailsTagEvaluations;
        this.SectionEvaluationsSelection = document.getElementById(IDSectionEvaluationsSelection);
        this.CollectionManagersButtonsEvaluations = CollectionManagersButtonsEvaluations;
    }
    Activate_Event_Listener(){
        this.DetailsTagEvaluations.forEach((details_class , index) =>{
            details_class.SummaryTagInDetailsTag.addEventListener("click" , () => {
                if(details_class.ActiveDetails){
                    details_class.ActiveDetails = false;
                    this.Change_Hover_Effect(true);
                    this.CollectionManagersButtonsEvaluations[index].Disable_All_Objets();
                }
                else{
                    details_class.ActiveDetails = true;
                    this.Change_Hover_Effect(false);
                }
            })
        })
    }
    Change_Hover_Effect(ActiveHover){
        this.DetailsTagEvaluations.forEach((details_class) => {
            if(ActiveHover)
            {
                details_class.EnableHoverEffect()
            }
            else{
                details_class.DisableHoverEffect()
            }
        })


        if(ActiveHover){
            this.SectionEvaluationsSelection.classList.add("section-evaluations-selection-hover");
        }
        else{
            this.SectionEvaluationsSelection.classList.remove("section-evaluations-selection-hover");
        }
    }
    Disable_All_Objets(){
        this.DetailsTagEvaluations.forEach((details_class) => {
            if(details_class.ActiveDetails){
                details_class.DetailsTag.open = false;
                details_class.ActiveDetails = false;
            }
        })

        this.CollectionManagersButtonsEvaluations.forEach((manager_button_evaluations) => {
            manager_button_evaluations.Disable_All_Objets();
        })
        this.Change_Hover_Effect(true);
    }
}


class ConstructorEvaluationsSection{
    constructor(TitleForEvaluation , TitlesForButtons , HTMLToInsertInDOM){
        if(TitleForEvaluation.includes(" ")){
            let IDForElements = TitleForEvaluation.replaceAll(" " , "");
            this.IDForElements = IDForElements;
        }
        else{
            this.IDForElements = TitleForEvaluation;
        }

        this.TitleForEvaluation = TitleForEvaluation;
        this.TitlesForButtons = TitlesForButtons;
        this.HTMLToInsertInDOM = HTMLToInsertInDOM;

        this.ButtonsForEvaluations = [];
        this.InsertedHTMLInDOM = [];
        this.DetailsTagEvaluations = NaN;
    }

    Insert_Details_Tag_In_DOM(SectionEvaluationsSelection){
        let buttons_html = ``;
        for(let i = 0 ; i < this.TitlesForButtons.length ; i++){
            buttons_html += `<button class="btn-select-evaluation btn-select-evaluation-hover" id="BtnEvaluation${this.IDForElements}">${this.TitlesForButtons[i]}</button>`;
        }
        setTimeout(() => {
            SectionEvaluationsSelection.innerHTML += `<details class="evaluation-details evaluation-details-hover" id="Evaluation${this.IDForElements}" name="Evaluations"><summary id="SummaryEvaluation${this.IDForElements}">${this.TitleForEvaluation}</summary><div class="container-buttons-for-evaluations container-buttons-for-evaluations-hover" id="ContainerButtonsFor${this.IDForElements}">${buttons_html}</div></details>`;
        }, 0);
    }

    Insert_HTML_With_Content_In_DOM(ContainerContentForTopicsOrEv){
        setTimeout(() => {
            this.HTMLToInsertInDOM.forEach((HTML) => {
                let container_buttons = `<div class="style-for-content-for-topics-or-ev" id="${this.IDForElements}">${HTML}</div>`;
                ContainerContentForTopicsOrEv.innerHTML += container_buttons;
            })
        }, 0);
    }
    
    Catch_Elements_Into_Details_Tag(){
        let buttons_evaluations = document.querySelectorAll(`#BtnEvaluation${this.IDForElements}`);
        buttons_evaluations.forEach((button) => {
            let button_evaluation = new ButtonForEvaluations(button);
            this.ButtonsForEvaluations.push(button_evaluation);
        })
        let html_in_dom = document.querySelectorAll(`#${this.IDForElements}`);
        html_in_dom.forEach((HTML) => {
            this.InsertedHTMLInDOM.push(HTML);
        })
        this.ManagerButtonsEvaluations = new HandlerButtonsForEvaluations(this.ButtonsForEvaluations , this.InsertedHTMLInDOM , `ContainerButtonsFor${this.IDForElements}`);
        this.ManagerButtonsEvaluations.Activate_Event_Listener();

        this.DetailsTagEvaluations = new DetailsTagForEvaluations(`Evaluation${this.IDForElements}` , `SummaryEvaluation${this.IDForElements}`);
    }
}


class PrincipalButton{
    constructor(IDMainBtn){
        this.MainBtn = document.getElementById(IDMainBtn);
        this.ActiveBtn = false;
    }
    DisableHoverEffect(){
        this.MainBtn.classList.remove("style-btn-hover");
        if(this.ActiveBtn){
            this.MainBtn.classList.add("no-blurred-effect");
        }
        else{
            this.MainBtn.classList.add("blurred-effect");                    
        }
    }
    EnableHoverEffect(){
        this.MainBtn.classList.remove("blurred-effect");
        this.MainBtn.classList.remove("no-blurred-effect");
        this.MainBtn.classList.add("style-btn-hover");
    }
}


class HandlerPrincipalButtons{
    constructor(CollectionMainButtons , IDSectionMainButtons , SectionBtnUnits , ManagerForButtonsUnits , IDSectionEvaluationsSelection , ManagerDetailsForEvaluations){
        this.CollectionMainButtons = CollectionMainButtons;
        this.SectionMainButtons = document.getElementById(IDSectionMainButtons);
        this.SectionBtnUnits = SectionBtnUnits;
        this.ManagerForButtonsUnits = ManagerForButtonsUnits;
        this.SectionEvaluationsSelection = document.getElementById(IDSectionEvaluationsSelection);
        this.ManagerDetailsForEvaluations = ManagerDetailsForEvaluations;
    }
    Manipulate_Section_Btn_Units(Display_Section){
        if(Display_Section){
            this.SectionBtnUnits.style.left = "0%";
        }
        else{
            this.SectionBtnUnits.style.left = "-120%";
        }
    }

    Activate_Event_Listener(SectionIndexForTopics){
        Object.entries(this.CollectionMainButtons).forEach(([name_btn , main_btn]) => {
            if(name_btn === "Button Topics"){
                main_btn.MainBtn.addEventListener("click" , () => {
                    if(main_btn.ActiveBtn){
                        main_btn.ActiveBtn = false;
                        this.Change_Hover_Effect(true);
                        this.ManagerForButtonsUnits.Change_State_All_Buttons(false);
                        this.Manipulate_Section_Btn_Units(false);
                        main_btn.MainBtn.classList.remove("btn-topics-ev-active-effect");
                    }
                    else{
                        main_btn.ActiveBtn = true;
                        this.Change_Hover_Effect(false);
                        this.ManagerForButtonsUnits.Change_State_All_Buttons(true);
                        this.Manipulate_Section_Btn_Units(true);
                        main_btn.MainBtn.classList.add("btn-topics-ev-active-effect");
                    }
                })
            }
            else if(name_btn === "Button Evaluations"){
                main_btn.MainBtn.addEventListener("click" , () => {
                    if(main_btn.ActiveBtn){
                        main_btn.ActiveBtn = false;
                        this.Change_Hover_Effect(true);
                        main_btn.MainBtn.classList.remove("btn-topics-ev-active-effect");
                        this.SectionEvaluationsSelection.style.left = "-120%";
                        SectionIndexForTopics.style.zIndex = 1;
                        this.ManagerDetailsForEvaluations.Disable_All_Objets();
                    }
                    else{
                        main_btn.ActiveBtn = true;
                        this.Change_Hover_Effect(false);
                        main_btn.MainBtn.classList.add("btn-topics-ev-active-effect");
                        this.SectionEvaluationsSelection.style.left = "0%";
                        SectionIndexForTopics.style.zIndex = -1;
                    }
                })
            }
        });
    }

    Change_Hover_Effect(ActiveHover){
        Object.values(this.CollectionMainButtons).forEach((main_btn) => {
            if(ActiveHover){
                this.SectionMainButtons.classList.add("section-btn-topics-ev-hover");
                main_btn.EnableHoverEffect();
            }
            else{
                this.SectionMainButtons.classList.remove("section-btn-topics-ev-hover");
                main_btn.DisableHoverEffect();
            }
        })
    }
}

export function Main_Function(DictionaryEvaluationsForRedesII , DictionaryTopicsForRedes){
    var ManagerForButtonsUnits = NaN
    var CollectionManagersForIndexButtons = [];
    let title_for_btn_units = [];
    let units_number_for_btn_units = [];
    
    const SectionBtnUnits = document.getElementById("SectionBtnUnits");
    const SectionIndexForTopics = document.getElementById("SectionIndexForTopics");
    const SectionEvaluationsSelection = document.getElementById("SectionEvaluationsSelection");
    const ContainerContentForTopicsOrEv = document.getElementById("ContainerContentForTopicsOrEv");
    
    Object.entries(DictionaryTopicsForRedes).forEach(([unit_name , topics_value] , index) => {
        if(Object.keys(topics_value).length != 0){
            let list_of_titles = Object.keys(topics_value);
            let HtML_for_topics = Object.values(topics_value);
            title_for_btn_units.push(unit_name);
            units_number_for_btn_units.push(index + 1);
    
            let constructor_index = new ConstructorIndexSection('ContainerContentForTopicsOrEv' , list_of_titles , HtML_for_topics , index + 1);
            
            constructor_index.Insert_HTML_With_Content_In_DOM();
            constructor_index.Insert_Index_Buttons_In_DOM(SectionIndexForTopics);
    
            /* El princiapl problema que tenia era que solo los ultimos elementos en ser insertados en el DOM se configuraban correctamente mientras que los demas
            no se seleccionaban correctamente porque no habia un tiempo adecuando entre la insersion en el DOM y su seleccion para poder agregar la interaccion, como resultado tenia botones y segmentos enteros que no respondian a las acciones de manera correcta.
            La solucion fue agregar un espacio de tiempo entre la insercion en el DOM y su posterior seleccion para manipular sus atributos. */
            
            setTimeout(() => {
                constructor_index.Catch_Inserted_Elements(SectionIndexForTopics);
                CollectionManagersForIndexButtons.push(constructor_index.ManagerForIndexButtons);
            }, 50);
        }
    })

    
    let constructor_units = new ConstructorUnitsSection(title_for_btn_units , units_number_for_btn_units , CollectionManagersForIndexButtons);
    constructor_units.Insert_Buttons_For_Units_In_DOM(SectionBtnUnits);
    
    var CollectionDetailsTagEvaluations = [];
    var CollectionManagersButtonsEvaluations = [];
    Object.entries(DictionaryEvaluationsForRedesII).forEach(([title_for_summary , value]) => {
        let titles_for_buttons = Object.keys(value);
        let evaluations_html = Object.values(value);
    
        let constructor_evaluations = new ConstructorEvaluationsSection(title_for_summary , titles_for_buttons , evaluations_html);
    
        constructor_evaluations.Insert_Details_Tag_In_DOM(SectionEvaluationsSelection);
        constructor_evaluations.Insert_HTML_With_Content_In_DOM(ContainerContentForTopicsOrEv);
    
        setTimeout(() => {
            constructor_evaluations.Catch_Elements_Into_Details_Tag();
            CollectionDetailsTagEvaluations.push(constructor_evaluations.DetailsTagEvaluations);
            CollectionManagersButtonsEvaluations.push(constructor_evaluations.ManagerButtonsEvaluations);
        }, 5);
    })
    

    setTimeout(() => {
        constructor_units.Catch_Buttons_In_DOM();
        ManagerForButtonsUnits = constructor_units.ManagerForButtonsUnits;
    
        var ManagerDetailsTagEvaluations = new HandlerDetailsTagForEvaluations(CollectionDetailsTagEvaluations , CollectionManagersButtonsEvaluations , 'SectionEvaluationsSelection');
        ManagerDetailsTagEvaluations.Activate_Event_Listener();
    
        var btn_topics = new PrincipalButton('BtnTopics');
        var btn_evaluations = new PrincipalButton('BtnEvaluations');
    
        var ManagerMainBtn = new HandlerPrincipalButtons({"Button Topics" : btn_topics , "Button Evaluations" : btn_evaluations} , 'SectionBtnTopicsEv' , SectionBtnUnits ,  ManagerForButtonsUnits , 'SectionEvaluationsSelection' , ManagerDetailsTagEvaluations);
        ManagerMainBtn.Activate_Event_Listener(SectionIndexForTopics);
    }, 20);
}
