import {
    ConstructorInformationTopologySection , ConstructorSectionContentForEachDevice , ConstructorSectionContentForDeviceType ,
    ConstructorSectionMultimediaTopology , Add_Event_Listener_Checkbox_Only_Commands , ButtonDisplaySectionStepsForConfiguration
} from "../JS/Interaction/Core_Views/buttons-configurations-base.js"

const HTML_configuracion_solicitada = `
<p>
    Se solicita configurar
</p>
`;

const HTML_tecnologias_usadas = `
<ul>
    <li>OSPF</li>
    <li>RIP</li>
    <li>EIGRP</li>
</ul>
`;

const HTML_dispositivos_usados = `
<ol>
    <li>Router</li>
    <li>Switch</li>
    <li>PC</li>
</ol>
`;


const HTML_S1_Config_Commands = `<p>Commands</p>`;
const HTML_R1_Config_Commands = ``;
const HTML_PC1_Config_Commands = ``;

const HtML_S1_Only_Commands = `<p>OnlyCommands</p>`;
const HtML_R1_Only_Commands = ``;
const HtML_PC1_Only_Commands = ``;


const DictonaryContentForInformationTopologySection = {
    "Configuracion Solicitada" : HTML_configuracion_solicitada,
    "Tecnologias Usadas" : HTML_tecnologias_usadas,
    "Dispositivos Usados" : HTML_dispositivos_usados, 
}

const SectionContainerContentInfoTopology = document.getElementById("SectionContainerContentInfoTopology");

let constructor_information_topology_section = new ConstructorInformationTopologySection(Object.keys(DictonaryContentForInformationTopologySection) , Object.values(DictonaryContentForInformationTopologySection))
constructor_information_topology_section.Insert_HTML_In_DOM(SectionContainerContentInfoTopology);
setTimeout(() => {
    constructor_information_topology_section.Catch_Inserted_Elements(SectionContainerContentInfoTopology);
}, 2);


const DictionaryContentForDevices = {
    "Switch" : {
        "S1" : [HTML_S1_Config_Commands , HtML_S1_Only_Commands],
        "S2" : ["" , ""],
    },
    "Router" : {
        "R1" : [HTML_R1_Config_Commands , HtML_R1_Only_Commands],
    },
    "PC" : {
        "PC1" : [HTML_PC1_Config_Commands , HtML_PC1_Only_Commands],
        "PC2" : ["" , ""],
    },
}

/* 
    =====================================================================
    Otro problema que se tuvo, fue al querer hacer que los botones
    correspondientes a DeviceTypes interactuen con elementos insertados
    por constructor_content_each_device_section, a pesar de haber
    comprobado en consola que el style se aplicaba a los elementos
    insertados, el cambio no se reflejaba en el HTML.
    La solucion fue insertar los botones de DeviceTypes antes de todo,
    asi, estos botones podian interactuar con los elementos que se 
    insertaran despues.
    =====================================================================
*/

const CheckboxOnlyCommands = document.getElementById("CheckboxOnlyCommands");
const SectionContentForDeviceType = document.getElementById("SectionContentForDeviceType");

var SectionContainerContentForEachDevice = NaN;
var ManagerButtonsDevices = NaN;

let titles_buttons_device_type = Object.keys(DictionaryContentForDevices);
let CollectionManagersButtonsDevices = [];
let CollectionSectionsContainerContentForEachDevice = [];

let constructor_content_device_type_section = new ConstructorSectionContentForDeviceType(titles_buttons_device_type);
constructor_content_device_type_section.Insert_HTML_In_DOM(SectionContentForDeviceType);

Object.entries(DictionaryContentForDevices).forEach(([title_btn_device_type , value]) => {
    
    let html_configuration_commands = [];
    let html_only_commands = [];

    for (let html of Object.values(value)){
        html_configuration_commands.push(html[0]);
        html_only_commands.push(html[1]);    
    }
    let titles_buttons_each_device = Object.keys(value);

    let constructor_content_each_device_section = new ConstructorSectionContentForEachDevice(titles_buttons_each_device , html_configuration_commands , html_only_commands);
    constructor_content_each_device_section.Insert_HTML_In_DOM(SectionContentForDeviceType);
    
    setTimeout(() => {
        [SectionContainerContentForEachDevice , ManagerButtonsDevices] = constructor_content_each_device_section.Catch_Inserted_Elements(CheckboxOnlyCommands);
        CollectionManagersButtonsDevices.push(ManagerButtonsDevices);
        CollectionSectionsContainerContentForEachDevice.push(SectionContainerContentForEachDevice);
    }, 5);
})

setTimeout(() => {
    Add_Event_Listener_Checkbox_Only_Commands(CheckboxOnlyCommands , CollectionManagersButtonsDevices);

    setTimeout(() => {
        constructor_content_device_type_section.Catch_Inserted_Elements(SectionContentForDeviceType , CollectionManagersButtonsDevices , CollectionSectionsContainerContentForEachDevice);
    }, 5);
}, 20);



const RightSection = document.getElementById("RightSection");
const LeftSection = document.getElementById("LeftSection");

const SectionModalDownloadMultimedia = document.getElementById("SectionModalDownloadMultimedia");

const BtnForDownloadContent = document.getElementById("BtnForDownloadContent");
BtnForDownloadContent.addEventListener("click" , () => {
    SectionModalDownloadMultimedia.style.top = "10%";
    RightSection.classList.add("inactive-section-effect");
    LeftSection.classList.add("inactive-section-effect");
})

let constructor_multimedia_topology_section = new ConstructorSectionMultimediaTopology('../Images/Configuracion-capa-2.webp' , `` , ``);

constructor_multimedia_topology_section.Insert_HTML_In_DOM(SectionModalDownloadMultimedia);

setTimeout(() => {
    constructor_multimedia_topology_section.Catch_Inserted_Elements(SectionModalDownloadMultimedia , LeftSection , RightSection);
}, 5);


const BtnBackHome = document.getElementById("BtnBackHome");
const BtnBack = document.getElementById("BtnBack");
const SectionCommandsConfiguration = document.getElementById("SectionCommandsConfiguration");
const SectionStepsForConfiguration = document.getElementById("SectionStepsForConfiguration");

var BtnDisplayWindowExplainStepByStep = new ButtonDisplaySectionStepsForConfiguration(document.getElementById("BtnDisplayWindowExplainStepByStep") , SectionCommandsConfiguration , SectionStepsForConfiguration);
BtnDisplayWindowExplainStepByStep.Add_Event_Listener();