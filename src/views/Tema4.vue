<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Materias primas en la alimentación agroecológica

    
    .row.container.justify-content-around.align-items-center

      .row 
        .col-lg-7
          
          p.texto1-tema4 Es de vital importancia la elaboración de alimentos balanceados. Debemos suministrar los nutrientes en cantidades adecuadas y satisfacer las necesidades para elevar al máximo el potencial productivo. Estas son las características de las materias primas que encontramos para realizar raciones balanceadas:
        
        .col-lg-5
            figure
                img(data-aos="fade-left")(src="@/assets/curso/temas/img1-tema4.png", alt="alt")

    br
    br
    br
    
    .row.container.justify-content-around.align-items-center

      p A continuación, se detallan algunas características a tener en cuenta en las instalaciones pecuarias de porcinos


      AcordionA(tipo="a" clase-tarjeta="tarjeta fondo-externo-acordeon-tema4")

          .row(titulo="Alimentos voluminosos")
            .col-md-12.mb-8.mb-md-0
              p.texto-acordeon-tema1 Acá encontramos los forrajes, pastos y residuos del proceso agrícola. 


          .row(titulo="Concentrados")
            .col-md-12.mb-8.mb-md-0
              p.texto-acordeon-tema1 Los encontramos de origen animal como vegetal.


          .row(titulo="Residuos de alimentos")
            .col-md-12.mb-8.mb-md-0
              p.texto-acordeon-tema1 Son los desechos de los alimentos de consumo humano, debemos ser selectivos y eliminar los elementos que puedan causar daño como (huesos, papel y plástico).


          .row(titulo="Aditivos animales")
            .col-md-12.mb-8.mb-md-0
              p.texto-acordeon-tema1 Pon mezclas que se utilizan para compensar las deficiencias de vitaminas y minerales.

      p Dentro de la alimentación agroecológica se tienen algunas especies vegetales conocidas como pastos y forrajes de gran importancia para la alimentación y nutrición de los animales, las cuales pueden ser cultivadas al interior del predio para el fortalecimiento productivo.
 
      
  
</template>

<script>
export default {
  name: 'Tema4',
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
