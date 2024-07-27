# jarvis
JavaScript library for jarvis.cx
# main
```js
async function main(){
    const {jarvis} = require('./jarvis');
    const gpt= new jarvis();
    let req=await gpt.ai_chat("prompt")
    console.log(req)
}
main()
```
