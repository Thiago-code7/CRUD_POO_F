// index.js
const { AlunoController } = require("./src/controllers/ControllerAluno");
const { Curso } = require("./src/models/Curso");

const alunos = new AlunoController()

alunos.listarAluno();

alunos.adicionarAluno('renata','renata@email.com','84988776655','10','Engenharia')
alunos.listarAluno();