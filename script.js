const paises = {
    "BR": { nome: "Brasil", capital: "Brasília" },
    "US": { nome: "Estados Unidos", capital: "Washington, D.C." },
    "FR": { nome: "França", capital: "Paris" },
    "CN": { nome: "China", capital: "Pequim" },
    "IN": { nome: "Índia", capital: "Nova Delhi" },
    "JP": { nome: "Japão", capital: "Tóquio" },
    "DE": { nome: "Alemanha", capital: "Berlim" },
    "RU": { nome: "Rússia", capital: "Moscou" },
    "GB": { nome: "Reino Unido", capital: "Londres" },
    "IT": { nome: "Itália", capital: "Roma" },
    "ES": { nome: "Espanha", capital: "Madri" },
    "CA": { nome: "Canadá", capital: "Ottawa" },
    "AU": { nome: "Austrália", capital: "Camberra" },
    "MX": { nome: "México", capital: "Cidade do México" },
    "AR": { nome: "Argentina", capital: "Buenos Aires" },
    "CL": { nome: "Chile", capital: "Santiago" },
    "CO": { nome: "Colômbia", capital: "Bogotá" },
    "ZA": { nome: "África do Sul", capital: "Pretória" },
    "EG": { nome: "Egito", capital: "Cairo" },
    "NG": { nome: "Nigéria", capital: "Abuja" },
    "KE": { nome: "Quênia", capital: "Nairóbi" },
    "SA": { nome: "Arábia Saudita", capital: "Riade" },
    "TR": { nome: "Turquia", capital: "Ancara" },
    "KR": { nome: "Coreia do Sul", capital: "Seul" },
    "ID": { nome: "Indonésia", capital: "Jacarta" },
    "TH": { nome: "Tailândia", capital: "Bangcoc" },
    "MY": { nome: "Malásia", capital: "Kuala Lumpur" },
    "PH": { nome: "Filipinas", capital: "Manila" },
    "VN": { nome: "Vietnã", capital: "Hanói" },
    "IR": { nome: "Irã", capital: "Teerã" },
    "PK": { nome: "Paquistão", capital: "Islamabad" },
    "BD": { nome: "Bangladesh", capital: "Daca" },
    "UA": { nome: "Ucrânia", capital: "Kiev" },
    "PL": { nome: "Polônia", capital: "Varsóvia" },
    "NL": { nome: "Holanda", capital: "Amsterdã" },
    "BE": { nome: "Bélgica", capital: "Bruxelas" },
    "CH": { nome: "Suíça", capital: "Berna" },
    "SE": { nome: "Suécia", capital: "Estocolmo" },
    "NO": { nome: "Noruega", capital: "Oslo" },
    "FI": { nome: "Finlândia", capital: "Helsinque" },
    "DK": { nome: "Dinamarca", capital: "Copenhague" },
    "PT": { nome: "Portugal", capital: "Lisboa" },
    "GR": { nome: "Grécia", capital: "Atenas" },
    "HU": { nome: "Hungria", capital: "Budapeste" },
    "CZ": { nome: "República Tcheca", capital: "Praga" },
    "RO": { nome: "Romênia", capital: "Bucareste" },
    "AT": { nome: "Áustria", capital: "Viena" },
    "NZ": { nome: "Nova Zelândia", capital: "Wellington" },
    "CU": { nome: "Cuba", capital: "Havana" },
    "VE": { nome: "Venezuela", capital: "Caracas" },
    "PE": { nome: "Peru", capital: "Lima" },
    "BO": { nome: "Bolívia", capital: "Sucre" },
    "PY": { nome: "Paraguai", capital: "Assunção" },
    "UY": { nome: "Uruguai", capital: "Montevidéu" },
    "EC": { nome: "Equador", capital: "Quito" },
    "DO": { nome: "República Dominicana", capital: "Santo Domingo" },
    "GT": { nome: "Guatemala", capital: "Cidade da Guatemala" },
    "CR": { nome: "Costa Rica", capital: "San José" },
    "PA": { nome: "Panamá", capital: "Cidade do Panamá" },
    "KE": { nome: "Quênia", capital: "Nairóbi" },
    "TZ": { nome: "Tanzânia", capital: "Dodoma" },
    "ET": { nome: "Etiópia", capital: "Adis Abeba" },
    "GH": { nome: "Gana", capital: "Acra" },
    "DZ": { nome: "Argélia", capital: "Argel" },
    "SD": { nome: "Sudão", capital: "Cartum" },
    "IQ": { nome: "Iraque", capital: "Bagdá" },
    "IL": { nome: "Israel", capital: "Jerusalém" },
    "SY": { nome: "Síria", capital: "Damasco" },
    "LB": { nome: "Líbano", capital: "Beirute" },
    "JO": { nome: "Jordânia", capital: "Amã" },
    "YE": { nome: "Iémen", capital: "Saná" },
    "QA": { nome: "Catar", capital: "Doha" },
    "AE": { nome: "Emirados Árabes Unidos", capital: "Abu Dhabi" }
};

const tooltip = document.getElementById("tooltip");

document.getElementById("world-map").addEventListener("load", function() {
    const svgDoc = this.getSVGDocument();
    const paths = svgDoc.querySelectorAll("path");

    paths.forEach(path => {
        const codigoPais = path.id;

        path.addEventListener("mouseover", (event) => {
            const paisInfo = paises[codigoPais];
            if (paisInfo) {
                tooltip.textContent = `${paisInfo.nome} - Capital: ${paisInfo.capital}`;
                tooltip.style.display = "block";

                const mouseX = event.clientX;
                const mouseY = event.clientY;
                tooltip.style.left = `${mouseX + 10}px`;
                tooltip.style.top = `${mouseY + 10}px`;
            }
        });

        path.addEventListener("mousemove", (event) => {
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            tooltip.style.left = `${mouseX + 10}px`;
            tooltip.style.top = `${mouseY + 10}px`;
        });

        path.addEventListener("mouseout", () => {
            tooltip.style.display = "none";
        });
    });
});
