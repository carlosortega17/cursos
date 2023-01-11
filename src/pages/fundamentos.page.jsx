import React from 'react';

export default function FundamentosPage() {
  return (
    <div className="container mt-4">
      <h3>Introduccion</h3>
      <p>
        Antes de poder programar necesitamos entender el concepto de programacion.
      </p>
      <p>
        <i>
          &quot;La programacion es el arte del proceso por el cual se limpia, codifica,
          traza y protege el codigo fuente de programas computacionales.&quot; - Netec
        </i>
        <br />
        Para resumir es decirle a la computadora que hacer.
      </p>
      <p>
        Algo que debemos tener en cuenta es que la computadora realmente no entiende nada,
        es una maquina sin capacidades de tomar deciciones por su cuenta asi que nosotros debemos
        comunicarnos con ella para que realize las acciones que necesitamos, por ejemplo.
        <br />
        Al escribir con el teclado la computadora interpreta las pulsaciones del mismo y las muestra
        en algun software (o tambien llamado programa) para que podamos almacenar el texto
        o trabajar con el. Programas como Word, Excel o Powerpoint son ejemplos de software que
        interpreta el texto que ingresamos por teclado.
        <br />
        Tambien tenemos la entrada del raton (o Mouse) el cual muestra el cursor en pantalla y
        nosotros al moverlo con un dispositivo fisico se mueve en la computadora.
      </p>
      <p>
        Pero en estos casos nos preguntamos, ¿como la computadora interpreta realmente estas
        entradas desde el teclado y el raton?
        <br />
        Esto lo hace gracias la programacion ya que tenemos instrucciones a bajo nivel
        que se pueden interpretar como 1 y 0 (codigo binario) para que el procesador de
        nuestra computadora pueda hacer algo al precionar teclas o mover el raton
      </p>
      <h3>Binario, Octal y Hexadecimal</h3>
      <p>
        El sistema numerico que utilizamos dia a dia es el sistema Decimal ya que trabajamos en
        decenas (10 en 10) pero existen otros sistemas numericos, esos sistemas numericos suelen
        trabajar de 2 en 2, de 4 en 4, de 5 en 5, entre otros. Pero el que realmente se utiliza en
        software son el Binario (0, 1), el Octal (0, ..., 7) y el Hexadecimal (0, ..., 15) estos
        sistemas numericos permiten a la computadora interpretar numeros grandes de forma rapida sin
        requerir de mucho tiempo para realizar operaciones matematicas o toma de deciciones.
        <br />
        No aundaremos mucho en el tema pero es importante saber que las computadoras requieren de
        estos sistemas numericos para representar principalmente valores y deciciones.
      </p>
      <h3>Lenguajes de programacion</h3>
      <p>
        Al programar existe la programacion de bajo y alto nivel, pero, ¿que quiere decir cada uno?
      </p>
      <p>
        <b>Bajo nivel.</b>
        {' '}
        Quiere decir que requiere que se comunica de una forma mas directa con la computadora y
        nosotros debemos de utilizar lenguajes de programacion (C, C++, Rust) que permitan la
        comunicacion mas directa con el procesador y el manejo de recursos de la computadora.
        Estos lenguajes suelen tener una curva de aprendizaje mas alta y su area de trabajo
        esta mas enfocada a la creacion de videojuegos, sistemas operativos, controladores
        de video o audio, sistemas de archivos, entre otras.
      </p>
      <p>
        <b>Alto nivel.</b>
        {' '}
        Quiere decir que requiere que se comunica de una menos directa con los recursos del sistema
        dejandole to o la mayor parte de el manejo de recursos y comunicacion con el sistema
        operativo al compilador o interprete del lenguaje. Algunos ejemplos de lenguajes de alto
        nivel serian Python, Java, C#, Golang, Javascript, entre otros.
      </p>
    </div>
  );
}
