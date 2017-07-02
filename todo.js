var lis = document.querySelectorAll("li");

for (let i = 0; i < lis.length; ++i) {
    lis[i].addEventListener("mouseover", function() {
        lis[i].classList.add("selected");
    });

    lis[i].addEventListener("mouseout", function() {
        lis[i].classList.remove("selected");
    });

    lis[i].addEventListener("click", function() {
        lis[i].classList.toggle("done");
    });
}

