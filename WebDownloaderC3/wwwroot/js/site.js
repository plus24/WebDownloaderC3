function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    startDownload(data);
}

$('.uploadfilecontainer').on('click', function () {
    var url = window.prompt(`URL to Download?`, "");
    startDownload(url);
});

function startDownload(data) {
    var irid = window.prompt(`Download ${data}?`, "Ellie's IR ID!");
    if (irid == null || irid == "") {
        alert('Type Ellie\'s ir id!');
    } else {
        $.post("Home/StartDownload", { irid: irid, url: data });
    }
}
