do {
  const nota = parseInt(prompt(`Ingrese un número del 0 al 10`));

  switch (true) {
    case nota >= 0 && nota <= 2:
      console.log(`Selecciono la nota entre 0 y 2`);
      console.log(`Su nota es: Muy deficiente`);
      alert(`Su nota es: Muy deficiente`);
      break;
    case nota >= 3 && nota <= 4:
      console.log(`Selecciono la nota entre 3 y 4`);
      console.log(`Su nota es: Insuficiente`);
      alert(`Su nota es: Insuficiente`);
      break;
    case nota === 7:
      console.log(`Selecciono la nota 7`);
      console.log(`Su nota es: Bien`);
      alert(`Su nota es: Bien`);
      break;
    case nota >= 8 && nota <= 9:
      console.log(`Selecciono la nota entre 8 y 9`);
      console.log(`Su nota es: Notable`);
      alert(`Su nota es: Notable`);
      break;
    case nota === 10:
      console.log(`Selecciono la nota 10`);
      console.log(`Su nota es: Sobresaliente`);
      alert(`Su nota es: Sobresaliente`);
      break;

    default:
      alert(`Opcion no valida, ingrese un numero del 0 al 10`);
      console.log(`Opcion no valida`);
      console.log(`Opcion no valida`);
      break;
  }
} while (confirm(`Desea realizar otra consulta?`));
{
}
