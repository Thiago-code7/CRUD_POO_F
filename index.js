// index.js
const { AlunoController } = require("./src/controllers/ControllerAluno");
const { Curso } = require("./src/models/Curso");

const alunos = new AlunoController()



//alunos.adicionarAluno('renata','renata@email.com','84988776655','10','Engenharia')

//alunos.editarAluno("a98432", "Editado com coalesce", null, null, null)
alunos.listarAluno();

//alunos.excluirAluno("10")