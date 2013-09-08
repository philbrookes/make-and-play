function CardboardRoll(renderer){
    this.init(
        renderer
        , "make-and-play/objects/cardboard-roll/"
        , "cardboard-roll.obj"
    );
}

CardboardRoll.prototype = new Collection();

CardboardRoll.prototype.process = function(engine){
}
