const js = import('./node_modules/@gamez0/hello-wasm/hello_wasm.js');

js.then((js) => {
  js.greet('WebAssembly');
});
