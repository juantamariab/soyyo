const fetchP = import('node-fetch').then(mod => mod.default);
const fetch = (...args) => fetchP.then(fn => fn(...args));
class Entidad{

   list = [];

   async getRango(startId,endId){
    for(let i = startId; i <= endId; i++){
        console.log(i);
        const l = await this.getEntidad(i)
        this.list.push(l);
        console.log("Test-"+i+": "+JSON.stringify(this.list));
    }
    return this.list;
   }

   async  getEntidad(entityId){
        let response = await
        fetch('https://awovcw7p76.execute-api.us-east-1.amazonaws.com/dev/entity/v2.1/entities/'+entityId);
        let resp = await response.json();
        console.log("Entidad: "+JSON.stringify(resp));
        //this.list.push(resp.data);
        return resp.data;
    }
}

module.exports = new Entidad();