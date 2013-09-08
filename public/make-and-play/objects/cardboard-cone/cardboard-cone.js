function CardboardCone(renderer){
    this.init(
        renderer
        , "make-and-play/objects/cardboard-cone/"
        , "cardboard-cone.obj"
    );
}

CardboardCone.prototype = new Collection();

CardboardCone.prototype.process = function(engine){
}
