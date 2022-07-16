import LogReader from "../src/LogReader";
import fs from "fs";

const input = `177.71.128.21 - - [10/Jul/2018:22:21:28 +0200] "GET /intranet-analytics/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (X11; U; Linux x86_64; fr-FR) AppleWebKit/534.7 (KHTML, like Gecko) Epiphany/2.30.6 Safari/534.7"\n168.41.191.40 - - [09/Jul/2018:10:11:30 +0200] "GET http://example.net/faq/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (Linux; U; Android 2.3.5; en-us; HTC Vision Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"`;

const tmpFilePath = "./___tests___/tmpfile.txt";

beforeAll(() => {
  fs.writeFileSync(tmpFilePath, input);
});

afterAll(() => {
  fs.unlink(tmpFilePath, (err) => {
    if(err) throw err
  })
})

describe("LogReader", () => {
  it("parses a logfile and returns an accumulation object with each visit/line an item in an array", () => {
    expect(LogReader(tmpFilePath)).toEqual(
      expect.objectContaining({
        visits: [input.split("\n")[0], input.split("\n")[1]],
        visitsByIp: {},
        visitsByUrl: {}
      })
    );
  });
});
