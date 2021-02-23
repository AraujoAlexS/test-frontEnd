// BANCO DE DADOS ---------------------------------
let db = [
  {
    users: [
      {
        name: "Amanda",
        email: "test1@example.com",
        department: "Sales",
        occupation: "Account executive",
        profile_image:
          "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
        cpf: 12354367890,
        role: "Admin",
        active: 1,
      },
      {
        name: "Rodrigo",
        email: "test2@example.com",
        department: "Marketing",
        occupation: "Brand Manager",
        profile_image:
          "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
        cpf: 12354367890,
        role: "Editor",
        active: 1,
      },
      {
        name: "Thiago",
        email: "test3@example.com",
        department: "Ads",
        occupation: "Copywriting",
        profile_image:
          "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
        cpf: 12354367890,
        role: "Admin",
        active: 1,
      },
      {
        name: "Vanessa",
        email: "test4@example.com",
        department: "Social Media",
        occupation: "Content Manager",
        profile_image:
          "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
        cpf: 12354367890,
        role: "Admin",
        active: 0,
      },
      {
        name: "Ashley S",
        email: "test5@example.com",
        department: "Branding & Marketing",
        occupation: "Specialist",
        profile_image:
          "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
        cpf: 12354367890,
        role: "Admin",
        active: 1,
      },
      {
        name: "Kristopher",
        email: "test5@example.com",
        department: "Architectural Genie",
        occupation: "Computer Network Architect",
        profile_image:
          "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
        cpf: 12354367890,
        role: "Admin",
        active: 1,
      },
      {
        name: "Robinson",
        email: "test5@example.com",
        department: "Branding",
        occupation: "Trainee",
        profile_image:
          "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
        cpf: 12354367890,
        role: "Admin",
        active: 1,
      },
    ],
  },
];

// RENDERIZAÇÃO NO DOM INDEX ---------------------------------
// CHECA SE O FUNCIONÁRO ESTÁ ATIVO OU INATIVO
function checkActiveOrInactive(num) {
  if (num == 1) {
    return "ativo";
  } else {
    return "inativo";
  }
}
// RENDERIZA AS LINHAS DA TABELA NO INDEX
function drawTableBodyLine(listOfEmployees) {
  let html = "";
  for (let i in listOfEmployees[0].users) {
    let line = `<div class="row flex cell align-content-center justify-content-center">
        <div class="col-4 ">
            <div class="container-fluid">
                <div class="row">
                    <img src="${listOfEmployees[0].users[i].profile_image}"
                        alt="profile picture" class="img-funcionario">
                    <div class="col-10 d-flex flex-column">
                        <span class="titulo">${
                          listOfEmployees[0].users[i].name
                        }</span>
                        <span class="sub-titulo">${
                          listOfEmployees[0].users[i].email
                        }</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-4 ">
            <div class="container-fluid">
                <div class="row ">
                    <div class="col-12 d-flex flex-column">
                        <span class="titulo">${
                          listOfEmployees[0].users[i].occupation
                        }</span>
                        <span class="sub-titulo">${
                          listOfEmployees[0].users[i].department
                        }</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-3">
            <div class="container py-1" >
                <div class="row d-flex align-content-end py-1">
                    <div class="col-4">
                        <span class="status-${checkActiveOrInactive(
                          listOfEmployees[0].users[i].active
                        )} sub-titulo">${checkActiveOrInactive(
      listOfEmployees[0].users[i].active
    )}</span>
                    </div>
                    <div class="col-4">
                        <span class="sub-titulo">${
                          listOfEmployees[0].users[i].role
                        }</span>
                    </div>
                    <div class="col-4">
                        <span class="sub-titulo"> <a href="">Editar</a></span>
                    </div>
                </div>
            </div>

        </div>
    </div>
    `;
    html += line;
  }
  document.getElementById("table-body").innerHTML = html;
}
// CHECA SE O ELEMENTO 'table-body' EXISTE NA PÁGINA
if (document.getElementById("table-body")) {
  drawTableBodyLine(db);
}
// FORMULÁRIO DE CADASTRO ---------------------------------
const cadastroForm = document.getElementById("cadastro-novo-usuario");
if (cadastroForm) {
  cadastroForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nomeCadastro = cadastroForm["inputNome"];
    const emailCadastro = cadastroForm["inputEmail"];
    const setorCadastro = cadastroForm["inputSetor"];
    const cargoCadastro = cadastroForm["inputCargo"];
    const funcaoCadastro = cadastroForm["inputFuncao"];
    const switchCadastro = cadastroForm["switch-checkbox"];

    if (nomeCadastro.value.length < 3) {
      setMsg(
        nomeCadastro,
        "validacao-nome",
        "O campo deve conter 3 caracteres ou mais"
      );
    } else {
      const newObjeto = {
        name: nomeCadastro.value,
        email: emailCadastro.value,
        department: "Sales",
        occupation: "Account executive",
        profile_image:
          "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
        cpf: 12354367890,
        role: "Admin",
        active: 1,
      };
      
      db[0].users.push(newObjeto);
      console.log(db[0].users);
      document.location.href = "index.html";
    }

  });
}

function setMsg(input, elementoMsgErroId, msgErro) {
  input.classList.add("input-invalido");
  document.getElementById(elementoMsgErroId).innerHTML = msgErro;
}
