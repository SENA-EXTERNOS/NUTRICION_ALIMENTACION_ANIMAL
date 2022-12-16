<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Nutrición y alimentación
    
    
    .row.container.justify-content-around.align-items-center
      .row
        .bloque-texto-color-tar1-tema3
        .col-lg-7
          .texto-tar1-tema3
            p La alimentación es el proceso por el que suministramos alimento a las especies, el cual debe estar en excelentes condiciones y con la capacidad de suplir las necesidades y requerimientos en todas las etapas productivas de los animales.
            p Los requerimientos alimenticios dependen de algunas variables como tamaño, raza y clima. Por lo general, los animales grandes necesitan altos requerimientos de mantenimiento a diferencia de las especies pequeñas. Este mismo caso pasa con animales jóvenes, pues la etapa de crecimiento consume dependiendo de la ganancia de peso diaria y está relacionada con la dieta suministrada.
        
        .col-lg-5
          figure
              img(data-aos="fade-left")(src="@/assets/curso/temas/img1-tema3.png", alt="alt").img1-tema3
        
        p El alimento es fundamental para hablar de procesos de nutrición para la producción animal.
        p Se entiende por alimento todo tipo de material comestible, sin tener en cuenta la digestibilidad. De esta manera, es necesario asegurar que este aporte los requerimientos para satisfacer el cuerpo animal.
      
    br
    br
    br

    .row.container.justify-content-around.align-items-center

        h4 Composición del alimento

        .row.mapa-concep-tema3.p-4
          .col-lg-12
            figure
                img(src="@/assets/curso/temas/cuadro-comp-alimento-tema3.png", alt="alt")
    
    br
    br
    br

    .row.container.justify-content-around.align-items-center
            
        #tipos-de-nutrientes
        .titulo-segundo.color-acento-contenido
          h2 Tipos de nutrientes
        
        p Cuando nos referimos a nutrientes, decimos que son los aportes químicos indispensables para sobrevivir, crecer y reproducirse. 
        p En el siguiente gráfico, explicamos los tipos de nutrientes.

        

        .row
          .col-lg-12
            figure
                img(src="@/assets/curso/temas/mapa-tipos-nutrientes-tema3.png", alt="alt").mapa-tipos-nutrientes-tema3


        p.texto-final-tipos-de-nutrientes El valor nutritivo es la acción de suministrar la cantidad apropiada de nutrientes para garantizar el ciclo productivo en la crianza de animales, para esto encontramos cinco principales nutrientes que pueden verse en la siguiente infografía.       

    br
    br
    br

    .row.container.justify-content-around.align-items-center
      
      h4 Valor nutritivo

      .row
        .col-lg-12
            figure
                img(src="@/assets/curso/temas/img-valor-nutritivo.png", alt="alt").mapa-valor-nutritivo-tema3

      p Debemos ofrecer una dieta económica porque los costos de alimentación son altos. El objetivo es mantener las praderas en buen estado para suministrar raciones de excelente calidad durante todo el año, garantizando la vida productiva, de esta manera, podemos asegurar el estado sanitario de los animales sin producir alteraciones en sus ciclos que pueden causar la muerte u otras consecuencias. 

    br

    separador

    br


    .row.container.justify-content-around.align-items-center
        
        #nutricion-y-alimentacion-de-los-bovinos
        .titulo-segundo.color-acento-contenido
          h2 Nutrición y alimentación de los bovinos
        
        h4 Nutrición y alimentación de bovinos

        .row
          .col-lg-12
              figure
                  img(src="@/assets/curso/temas/cuadro-alim-bobina-tema3.png", alt="alt").img-aliment-bovinos

        p Los requerimientos nutricionales para bovinos dependen de lo que requiere diariamente el animal (mantenimiento, crecimiento, reproducción y lactancia), los nutrientes a suministrar deben equivaler a los requisitos diarios.
        p En el siguiente botón encontrarás una tabla detallada donde podrás ampliar la información en cuanto a requerimientos nutricionales de los bovinos según la etapa de desarrollo. 


    br

    separador

    br

    .row.container.justify-content-around.align-items-center

        #requerimientos-nutricionales-de-los-bovinos
        .titulo-segundo.color-acento-contenido
          h2 Requerimientos nutricionales para los bovinos
        
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 1.
          span <em>Requerimientos nutricionales según la etapa de desarrollo</em>
        
        .row 
          .col-lg-12
            figure
                img(data-aos="fade-left")(src="@/assets/curso/temas/cuadro-req-nutri-bobinos-tema3.png", alt="alt")
          
          p La alimentación de los bovinos y los porcinos es diferente. Para los cerdos, se deben suministrar raciones con alto valor nutritivo, dado que, por su genética, su crecimiento es rápido y acelerado. Es importante el suministro de agua potable, ya que si la cantidad no es adecuada los rendimientos productivos disminuyen. 
          p A continuación, pueden verse los requerimientos nutritivos para los cerdos. En el siguiente Botón amplía la información. 
        
    br
    br
    br

    .row.container.justify-content-around.align-items-center
   
        #requerimientos-nutricionales-para-los-porcinos
        .titulo-segundo.color-acento-contenido
          h2 3.4. Requerimientos nutricionales para los porcinos
        
        
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 1.
          span <em>Requerimientos nutricionales según la etapa de desarrollo</em>

        .row 
          .col-lg-12
            figure
                img(data-aos="fade-left")(src="@/assets/curso/temas/tabla-req-porcinos-tema3.png", alt="alt").tabla1-requerimientos-porcinos-tema3
          
        p Para la elaboración de los complementos nutricionales en la alimentación, necesarios para el manejo productivo de especies, se tienen algunas materias primas al alcance del productor que benefician el bienestar y la salud animal. Conocer sus características es fundamental a la hora de mejorar el rendimiento o el potencial animal. 
  
        

</template>

<script>
export default {
  name: 'Tema3',
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
