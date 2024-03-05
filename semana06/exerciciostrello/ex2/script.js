
async function getUserInfo(userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        
        const user = {
          nome: "João Silva",
          idade: 25,
          email: "joaosilva@email.com",
        };
  
        resolve(user);
      }, 2000); 
    });
  }
  
  
  async function exibirUserInfo(userId) {
    const usuario = await getUserInfo(userId);
    console.log(`Nome: ${usuario.nome}`);
    console.log(`Idade: ${usuario.idade}`);
    console.log(`Email: ${usuario.email}`);
  }
  
  
  exibirUserInfo(123);
  