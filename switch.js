var nombre;
var estadoCivil;
nombre = prompt("Ingrese el nombre de la persona");
estadoCivil = parseInt(prompt("Ingrese el estado civil: 1.Casado 2.Soltero 3.Separado 4.Viudo 5:Union libre"));

switch (estadoCivil) {
    case 1:
        alert(nombre + " es casad@")
        break;

    case 2:
        alert(nombre + " es solter@")
        break;

    case 3:
        alert(nombre + " es separad@")
        break;

    case 4:
        alert(nombre + " es viud@")
        break;
    
    case 5:
        alert(nombre + " esta en union libre")

    default:
        alert("Estado civil no vlido")
        break;
}
