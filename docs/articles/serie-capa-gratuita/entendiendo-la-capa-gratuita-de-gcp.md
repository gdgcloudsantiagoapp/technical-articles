---
id: "entendiendo-la-capa-gratuita-de-gcp"
title: "Entendiendo la capa gratuita de GCP"
description: "Serie de artículos que te ayudará a sacar el máximo provecho a Google Cloud sin pagar de más"
keywords:
  - Google Cloud Platform
  - Gcp
  - Cloud
  - Economy
  - Billing
image: "./portada.jpeg"
---
import {Writter} from '@site/src/utils.js';

<Writter 
  Photo="https://miro.medium.com/fit/c/256/256/2*XKiHV-3_LJvO6xeiGKheDQ.png" 
  Name="Felipe Velasquez Castro"
  Position="Google Developer Expert"
/>


Serie de artículos que te ayudará a sacar el máximo provecho a Google Cloud sin pagar de más

![](./portada.jpeg)

## Indice

[Introducción — Qué es y cómo funciona la capa gratuita](https://medium.com/@felipe.velasquezc/entendiendo-la-capa-gratuita-de-gcp-2d80143f70f1?source=friends_link&sk=e7c4c52c1702efb51103762f587eb5cb)

***S01 — Productos, Características y cómo ahorrar en la facturación***

* [Cloud Functions](https://medium.com/@felipe.velasquezc/entendiendo-la-capa-gratuita-de-gcp-cloud-functions-1644864529ec?sk=dcdb7b0befd0aa5d381d361d3679201f)

* [Cloud Pub/Sub](https://medium.com/@felipe.velasquezc/entendiendo-la-capa-gratuita-de-gcp-cloud-pub-sub-e46736a56eec)

* [Cloud Storage](https://medium.com/@felipe.velasquezc/entendiendo-la-capa-gratuita-de-gcp-cloud-storage-f7a806b2932f)

* [Big Query](https://medium.com/@felipe.velasquezc/entendiendo-la-capa-gratuita-de-gcp-bigquery-71c3c661e3c4)

* [Cloud Run](https://medium.com/@felipe.velasquezc/entendiendo-la-capa-gratuita-de-gcp-cloud-run-55021a30563f)

***S02 —[Vigila el uso de la capa gratuita desde Data Studio](https://medium.com/@felipe.velasquezc/vigila-el-uso-de-la-capa-gratuita-desde-data-studio-927ef14fd6b9)***

* [Habilitar la exportación de Billing (en BigQuery!)](https://medium.com/@felipe.velasquezc/vigila-el-uso-de-la-capa-gratuita-desde-data-studio-927ef14fd6b9)

* [Dashboard en Data Studio (… para una facturación sin sorpresas!)](https://medium.com/@felipe.velasquezc/vigila-el-uso-de-la-capa-gratuita-desde-data-studio-927ef14fd6b9)

## Introducción — Qué es y cómo funciona la capa gratuita de GCP

La adopción de Google Cloud Platform está creciendo mucho y ya forma parte del stack con el que se están construyendo las soluciones de muchas empresas en Latinoamérica. Es por esto que muchos de nosotros estamos deseosos de implementar nuestros proyectos personales, pruebas de concepto e inclusos nuestros emprendimientos en la nube Google. Ahora bien, en la mayoría de los casos no contamos con el $presupuesto$ para dar el primer paso. Así que en este artículo te voy a contar cómo sacar el máximo provecho a la capa “Always Free” de GCP y por supuesto ver cómo [Cloud Run](https://cloud.google.com/run/) hace todo más fácil.

### Always Free

No hay nada mejor en la vida que las cosas gratis y Google Cloud lo sabe, por lo tanto, en su búsqueda de nuevos adeptos tiene un excelente plan de iniciación, el cual incluye USD 300 por 12 meses y junto con esto una gran cantidad de productos de los cuales una determinada porción de su uso no tiene costo. Esta es la denominada capa **Always Free**, que en palabras de Google **“Puedes utilizar estos productos sin coste alguno hasta que alcances los límites de uso especificados, durante la prueba gratuita y cuando esta finalice. Estos límites no caducan, pero están sujetos a cambios”**. Primero, entenderemos cómo se cobra cada servicio entre todos los proyectos, y luego revisaremos algunos de los productos emblemáticos incluidos en esta capa gratuita, para finalmente ver un ejemplo de cómo tener una arquitectura completa que tiene una facturación mensual de cero (así es, leíste bien, una factura mensual de cero!).

### Costos

Hablemos de plata: para entender cómo funciona el cobro de productos en GCP pongamos como ejemplo las [Google Cloud Functions](https://cloud.google.com/functions/) (que igualmente profundizaremos más adelante). Este producto incluye **2 millones de ejecuciones gratis**, sin embargo, esto se compone de ***todas*** las Cloud Functions que puedas tener creadas dentro de ***todos*** tus proyectos asociados a una cuenta de Billing.

*OJO*

Lo anterior quiere decir que si tienes **3 proyectos** con **5 Cloud Functions** cada uno, debes tratar que entre esas ***15 funciones*** no se pasen de los **2 millones** de ejecuciones, si tu intención es que salga $0 a fin de mes. Además, debes tener presente que esto aplica a todos los productos de GCP:
> *La capa gratuita considera el uso total del producto **entre todos los proyectos***

El cobro por el uso de cada producto se compone de múltiples factores. Continuemos con el ejemplo de las Cloud Functions: este producto se cobra tanto por *número de ejecuciones*, por *uso de la red de entrada y salida*, el *tamaño de la RAM* y *CPU* asignadas, así como por *el tiempo de CPU total utilizado* en la ejecución de cada función. Veamos un ejemplo:

![](https://cdn-images-1.medium.com/max/2000/0*38CnYqH-s9WY6q-P.png)

En la imagen anterior, podemos ver una Cloud Function que se ejecuta sólo *1 millón de veces por mes*, el tamaño del payload es regular (*2.5 kb*), pero su tiempo de ejecución es de *30 segundos* por cada llamada: como verás en la siguiente imagen, el costo mensual se dispara a **USD 66**.

![](https://cdn-images-1.medium.com/max/2000/0*mQPd7uodE5LB8nCh.png)

Este ejemplo nos recuerda lo cautelosos que debemos ser al utilizar cada servicio: conocer sus umbrales y en especial tener en cuenta **para qué fue creado cada producto**. Siguiendo nuestro ejemplo de Cloud Functions, si vamos a enfrentar más de 30 segundos de procesamiento por cada llamada, entonces claramente Cloud Functions **no es la herramienta idónea** (para nuestro propósito de gastar lo menos posible). En este escenario, debemos considerar algún servicio que **no** tenga una estructura de cobro por ejecución. Sólo como referencia de las posibilidades que hay, en [Google Compute Engine](https://cloud.google.com/compute/) USD 24,75 mensuales por 730 horas de ejecución continua de una instancia *n1-standard-1* ó USD 0 (sí, cero!) con una *f1-micro*.

Ahora que tenemos claro cómo se factura el uso de los servicios en GCP vamos a dar un vistazo a los principales productos y los límites que comprenden su capa gratuita.

Nos vemos en el próximo artículo, [Entendiendo la capa gratuita de GCP — Cloud Functions](https://medium.com/@felipe.velasquezc/entendiendo-la-capa-gratuita-de-gcp-cloud-functions-1644864529ec?source=friends_link&sk=dcdb7b0befd0aa5d381d361d3679201f).

Agradecimientos a Julio Quinteros P. :)
