function AgregarMiembro() {
    $("#ModalAg").modal("show");
}
var boton = document.getElementById('adicionar');
var lista = document.getElementById('mytable');
var data = [];
var ingresos = 0;
boton.addEventListener('click', adicionar);

function adicionar() {
    var nombres = document.getElementById('nombres').value;
    var correo = document.getElementById('correo').value;
    var fechaI = document.getElementById('fechaI').value;
    var fechaA = document.getElementById('fechaA').value;


    data.push({
        "id": ingresos,
        "nombres": nombres,
        "correo": correo,
        "fechaI": fechaI,
        "fechaA": fechaA
    });

    $('#mytable tr:first').after(fila);
    $("#adicionados").text("");
    var id_row = 'row' + ingresos;
    var fila = '<tr id=' + id_row + '><td><input type="checkbox" aria-label="Checkbox"></td><td><img class="Img-Circular2" src="../Imagenes/avatarPrin.png" />' + nombres + ' <br>' + correo + '</td><td>' + fechaI + '</td><td>' + fechaA + '</td><td><a href="#" class="fas fa-trash" onclick="eliminar(' + ingresos + ')";</a></td><td><a href="#" class="fas fa-pencil-alt" onclick="editar(' + ingresos + ')";></a></td></tr>';
    $("#mytable").append(fila);
    $("#adicionados").append(fila - 1);
    document.getElementById("fechaA").value = "";
    document.getElementById("fechaI").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("nombres").value = "";
    document.getElementById("nombres").focus();

    ingresos++;
    $("#adicionados").text("");
    var nFilas = $("#mytable tr").length;
    $("#adicionados").append(nFilas - 1);
}

function eliminar(row) {
    $("#row" + row).remove();
}

function editar(row) {
    var nom = prompt("Nuevo nombre");
    var cor = prompt("Nuevo correo");
    data[row].nombres = nom;
    data[row].correo = cor;
    var filaid = document.getElementById("row" + row);
    celda = filaid.getElementsByTagName('td');
    celda[1].innerHTML = '<img class="Img-Circular2" src="../Imagenes/avatarPrin.png"/>' + nom + '<br>' + cor;

}