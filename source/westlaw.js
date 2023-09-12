import isLawCite from '../lib/isLawCite.js';

const selection = window.getSelection();
let citation;
if (selection) citation = selection.toString();
else if (isLawCite(window.location.href)) citation = new URL(window.location).searchParams.get('cit');
if (citation) window.open(`https://anzlaw.thomsonreuters.com/Search/Results.html?comp=wlau&query=adv:%20CI(${citation})`, '_blank');
