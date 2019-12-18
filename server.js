const express = require('express'),
      path = require('path');

const app = express();

app.use(express.static('./dist/charity-angular'));

app.get('/*', (req,res)=> {
res.sendFile(path.join(_dirname,'/dist/charity-angular/index.html'));
});
app.listen(process.env.PORT || 8080, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
})  
