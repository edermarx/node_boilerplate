module.exports = (res, err, type) => {
  const errorCodes = {
    'Acesso negado': {
      status: 403,
      code: 1000,
    },
    'Não autenticado': {
      status: 401,
      code: 1001,
    },
    'Dados faltando ou vazios': {
      status: 400,
      code: 1002,
    },
    'Usuário já existe': {
      status: 400,
      code: 1003,
    },
    'Usuário não existe': {
      status: 404,
      code: 1004,
    },
    'Senha incorreta': {
      status: 400,
      code: 1005,
    },
    'Erro no banco de dados': {
      status: 500,
      code: 1006,
    },
  };

  const errorObj = {
    erro: err,
    msg: type,
    info: errorCodes[type],
  };

  console.log(errorObj);
  res.status(errorCodes[type].status || 500).json(errorObj);
};
