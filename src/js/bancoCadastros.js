jQuery(function($) {
    $("#signup-form").on("submit",function(e){
        e.preventDefault();
        if ($("#operacao").val() == 'C') {
            if ($(".senhaR").val() !== "" && $(".nome").val() !== "" && $(".email").val() !== "" && $(".senha").val() !== "") {

            var usuario = {
                Nome     : $(".nome").val(),
                Email    : $(".email").val(),
                Senha    : $(".senha").val()
            };
            localStorage.setItem($(".email").val(), JSON.stringify(usuario));
            alert("Cadastrado com sucesso!");
            window.location.href = "../logged_in/in_Home.html";
            } else {
                alert("Você deve preencher todos os campos.");
            }
        } else {
            var emailLogin = $(".emailLogin").val(); 
            var usuarioLocal = JSON.parse(localStorage.getItem(emailLogin));
            var senhaLogin = $(".senhaLogin").val();
            if (!usuarioLocal) {
                alert('Usuário não existe');
                
            } else {
                if (usuarioLocal.Senha !== senhaLogin) {
                    alert('Senha Incorreta');
                } else {
                    alert('Logado com sucesso!');
                    window.location.href = "../logged_in/in_Home.html";
                }
            }
        }
    });
});

