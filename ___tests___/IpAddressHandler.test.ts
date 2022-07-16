import IpAddressHandler from "../src/IpAddressHandler";
import { AnalysisObject } from "../src/types";

describe("IpAddressHandler", () => {
  const input: AnalysisObject = {
    visits: [
      '168.41.191.40 - - [09/Jul/2018:10:11:30 +0200] "GET http://example.net/faq/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (Linux; U; Android 2.3.5; en-us; HTC Vision Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"',
    ],
    visitsByIp: {},
    visitsByUrl: {},
  };

  it("should add to counter in analysis object by IP Address", () => {
    expect(IpAddressHandler(input)).toEqual(
      expect.objectContaining({
        visitsByIp: {
          "168.41.191.40": 1,
        },
      })
    );
  });
});
