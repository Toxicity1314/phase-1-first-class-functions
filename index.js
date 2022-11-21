function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction(){
    function name() {
        console.log("stuff")
    }
    return name;
}

function returnsAnAnonymousFunction(){
    return () => console.log("Anonymous")
}