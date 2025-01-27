# Next.js 15 - Invalid hook call error in basic function component

This repository demonstrates a seemingly simple Next.js 15 application that unexpectedly throws an `Invalid hook call` error.  The error occurs despite the code appearing to adhere to standard React function component structure. This issue highlights a potential edge case or unexpected behavior in Next.js 15.

## Reproduction Steps
1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

You should observe the `Invalid hook call` error in your console.

## Potential Causes
The root cause remains unclear, but potential contributing factors include:
* **Unexpected hook usage within the component:**  While this code snippet appears correct, there might be an indirect usage of hooks elsewhere. Ensure that no other modules or components import hooks outside of function components.
* **Next.js 15 compatibility issues:** This is less likely if the code is minimal.
* **Conflicting libraries:** Check for conflicting library versions that could potentially interfere with the rendering of the component.

## Solution
The solution may involve a closer examination of the code for any hidden hook usage or dependency conflicts, or updating your version of NextJS and related packages.