<?php
if(isset($_POST['submit'])){
    $destino = "juanrubenalexisrobles@gmail.com";
    $name = $_POST["name"];
    $email = $_POST["email"];
    $comment = $_POST["comment"];
    $messege = "Nombre: " . $name ."\Correo: " . $email . "\Comentario: " . $comment;
    @mail($destino,"contenido",$messege);
    header("Location:gracias.html");
}
?>
