onload = () =>{
        document.body.classList.remove("container");

        const url = new URL(window.location.href);
        const params = new URLSearchParams(url.search);
        const namePerson = params.get('name');
        console.log(namePerson);

        const spanLabel = document.getElementById('name-person');
        spanLabel.innerText = namePerson;
};
