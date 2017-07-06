// requries
var express = require( 'express' );
var app = express();
var index = require( './modules/routers/index' );

// uses
app.use( express.static( 'public' ) );
app.use( '/', index );

// globals
var port = process.env.PORT || 6688;

// spin up server
app.listen( port, function(){
  console.log( 'server up on:', port );
});
