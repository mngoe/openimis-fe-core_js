const nepali = {
    name: "nepali",
    startYear: 1,
    yearLength: 365,
    epoch: 1700709,
    century: 20,
    weekStartDayIndex: 1,
    getMonthLengths(year) {
      if (year <1970)
        return nepaliMonthsDictionary['1970'];
      else if (year>2099)
        return nepaliMonthsDictionary['2099'];
      else
        return nepaliMonthsDictionary[parseInt(year)];
    },
    isLeap(year) {
      // those methods have to be defined even if they are not used in a given calendar
      return false
    },
    getLeaps(currentYear) {
      return []
    },
    getDayOfYear({ year, month, day }) {
      let monthLengths = this.getMonthLengths(year);
  
      for (let i = 0; i < month.index; i++) {
        day += monthLengths[i];
      }
  
      return day;
    },
    getAllDays(date) {
      const { year } = date;
  
      return (
        this.yearLength * (year - 1) +
        this.getDayOfYear(date)
      );
    },
    leapsLength(year) {
      return 0;
    },
    guessYear(days, currentYear) {
      let year = ~~(days / 365.24);
  
      return year + (currentYear > 0 ? 1 : -1);
    },
  };
  
// based on code from legacy version
const nepaliMonthsDictionary = {
  '1970': [ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
  '1971': [ 31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30 ],
  '1972': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30 ],
  '1973': [ 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 ],//1973
  '1974': [ 31, 31, 32, 30, 31, 31, 30, 29, 30, 29, 30, 30 ],
  '1975': [ 31, 31, 32, 32, 30, 31, 30, 29, 30, 29, 30, 30 ],
  '1976': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ],
  '1977': [ 31, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31 ],
  '1978': [ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
  '1979': [ 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 ],
  '1980': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ],
  '1981': [ 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30 ],
  '1982': [ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
  '1983': [ 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 ],
  '1984': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ],
  '1985': [ 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30 ],
  '1986': [ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
  '1987': [ 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30 ],
  '1988': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ],
  '1989': [ 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30 ],
  '1990': [ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
  '1991': [ 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30 ],
  '1992': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 ],
  '1993': [ 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30 ],
  '1994': [ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
  '1995': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30 ],
  '1996': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 ],
  '1997': [ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
  '1998': [ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
  '1999': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ],
  '2000': [ 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 ],  //2000
  '2001': [ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],  //2001
  '2002': [ 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 ],
  '2003': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ],
  '2004': [ 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 ],
  '2005': [ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
  '2006': [ 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 ],
  '2007': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ],
  '2008': [ 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31 ],
  '2009': [ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
  '2010': [ 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 ],
  '2011': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ],
  '2012': [ 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30 ],
  '2013': [ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
  '2014': [ 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 ],
  '2015': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ],
  '2016': [ 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30 ],
  '2017': [ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
  '2018': [ 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30 ],
  '2019': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 ],
  '2020': [ 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30 ],
  '2021': [ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
  '2022': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30 ],
  '2023': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 ],
  '2024': [ 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30 ],
  '2025': [ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
  '2026': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ],
  '2027': [ 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 ],
  '2028': [ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
  '2029': [ 31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30 ],
  '2030': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ],
  '2031': [ 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 ],
  '2032': [ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
  '2033': [ 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 ],
  '2034': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ],
  '2035': [ 30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31 ],
  '2036': [ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
  '2037': [ 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 ],
  '2038': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ],
  '2039': [ 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30 ],
  '2040': [ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
  '2041': [ 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 ],
  '2042': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ],
  '2043': [ 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30 ],
  '2044': [ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
  '2045': [ 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30 ],
  '2046': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ],
  '2047': [ 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30 ],
  '2048': [ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
  '2049': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30 ],
  '2050': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 ],
  '2051': [ 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30 ],
  '2052': [ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
  '2053': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30 ],
  '2054': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 ],
  '2055': [ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
  '2056': [ 31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30 ],
  '2057': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ],
  '2058': [ 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 ],
  '2059': [ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
  '2060': [ 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 ],
  '2061': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ],
  '2062': [ 30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31 ],
  '2063': [ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
  '2064': [ 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 ],
  '2065': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ],
  '2066': [ 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31 ],
  '2067': [ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
  '2068': [ 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 ],
  '2069': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ],
  '2070': [ 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30 ],
  '2071': [ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],  //2071
  '2072': [ 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30 ],  //2072
  '2073': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ],  //2073
  '2074': [ 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30 ],
  '2075': [ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
  '2076': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30 ],
  '2077': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 ],
  '2078': [ 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30 ],
  '2079': [ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
  '2080': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30 ],
  '2081': [ 31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30 ],
  '2082': [ 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30 ],
  '2083': [ 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30 ],
  '2084': [ 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30 ],
  '2085': [ 31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30 ],
  '2086': [ 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30 ],
  '2087': [ 31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30 ],
  '2088': [ 30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30 ],
  '2089': [ 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30 ],
  '2090': [ 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30 ],  //2090
  '2091': [ 31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30 ],
  '2092': [ 30, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30 ],
  '2093': [ 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30 ],
  '2094': [ 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30 ],
  '2095': [ 31, 31, 32, 31, 31, 31, 30, 29, 30, 30, 30, 30 ],
  '2096': [ 30, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 ],
  '2097': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30 ],
  '2098': [ 31, 31, 32, 31, 31, 31, 29, 30, 29, 30, 29, 31 ],
  '2099': [ 31, 31, 32, 31, 31, 31, 30, 29, 29, 30, 30, 30 ]   //2099
};
  export default nepali;
  