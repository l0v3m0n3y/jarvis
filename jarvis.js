const crypto = require('node:crypto');
class jarvis{
    constructor(){
        this.api = "https://api.jarvis.cx/api/v1"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","Connection": "Keep-Alive","Content-Type":"application/json; charset=UTF-8"}
    }
    async get_key(){
        this.headers["x-jarvis-guid"]=`crypto.randomBytes(20)`
        let req=await fetch(`${this.api}/ai-chat`,{method:"POST",headers: this.headers,body:JSON.stringify({"content":"i'm_durov","metadata":{"conversation":{"messages":[]}},"assistant":{"model":"gpt-3.5-turbo","name":"GPT-3.5 Turbo"}})});
        let json= await req.json()
        return json["requestId"]
    }
    async ai_chat(text){
        this.headers["x-jarvis-guid"]=await this.get_key()
        let req=await fetch(`${this.api}/ai-chat`,{method:"POST",headers: this.headers,body:JSON.stringify({"content":text,"metadata":{"conversation":{"messages":[]}},"assistant":{"model":"gpt-3.5-turbo","name":"GPT-3.5 Turbo"}})});
        return req.json();
    }
}
module.exports = {jarvis};