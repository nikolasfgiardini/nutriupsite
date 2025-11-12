function encontrarSlotVazio() {
    const slots = ['slot1','slot2','slot3'];
    for (let s of slots) {
        if (!localStorage.getItem(s)) return s;
    }
    return null;
}

document.querySelectorAll(".bntadd").forEach((botao) => {
    botao.addEventListener("click", (e) => {
        const box = e.target.closest(".divreceitas");
        const nome = box.querySelector(".escrita").innerText.trim();
        const imagemEl = box.querySelector(".imgreceitas");
        const imagem = imagemEl ? imagemEl.src : "";

        const slot = encontrarSlotVazio();
        if (!slot) {
            alert("Todos os slots estão ocupados. Remova ou troque um prato na Home.");
            return;
        }

        const prato = { nome, imagem };

        localStorage.setItem(slot, JSON.stringify(prato));


        window.location.href = "csspaginaprincipal.html";
    });
});
