const cpfTest = value => {
  let cpf = value;
  if (typeof cpf !== 'string') {
    cpf = String(cpf);

    if (cpf.length == 10) cpf = `0${cpf}`;
  }

  if (!cpf || cpf.length != 11 || !cpf.match('[0-9]') || cpf == '00000000000')
    return false;

  let sum = 0;
  let rest;

  for (let i = 1; i <= 9; i += 1) sum += cpf[i - 1] * (11 - i);

  rest = (sum * 10) % 11;
  if (rest == 10 || rest == 11) rest = 0;
  if (rest != cpf[9]) return false;

  sum = 0;
  for (let i = 1; i <= 10; i += 1) sum += cpf[i - 1] * (12 - i);

  rest = (sum * 10) % 11;
  if (rest == 10 || rest == 11) rest = 0;
  if (rest != cpf[10]) return false;

  return true;
};
