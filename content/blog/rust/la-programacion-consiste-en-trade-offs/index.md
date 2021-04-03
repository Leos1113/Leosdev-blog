---
title: La programación consiste en trade offs
date: "2021-04-03"
description: "Muchas veces nos preguntamos cual es la mejor opción para resolver el problema, la mejor arquitectura, el mejor pattern, pero al final se decide todo en trade offs"
cardImage: './../../../assets/balance.png'
tags: ['programación']
alt: "Una balanza"
---

## ¿Qué es un trade off?

Un trade off significa buscar el equilibrio a la hora de hacer una elección, es decir, si tenemos varias opciones elegir la que más equilibrio nos aporte, la que mejor se adapte a la situación y más convenga en x situación.

## ¿A qué me refiero a que la programación se basa en trade off's?

La programación no es más que una herramienta para alcanzar un objetivo. Al final la programación nos resuelve x problemas para alcanzar y objetivo.

Entonces básicamente la programación se trata de resolver problemas, en la busqueda de la resolución de esos problemas se han creado muchas arquitecturas que resuelven x problemas y también se han creado muchos patrones que resuelven muchos otros problemas que suelen ser común en la programación.

Muchas veces tendemos a buscar la arquitectura perfecta, el patron perfecto o el código perfecto para resolver un problema, queremos que sea el más eficiente, el más rápido, el más entendible, etc...

Pero esto en la vida real de un programador no existe, programamos para un objetivo, no para hacer código perfecto.

También podemos tener esta situación a la hora de escoger la tecnologia, es decir, elegir frameworks, base de datos, sistema de colas, etc.

No hay ninguno perfecto, simplemente habrá uno que se adecue más a nuestro problema a resolver.

Ahí es donde estan los trade off, por ejemplo a la hora de elegir una arquitectura para el proyecto, no hay ninguna que sea la perfecta, habrá que evaluar al equipo, al objetivo que querrámos conseguir, los tiempos que tenemos para conseguirlo, etc...

El conjunto de analizar todo eso y elegir la opción que más se adecue a todas las variables que hayamos tenido que tener en cuenta, eso es un trade off.

Podemos ser unos talibanes de cualquier cosa, por ejemplo, puede que nos encanten los microservicios que tan de moda estan últimamente, pero si tenemos un equipo pequeño por ejemplo considero que por mucho que te gusten los microservicios deberías mirar otra opción ya que para equipos pequeños es difícil mantener un sistema de muchos microservicios.

Más ejemplos, si estas creando un MVP y necesitas validarlo rápidamente, no vas a ponerte a hacer Tdd con arquitectura hexagonal, etc... Porqué estarías dejando un código testeado y desacoplado, a la larga sería mejor pero tu objetivo es válidar el MVP, no puedes tirarte meses de más para dejar todo perfecto sí después el MPV no se válida por lo que sea, hubieras perdido mucho tiempo, eso es otro trade off.

Y así podemos verlo en el código también, quizás tienes un problemas y sabes que x algoritmo o patrón lo podrían resolver perfectamente, pero implica hacer muchos cambios, alargar mucho el desarrollo, cambiar más cosas que la que había que cambiar inicialmente, analizar eso y saber que quizás hay una opción perfecta pero no se adecua a este momento por falta de tiempo, por no querer cambiar más cosas, por x cosa, y  pasar a buscar una solución balanceada que se adapte a los tiempos, no te haga cambiar mil cosas más, eso es un trade off.

## Conclusión

Creo que ha quedado bastante claro con los ejemplos, pero tengo la impresión de que como programadores muchas veces olvidamos por que programamos. Siempre es para conseguir un objetivo.

Al final las empresas tienen que ganar dinero, no les va a importar que sea el código más perfecto de la historia, más resiliente o con menos bugs, si les va a costar tiempo y dinero.

Pero quiero dejar claro, que no quiero decir que hagas la primera chapuza rápida y arreando, no es esa mi intención para nada, pero si que hay que buscar el equilibrio entre las opciones que tengamos que se ajusten al momento.