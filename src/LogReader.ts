import fs from "fs";
import path from "path";

import { AnalysisObject, ipv4RegExp, urlRegExp } from "./types";

const LogReader = (pathToFile: string) => {
  const fullPath = path.resolve(pathToFile);
  const returnObject: AnalysisObject = {
    visits: [],
    visitsByIp: {},
    visitsByUrl: {},
  };
  let values;

  try {
    values = readFile(fullPath);
  } catch (err) {
    throw err;
  }

  values = values.filter((value) => !!value.length); // gets rid of newline at end of file

  if (!values.every(validateLine)) throw "Error: Invalid log file";

  returnObject.visits = values;

  return returnObject;
};

const readFile = (path: string) => {
  const array = fs
    .readFileSync(path)
    .toString()
    .replace(/\r\n/g, "\n")
    .split("\n");

  return array;
};

const validateLine = (line: string) => {
  return urlRegExp.test(line) && ipv4RegExp.test(line);
};

export default LogReader;
