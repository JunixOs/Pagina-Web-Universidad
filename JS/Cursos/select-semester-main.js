var DictionaryCoursesForSemester = {
    "Semestre I": {
        "Matematica Basica" : [4 , "Curso Introductorio para las demas matematicas del curso, es recomendable tener conocimientos basicos sobre aritmetica, algebra y geometria, ademas de que sera necesario adquirir un libro." , ""],
        "Lenguaje y Redaccion General" : [3 , "Curso Obligatorio, brinda las habilidades necesarias para una buena redaccion de documentos academicos y presentacion de trabajos expositivos." , ""],
        "Taller de Habilidades Blandas" : [4 , "" , ""],
        "Sostenibilidad y Responsabilidad Social" : [3 , "" , ""],
        "Fundamentos De Computacion" : [4 , "Curso Obligatorio, el cual sirve como introduccion a la carrera, aqui aprenderas sobre historia de la informatica, los basica acerca del funcionamiento del ordenador y a como codificar." , ""],
    },
    "Semestre II": {
        "Fisica I": [4 , "" , ""],
        "Matematica I": [4 , "" , ""],
        "Programacion Basica": [5 , "" , ""],
        "Soporte de TI" : [4 , "" , ""],
        "Idioma Extranjero I" : [3 , "" , ""]
    },
    "Semestre III": {
        "Matematica Superior" : [4 , "" , ""],
        "Matematica Discreta" : [4 , "" , ""],
        "Estructuras de Datos y Algoritmos" : [4 , "" , ""],
        "Sistemas Operativos I" : [4 , "" , ""],
        "Redes y Conectividad I" : [4 , "" , ""],
    },
    "Semestre IV": {
        "Diseño de Base de Datos" : [4 , "" , ""],
        "Construccion de Software I" : [5 , "" , ""],
        "Sistemas Operativos II" : [4 , "" , ""],
        "Redes y Conectividad II" : [4 , "" , "../Cursos/Semestre-IV/redes-y-conectividad-II.html"],
    },
    "Semestre V": {
        "Estadistica y Probabilidades" : [4 , "" , ""],
        "Gestion de Base de Datos" : [3 , "" , ""],
        "Ingenieria de Requisitos" : [5 , "" , ""],
        "Servidores y Centros de Datos" : [4 , "" , ""],
        "Internet de las Cosas" : [3 , "" , ""],
        "Etica y Practica Profesional" : [2 , "" , ""],
    },
    "Semestre VI": {
        "Gestion de Procesos de Negocio" : [4 , "" , ""],
        "Analitica de Datos" : [3 , "" , ""],
        "Diseño Detallado de Software" : [4 , "" , ""],
        "Computacion en la Nube" : [3 , "" , ""],
        "Gestion de Proyectos de TI" : [4 , "" , ""],
        "Arquitectura de Software" : [4 , "" , ""],
    },
    "Semestre VII": {
        "Fundamentos de Investigacion" : [4 , "" , ""],
        "Sistemas de Informacion" : [3 , "" , ""],
        "Construccion de Software II" : [5 , "" , ""],
        "Seguridad Informatica" : [4 , "" , ""],
        "Gestion de Servicios de TI" : [4 , "" , ""],
    },
    "Semestre VIII": {
        "Diseño de Investigacion I" : [4 , "" , ""],
        "Diseño de Sistemas de Informacion" : [3 , "" , ""],
        "Calidad de Producto de Software" : [4 , "" , ""],
        "Seguridad de la Informacion" : [4 , "" , ""],
        "Practicas Pre Profesionales" : [4 , "" , ""],
    },
    "Semestre IX": {
        "Diseño de Investigacion II" : [4 , "" , ""],
        "Gestion de Calidad de Sistemas" : [4 , "" , ""],
        "Integracion de Sistemas de Software" : [4 , "" , ""],
        "Arquitectura de Infraestructura de TI" : [4 , "" , ""],
        "Innovacion y Emprendimiento" : [4 , "" , ""],
    },
    "Semestre X": {
        "Desarrollo de Investigacion" : [5 , "" , ""],
        "Arquitectura Empresarial" : [4 , "" , ""],
        "Calidad de Procesos de Software" : [3 , "" , ""],
        "Planeamiento y Gobierno de TI" : [3 , "" , ""],
        "Mantenimiento de Software" : [4 , "" , ""],
    },
}

