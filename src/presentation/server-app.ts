import Express from 'express'

export class Server{
  
  
  static run(){
    const port = process.env.PORT || 3000;
    const app = Express();
    app.listen(port,()=>{
      console.log("Server Running ...")
    })
  }

}