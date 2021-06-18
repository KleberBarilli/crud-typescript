const Relations = (model) => {

	model.Categoria.hasMany(model.Pergunta, {foreignKey:'categoriaFk'});
	model.Pergunta.belongsTo(model.Categoria, {foreignKey:'categoriaFk'});

	model.Pergunta.belongsToMany(model.Opcao, {through:model.PerguntaOpcao});
	model.Opcao.belongsToMany(model.Pergunta, { through: model.PerguntaOpcao });

	model.Questionario.hasMany(model.Pergunta,{foreignKey:'questionarioFk'});
	model.Pergunta.belongsTo(model.Questionario, { foreignKey: 'questionarioFk' });

	model.Questionario.hasMany(model.QuestionarioPergunta,{foreignKey:'perguntaFk'});
	model.QuestionarioPergunta.belongsTo(model.Questionario, { foreignKey: 'perguntaFk' });


	model.Pergunta.hasMany(model.PerguntaOpcao, {foreignKey: 'opcao'});
	model.PerguntaOpcao.belongsTo(model.Pergunta, {foreignKey: 'opcao'});


	model.User.belongsToMany(model.Categoria, { through: model.User_Categoria });
	model.Categoria.belongsToMany(model.User, { through: model.User_Categoria });


	
	
}





module.exports =  Relations;
