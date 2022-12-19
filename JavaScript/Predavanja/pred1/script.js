var words = ['quickest', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog', 'asdsaasdsqdsagagafdgd']

function dajNajduljeg(nizRijeci) {
    var najdulja = '';
    for (var i = 0; i < nizRijeci.length; i++) {
        var rijec = nizRijeci[i];
        if(rijec.length > najdulja.length) {
            najdulja = rijec;
        }
    }
    return najdulja;
}

console.log (dajNajduljeg (words));
