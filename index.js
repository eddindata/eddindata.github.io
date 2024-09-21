onload = () => {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const name = params.get('name');
    console.log(name);

    const aLabel = document.getElementById('a-label');
    aLabel.href = 'FLORES.html?name='+name;;
}