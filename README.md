# DCL Validator

Easily validate a player is inside Decentraland. No need to set up an external server.

## Install

To use any of the helpers provided by this library:

1. Install it as an npm package. Run this command in your scene's project folder:

   ```
   npm i dcl-fetch
   ```

2. Add this line at the start of your game.ts file, or any other TypeScript files that require it:

   ```ts
   import {dclFetch, dclFetchMethod, dclFetchResponse} from 'dcl-fetch'
   ```

## Usage

### Response
```ts
export type dclFetchResponse = {
  valid: boolean, //if the validation was successful or not
  msg: string, //validation success or error message
  data:any //if your custom server returns any data from the endpoint passed
}
```

### User Validation Only

```ts
executeTask(async()=>{
  let res:dclFetchResponse = await dclFetch()
  log('res is', res)
})
```

### User Validation and passing a get request to your custom server

```ts
executeTask(async()=>{
  let res = await dclFetch({
    auth: "4f820820-cfd3-42d7-91a3-28fb357129af",
    link: "https://lkdcl.co/test/get",
    method: dclFetchMethod.GET
  })
  log('res is', res)
})
```

### User Validation and passing a get request to your custom server with query parameters

```ts
executeTask(async()=>{
  let res:dclFetchResponse = await dclFetch({
    auth: "4f820820-cfd3-42d7-91a3-28fb357129af",
    link: "https://lkdcl.co/test/get",
    body: "param1=yes",
    method: dclFetchMethod.GET
  })
  log('res is', res)
})
```

### User Validation and passing a post request to your custom server with body parameters

```ts
executeTask(async()=>{
  let res:dclFetchResponse = await dclFetch({
    auth: "4f820820-cfd3-42d7-91a3-28fb357129af",
    link: "https://lkdcl.co/test/post",
    body: {test:'ok'},
    method: dclFetchMethod.POST
  })
  log('res is', res)
})
```

#### For server validation, please reach out to Lastraum#0153 on the process for obtaining an auth key

## Copyright info

This scene is protected with a standard Apache 2 licence. See the terms and conditions in the [LICENSE](/LICENSE) file.
