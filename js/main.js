let additionalElement = document.createElement("h2");
additionalElement.append("Откуда взялся этот текст, если его нет в разметке?")

document.getElementById("h1_title")
    .parentNode.append(additionalElement)
