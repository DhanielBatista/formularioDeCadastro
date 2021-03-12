function ConfirmarCadastro(){
    let NomeCompleto = document.getElementById('NomeCompleto')
    let Endereco = document.getElementById('Endereco')
    let Email = document.getElementById('Email')
    let Usuario = document.getElementById('NomeUsuario')
    let Senha = document.getElementById('Senha')
    let formularioCadastrado = document.querySelector('div#FormularioCadastrado')
    let Questionario = document.querySelector('div#Questionario')
    
    if( NomeCompleto.value.length == 0 || Endereco.value.length == 0 || Email.value.length == 0|| Usuario.value.length == 0|| Senha.value.length == 0 ){
        window.alert('Preencha todos os dados')
    }else{
        Questionario.style.display = 'none'
        formularioCadastrado.innerHTML = `Formulario Cadastrado com Sucesso`
        
    }
}
