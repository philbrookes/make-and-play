function CardboardPyramid(renderer){
    this.init(
        renderer
        , "make-and-play/objects/cardboard-pyramid/"
        , "cardboard-pyramid.obj"
    );
}

CardboardPyramid.prototype = new Collection();

CardboardPyramid.prototype.process = function(engine){
}
