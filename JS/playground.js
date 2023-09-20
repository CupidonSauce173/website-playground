/**
 * Set de text à afficher avec la function typeWriter
 */
const consoleWriterParagraphsFirstPart = 
[
    "ssh antoinel@root@10.10.102.26",
    "antoinel@root@10.10.102.26's password: **********",
    "Last login: Tue May 21 01:53:17 2023 from 10.10.0.69",
    "",
    "This session is being recorded",
    "Using username 'auth_H$Vn4gf'.",
    "",
    "[auth_H$Vn4gf@RHEL5Up7-64bit ~]$ sh ./encryt/utils/cmd_help.sh",
    "###### -> MENU <- ######",
    ""
];

const consoleWriterParagraphsSecondPart = 
[
    ">########################",
    "SELECT OPTION TO CONTINUE",
    "[auth_H$Vn4gf@RHEL5Up7-64bit ~]$"
];

const skillsContainerParagraph = 
[
    "Loading Data ................... ", "",
    "Système et matériels exploitation 1", "",
    "Système et matériels exploitation 2", "",
    "Programmation 1 (Python)", "",
    "Programmation 2 (Java)", "",
    "Introduction aux Bases de Données (MariaDB)", "",
    "Introduction aux réseaux informatiques CISCO", "",
    "Production et gestion de documents techniques", "",
    "Mathématiques de l'informatique", "", "", "", "",
    "#### DATA LOADED WITH SUCCESS ####", "",
    "ENDING THREAD [1] WITH TASK pid 467423"
];

const projectContainerParagraph = 
[
    "Loading Data ................... ", "",
    "Filtreur d'images avec OpenCV (Python)", "",
    "Générateur d'horaires avec feuille Excel (Python)", "",
    "Gestionnaire d'amitiés (MC:PE)", "",
    "Gestionnaire de requêtes SQL (MC:PE)", "",
    "Gestionnaire de notifications (MC:PE)", "",
    "Gestionnaire de groupes et permissions (MC:PE)", "",
    "Bloc-Notes en Java (École)", "", "", "", "",
    "#### DATA LOADED WITH SUCCESS ####", "",
    "ENDING THREAD [2] WITH TASK pid 975673"
];

const aboutParagraph = 
[
    "Loading Data ................... ", "",
    "Assistant Gérant Métro Domaine (Service)", "",
    "Assistant Gérant Métro Fleury (Service)", "",
    "Superviseur Maxi (Service)", "",
    "Supervieur Cuisinier Dic Ann's", "", "", "", "",
    "#### DATA LOADED WITH SUCCESS ####", "",
    "ENDING THREAD [3] WITH TASK pid 3582986"
];

/**
 * Init un set d'animations quand la page se charge.
 */
function initAnimationsOnLoad() {
    attachSpinAnimation();
    typeWriterFirst();
}

/**
 * L'animation avec un spin et 'Initializing data...' message
 */
function attachSpinAnimation() {
    var loader = document.getElementById("loader");
    loader.setAttribute("class", "loaderA");
    loader.style.animation = "spin 1s linear";
    loader.style.animationIterationCount = "3.5";

    loader.addEventListener('animationend', function() {
        var loadingScreen = document.getElementById("loadingScreenContainer");
        loadingScreen.setAttribute("class", "loadingScreenAfter");
    }, { once: true });
}

/* Variables pour savoir si le texte a déjà été généré */
var IS_SKILLS_P_DISPLAYED   = false;
var IS_ABOUT_P_DISPLAYED    = false;
var IS_PROJECTS_P_DISPLAYED = false;
var IS_CONTACTS_P_DISPLAYED = false;

function typeWriterFirst() {
    typeWriter("consoleWriterPartOne", consoleWriterParagraphsFirstPart, function() {
        appendMenu();
        typeWriterSecond();
    });
}

function typeWriterSecond() {
    typeWriter("consoleWriterPartTwo", consoleWriterParagraphsSecondPart);
}

function typeWriterSkills() {
    if(IS_SKILLS_P_DISPLAYED == false) {
        typeWriter("skills_p", skillsContainerParagraph);
        IS_SKILLS_P_DISPLAYED = true;
    }
}

function typeWriterProjects() {
    if(IS_PROJECTS_P_DISPLAYED == false) {
        typeWriter("project_p", projectContainerParagraph);
        IS_PROJECTS_P_DISPLAYED = true;
    }
}

function typeWriterAbout() {
    if(IS_ABOUT_P_DISPLAYED == false) {
        typeWriter("about_p", aboutParagraph);
        IS_ABOUT_P_DISPLAYED = true;
    }
}

function typeWriter(elementId, data, callback) {
    let element = document.getElementById(elementId);
    let speed = 10;
    let lineDelay = 5;
    
    let charIndex = 0;
    let lineIndex = 0;

    function typeCharacter() {
        if (lineIndex < data.length) {
            if (charIndex < data[lineIndex].length) {
                element.innerHTML += data[lineIndex][charIndex];
                charIndex++;
                setTimeout(typeCharacter, speed);
            } else {
                element.innerHTML += "<br />";
                lineIndex++;
                charIndex = 0;
                setTimeout(typeCharacter, lineDelay);
            }
        } else if (callback) {
            callback();
        }
    }

    typeCharacter();
}

function appendMenu() {
    let consoleContainer = document.getElementById("consoleWriterPartOne");
    let menuHTML = `
        <ul class="main_menu">
        <li>
            <button type="button" onclick='document.getElementById("testP").innerHTML = 
            "[auth_H$Vn4gf@RHEL5Up7-64bit ~]$sh ./encrypt/utils/exec_task.sh --args about"; 
            typeWriterAbout();
            decryptSectionAnimation("h3About", "À Propos - DÉCRYPTÉ")'>
                # -- 1. À Propos
            </button>
        </li>
        <li>
            <button type="button" onclick='document.getElementById("testP").innerHTML = 
            "[auth_H$Vn4gf@RHEL5Up7-64bit ~]$sh ./encrypt/utils/exec_task.sh --args skills";
            typeWriterSkills();
            decryptSectionAnimation("h3Skills", "Cours Terminés - DÉCRYPTÉ")'>
                # -- 2. Compétences
            </button>
        </li>
        <li>
            <button type="button" onclick='document.getElementById("testP").innerHTML = 
            "[auth_H$Vn4gf@RHEL5Up7-64bit ~]$sh ./encrypt/utils/exec_task.sh --args projets";
            typeWriterProjects()
            decryptSectionAnimation("h3Projects", "Projets - DÉCRYPTÉ")'>
                # -- 3. Projets
            </button>
        </li>
        </ul>`;
    consoleContainer.insertAdjacentHTML('afterend', menuHTML);
}

function decryptSectionAnimation(h3Id, endText) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%?&*()_¨Ç:È"¤}>°<';
    const charactersLength = characters.length;
    let speed = 50;
    let iterations = 0;
    
    function randomizeCharacters() {
        let counter = 0;
        let result = '';
        let h3Target = document.getElementById(h3Id);
        while (counter < 25) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        h3Target.innerHTML = result;
        iterations++;
        
        if (iterations < 25) {
            setTimeout(randomizeCharacters, speed);
        } else {
            h3Target.innerHTML = endText;
            h3Target.style.color = "darkgreen";
        }
    }
    
    randomizeCharacters();
}