var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next)
{
    res.write('<h1> Acesse uma pagina </h1>');
    res.write('<a href ="/cv"> Curriculo </a> <br>');
    res.write('<a href ="/disciplinas"> Materias </a> <br>');
    res.write('<a href ="/midia"> Redes Sociais </a>');

});

router.get("/cv", function (req, res){
    res.render('curriculo'); 
})

router.get("/disciplinas", function (req, res){
  res.render('materias'); 
})

router.get("/midia", function (req, res){
  res.render('midia'); 
})


router.post("/disciplinas/nome", function (req, res)
{  
    const botao = req.body.botao;
    let texto;

    if(botao == "botao1"){
      texto = "Matéria de Programação WEB que ensina sobre rotas, node. O back-end da programação web. Também tem o melhor professor."
    }else if(botao == "botao2"){
      texto = "Matéria de Programação Mobile, que ensina a desenvolver aplicações movéis usando react native."
    }else if(botao == "botao3"){
      texto = "Arquitetura de Software. Ensina alguns padrões, como reaproveitamento, método DRY."
    }else if(botao == "botao4"){
      texto = "Manutenção de Software ensina a encontrar, melhorar e corrigir softwares que necessitam de manutenção."
    }else if(botao == "botao5"){
      texto = "Essa é triste. Desenvolve o trabalho de conclusão do curso de Engenharia de Software."
    }

    res.render('espec', {texto});
})

/*router.post("/tarefas", function (req, res){
  const {error, value} = TaskSchema.validate(req.body);
  if (error) {
    res.render('index', { tasks: Task.list(), erro: "Dados incompletos" });
    return;
  }
  
  const {id, nome} = value
  if (id === undefined) {
    //Inserir
    Task.new(nome);
  } else {
    //Alterar
    Task.update(id, nome);
  }
  
  res.redirect("/");
})

router.get("/tarefas/del/:id", function(req, res){
const {id} = req.params;
const {error, value} = Joi.number().integer().greater(0).validate(id)

if (error || !Task.delete(value)) {
  res.send("Falha ao excluir uma tarefa");
  return;
}
res.redirect("/");
})*/

module.exports = router;
