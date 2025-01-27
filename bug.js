```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>This is a Next.js app.</p>
    </div>
  );
}
```

This code produces the error `Error: Error: Invalid hook call. Hooks can only be called inside of the body of a function component.`, even though it seems like a very basic Next.js app.