
#Herramientas Didácticas Accesibles
En este trabajo presentamos una herramienta didáctica basada en tecnologías digitales. Con ella pueden crearse presentaciones, con ciertas características especiales, para apoyar las clases expositivas tradicionales. 

Nos referiremos especialmente a los aspectos de accesibilidad de los materiales didácticos creados con esta herramienta.


## Motivación

Las nuevas generaciones de estudiantes presentan sus propias características cognitivas, comunicacionales y actitudinales. Resulta siempre interesante aproximarse al desafío de ensayar, para estas nuevas audiencias, nuevas formas de comunicar el material de aula; formas que entiendan, e incorporen, estos rasgos identitarios de los estudiantes. Aun manteniendo el formato de clase expositiva tradicional, contar con herramientas didácticas diferentes, adaptadas a las audiencias, puede generar nuevas formas de aprendizaje. 

La creación de esta metodología está motivada principalmente por la percepción de que los medios digitales tradicionales (como los documentos de texto, las presentaciones, y aun los videos instruccionales) ofrecen un poder expresivo insuficiente, por sus contenidos estáticos, y tienden a promover el rol de *espectador* en los estudiantes. Dado el gran alcance, amplitud, versatilidad y potencia de las tecnologías de comunicación digital actuales, ésta parece una limitación artificial. Los materiales didácticos que vemos habitualmente en las aulas son sin duda los más sencillos, pero no siempre los más poderosos.



## Objetivos
La metodología propuesta intenta ofrecer una forma de preparar material didáctico con varias características especiales:

- Que sirva a la vez como apoyo de la actividad en el aula y para que el estudiante la reconstruya en un momento posterior.
- Que no requiera componentes o tecnologías propietarias.
- En especial, que no necesite editores o visualizadores especiales.
- Que pueda ser reproducido en cualquier plataforma informática, incluyendo móviles.
- Que pueda contener medios diversos como material extraído de la Web, videos, audio, animaciones, modelos o piezas interactivas.
- Que se adapte a los contextos de Educación a Distancia.
- Que resulte inclusivo para las audiencias con discapacidades visuales o auditivas.


## Material de base
Los objetivos enunciados pueden alcanzarse mediante el uso del arco de tecnologías actuales más comunes de la Web, a saber, **HTML, CSS, Javascript**. Con estas tecnologías ubicuas pueden crearse *frameworks*, o bastidores, que permitan organizar y presentar contenidos de forma funcional y estéticamente consistente.

Como base para este trabajo se ha tomado un popular framework para la preparación de presentaciones, llamado **Reveal.js**. Este framework es un proyecto de Software Libre que cuenta con una comunidad sumamente activa. Esto anticipa que se trata de una herramienta plástica, a la cual puede darse la forma que se necesite, y que las piezas o aspectos deficitarios en ella pueden ser abordados, en conjunto con la comunidad, para ser desarrollados o mejorados.

Las presentaciones creadas con el framework Reveal.js (tal como esta misma presentación) requieren del usuario únicamente un navegador o browser de Internet, que es un componente infaltable en cualquier ambiente de computación actual. Para utilizar Reveal.js, el autor de la presentación escribe un documento HTML (opcionalmente en un sencillo lenguaje de demarcado o **markup**) con un cierto formato, y define algunos aspectos de comportamiento y visualización.

La comunidad ha creado una gran cantidad de *plugins* o piezas opcionales de software que agregan o modifican la funcionalidad del material creado. Por ejemplo, se puede trabajar como en una pizarra virtual; la interfaz de usuario puede incluir menús a medida, con muchas funcionalidades; es posible grabar e insertar audio pregrabado, utilizar notación matemática con calidad de publicación, y en realidad, incluir prácticamente cualquier contenido digital estático o interactivo.


## Plugin coursemod
Para satisfacer el objetivo de contar con material que permitiera reproducir la clase en casa, se planteó a la comunidad de desarrolladores la idea de modificar las presentaciones dividiendo la pantalla en dos, acompañando la presentación oral con texto. La comunidad respondió elaborando un *plugin* exactamente para este fin. 

Así, las presentaciones pueden ser utilizadas en dos modos: como conjunto de *slides* o "diapositivas", cuando el docente expone su clase, y como libro de texto en un momento posterior, de estudio y repaso. 

El proceso colaborativo de diseño e implementación de este plugin, orientado por la simple manifestación de una necesidad de usuario, subraya la dinámica de los proyectos de Software Libre, en perpetuo estado de creación.



## Microescenarios de aprendizaje

Más allá de la comunicación de contenidos estáticos, las tecnologías elegidas ofrecen la posibilidad de involucrar a los estudiantes en tareas donde interactúen con el material didáctico. Nos referimos a la posibilidad de presentar un modelo de cualquier sistema bajo estudio, donde el estudiante usuario pueda realizar una experiencia virtual interactiva. 

Esta experiencia puede configurarse en forma completamente general como **observar la conducta del sistema, modificar parámetros y repetir**. 

Este sencillo ciclo, lejos de ser mecánico o repetitivo, pone al estudiante en control del material. Puede disparar preguntas ("qué pasaría si las condiciones fueran..."), estimular la motivación, permitir explorar casos límite, facilitar la comprensión por inducción. 

