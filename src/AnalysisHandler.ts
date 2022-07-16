import { AnalysisObject, visitsByIp, visitsByUrl } from "./types";

const MAX_RESULTS = 3;

const analysisHandler = (accumulator: AnalysisObject) => {
  const frequentIpMessage = constructFrequentIpMessage(accumulator.visitsByIp);
  const uniqueIpsMessage = constructUniqueIpMessage(accumulator.visitsByIp);

  console.log(uniqueIpsMessage, "\n");
  console.log(frequentIpMessage, "\n");
  console.log(constructFrequentUrlMessage(accumulator.visitsByUrl));
};

const findMostFrequentIps = (count: number, ipCountObject: visitsByIp) => {
  const objArray = Object.keys(ipCountObject).map((key) => {
    return {
      ip: key,
      visits: ipCountObject[key],
    };
  });

  const sortedObjArray = objArray.sort((a, b) => {
    return a.visits - b.visits > 0 ? -1 : 1;
  });

  return sortedObjArray.splice(0, count);
};

const constructFrequentIpMessage = (ipCountObject: visitsByIp) => {
  const values = findMostFrequentIps(MAX_RESULTS, ipCountObject);

  const message = values.map(
    (value) => `${value.ip} with ${value.visits} visits`
  );

  return `The ${message.length} most active IP addresses are:\n${message.join(
    "\n"
  )}`;
};

const findCountUniqueIps = (ipCountObject: visitsByIp) => {
  const ipSet = new Set(Object.keys(ipCountObject));
  return ipSet.size;
};

const constructUniqueIpMessage = (ipCountObject: visitsByIp) => {
  const uniqueIps = findCountUniqueIps(ipCountObject);

  return `The number of unique IP addresses is ${uniqueIps}`;
};

const findMostFrequentUrls = (count: number, urlCountObject: visitsByUrl) => {
  const objArray = Object.keys(urlCountObject).map((key) => {
    return {
      url: key,
      visits: urlCountObject[key],
    };
  });

  const sortedObjArray = objArray.sort((a, b) => {
    return a.visits - b.visits > 0 ? -1 : 1;
  });

  return sortedObjArray.splice(0, count);
};

const constructFrequentUrlMessage = (urlCountObject: visitsByUrl) => {
  const values = findMostFrequentUrls(MAX_RESULTS, urlCountObject);

  const message = values.map(
    (value) => `${value.url} with ${value.visits} visits`
  );

  return `The ${message.length} most visited URLs are:\n${message.join("\n")}`;
};

export default analysisHandler;
