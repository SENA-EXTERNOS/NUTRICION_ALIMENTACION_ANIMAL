<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Programa de Alimentación Agroecológica
    
    .row.container.justify-content-around.align-items-center
      p El programa de alimentación agroecológica consiste en producir alimentos de buena calidad de forma natural sin que tengamos que incluir dentro de los procesos el uso de químicos, con el fin de no causar daños al entorno.
      p Lo que se busca es optimizar las producciones para brindar alimento causando el mínimo de daño al entorno. A continuación podemos ver algunos de los beneficios que nos brinda la alimentación agroecológica: 

      .row 
        .col-lg-12
            figure
                img(data-aos="fade-left")(src="@/assets/curso/temas/img-ganad-agroec-tema1.png", alt="alt")  
    br
    br
    br

    .row.container.justify-content-around.align-items-center


        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Disminuir el estrés en los animales")
            .col-md-12.mb-8.mb-md-0
              p.texto-acordeon-tema1 Dentro de las bondades que nos ofrece este sistema es que podemos aumentar la ganancia de peso disminuyendo el estrés en los animales. 


          .row(titulo="Incorporar árboles")
            .col-md-12.mb-8.mb-md-0
              p.texto-acordeon-tema1 Para lograr esto debemos incorporar árboles que serán usados como sombra, los gastos económicos bajan ya que no usamos ningún producto a base de agroquímicos.


          .row(titulo="Incorporar especies autóctonas")
            .col-md-12.mb-8.mb-md-0
              p.texto-acordeon-tema1 Los sistemas agroforestales, a lo largo del tiempo, se convierten en una alternativa muy útil que genera muchas ventajas, ya que permite incorporar especies autóctonas que servirán como fuente de alimentación, cerca viva, sombrío, lindero, maderable y zona de descanso de los animales.


          .row(titulo="Seleccionar plantas con alto valor proteico")
            .col-md-12.mb-8.mb-md-0
              p.texto-acordeon-tema1 Bancos de proteínas es un método que consiste en seleccionar una planta con alto valor proteico. Su siembra es en callejones y se deja crecer a una determinada altura, usándola como fuente de alimento, así aumentamos la carga animal y disminuimos la compactación del suelo por efecto del sobrepastoreo.
 

          .row(titulo="Uso combinado")
            .col-md-12.mb-8.mb-md-0
              p.texto-acordeon-tema1 Al implementar la siembra de árboles frutales, es decir, el uso combinado del suelo, estas plantas actúan como como controladoras de maleza, dan sombra y, a su vez, sirven como fuente de fructosa.
          


          .row(titulo="Sistemas silvopastoriles")
            .col-md-12.mb-8.mb-md-0
              p.texto-acordeon-tema1 Los sistemas silvopastoriles son una técnica que involucra gramíneas y leguminosas, de esta manera podemos disminuir los impactos ambientales.



          .row(titulo="Aporta nitrógeno al suelo")
            .col-md-12.mb-8.mb-md-0
              p.texto-acordeon-tema1 La introducción de árboles aporta nitrógeno al suelo. Así, aumentamos la cobertura de materia orgánica y ayudamos a que el animal pierda temperatura y regule el estrés producido por el calor.
          



          .row(titulo="Policultivo mezclando varias especies")
            .col-md-12.mb-8.mb-md-0
              p.texto-acordeon-tema1 La idea es formar un policultivo mezclando varias especies de plantaciones.
        
        p A continuación encontraremos elementos importantes acerca de la anatomía y la fisiología digestiva de los animales. 



      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
