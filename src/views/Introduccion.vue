<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    p Apreciado aprendiz, bienvenido a este componente formativo, donde se busca aprender la diferencia entre alimentación y nutrición, entre monogástricos y poligástricos, el tipo de alimento que debemos suministrar a cada especie y los procesos bioquímicos que suceden para absorber los nutrientes necesarios en el mantenimiento y producción animal.
    p Para cumplir con estos procesos, aprenderemos sobre la producción de forrajes, porque este es un proceso de gran importancia, que se convierte en la forma económica de alimentar animales. En épocas de abundancia, se hace necesario conservar, con las diferentes técnicas existentes, para mantener los valores nutritivos de los forrajes y, así, suministrar dietas adecuadas en tiempo de sequía. Conocer sobre la conservación de los forrajes posibilita garantizar la nutrición de los animales, en todas las épocas del año. 

    p.mb-5 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:


    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
