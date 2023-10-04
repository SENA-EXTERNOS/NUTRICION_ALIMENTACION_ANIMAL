<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Sistemas agroforestales


    .row.container.justify-content-around.align-items-center
  
      .row 
        .bloque-color-tar1-tema6
        .col-lg-8
          .texto1-tema6  
            p Debido a la deforestación y a la degradación de los terrenos, por el aumento del suelo con fines agropecuarios, ha venido creciendo la pérdida de la biodiversidad de la flora y la fauna, así como la disminución de los recursos renovables. 

            p Como respuesta a esta tendencia negativa para el medio ambiente, se han venido desarrollando estrategias, con las cuales la producción animal logra integrar lo agrícola con lo forestal, con el objetivo de reducir la destrucción de los recursos naturales. Los componentes de los sistemas agroforestales son: árboles, cultivos, praderas y animales. 



            p A continuación, se explican los diferentes tipos de sistemas agroforestales, importantes, para la producción animal y la conservación ambiental:

  
        .col-lg-4
            figure
                img(data-aos="fade-left")(src="@/assets/curso/temas/img1-tema6.png", alt="alt")

    br
    br
    br

    .row.container.justify-content-around.align-items-center

      .row 
        .col-lg-4.fondo-tarj1-conect-tema6
            figure
                img(src="@/assets/curso/temas/img1-tarj-conect-tema6.png", alt="alt").imgenes-tarj-conect-tema6
            br
            h4.text-center Sistema agrosilvicultural
            
            p.text-center Combina árboles con cultivos agrícolas en el mismo lote.

        .col-lg-4.fondo-tarj2-conect-tema6
            figure
                img(src="@/assets/curso/temas/img2-tarj-conect-tema6.png", alt="alt").img-tarj2-tema6
            
            h4.text-center Sistema agrosilvopastoril
            
            p.text-center Combina árboles, cultivos agrícolas y pastos en el mismo lote.

        .col-lg-4.fondo-tarj3-conect-tema6
            figure
                img(src="@/assets/curso/temas/img3-tarj-conect-tema6.png", alt="alt").imgenes3-tarj-conect-tema6
            br
            h4.text-center Sistema silvopastoril
            
            p.text-center Combina árboles y pastos.

    br
    br
    br

    .row.container.justify-content-around.align-items-center

        p Algunos beneficios del silvopastoreo en el bienestar y la alimentación de los animales en la producción agroecológica, son:
        br
        br
        br
        
        .row 
          .col-lg-6
              
              h4 Beneficios del silvopastoreo

              ol.lista-ol--cuadro.bloque-beneficios-silvopas
                li 
                  .lista-ol--cuadro__vineta
                    span 1
                  p Proporciona #[strong sombra a los animales] y suministran un #[strong ambiente favorable] para que se mejoren los rendimientos de producción.

                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  p Algunas de las especies de árboles pueden ser empleados en la #[strong alimentación animal.]

                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  p Aprovechamiento de las #[strong especies maderables.]

                li 
                  .lista-ol--cuadro__vineta
                    span 4
                  p Ayuda a mantener el #[strong balance hídrico del suelo.]

                li 
                  .lista-ol--cuadro__vineta
                    span 5
                  p Mantiene el #[strong ciclo de los nutrientes,] las raíces de los árboles alcanzan profundidades mayores que las de los pastos y logran #[strong absorber nutrientes] que, luego, retornan a la superficie cuando cae su follaje, ramas y frutos.
                
                li 
                  .lista-ol--cuadro__vineta
                    span 6
                  p #[strong Aportan materia orgánica al suelo] con las ramas, hojas y frutos que caen.

                li 
                  .lista-ol--cuadro__vineta
                    span 7
                  p Las leguminosas tienen la propiedad de #[strong fijar el nitrógeno en el suelo] para permitir conservar sus propiedades.

                li 
                  .lista-ol--cuadro__vineta
                    span 8
                  p Aumento en la #[strong diversidad de las especies] depredadoras que atacan las plagas.
                
                li 
                  .lista-ol--cuadro__vineta
                    span 9
                  p Actúa como barrera #[strong rompevientos,] regulando la velocidad del aire y su efecto erosivo.
                li 
                  .lista-ol--cuadro__vineta
                    span 10
                  p #[strong Reducen la erosión] al disminuir la velocidad de la caída de la lluvia al suelo y disminuye la velocidad de la escorrentía del agua.

                li 
                  .lista-ol--cuadro__vineta
                    span 11
                  p Proporciona #[strong protección física al suelo,] lo que contribuye a crear sistemas productivos y más estables que los monocultivos.
                
                li 
                  .lista-ol--cuadro__vineta
                    span 12
                  p Los árboles forrajeros tienen un gran potencial natural como #[strong fuente de proteína para los animales] utilizados por el ser humano.
        
          .col-lg-6
              figure
                img(src="@/assets/curso/temas/img-silvopastoreo-tema6.png", alt="alt").img-silvopastoreo-tema6
    
    .pf.p-4.mt-5
      p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros. 
     

</template>

<script>
export default {
  name: 'Tema6',
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
