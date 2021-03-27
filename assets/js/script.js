
const boton = document.getElementById("enviarBoton");
const nombre = document.getElementById("nombre");
const numrepos = document.getElementById("numrepos");
const pagina = document.getElementById("pagina");
const localidad = document.getElementById("localidad");
const repoPagina = document.getElementById("repoPagina");
const resultados = document.getElementById("resultados");
const repositorios = document.getElementById("repositorios");


boton.addEventListener("click", () => {

const baseUrl = "https://api.github.com/users";
const req = async (baseUrl) => {
    try{
        const results = await fetch (baseUrl);
        const convertJson = await results.json()
        return convertJson;
    }catch (error){
        console.log("error");
    }
};
const getUser = async (usuario) => {
    const url = `${baseUrl}/${usuario}`
    const esperaUser = await req(url)
    getRepo(esperaUser.repos_url);
    resultados.innerHTML = `${nombre.value}`;
    numrepos.innerHTML = `${esperaUser.public_repos}`;
    localidad.innerHTML = `${esperaUser.location}`;
};
const getRepo = async (repos_url) => {
    const esperaRepo = await req(repos_url);
    console.log("getrepo", esperaRepo.repos_url);
    for(let i = 0; i < 20; i++){
        repositorios.innerHTML += `<a href="${esperaRepo[i].html_url}">${esperaRepo[i].html_url}</a></br>`;
     }
}
    getUser(nombre.value, numrepos.value, localidad.value);
});


















// req().then( () => {

//     const usersIds = req.map(p => p.userId);
//     const NuevoObj = new Set(usersIds);
//     const usuarios = [...NuevoObj];
//     Promise.all(usuarios.map(usersIds => getUser(usersId)))
//     .then(response => console.log(response))
// });


