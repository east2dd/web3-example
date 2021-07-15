# BENQi Frontend App

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Big Numbers

`ethers` uses its own wrapper for `bn.js`, and deals only with integers. 
This application has been built to work with `bignumber.js` and it supports
floats. When interacting  with `ethers`, number types have to be converted 
between the two libraries. Use `bignumber.js` to represent numerical values 
when possible, and convert to native JavaScript number types only when
necessary, i.e., for display, and to `ethers` `BigNumber` when passing 
values to contract calls.

Use the following convention when dealing with big numbers. Do not pass around
`ethers` big number objects.

```javascript
import { BigNumber as EthersBigNumber } from 'ethers'
import BigNumber from 'bignumber.js'

const result: BigNumber = await contract
  .someFunction()
  .then((result: EthersBigNumber) => {
    return new BigNumber(result.toString())
  })

const argument = new BigNumber(42)
someOtherContract
  .someFunction(EthersBigNumber.from(argument.toString()))
```
