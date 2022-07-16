import { AnalysisObject, urlRegExp } from "./types";

const UrlHandler = (accumulator: AnalysisObject) => {
  accumulator.visits.forEach((visit) => {
    const regexTest = visit.match(urlRegExp)

    if (regexTest) {
      const url = regexTest[1];
      accumulator.visitsByUrl[url]
        ? (accumulator.visitsByUrl[url] += 1)
        : (accumulator.visitsByUrl[url] = 1);
    }
  });

  return accumulator
};

export default UrlHandler;
