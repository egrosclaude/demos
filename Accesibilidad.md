




##Representación sin signo SS(k)

Consideremos primero qué ocurre cuando queremos representar números enteros **no negativos** (es decir, **positivos o cero**) sobre una cantidad fija de bits. 

En el sistema **sin signo**, simplemente usamos el sistema binario de numeración, tal como lo conocemos, **pero limitándonos a una cantidad fija** de dígitos binarios o bits. Podemos entonces abreviar el nombre de este sistema como **SS(k)**, donde $k$ es la cantidad fija de bits, o ancho, de cada número representado.

###Rango de representación de SS(k)

¿Cuál será el rango de representación? El **cero** puede representarse, así que el límite inferior del rango de representación será 0. Pero ¿cuál será el límite superior? Es decir, si la cantidad de dígitos binarios en este sistema es $k$, ¿cuál es el número más grande que podremos representar? 

Podemos estudiarlo de dos maneras.

**1. Usando combinatoria**

Contemos cuántos números diferentes podemos escribir con $k$ dígitos binarios. Imaginemos un número binario cualquiera con $k$ dígitos. El dígito de más a la derecha tiene únicamente dos posibilidades (0 o 1). Por cada una de éstas hay nuevamente dos posibilidades para el siguiente hacia la izquierda (lo que da las cuatro posibilidades 00, 01, 10, 11). Por cada una de éstas, hay dos posibilidades para el siguiente (dando las ocho posibilidades 000, 001, 010, 011, 100, 101, 110, 111), etc., y así hasta la posición $k$. No hay más posibilidades. Como hemos multiplicado 2 por sí mismo $k$ veces, la cantidad de números que se pueden escribir es $2^k$. Luego, el número más grande posible es $2^k - 1$. (**Pregunta**: ¿Por qué $2^k - 1$ y no $2^k$?).

**2. Usando álgebra**

El número más grande que podemos representar en un sistema sin signo a $k$ dígitos es, seguramente, aquel donde todos los $k$ dígitos valen **1**. La Expresión General que hemos visto nos dice que si un número $n$ está escrito en base 2, **con $k$ dígitos**, entonces 
$$n = x_{k-1}\times 2^{k-1} + ... + x_1\times2^1+x_0\times2^0$$ 
y, si queremos escribir el más grande de todos, deberán ser todos los $x_i$ iguales a 1. (**Pregunta**: ¿Por qué si el número $n$ tiene $k$ dígitos binarios, el índice del más significativo es $k-1$ y no $k$?)

Esta suma vale entonces 

$$ x_{k-1}\times 2^{k-1} + ... + x_1\times2^1+x_0\times2^0 = $$ 
$$  = 1\times 2^{k-1} + ... + 1\times2^1+1\times2^0 = $$ 
$$  = 2^{k-1} + ... + 2^1+2^0 = $$ 
$$  = 2^{k}-1 $$ 

Usando ambos argumentos hemos llegado a que el número más grande que podemos representar con $k$ dígitos binarios es $2^k-1$. Por lo tanto, **el rango de representación de un sistema sin signo a $k$ dígitos, o SS(k), es $[0, 2^k - 1]$**. Todos los números representables en esta clase de sistemas son **positivos o cero**.

**Ejemplos**

- Para un sistema de representación sin signo a 8 bits: $[0, 2^8-1] = [0, 255]$
- Con 16 bits: $[0, 2^{16}-1] = [0, 65.535]$
- Con 32 bits: $[0, 2^{32}-1] = [0, 4.294.967.295]$


##Ancho de banda digital
La velocidad de transmisión de una interfaz a veces es llamada ancho de banda digital.

El **retardo de transmisión** depende de la velocidad de transmisión de la interfaz, mientras que el **retardo de propagación** es una función de la distancia que tiene que recorrer la señal por el medio.

Dos enlaces de la misma longitud tendrán aproximadamente el mismo retardo de propagación, sin importar el ancho de banda digital de las interfaces. 

* Cuando ambos enlaces transmitan a la vez, los bits emitidos al mismo tiempo llegarán al otro extremo del enlace en el mismo tiempo. 
* Sin embargo, cuando una de las interfaces tenga una velocidad de transmisión **mayor** que la otra, el **espacio** ocupado en el enlace por la señal que codifica cada bit será **menor** que la del otro enlace.


##Un sistema diferente
Todos conocemos el método tradicional de contar con los dedos. Como tenemos cinco dedos
en cada mano, podemos contar hasta diez. Pero también podemos utilizar un método diferente 
del tradicional, que resulta ser muy interesante. 

- Con este método, al llegar a 5 con la mano derecha, representamos el 6 **sólo con un dedo 
de la izquierda**. Los dedos de la mano derecha **vuelven a 0**, y seguimos contando
con la derecha. 
- Cada vez que se agotan los dedos de la mano derecha levantamos un nuevo dedo de la izquierda, y la derecha vuelve a 0.
- Cada dedo en alto de la mano izquierda significa que **se agotó la secuencia de la mano derecha una vez**.

###Preguntas
- ¿Hasta qué número se puede representar en este sistema, sólo con dos manos? 
- Si agregamos una tercera mano, de un amigo, ¿hasta qué número llegamos? 
- ¿Y cómo se representa el 36? ¿Y el 37?
- Y con cuatro manos, ¿hasta qué número llegamos? 
- Y, si el número no se puede representar con dos manos, ¿cómo es el procedimiento para saber qué dedos levantar?


#Conclusiones

#¡Muchas gracias!


