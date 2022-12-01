<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-sexto.color-titulo-sexto
      h4.texto-titulo-sintesis Manejo de la producción agroecológica.
      //p.texto-titulo-sintesis Síntesis: CF7 Nutrición y alimentación animal


    p El programa de alimentación agroecológica, actualmente, nos brinda una amplia variedad de técnicas para ser económicamente competitivos sin bajar los estándares de producción y sin contribuir con el deterioro del entorno. En la crianza de animales es necesario saber la anatomía y fisiología de los aparatos digestivos de las distintas especies de importancia zootécnica, conocer las diferencias entre un monogástrico y un poligástrico para suministrar las dietas más adecuadas para cada especie. Identificar las diferencias entre la alimentación y la nutrición permite hacer énfasis en la generación de dietas con altos valores nutricionales que correspondan con la etapa de desarrollo del animal y puedan aportar en su crecimiento y, por ende, en la producción. Conocer el valor nutritivo de los alimentos incluye saber su composición y la función y aporte de los carbohidratos, grasas, proteínas, vitaminas y minerales esenciales para suplir los requerimientos vitales diarios.
    p En ese sentido, los pastos y forrajes son la principal fuente de alimento en la producción de animales, por lo que es necesario usar sistemas de pastoreo para conservar los suelos y evitar la pérdida de las propiedades, la compactación y la degradación. De esta manera, se puede garantizar la nutrición de las especies que se estén alimentando. En épocas de abundancia de pastos y material forrajero, se usarán técnicas de conservación de las plantaciones, para así tener provisiones durante todo el año y evitar bajar los rendimientos productivos. A continuación, un resumen de lo visto en el presente componente y podrá ser visualizado en el siguiente mapa conceptual.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis2.png", alt="alt").img-sintesis
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis2.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
