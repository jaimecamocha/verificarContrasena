// https://github.com/jaimecamocha/verificarContrasena.git

function verificarContraseña() {
    var contra = document.getElementById("password").value;

    var sinEspacios = /^\S*$/;
    var longMin = /(?=.{8,})/;
    var caractEspec = /[!@#~]/;
    var mayus = /[A-Z]/;

    if (sinEspacios.test(contra) && longMin.test(contra) && caractEspec.test(contra) && mayus.test(contra)) {
        document.getElementById("mensaje").innerHTML = "Contraseña aceptada";
    } else {
        document.getElementById("mensaje").innerHTML = "Contraseña denegada. La contraseña debe tener al menos 8 caracteres, no contener espacios en blanco, contener '@', '#' o '~', y al menos una letra mayúscula.";
    }
}