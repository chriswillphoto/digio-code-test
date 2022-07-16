import fs from 'fs'
import path from 'path'

export interface AnalysisObject {
  visits: string[],
  visitsByIp: visitsByIp,
  visitsByUrl: visitsByUrl
}

type visitsByIp = {
  [key: string]: number
}

type visitsByUrl = {
  [key: string]: number
}

const LogReader = (pathToFile: string) => {
  const fullPath = path.resolve(pathToFile)
  const returnObject: AnalysisObject = {
    visits: [],
    visitsByIp: {},
    visitsByUrl: {}
  }
  let values

  try {
    values = readFile(fullPath)
  } catch (err){
    throw err
  }

  returnObject.visits = values

  return returnObject
}

const readFile = (path: string) => {
  const array = fs.readFileSync(path).toString().replace(/\r\n/g,'\n').split('\n');

  return array
}

export default LogReader
