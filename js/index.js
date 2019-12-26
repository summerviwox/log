function pageChange(e) {
    $("#main")[0].style.visibility="hidden"
    $("#album")[0].style.visibility="hidden"
    $("#article")[0].style.visibility="hidden"
    $("#about")[0].style.visibility="hidden"
    switch (e.id) {
        case "menu-main":
        main.index = 1
            $("#main")[0].style.visibility="visible"
        break
        case "menu-album":
            main.index = 2
            $("#album")[0].style.visibility="visible"
            break
        case "menu-article":
            main.index = 3
            $("#article")[0].style.visibility="visible"
            break
        case "menu-about":
            main.index = 4
            $("#about")[0].style.visibility="visible"
            break
    }
}
main.index = 4
$("#about")[0].style.visibility="visible"
