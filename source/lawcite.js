const selection = window.getSelection();
let citation;
if (selection) citation = selection.toString();
if (citation) window.open(`http://www.lawcite.org/cgi-bin/LawCite?cit=${citation}`, '_blank');
else window.open('http://www.lawcite.org');