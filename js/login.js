function login(){

    let email = $('#email_login').val()
    let senha = $('#senha_login').val()

    $.ajax({
        url: 'rotinas/login.php',
        method: 'POST',
        dataType:"json",
        data: {
            email: email,
            senha: senha,
            acao : btoa('login')
        },
        success: function(data){
            if(data.status == true){
                window.location.href = 'http://iisoul-formulario.local/index.php'
                alert_page('Ok!', data.msg, 'sucsess');
            }else{
                alert_page('Erro!', data.msg, 'warning');
            }
        }
    })        
}
