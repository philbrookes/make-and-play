function CardboardBox(renderer){
    this.init(
        renderer
        , "make-and-play/objects/cardboard-box/"
        , "cardboard-box.obj"
    );
}

CardboardBox.prototype = new Collection();

CardboardBox.prototype.process = function(engine){
}
