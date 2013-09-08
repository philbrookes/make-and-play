function Reference(renderer){
    this.init(
        renderer
        , "make-and-play/objects/reference/"
        , "reference.obj"
    );
}

Reference.prototype = new Collection();

Reference.prototype.process = function(engine){
}