class ButtonForSemester{
    constructor(BtnSemester , TitlesCourses , CreditsForCourses , DescriptionsCourses , LinksToCoursesContent){
        this.BtnSemester = BtnSemester;
        this.ActiveBtn = false;

        this.HTMLWithCourses = ``;
        for(let i = 0 ; i < TitlesCourses.length ; i++){
            this.HTMLWithCourses += `<a class="course-for-semester" href="${LinksToCoursesContent[i]}" target="_blank"><h1 class="header-course">${TitlesCourses[i]}, (${CreditsForCourses[i]} Creditos)</h1><p class="description-course">${DescriptionsCourses[i]}</p></a>`;
        }
    }
    EnableHoverEffect(){
        this.BtnSemester.classList.remove("no-blurred");
        this.BtnSemester.classList.remove("blurred");
        this.BtnSemester.classList.add("button-semester-hover");
    }
    DisableHoverEffect(){
        this.BtnSemester.classList.remove("button-semester-hover");
        if(this.ActiveBtn){
            this.BtnSemester.classList.add("no-blurred");
        }
        else{
            this.BtnSemester.classList.add("blurred");
        }
    }
    Insert_HTML_In_DOM(ContainerCoursesForSemester){
        ContainerCoursesForSemester.innerHTML += this.HTMLWithCourses;
    }
    Destroy_HTML_In_DOM(ContainerCoursesForSemester){
        ContainerCoursesForSemester.innerHTML = '';
    }
}

class HandlerForButtonsForSemester{
    constructor(CollectionButtonsSemester , SectionButtonsSemester , CoursesSection , ContainerCoursesForSemester){
        this.CollectionButtonsSemester = CollectionButtonsSemester;
        this.SectionButtonsSemester = SectionButtonsSemester;
        this.CoursesSection = CoursesSection;
        this.ContainerCoursesForSemester = ContainerCoursesForSemester
    }
    Activate_Event_Listener(){
        this.CollectionButtonsSemester.forEach((semester_class) => {
            semester_class.BtnSemester.addEventListener("click" , () => {
                if(semester_class.ActiveBtn){
                    semester_class.ActiveBtn = false;
                    semester_class.BtnSemester.classList.remove("button-semester-active-effect");
                    this.CoursesSection.style.top = "120%";
                    setTimeout(() => {
                        semester_class.Destroy_HTML_In_DOM(this.ContainerCoursesForSemester);
                        this.Change_Hover_Effects(true);
                    }, 450);
                }
                else{
                    semester_class.ActiveBtn = true;
                    this.Change_Hover_Effects(false);
                    semester_class.BtnSemester.classList.add("button-semester-active-effect");
                    this.CoursesSection.style.top = "0%";
                    semester_class.Insert_HTML_In_DOM(this.ContainerCoursesForSemester);
                }
            })
        })
    }
    Change_Hover_Effects(Active_Hover){
        this.CollectionButtonsSemester.forEach((semester_class) => {
            Active_Hover ? semester_class.EnableHoverEffect() : semester_class.DisableHoverEffect();
        })
        Active_Hover ? this.SectionButtonsSemester.classList.add("section-buttons-semesters-hover") : this.SectionButtonsSemester.classList.remove("section-buttons-semesters-hover");
    }
}

class ContructorSemesterSection{
    constructor(ContentForSemesters){
        this.ContentForSemesters = ContentForSemesters;
    }
    Insert_HTML_In_DOM(SectionButtonsSemester){
        let TitlesForSemesterButtons = Object.keys(this.ContentForSemesters);
        let html_buttons_semester = ``;
        TitlesForSemesterButtons.forEach((title_semester) => {
            html_buttons_semester += `<button class="button-semester-hover" id="CardSemester"><h1>${title_semester}</h1></button>`;
        })
        setTimeout(() => {
            SectionButtonsSemester.innerHTML += html_buttons_semester;
        }, 0);
    }
    Catch_Buttons_In_DOM(SectionButtonsSemester , CoursesSection , ContainerCoursesForSemester){
        let CollectionButtonsSemester = [];
        let content_for_semester_courses = Object.values(this.ContentForSemesters);
        console.log(content_for_semester_courses)

        let buttons_in_dom = document.querySelectorAll("#CardSemester");
        buttons_in_dom.forEach((button , index) => {
            let TitlesForCourses = Object.keys(content_for_semester_courses[index]);
            let content_for_courses = Object.values(content_for_semester_courses[index]);

            let CreditsForCourses = [];
            let DescriptionsCourses = [];
            let LinksToCoursesContent = [];

            for(let i of content_for_courses){
                CreditsForCourses.push(i[0]);
                DescriptionsCourses.push(i[1]);
                LinksToCoursesContent.push(i[2]);
            }

            let semester_class = new ButtonForSemester(button , TitlesForCourses , CreditsForCourses , DescriptionsCourses , LinksToCoursesContent);
            CollectionButtonsSemester.push(semester_class);
        })

        let ManagerButtonsSemester = new HandlerForButtonsForSemester(CollectionButtonsSemester , SectionButtonsSemester , CoursesSection , ContainerCoursesForSemester);
        ManagerButtonsSemester.Activate_Event_Listener();
    }
}

setTimeout(() => {
    var SectionButtonsSemester = document.getElementById("SectionButtonsSemester");
    var CoursesSection = document.getElementById("CoursesSection");
    var ContainerCoursesForSemester = document.getElementById("ContainerCoursesForSemester");

    let constructor_semester_section = new ContructorSemesterSection(DictionaryCoursesForSemester);
    constructor_semester_section.Insert_HTML_In_DOM(SectionButtonsSemester);
    constructor_semester_section.Catch_Buttons_In_DOM(SectionButtonsSemester , CoursesSection , ContainerCoursesForSemester);
}, 15);