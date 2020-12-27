class terminaloop {
    constructor(app, routes, bodyParser) {
        this.app = app;
        this.routes = routes;
        this.bodyParser = bodyParser;
        // this.port = process.env.PORT || 5000;
   
    };
    initiate(){
        
        this.app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
          });
        
        this.app.use(bodyParser.json());
        this.app.use('/api', routes);
        this.app.use((err, req, res, next) => {
            console.log(err);
            next();
            });
        // this.app.listen(port, () => {
        //         console.log(`Server running on port ${port}`)
        //       });
        }
    };     

module.export = terminaloop;
        
    



  
  
  
  

