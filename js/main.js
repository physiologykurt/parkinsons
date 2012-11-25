
function navigate(newDivId) {
    var navigatable = document.getElementById('navigatable');
    var newDiv = document.getElementById(newDivId);

    for (i = 0; i < navigatable.children.length; i++) {
        var c = navigatable.children[i];

        if (c != newDiv) {
            c.style.display = "none";
        }
    }

    newDiv.style.display = "block";
}
