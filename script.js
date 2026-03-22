const paginas = [
    "oiii Lucas ,\n faz tempo que nois não conversa direito né? aí Vey nem sei oq falar só sei que eu to escrevendo kkk, mais eai? tá bem? espero que sim. comecei a fazer curso de adm sabia? uhum e tô aprendendo como programar pelo YouTube msm KKKK tem um indiano que ensina muito bem Veyy rapaz nem te conto, mais Vey tô fazendo isso só pra vc perder sem tempo lendo msm se vc não for bobo sabe que é só virar pra ir pra outra tela que tem mais texto pro lado😌"
,

    "Vey eu programo muito, brincadeira até agora só sei fazer site assim mais tô aprendendo ainda kkk com o curso da escola de adm e mais minhas coisas de casa não sobra muito tempo pra aprender e eu sou bem distraída e acabo indo jogar ao invés de estudar ksksksk mais tô indo, se vc perceber algo no site vc me diz ein."
,

    "faz tempo que a gente não conversa como que vc tem ido? sem vc perde a graça jogar um pouco pq não tem como rir das caras dos aleatórios eu gosto de praguejar vc no FF pq no final vc sempre morre KAKAKAK e muito bom quando quiser jogar me chama eu não tenho muita coisa pra fazer quando não e dia de semana pq dia de semana infelizmente eu tenho aula😔☝️."
,

    " mais eu só queria fazer vc perder seu tempo msm kahska programar e meio difícil mais e legal principalmente quando vc tá programando pra fazer algo assim pro seu amigo aí Vey vc vai lembrar de mim pra sempre uhum não e todo dia que vão programar um site só pra vc, eu sou demais eu sei😌 kkakakakaka mais era só isso msm🌸✨"
];

const fundos = [
    "linear-gradient(135deg, #6a11cb, #2575fc)",
    "linear-gradient(135deg, #2575fc, #6a11cb)",
    "linear-gradient(135deg, #1e3c72, #2a5298)",
    "linear-gradient(135deg, #8e2de2, #4a00e0)"
];

let indice = 0;
const divPagina = document.getElementById("pagina");

function mostrarPagina(i) {
    divPagina.textContent = paginas[i];
    divPagina.style.background = fundos[i];
}

mostrarPagina(indice);

// --- setas do computador ---
document.addEventListener("keydown", function(e) {
    if(e.key === "ArrowRight") {
        if(indice < paginas.length - 1) indice++;
        mostrarPagina(indice);
    } else if(e.key === "ArrowLeft") {
        if(indice > 0) indice--;
        mostrarPagina(indice);
    }
});

// --- swipe do celular ---
let startX = 0;

divPagina.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
});

divPagina.addEventListener('touchend', function(e) {
    let endX = e.changedTouches[0].clientX;
    if(startX - endX > 50) { // esquerda -> próxima página
        if(indice < paginas.length - 1) indice++;
    } else if(endX - startX > 50) { // direita -> página anterior
        if(indice > 0) indice--;
    }
    mostrarPagina(indice);
});