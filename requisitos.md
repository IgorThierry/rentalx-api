# Cadastro de carro

**RF**

- Deve ser possível cadastrar um novo carro.

**RN**

- Não deve ser possível cadastrar um carro com uma placa já existente.
- Não deve ser possível alterar a placa de um carro já cadastrado.
- O carra deve ser cadastrado por padrão com disponibilidade.
- O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de carros

**RF**

- Deve ser possível listar todos os carros disponíveis
- Deve ser possível listar todos os carros disponíveis pelo nome da categoria
- Deve ser possível listar todos os carros disponíveis pelo nome da marca
- Deve ser possível listar todos os carros disponíveis pelo nome do carro

**RN**

- O usuário não precisa estar logado no sistema para realizar listagem

# Cadastro de Especificação no Carro

**RF**

- Deve ser possível cadastrar uma nova especificação para um carro

**RN**

- Não deve ser possível cadastrar uma especificação para um carro inexistente
- Não deve ser possível cadastrar uma mesma especificação 2x para um carro
- O usuário responsável pelo cadastro de um carro deve ser um administrador.

# Cadastro de Imagens do Carro

**RF**

- Deve ser possível cadastrar a imagem do carro

**RNF**

- Utilizar o multer para upload dos arquivos

**RN**

- O usuário deve poder cadastrar mais de uma imagem para o mesmo carro
- O usuário responsável pelo cadastro de um carro deve ser um administrador.

# Aluguel do Carro

**RF**

- Deve ser possível cadastrar um novo aluguel

**RN**

- O aluguel deve ter duração mínima de 24 horas
- Não deve ser possível cadastrar um novo aluguel caso já exista um aluguel vigente
  para o usuário
- Não deve ser possível cadastrar um novo aluguel caso já exista um aluguel vigente
  para o carro
- O usuário deve estar autenticado na aplicação
- Ao realizar um aluguel, o status do carro deverá ser alterado para indisponível

# Devolução do Carro (Aluguel)

**RF**

- Deve ser possível realizar a devolução de um carro

**RN**

- Se o carro for devolvido com menos de 24h, deverá ser cobrado diária completa
- Ao realizar a devolução, o carro deverá ser liberado para outro aluguel
- Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel
- Ao realizar a devolução, deverá ser calculado o total do aluguel
- Caso o horário de devolução seja superior ao horário previsto de entrega,
  deverá ser cobrado multa proporcional aos dias de atraso
- Caso haja multa, deverá ser somado ao total do aluguel
- O usuário deve estar autenticado na aplicação

# Listagem de Aluguéis do Usuário

**RF**

- Deve ser possível realizar a busca de todos os aluguéis para o usuário

**RN**

- O usuário deve estar autenticado na aplicação

# Recuperação de Senha

**RF**

- Deve ser possível o usuário recuperar a senha informando o e-mail
- O usuário deve receber um e-mail com o passo a passo para recuperação da senha
- O usuário deve conseguir inserir uma nova senha

**RNF**

- O usuário precisa informar uma nova senha
- O link enviado para a recuperação deve expirar em 3 horas

---

**RF** => Requisitos funcionais

**RNF** => Requisitos não funcionais

**RN** => Regra de negócio
