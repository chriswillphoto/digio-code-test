import { AnalysisObject } from "./LogReader";

const IpAddressHandler = (accumulator: AnalysisObject) => {
  const ipv4Regex = new RegExp("(?:[0-9]{1,3}.){3}[0-9]{1,3}");
  accumulator.visits.forEach((visit) => {
    const regexTest = visit.match(ipv4Regex);

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
