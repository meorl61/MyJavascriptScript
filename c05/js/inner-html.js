let oneElement = document.getElementById('one');

//String
let innerHtml_string = oneElement.innerHTML;

oneElement.innerHTML = '<a href="http://www.google.com"> Google' + innerHtml_string + '</a>';

