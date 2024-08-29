<?php

    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $telefone = addslashes($_POST['atelefone']);
    $mensagem = addslashes($_POST['mensagem']);
    
    $para = "gian.costaferro@gmail.com";
    $assunto = "Coleta de dados - iron back.DEV";

    $corpo = "Nome: ".$nome."\n"."E-mail: ".$email."\n"."Telefone: ".$telefone."\n"."Mensagem: ".$mensagem;

    $cabeca = "From: gian.costaferro@gmail.com"."\n"."Reply-To: ".$email."\n"."X=Mailer: PHP/".phpversion();

    if(mail($para, $assunto, $corpo, $cabeca)){
        echo("E-mail enviado com sucesso!");
    }

    else{
        echo("Erro ao enviar o e-mail!");
    }

?>