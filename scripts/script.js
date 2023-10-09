function verificarContraseña() {
    var contra = document.getElementById("password").value;
    
    var longMin = /(?=.{8,})/;
    var caractEspec = /[!@#~]/;
    var mayus = /[A-Z]/;

    if (longMin.test(contra) &&
        caractEspec.test(contra) &&
        mayus.test(contra)) {
        document.getElementById("mensaje").innerHTML = "Contraseña aceptada";
    } else {
        document.getElementById("mensaje").innerHTML = "Contraseña denegada. La contraseña debe tener al menos 8 caracteres, contener '@', '#' o '~', y al menos una letra mayúscula.";
    }
}