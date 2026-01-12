// Base de injeção para o iPhone 7 Jailbreak
const OFFSETS = {
    puxadaCapa: "0x102B5A", // Exemplo de endereço de memória para altura do tiro
    espActive: "0x102B5F"
};

function abrirPainel() {
    document.getElementById('tela-inicial').classList.add('hidden');
    document.getElementById('tela-painel').classList.remove('hidden');
}

function fecharPainel() {
    document.getElementById('tela-painel').classList.add('hidden');
    document.getElementById('tela-inicial').classList.remove('hidden');
}

// Função de comunicação com o sistema (Jailbreak Tweak)
function sendToTweak(address, value) {
    console.log(`[SYSTEM_INJECT] Offset: ${address} Value: ${value}`);
}

// Lógica Aimbot 90% Capa
document.getElementById('aimbotSwitch').addEventListener('change', function() {
    if (this.checked) {
        sendToTweak(OFFSETS.puxadaCapa, "90.0");
        alert("FACILITAR CAPA: ATIVADO (90%)");
    } else {
        sendToTweak(OFFSETS.puxadaCapa, "0.0");
        alert("MODO NORMAL");
    }
});

// Lógica ESP
document.getElementById('espLineSwitch').addEventListener('change', function() {
    let state = this.checked ? "1" : "0";
    sendToTweak(OFFSETS.espActive, state);
    alert(this.checked ? "ESP LINE: ON" : "ESP LINE: OFF");
});

// Slider de Ajuste
const range = document.getElementById('smoothRange');
const display = document.getElementById('valorSuavidade');

range.addEventListener('input', function() {
    display.innerText = this.value + "%";
    sendToTweak(OFFSETS.puxadaCapa, this.value);
});
