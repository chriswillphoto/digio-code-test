export interface AnalysisObject {
  visits: string[],
  visitsByIp: visitsByIp,
  visitsByUrl: visitsByUrl
}

export type visitsByIp = {
  [key: string]: number
}

export type visitsByUrl = {
  [key: string]: number
}

export const urlRegExp = new RegExp(/GET\s(?:http(?:s)?:\/\/(?:www\.)?(?:\w)*(?:\.\w*))?([\/\w\-\.]*)\sHTTP/);
export const ipv4RegExp = new RegExp("(?:[0-9]{1,3}[\.]){3}[0-9]{1,3}");
