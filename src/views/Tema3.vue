<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Nutrición y alimentación animal
    
    
    .row.justify-content-center.mb-4
      .col-lg-7
          p La alimentación es el proceso por el que suministramos alimento a las especies, el cual debe estar en excelentes condiciones y con la capacidad de suplir las necesidades y requerimientos en todas las etapas productivas de los animales.
          p Los requerimientos alimenticios dependen de algunas variables como tamaño, raza y clima. Por lo general, los animales grandes necesitan altos requerimientos de mantenimiento a diferencia de las especies pequeñas. Este mismo caso pasa con animales jóvenes, pues la etapa de crecimiento consume dependiendo de la ganancia de peso diaria y está relacionada con la dieta suministrada.
          p El alimento es fundamental para hablar de procesos de nutrición para la producción animal.
          p Se entiende por alimento todo tipo de material comestible, sin tener en cuenta la digestibilidad. De esta manera, es necesario asegurar que este aporte los requerimientos para satisfacer el cuerpo animal.
      .col-lg-5
        figure
            img(data-aos="fade-left")(src="@/assets/curso/temas/img1-tema3.png", alt="alt").img1-tema3

    p.my-5 El siguiente esquema muestra los aspectos más fundamentales de la composición de los alimentos:
    img.img-a.img-t.mb-5(src="@/assets/curso/temas/cuadro-comp-alimento-tema3.png", alt="alt")

    h3 Tipos de nutrientes
    
    p Cuando nos referimos a nutrientes, decimos que son los aportes químicos indispensables para sobrevivir, crecer y reproducirse. En el siguiente esquema gráfico, reconozca y comprenda los tipos de nutrientes:

    .row
      .col-lg-12
        figure
            img(src="@/assets/curso/temas/mapa-tipos-nutrientes-tema3.png", alt="alt").mapa-tipos-nutrientes-tema3


    p.texto-final-tipos-de-nutrientes.my-5 El valor nutritivo es la acción de suministrar la cantidad apropiada de nutrientes para garantizar el ciclo productivo en la crianza de animales; para esto, existen cinco principales nutrientes, que son:       

    .row
      .col-lg-12
          figure
              img(src="@/assets/curso/temas/img-valor-nutritivo.png", alt="alt").mapa-valor-nutritivo-tema3

    p.my-5 Debemos ofrecer una dieta económica porque los costos de alimentación son altos. El objetivo es mantener las praderas en buen estado para suministrar raciones de excelente calidad durante todo el año, garantizando la vida productiva, de esta manera, podemos asegurar el estado sanitario de los animales sin producir alteraciones en sus ciclos que pueden causar la muerte u otras consecuencias. 
        
    h3 Nutrición y alimentación de bovinos
    p Los requerimientos nutricionales para bovinos, dependen de lo que requiere diariamente el animal (mantenimiento, crecimiento, reproducción y lactancia), y los nutrientes a suministrar, deben equivaler a los requisitos diarios.
    p Estos son los piensos para la alimentación animal bovina:
    .row
      .col-lg-12
          figure
              img(src="@/assets/curso/temas/cuadro-alim-bobina-tema3.png", alt="alt").img-aliment-bovinos

    p.my-5 La tabla que se muestra a continuación, explica los requerimientos nutricionales de los bovinos, según la etapa de desarrollo:    
    .titulo-sexto.color-acento-contenido
      p.mb-0 <b>Tabla 1</b><br> <em>Requerimientos nutricionales, según la etapa de desarrollo</em>
    
    img.img-a.img-t.mb-5(data-aos="fade-left")(src="@/assets/curso/temas/cuadro-req-nutri-bobinos-tema3.png", alt="alt")
      
    p La alimentación de los bovinos y los porcinos es diferente. Para los cerdos, se deben suministrar raciones con alto valor nutritivo, dado que, por su genética, su crecimiento es rápido y acelerado. Es importante el suministro de agua potable, ya que si la cantidad no es adecuada los rendimientos productivos disminuyen. 
    p.mb-5 A continuación, pueden verse los requerimientos nutritivos para los cerdos.
        
    .titulo-sexto.color-acento-contenido
      p.mb-0 <b>Tabla 2</b><br> <em>Requerimientos nutricionales según la etapa de desarrollo</em>
    img.img-a.img-t(data-aos="fade-left")(src="@/assets/curso/temas/tabla-req-porcinos-tema3.png", alt="alt")
          
    p.mt-5 Para la elaboración de los complementos nutricionales en la alimentación, necesarios para el manejo productivo de especies, se tienen algunas materias primas al alcance del productor que benefician el bienestar y la salud animal. Conocer sus características es fundamental a la hora de mejorar el rendimiento o el potencial animal. 
  
        

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
