var express = require( 'express' );
var router = express.Router();
var path = require( 'path' );

router.get( '/', function( req, res ){
  console.log( 'thing get route hit' );
  res.sendFile( path.resolve( 'public/views/thing.html' ) );
}); //end thing route get

module.exports = router;
