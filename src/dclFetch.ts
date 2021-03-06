import { isPreviewMode } from "@decentraland/EnvironmentAPI"
import { signedFetch } from "@decentraland/SignedFetch"

export enum dclFetchMethod {
  GET, POST
}

export type dclFetchData ={
  link?: string
  method?: dclFetchMethod
  body?: any
  auth?: string
  params?: string
}

export type dclFetchResponse = {
  valid: boolean,
  msg: string,
  data:any
}

export async function dclFetch(fetchData?:dclFetchData) {

  let res:dclFetchResponse = {valid: false, msg:"", data:{}}

  if(await isPreviewMode()){
    res.valid = true
    res.msg = "Preview Mode: player in position"
    return res
  }
  else{

    if(fetchData){
      if(!fetchData!.auth){
        res.valid = false
        res.msg = "Incorrect or missing auth token and data object"
        return res
      }
    }

  try{
    let response:any
        response = await signedFetch('https://lkdcl.co/dcl/validator/validate',{
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(fetchData)
        })
    let json
    if (response.text) {
      json = await JSON.parse(response.text)
      log('json is', json)

      if(json){
        res.valid = json.valid
        res.msg = json.msg
        res.data = json.data
        return res
      }
      else{
        res.valid = json.valid
        res.msg = json.msg
        return res
    }
    }
    else{
      res.valid = false
      res.msg = "JSON error"
      return res
    }
  }
  catch(e){
      log('error is => ', e)
      res.valid = false
      res.msg = "e"
      return res
  }
  }

}