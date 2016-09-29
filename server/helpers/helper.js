var when = require('when');
var LoopBackContext = require('loopback-context');

function get(){
    return when.promise(function(resolve, reject){
        var ctx = LoopBackContext.getCurrentContext();
        resolve(ctx.get('attr'));
    })
}

module.exports = {
    get: get
};