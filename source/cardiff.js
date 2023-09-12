const selection = window.getSelection()?.toString();
if (selection) window.open(`https://www.legalabbrevs.cardiff.ac.uk/abbreviations/abbsearch/asearch/${selection}/atype/Exact`, '_blank');
