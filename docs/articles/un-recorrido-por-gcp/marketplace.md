---
id: "un-recorrido-por-gcp-marketplace"
title: "Google Cloud Marketplace"
description: "Conoceremos mejor esta increíble herramienta y sus ventajas en la adopción cloud"
keywords:
  - Google Cloud Platform
  - GCP
  - Cloud
  - Marketplace
image: "http://localhost:4444/img/articles/un-recorrido-por-gcp/marketplace.jpg"
---
import {Writter} from '@site/src/utils.js';

<Writter 
  Photo="https://miro.medium.com/fit/c/256/256/2*XKiHV-3_LJvO6xeiGKheDQ.png" 
  Name="Felipe Velásquez Castro"
  Position="Google Developer Expert"
/>

![](http://localhost:4444/img/articles/un-recorrido-por-gcp/marketplace.jpg)

### ¿Que hace y por que existe?

El Marketplace es el lugar en el que podrás encontrar toda clases de soluciones, las cuales pueden ir desde una simple máquina virtual con Apache HTTP Server, pasando por conjuntos de máquinas virtuales que implementan soluciónes más complejas como un replica set de MongoDB con un coordinador y 2 nodos, soluciones para desplegar automáticamente sobre Kubernetes y soluciones SaaS de terceros que pueden ser administradas desde GCP, centralizando la facturación en Google Cloud. Entre estos puedes encontrar SendGrid, soluciones de Elastic, entre otras.

Su existencia es más que necesaria, gracias al marketplace, muchas soluciones de la industria se pueden desplegar en nuestra infraestructura de GCP con solo un click. Puedes crear toda suerte de soluciones, ¿Quieres un Jenkins para tus despliegues, un Mantis para registrar incidencias y un SonarQube para la calidad de tu código?, todo esto y más es posible con un simple click desde el marketplace 

El resumen por parte de Google es el siguiente: GCP Marketplace offers more than 160 popular development stacks, solutions, and services optimized to run on GCP via one click deployment. [Explore, launch, and manage production-grade solutions in just a few clicks](https://cloud.google.com/marketplace)

Este es el link para la documentación oficial : [https://cloud.google.com/marketplace/docs?hl=es-419](https://cloud.google.com/marketplace/docs?hl=es-419)



### ¿Que tiene de especial su diseño?, ¿Para cuál o cuáles propósitos fue optimizado?

El marketplace no fue diseñado para solo realizar despliegues en máquinas virtuales, muy por el contrario, fue optimizado para entregar soluciones de nivel empresarial casi listas para producción.
Esto quiere decir que en el podrás encontrar las principales soluciones, tanto Open Source como bajo licencia de tipo Enterprise.

Dentro de sus principales características están los despliegues a Máquinas virtuales (que a esta altura ya no es novedad), el despliegue directo a un cluster de Kubernetes, conjuntos de datos para importar en BigQuery e incluso realizar despliegues con Anthos hacia clusters en On-Premise o en otras nubes.


![tabs v/s spaces](http://localhost:4444/img/articles/un-recorrido-por-gcp/deploy_with_anthos.jpg)


### ¿Cuando se debe utilizar?, ¿Cuales son sus limitaciones?, ¿Cuando es momento de considerar una alternativa?

La respuesta a estas preguntas es muy interesante, por que, a pesar de todos los puntos positivos que hemos enumerado anteriormente, **hay que considerar muy bien cuando utilizar herramientas desde el Marketplace**, esta decisión tiene múltiples dimensiones, ya que esto depende mucho de la problemática de arquitectura que deseas resolver.

Pongamos un ejemplo, dentro de la arquitectura de tu solución requieres de el uso de un [redis](https://redis.io/), como ya sabrás dentro del Marketplace tendrás distintos sabores de este software con múltiples tipos de implementación, en una o más VMs, en Kubernetes, una [solución SaaS que corre sobre la infraestructura del fabricante](https://redislabs.com/redis-enterprise-cloud/overview/) entre otros. Sin embargo en este caso hay que ver múltiples factores. Tal como veremos en capítulos más adelante existe una implementación de Redis como servicio dentro de Google Cloud, completamente administrado por Google, llegar y usar. Esto presenta una gran ventaja respecto a las soluciones en VMs y en Kubernetes, si embargo frente a las soluciones que son provistas por el fabricante dependerá mucho del costo que se desea asumir. Esto irá completamente ligado a la propuesta por parte de Google asi como del fabricante.

Por parte de Google la alternativa más económica parte de $35 USD por mes, con 1 GB de almacenamiento sin HA (Alta Disponibilidad) y dependiendo de la Zona de despliegue. Sin embargo en [Redis Labs](https://redislabs.com/redis-enterprise-cloud/pricing/) 1GB tiene el costo de $57 USD por mes con HA. En este caso dependerá mucho de la necesidad y el presupuesto que alternativa tomar.

Este ejercicio se debe realizar con cada solución que se desea implementar, el punto de partida puede ser desde una implementación 100% a mano (No recomendado) o una alternativa desde el Marketplace y en el caso de existir una solución administrada por Google evaluar costos, simpleza, nivel de administración y facilidad de integración.

### ¿Cuales son las características clave de este producto o tecnología?

El marketplace es un excelente acelerador en tu adopción de la nube, ya que evita que tanto tu como tu empresa tengan que implementar ciertas soluciones desde cero, lo que involucra determinar una serie de aspectos.

+ Características mínimas de la Infraestructura par una solución.
+ Sistema operativo requerido y su configuración básica.
+ Particiones de disco, directorios y permisos.
+ Si se crea alguna especie de cluster, hay que tener presente las redes, puertos, reglas de firewall entre otros.
+ Obtener el/los paquetes de software necesarios para la solución completa.
+ Configurar permisos, archivos de configuración e inicio automático con el sistema.
+ muchas otras configuraciones.

Teniendo todo esto a la vista, cabe destacar que una de las características claves de Marketplace es evita tener que resolver muchos de los puntos antes mencionados. Entregando soluciones listas para usar.


### ¿Posee un alternativa Open Source?, En caso de existir, ¿cuáles son los beneficios claves de utilizar el servicio basado en la nube por sobre el Open Source?

Esta pregunta también tiene múltiples respuesta y va a depender de que es lo que desees implementar. Tal como vimos en el punto anterior una solución sobre IaaS (Infraestructura como servicio, VM) la alternativa es implementar a mano soluciones Open Source u otros administradores de software como [Bitnami](https://bitnami.com/), sin embargo, por el lado de Kubernetes, una gran alternativa es [HELM o Kustomize](https://medium.com/@alexander.hungenberg/helm-vs-kustomize-how-to-deploy-your-applications-in-2020-67f4d104da69).

Respecto a los beneficios de utilizar o no el Marketplace, esto dependerá de tus necesidades, requerimientos, arquitectura, tiempo disponible para la implementación entre otros. Como factor diferenciador el marketplace nos da ventajas en lo que respecta a tiempo y simplicidad.

Bueno es todo por este análisis, demos paso a otro elemento fundamental dentro de nuestro proyecto en GCP, la administración del Billing.
