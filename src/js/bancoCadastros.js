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
                
                window.location.href = "../logged_in/in_Home.html?usuario="+usuario.Email;
                
            } else {
                
                alert("Você deve preencher todos os campos.");
                
            }
            
        } else if ($("#operacao").val() == 'L') {
            
            var emailLogin = $(".emailLogin").val();
            var usuarioLocalL = JSON.parse(localStorage.getItem(emailLogin));
            var senhaLogin = $(".senhaLogin").val();
            
            if (!usuarioLocalL) {
                
                alert('Usuário não existe');
                
            } else {
                
                if (usuarioLocalL.Senha !== senhaLogin) {
                    
                    alert('Senha Incorreta');
                    
                } else {
                    
                    alert('Logado com sucesso!');
                    window.location.href = "../logged_in/in_Home.html?usuario="+usuarioLocalL.Email;
                    
                }
                
            }
            
        }
        
    });

    //Controle Usuario
    $("#atualizacao").on("click",function(e){
        
        var usuario = getUrlParameter('usuario');
        
        if (usuario !== "") {
            
            window.location.href = "../logged_in/in_ControleUsuario.html?usuario="+usuario;
            
        } else {
            
            window.location.href = "../logged_in/in_ControleUsuario.html";
            
        }
        
    });

    if ($("#operacao").val() == 'A') {
        
        var getUsuario = getUrlParameter('usuario');
        
        usuarioLocalA = JSON.parse(localStorage.getItem(getUsuario));
        
        if(usuarioLocalA != ""){
            
            $("#nome_atualizacao").val(usuarioLocalA.Nome);
            $("#email_atualizacao").val(usuarioLocalA.Email);
            $("#senha_atualizacao").val(usuarioLocalA.Senha);

            $("#btn_nome").on("click",function(e){
                
                e.preventDefault();
                
                if ($("#nome_atualizacao").val() !== "" && $("#nome_atualizacao").val() !== usuarioLocalA.Nome) {
                        
                    var usuario = {
                            
                        Nome     : $("#nome_atualizacao").val(),
                        Email    : $("#email_atualizacao").val(),  
                        Senha    : $("#senha_atualizacao").val()
                        
                    };
                        localStorage.setItem(getUsuario, JSON.stringify(usuario));
                   
                        alert("Nome atualizado com sucesso!");
                    
                } else {
                    
                    alert("Você deve alterar o campo nome!");
                
                }
            
            });  
            
            $("#btn_email").on("click",function(e){
                
                e.preventDefault();
                
                if ($("#email_atualizacao").val() !== "" && $("#email_atualizacao").val() !== usuarioLocalA.Email) {
                    
                    var usuario = {
                        
                        Nome     : $("#nome_atualizacao").val(),
                        Email    : $("#email_atualizacao").val(),
                        Senha    : $("#senha_atualizacao").val()
                        
                    };
                    localStorage.setItem(getUsuario, JSON.stringify(usuario));
                    
                    alert("Email atualizado com sucesso!");
                    
                } else {
                    
                    alert("Você deve alterar o campo email!");
                    
                }
            });  
            $("#btn_senha").on("click",function(e){
                
                e.preventDefault();
                
                if ($("#senha_atualizacao").val() !== "" && $("#senha_atualizacao").val() !== usuarioLocalA.Senha) {
                    
                    var usuario = {
                        
                        Nome     : $("#nome_atualizacao").val(),
                        Email    : $("#email_atualizacao").val(),
                        Senha    : $("#senha_atualizacao").val()
                        
                    };
                    
                    localStorage.setItem(getUsuario, JSON.stringify(usuario));
                    
                    alert("Senha atualizado com sucesso!");
                    
                } else {
                    
                    alert("Você deve alterar o campo desejado!");
                    
                }
                
            }); 
            
        }
        
    } 

    function getUrlParameter(sParam) {
        
        var sPageURL = window.location.search.substring(1),
            
            sURLVariables = sPageURL.split('&'),
            
            sParameterName,
            
            i;
        
        for (i = 0; i < sURLVariables.length; i++) {
            
            sParameterName = sURLVariables[i].split('=');
            
            if (sParameterName[0] === sParam) {
                
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
                
            }
            
        }
        
        return false;
    };
    
});
