const isLawCite = l => /(?:austlii\.edu.\au|bailii\.org|lawcite\.org)\/cgi-bin\/LawCite/i.test(l)

export default isLawCite