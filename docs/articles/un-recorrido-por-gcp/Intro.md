---
id: "un-recorrido-por-gcp-intro"
title: "Un Recorrido por GCP - Introducción"
description: "En estos artículos daremos un paseo por los principales productos de Google Cloud Platform"
keywords:
  - Google Cloud Platform
  - GCP
  - Cloud
image: "http://localhost:4444/img/articles/un-recorrido-por-gcp/google_cloud_platform.jpg"
---
import {Writter} from '@site/src/utils.js';

<Writter 
  Photo="https://miro.medium.com/fit/c/256/256/2*XKiHV-3_LJvO6xeiGKheDQ.png" 
  Name="Felipe Velásquez Castro"
  Position="Google Developer Expert"
/>

![](http://localhost:4444/img/articles/un-recorrido-por-gcp/google_cloud_platform.jpg)

**E**n esta serie de artículos daremos un paseo por los principales productos de Google Cloud Platform, veremos que son, con que objetivo fueron creados y cuales son sus principales casos de uso.

Tratarémos de entender como utilizar cada uno de estos servicios en nuestras soluciones cloud y pondremos el foco cada componente, abordando su definición y diversas formas de uso.

Estos artículos búscan ayudarte a ver cada uno de los productos de Google Cloud como piezas de lego, con los cuales podrás jugar, interconectar y armar toda suerte de arquitecturas maravillosas.

Cabe destacar que muchas de las definiciones y análisis que podrás encontrar en estos artículos son completamente personales y puede que muchos no estén de acuerdo con algunos de estos puntos de vista. Trataré en lo posible de incluir referencias que respalden dichas definiciones, pero ya sabes, en muchos casos no existe solo una forma de ver una posible solución a un problema o las formas de como utilizar una herramienta. Sino, piensa en todas las veces que has sacado un tornillo con un cuchillo y después me juzgas.

## Marco de análisis 

Para abordar cada uno de los productos y servicios en cuestión utilizaremos un marco de análisis muy sencillo pero pero si ya viste los videos de [Coursera](https://www.coursera.org/professional-certificates/gcp-cloud-architect) sobre google cloud puede que te parezca familiar.

* ¿Que hace y por que existe?
* ¿Que tiene de especial su diseño?, ¿Para cuál o cuáles propósitos fue optimizado?
* ¿Cuando se debe utilizar?, ¿Cuales son sus limitaciones?, ¿Cuando es momento de considerar una alternativa?
* ¿Cuales son las características clave de este producto o tecnología?
* ¿Posee un alternativa Open Source?, En caso de existir, cuáles son los beneficios claves de utilizar el servicio basado en la nube por sobre el Open Source?

Como verás algunos puntos son de un análisis completamente personal y altamente controversiales para algunas personas. Al nivel de Tabs v/s espacios o de Vim v/s Emacs

![tabs v/s spaces](http://localhost:4444/img/articles/un-recorrido-por-gcp/tabs_spaces.jpg)

## Orden de análisis

Para abordar los servicios, vamos a utilizar la misma distribución que tiene en la consola de GCP, es decir, vamos a iniciar por una serie de elementos que tienen que ver con la administración de tu proyecto en Google Cloud, seguiremos por los servicios de computo, storage, datos y asi sucesivamente.

En algunos productos es posible que entremos en detalles más profundos, tratando de analizar sus principales características y sub componentes. Tomemos como ejemplo las Máquinas virtuales, como puedes ver en la imágen a continuación hay una serie de elementos, tales como los *Instance Templates*, los Discos, las imágenes, *Instance Groups* y *Health Checks*. Sin lugar a dudas que profundizar en estos aspectos es muy importante, sin embargo habrá algunos en los que no nos detendremos más allá de un análisis básico de las [preguntas antes mencionadas](#marco-de-análisis).

![tabs v/s spaces](http://localhost:4444/img/articles/un-recorrido-por-gcp/menu.jpg)

Pero ya basta de vueltas, vamos directo al grano que hay mucho por ver aun. En el siguiente articulo veremos el [Marketplace](./un-recorrido-por-gcp-marketplace)