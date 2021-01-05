---
id: "un-recorrido-por-gcp-billing"
title: "Google Cloud Billing Admin"
description: "Uno de los pilares del cloud es el manejo de costos y la buena administración de estos"
keywords:
  - Google Cloud Platform
  - GCP
  - Cloud
  - Billing
image: "http://localhost:4444/img/articles/un-recorrido-por-gcp/billing.jpg"
---
import {Writter} from '@site/src/utils.js';

<Writter 
  Photo="https://miro.medium.com/fit/c/256/256/2*XKiHV-3_LJvO6xeiGKheDQ.png" 
  Name="Felipe Velásquez Castro"
  Position="Google Developer Expert"
/>

![](http://localhost:4444/img/articles/un-recorrido-por-gcp/Billing.jpg)

### ¿Que hace y por que existe?

El módulo de Billing en realidad no es un producto, por el contrario es el lugar donde se gestiona y administra el gasto que generan los productos que utilizamos dentro de nuestros proyectos. 

La administración de costos es un aspecto muy importante dentro de la Nube, y Google Cloud nos das muchas herramientas para que podamos tener el control absoluto de los gastos que generamos en GCP.

Tal como dijimos, el módulo de Billing no es un producto, pero no debes ignorarlo, muy por el contrario deberías conocerlo a fondo y vigilar constantemente la efectividad del uso de los recursos.

A nivel personal el tema del Billing me llama mucho la atención y he tenido la posibilidad de dedicar muchas horas a este asunto. Te dejo una serie de artículos que escribí de como sacar el máximo provecho a la capa gratuita de GCP y como administrar el Billing para no perder el control de tus gastos.

***Introducción***

* [Qué es y cómo funciona la capa gratuita](../serie-capa-gratuita/entendiendo-la-capa-gratuita-de-gcp)

***S01 — Productos, Características y cómo ahorrar en la facturación***

* [Cloud Functions](../serie-capa-gratuita/entendiendo-la-capa-gratuita-de-gcp-cloud-functions)

* [Cloud Pub/Sub](../serie-capa-gratuita/entendiendo-la-capa-gratuita-de-gcp-pub-sub)

* [Cloud Storage](../serie-capa-gratuita/entendiendo-la-capa-gratuita-de-gcp-cloud-storage)

* [Big Query](../serie-capa-gratuita/entendiendo-la-capa-gratuita-de-gcp-bigquery)

* [Cloud Run](../serie-capa-gratuita/entendiendo-la-capa-gratuita-de-gcp-cloud-run)

***S02 —[Vigila el uso de la capa gratuita desde Data Studio](../serie-capa-gratuita/vigila-el-uso-de-la-capa-gratuita-desde-data-studio)***

* [Habilitar la exportación de Billing (en BigQuery!)](../serie-capa-gratuita/vigila-el-uso-de-la-capa-gratuita-desde-data-studio#habilitando-la-exportación-de-billing)

* [Dashboard en Data Studio (… para una facturación sin sorpresas!)](../serie-capa-gratuita/vigila-el-uso-de-la-capa-gratuita-desde-data-studio#preparando-los-datos-para-el-dashboard)


### ¿Que tiene de especial su diseño?, ¿Para cuál o cuáles propósitos fue optimizado?

¿Que tiene de especial?, mucho, ya que por parte de Google no han dejado nada al azar en temas de billing, y si te digo nada, es por que gracias a las herramientas de billing es posible tener registros **segundo a segundo** de cada uno de los recursos utilizados por cada producto o servicio, en lo que respecta a CPU, RAM, trafico de entrada y salida de red, entre otros muchos otros recursos, dependiendo del producto que estemos utilizando. En la siguiente imágen puedes ver una agrupación de los registros de billing en BigQuery de [Cloud Run](https://cloud.google.com/run). 



![](http://localhost:4444/img/articles/un-recorrido-por-gcp/billing_resources_usage.jpg)



Dentro de las características claves del Modulo de Billing podemos destacar los reporte, con el cual podremos tener una vista general a nivel de proyectos, servicios e incluso SKU (cada uno de los recursos facturables) de cada uno de estos servicios. 

También podemos destacar las alertas de Billing, que permite establecer umbrales en porcentajes a cada proyecto y te notifica al ir cumpliendo cada umbral, ademas de esto puedes configurar un tópico de pub/sub si quieres automatizar procesos al cumplirse ciertos umbrales. 

Por otra parte se encuentra la exportación de Billing, que tal como te comentaba en el párrafo anterior, que permite registrar en en BigQuery el consumo de billing de cada producto segundo a segundo los cuales podemos analizar en profundidad e incluso crear dashboards personalizados con Datastudio (El último de los artículos de arriba muestra como puedes hacer todos esto por ti mismo) 

![](http://localhost:4444/img/articles/un-recorrido-por-gcp/billing_menu.jpg)

### ¿Cuando se debe utilizar?, ¿Cuales son sus limitaciones?, ¿Cuando es momento de considerar una alternativa?

mmmmm, esta pregunta no aplica, si quieres sobrevivir utilizando la nube debes medir tus gastos....


### ¿Cuales son las características clave de este producto o tecnología?

En mi punto de vista, la característica clave de este módulo es su versatilidad, es decir, puedes tener un gran controls con solo los reportes y mantener todo bajo control con las alertas de billing. Pero puedes automatizar apagado de productos u otras acciones que ahorren dinero con los eventos a pub/sub y claro, puedes analizar en detalle cada recurso utilizado desde BigQuery. 

### ¿Posee un alternativa Open Source?, En caso de existir, ¿cuáles son los beneficios claves de utilizar el servicio basado en la nube por sobre el Open Source?

Esta pregunta tampoco aplica en lo que respecta a Open Source, sin embargo existen servicios de pago de administración y reducción en el billing que pueden hacer un análisis de tu uso y recomendarte donde y cuando reducir recursos para ahorrar en los costos.

Bueno eso fue todo por parte del Billing, no dejes de leer los artículos de la capa gratuita y del dashboard de control, te van a encantar.
