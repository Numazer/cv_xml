async function monXmlParser(path) {

    try{
        const reponse = await fetch(path);
        console.log(reponse);

        if (!reponse.ok)'throw new Error'("le fichier XML n'a pu être trouve");

        const xmlText = await reponse.text();
        console.log(xmlText);
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "text/html");
        console.log(xmlDoc);
        const affichertouslesnoeuds = xmlDoc.getElementsByTagName("*");
        console.log(affichertouslesnoeuds);
        const elementDiv = document.getElementById("myDiv");
        
     
        
        for(let i = 0; i<affichertouslesnoeuds.length; i++) {
            const noeud = affichertouslesnoeuds[i];
            console.log(noeud);
            const nom = noeud.nodeName;
            const valeur = noeud.textContent.trim();
            console.log(" nom " + nom + " :valeur " + valeur);
            const p = document.createElement('p');
            p.textContent = `${nom}:${valeur}`;
            elementDiv.appendChild(p);
        }

        //const data = await reponse.json();
        

    }catch(error) {
        console.log(error);
    }

}

monXmlParser('/cv.xml');