En una palabra, un microescenario de aprendizaje ofrece una oportunidad más para "la experiencia del Ajá" y puede así contribuir a modificar positivamente la relación afectiva del estudiante con el material.


## Una experiencia
Dos estudiantes de la materia de Redes de Computadoras crearon un microescenario de aprendizaje con una animación controlada. En esta animación, el usuario controla la **velocidad de transmisión** a través de un enlace simulado entre dos computadoras y puede estudiar los efectos de modificar esta velocidad. 

Variando la cantidad de **paquetes de información** que transmiten las computadoras a través del enlace en diferentes condiciones de velocidad de transmisión, los estudiantes:

+ Pudieron comprender la diferencia entre la velocidad de transmisión y la velocidad de propagación de las señales.
+ Pudieron comprender la relación entre los retardos debidos a transmisión y a propagación de los paquetes.
+ Elaboraron en forma autónoma la idea de que la emisión de un paquete de información atraviesa el medio ocupando una cierta cantidad de **espacio** durante una cantidad de tiempo.
+ Esta noción no se explicitaba en los contenidos de la materia, sino que fue inferida correctamente por los estudiantes.
+ Esta noción facilitó la comprensión de temas de unidades posteriores como Control de Congestión en Transporte.



##Accesibilidad en la Web

El principal organismo técnico relacionado con la Web es el W3C o WWW Consortium, un conglomerado internacional de empresas y entidades públicas que observa las tendencias en los contenidos y plataformas Web y proporciona recomendaciones para su avance. En particular, su capítulo WAI o Iniciativa de Accesibilidad Web publica las WCAG o Pautas para la Accesibilidad de Contenidos Web.

Estas Pautas se organizan en torno a cuatro principios considerados indiscutibles:

- Las páginas Web deben contener elementos que sean perceptibles para los usuarios en situación de discapacidad.
- Los mecanismos de las interfaces de usuario deben ser físicamente operables para dichas personas.
- Los contenidos y forma de operación deben ser comprensibles.
- Los contenidos deben ser robustos en el sentido de ser universalmente **interpretables por tecnologías asistivas** (como lectores de pantalla).

El cuarto principio enunciado resume una parte importante del concepto de accesibilidad según W3C:

- El material accesible debe ofrecer semántica. Es decir, debe hacer evidente el significado de los elementos que constituyen la página de modo que las tecnologías asistivas puedan elaborar una presentación adecuada al usuario.
- La presentación en forma accesible a partir de dicha semántica queda delegada a las herramientas que el usuario prefiera, de la forma en que éste las haya configurado.



##Accesibilidad en la metodología
Los objetivos de accesibilidad de la herramienta se abordan de varias maneras. 

1. En primer lugar, los destinatarios con problemas de percepción acústica, alfabetizados, utilizan el texto que su autor adjunta como apunte a la presentación. Este texto queda disponible en la segunda etapa de uso del material, en el espacio de estudio fuera del aula, gracias al plugin **Coursemod** desarrollado a pedido nuestro por la comunidad del proyecto Reveal.js.

2. En segundo lugar, para las audiencias con problemas de percepción visual se consideran tres alternativas no excluyentes:

    - Las presentaciones pueden incluir material de audio grabado. Este mecanismo ya existe tal cual se publica Reveal.js, con el nombre de **Audioslideshow Plugin**.
    - Las presentaciones pueden incluir habla sintetizada al tiempo de reproducción, a partir del texto apunte. Este mecanismo de **Text to Speech** utiliza la API de audio nativa de HTML5 y ha sido incorporado por nosotros. 
    - El texto apunte puede obtenerse en formatos de texto plano, PDF y RTF (consumible por Microsoft Word). Este texto apunte se postprocesa automáticamente para mejorar las características de accesibilidad frente a las tecnologías asistivas. Por ejemplo, la notación matemática se descomprime para hacerla directamente pronunciable por los lectores de texto, que suelen tener dificultades con ella. 


###Audioslideshow
- La interfaz de usuario de Reveal.js no está completamente accesibilizada. Algunas funciones dependen del uso del mouse, y no tienen respuesta audible como recomienda W3C/WAI. El mecanismo de Audioslideshow no dispone de controles gobernados por teclado, por lo cual su uso no es sencillo para un usuario con disminución visual.
- Tampoco está Reveal.js completamente independizado de la plataforma. La mayoría de los plugins responden a la pulsación de teclas, mientras que un usuario de dispositivos móviles no puede acceder al teclado virtual mientras el navegador no solicite input.
- La calidad comunicacional del audio hablado, con sus entonaciones y matices, es insuperable.
- El audio incorporado puede ser de cualquier contenido, no solamente voz.
- Si se modifica el material, debe modificarse el habla grabada en forma acorde.


###Text to Speech
- El mecanismo únicamente produce voz sintética, no otros contenidos. Su expresividad es limitada aunque aceptable.
- Al presente, la API de voz del estándar HTML5 no está uniformemente adoptada por todos los agentes de usuario; por lo cual este mecanismo aún no funciona en todos los navegadores.
- Si se modifica el material, el audio sintético es regenerado al tiempo de reproducción del material.
- Al presente el mecanismo depende del servicio de síntesis de voz de Google.


##Datos de contacto
- Autor: Eduardo Grosclaude, Facultad de Informática UNC
- Esta presentación en Internet: http://egrosclaude.github.io/demos/Accesibilidad.html

