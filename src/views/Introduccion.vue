<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    .row.container.justify-content-around.align-items-center
      p Apreciado aprendiz, bienvenido a este nuevo componente formativo, donde se busca aprender la diferencia entre alimentación y nutrición, la diferencia entre monogástricos y poligástricos, el tipo de alimento que debemos suministrar a cada especie y los procesos bioquímicos que suceden para absorber los nutrientes necesarios para el mantenimiento y producción.
      p Para cumplir con estos procesos, aprenderemos sobre la producción de forrajes, ya que este es un proceso de gran importancia, porque se convierte en la manera económica de alimentar animales. En épocas de abundancia es necesario conservar con las diferentes técnicas existentes para mantener los valores nutritivos de los forrajes y, así, suministrar dietas adecuadas en tiempo de sequía. De esta forma, conocer sobre la conservación de los forrajes posibilita garantizar la nutrición de los animales en todas las épocas del año. Lo invitamos a ver el siguiente video para iniciar el recorrido por este proceso de aprendizaje

    .row.tarjeta.tarjeta--blanca.p-2.p-md-3

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
