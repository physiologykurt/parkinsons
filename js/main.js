var sectionMappings = {
    "physiology": "physiology_content",
    "pathophysiology": "pathophysiology_content",
    "relevance": "relevance_content",
    "treatment": "treatment_content",
    "developments": "developments_content"
};

function navigate(newSection, skipAnchorSet) {
    var newDivId = sectionMappings[newSection];

    var navigatable = document.getElementById('navigatable');
    var newDiv = document.getElementById(newDivId);

    for (i = 0; i < navigatable.children.length; i++) {
        var c = navigatable.children[i];

        if (c != newDiv) {
            c.style.display = "none";
        }
    }

    newDiv.style.display = "block";

    if (skipAnchorSet !== true) {
        parent.location.hash = newSection;
    }
}

function pageLoad() {
    var target = parent.location.hash;
    target = target.trim();
    target = target.replace(/^#/, "");
    if (target === null || target === "") {
        target = "physiology";
    }
    navigate(target, true);
}