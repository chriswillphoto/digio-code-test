import LogReader from "./LogReader";
import { pipe } from "ts-functional-pipe";
import IpAddressHandler from "./IpAddressHandler";
import UrlHandler from "./UrlHandler";
import analysisHandler from "./AnalysisHandler";

const main = () => {
  const pathArg = process.argv[2];

  if (!pathArg) throw "Error: Must use file path as argument";

  const pipeline = pipe(LogReader, IpAddressHandler, UrlHandler, analysisHandler);

  return pipeline(pathArg);
};

if (require.main === module) {
  main();
}
