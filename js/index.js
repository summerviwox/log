function pageChange(e) {
    $("#main")[0].style.visibility="hidden"
    $("#album")[0].style.visibility="hidden"
    $("#article")[0].style.visibility="hidden"
    $("#about")[0].style.visibility="hidden"
    $("#mainline")[0].style.visibility = "hidden"
    $("#albumline")[0].style.visibility = "hidden"
    $("#articleline")[0].style.visibility = "hidden"
    $("#aboutline")[0].style.visibility = "hidden"

    switch (e.id) {
        case "menu-main":
            $("#main")[0].style.visibility="visible"
            $("#mainline")[0].style.visibility = "visible"
        break
        case "menu-album":
            $("#album")[0].style.visibility="visible"
            $("#albumline")[0].style.visibility = "visible"
            break
        case "menu-article":
            $("#article")[0].style.visibility="visible"
            $("#articleline")[0].style.visibility = "visible"
            break
        case "menu-about":
            $("#about")[0].style.visibility="visible"
            $("#aboutline")[0].style.visibility = "visible"
            break
    }
}
$("#article")[0].style.visibility="visible"
$("#articleline")[0].style.visibility = "visible"


