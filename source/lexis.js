import isLawCite from '../lib/isLawCite.js';

const selection = window.getSelection();
let citation;
if (selection) citation = selection.toString();
else if (isLawCite(window.location.href)) citation = new URL(window.location).searchParams.get('cit');
if (citation) window.open(`https://advance.lexis.com/search/?pdsearchterms=case-citation(${citation})`, '_blank');