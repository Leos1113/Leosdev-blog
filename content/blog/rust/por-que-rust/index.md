---
title: ¿Por qué Rust?
date: "2020-03-12T19:00:00.284Z"
description: "Rust es un lenguaje de programación desarrollado por Mozilla.
              Es un lenguaje bastante joven."
cardImage: './../../../assets/rust-lenguaje-programacion-logo.png'
tags: ['rust']
alt: "Logo del lenguaje de programación Rust"
---

          
En este post analizaremos por qué aprender rust, a continuación vemos los puntos fuertes de este lenguaje:

## ¿Qué es Rust?

Rust es un lenguaje de programación desarrollado por Mozilla. Es un lenguaje bastante joven.

Puede instalarse en la mayoría de sistemas operativos y también en hardware embebido.

Una de las cosas interesantes de rust, es que combina la velocidad de los lenguajes de bajo nivel con las herramientas, seguridad y debugging de los lenguajes de alto nivel.

## ¿Qué es Cargo?

Cargo es el gestor de paquetes de Rust. Como NPM para javascript, Cargo recoge y compila todo lo que necesites para tu proyecto.

Para crear un nuevo proyecto en Rust usa Cargo, también se usa para verificar tu código, compilar y gestionar tus dependencias.

Todos los proyectos nuevos de Rust tienen un fichero Cargo.toml, el cual contiene los detalles del proyecto y las dependencias, parecido a package.json de node o composer.json de composer para php.

Cada vez que verificas o haces una build del proyecto, Cargo usa el fichero Cargo.toml para empaquetar todo lo que el proyecto necesita.

Si nunca has usado un gestor de paquetes, no te preocupes, Cargo es bastante simple para los primerizos!

## Rust es rápido

Rust es rápido, la manera en la que administra la memoria hace que no requiera un garbage collector (colector de basura), lo que suele dar problemas. Otros lenguajes, en cambio, tienen que estar continuamente verificando que está siendo ejecutado en tiempo real para prevenir problemas.

Rust no verifica en tiempo de ejecución, ya que el propio compilador evita que se genere código incorrecto. Esto puede hacer que tarde más en compilarse pero se ejecutará más rápidamente.

Lo dicho anteriormente, significa que gracias a su manejo inteligente de memoria no sobrecarga,por lo tanto, Rust es perfecto para hardware integrado, como por ejemplo la raspberry pi.

## Rust para web

Rust puede almacenar los datos directamente en un stack en memoria o en un puntero. Los datos guardados directamente en caché pueden tener una latencia hasta 30 veces menor que los datos guardados en punteros.

Por eso cachear y las estructuras de datos eficientes son importantes. Y por ello Rust hace un gran trabajo!

Por ejemplo, cuando creamos un vector dinámico en Rust, no solo se guarda el puntero al primer elemento en la pila si no que también guarda el tamaño y la capacidad del vector. Esto hace que saber la longitud del vector sea más rápido. Indirectamente también hace que otras operaciones también sean más rápidas.

## Rust es memory safety

¿Qué quiere decir que Rust sea memory safety?

Pues implica que garantiza la protección contra toda una clase de bugs que son causados por acceso no seguro a la memoria, el uso después de liberar, punteros colgantes, etc…

Errores que en otros lenguajes como C/C++ nos dan bastantes dolores de cabeza.

El compilador de Rust, vigila las localizaciones de memoria que usamos o la referencia y detecta los bugs en tiempo de compilación.

También ofrece la posibilidad de marcar nuestro código como *“unsafe”* para manejar directamente la memoria.

## Librerias y frameworks para Rust

Gracias a Cargo y <a href="https://crates.io/" target="_blank">crates.io</a>, Rust cuenta con abundancia de librerías de calidad que podemos usar para nuestros proyectos.

Hay alrededor de 33.000 librerias en <a href="https://crates.io/" target="_blank">crates.io</a> que podemos añadir a nuestro proyecto de Rust con un simple comando de Cargo.

Frameworks para web tenemos a <a href="https://rocket.rs/" target="_blank">Rocket</a> y para blockchain encontramos <a href="https://www.parity.io/substrate" target="_blank">Substrate</a>.

## Conclusiones

A partir de aquí ya es decisión propia aprender Rust o no, por mi parte me adentro a aprender Rust por todo lo que he comentado anteriormente y porque desde que escuche de él me llamó mucho la atención.

En este blog iré publicando posts sobre Rust entre otras temas, sobre lo que vaya aprendiendo y espero aprender con vosotros!