import { AnalysisObject, ipv4RegExp } from "./types";

const IpAddressHandler = (accumulator: AnalysisObject) => {
  
  accumulator.visits.forEach((visit) => {
    const regexTest = visit.match(ipv4RegExp);

    if (regexTest) {
      const ipAddress = regexTest[0];
      accumulator.visitsByIp[ipAddress]
        ? (accumulator.visitsByIp[ipAddress] += 1)
        : (accumulator.visitsByIp[ipAddress] = 1);
    }
  });

  return accumulator
};

export default IpAddressHandler;
