let Checked = document.querySelector(".Title");
let ul = document.querySelector("ul");
let Button = document.querySelector("button");
window.onload = function()
{
    if(window.navigator.onLine)
    {
        Connected();
    }
    else
    {
        Desconnected();
    }
}
window.addEventListener("online", function()
{
    Connected();
});
window.addEventListener("Offline", function()
{
    Desconnected();
});
Button.onclick = function()
{
    window.location.reload();
};
function Connected ()
{
    Checked.innerHTML = 'Online Now';
    Checked.style.color = 'green';
    ul.remove();
    Button.remove();
}
function Desconnected()
{
    Checked.innerHTML = 'Offline Now';
    Checked.style.color = '#666';
    ul.classList.remove('hide');
    Button.classList.remove('hide');
}
