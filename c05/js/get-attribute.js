let firstelement = document.getElementById("one");
let ifhasclass = firstelement.hasAttribute("class");
if (ifhasclass) {
    let classAttri_string = firstelement.getAttribute("class");
    let resultelement = document.getElementById("scriptResults");
    resultelement.innerHTML = '<p>這是第一個item的class屬性值為: ' + classAttri_string + '</p>';
}
console.log(ifhasclass);