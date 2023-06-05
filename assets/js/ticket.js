const eventoResumen = document.getElementById("resumen").addEventListener("click", resumen);

function resumen() {
  const cantidad = document.getElementById("cantidad").value;
  const cateValor = document.getElementById("categoria").value;

  // valores para validacion:
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const email = document.getElementById("email").value;

  let valorTotal;
  let seleccionada;
  let descuento;

  valorTotal = parseInt(cantidad * 200);
  seleccionada = cateValor;

  if (valorTotal > 0 && nombre !== "" && apellido !== "" && email !== "") {
    //automatizacion?
    const cambiarValorDescuento = document
      .getElementById("categoria")
      .addEventListener("change", resumen);
    const cambiarValorTotal = document
      .getElementById("cantidad")
      .addEventListener("change", resumen);
    //
    switch (seleccionada) {
      case "Estudiante":
        descuento = Math.floor((valorTotal * 20) / 100);
        break;
      case "Trainee":
        descuento = Math.floor((valorTotal * 50) / 100);
        break;
      case "Junior":
        descuento = Math.floor((valorTotal * 85) / 100);
    }
    let mostrarResumen = document.getElementById("resultado");
    mostrarResumen.value = `Total a Pagar: $ ${descuento}`;
  }
}

(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
        event.preventDefault();
      },
      false
    );
  });
})();

const cantidadInput = document.getElementById("cantidad");
const cantidadError = document.getElementById("cantidad-error");

cantidadInput.addEventListener("input", function () {
  if (cantidadInput.validity.valid) {
    cantidadError.textContent = "";
  } else {
    cantidadError.textContent = "Por favor, ingrese un número del 1 al 10.-";
  }
});