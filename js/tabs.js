

function open_tab(tab_name)
{
    var tab_links = document.getElementsByClassName("tab-link");
    var tab_contents = document.getElementsByClassName("tab-content");

    for(tab_link of tab_links)
    {
        tab_link.classList.remove("active-link");
    }

    for(tab_content of tab_contents)
    {
        tab_content.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tab_name).classList.add("active-tab");
}