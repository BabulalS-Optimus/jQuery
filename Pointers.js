
var initTop = new Array();
var initLeft = new Array();

$(window).resize(function () {

    var notes = document.getElementsByName('note');

    for (var i = 0; i < notes.length; i++) {
        var notesid = notes[i].id;

        var prefix = notesid.substring(5, 6);

        var count = findLast(notes, prefix);

        var imgid = '#img' + count;

        var img = $(imgid);
        var left = img.offset().left;
        var top = img.offset().top;

        var note = document.getElementById(notesid);

        note.style.top = initTop[i] + top - 15;
        note.style.left = initLeft[i] + left;
        // alert(notes.length);
    }

});

$(function () {

    var notes = document.getElementsByName('note');

    for (var i = 0; i < notes.length; i++) {
        var notesid = notes[i].id;

        var prefix = notesid.substring(5, 6);

        var count = findLast(notes, prefix);

        var imgid = '#img' + count;

        var img = $(imgid);
        var left = img.offset().left;
        var top = img.offset().top;


        var note = document.getElementById(notesid);
        var oldTop = note.style.top;
        var oldLeft = note.style.left;


        oldTop = parseFloat(oldTop.substring(0, oldTop.length - 2));
        oldLeft = parseFloat(oldLeft.substring(0, oldLeft.length - 2));

        initTop[i] = oldTop;
        initLeft[i] = oldLeft;

        note.style.top = oldTop + top - 15;
        note.style.left = oldLeft + left;
        // alert(notes.length);
    }
});

function findLast(notes, prefix) {
    var last = 0;
    for (var i = 0; i < notes.length; i++) {
        var id = notes[i].id;
        if (id.substring(5, 6) == prefix) {
            last = id.substring(5);
        }
    }
    last = parseInt(last) + 1;
    return last;
}
