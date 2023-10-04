<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Pastos y forrajes 

    .row.container.justify-content-around.align-items-center
      .row 
        .col-lg-7
          .bloque-color-inf-tar1-tema5
          p.texto1-tar1-tema5 Son la fuente más importante de alimentos de los animales. Las plantaciones forrajeras protegen el suelo de la erosión, fijan nitrógeno y también sirven para recuperar el suelo cuando ha sufrido alteraciones en sus propiedades, por lo anterior, decimos que son todas aquellas especies que puedan cultivarse y que puedan ser consumidas por los animales; además, deben reunir ciertas condiciones como palatabilidad, aporte nutritivo, buena producción de follaje, resistencia y facilidad de manejo. Entre ellas encontramos: hierbas, bejucos, arbustos y árboles (Castrejón, 2017).

        .col-lg-5
            figure
                img(data-aos="fade-left")(src="@/assets/curso/temas/img1-tema5.png", alt="alt").img1-tema5
      
      p.texto-inf-tar1-tema5 Otra especie vegetal considerada como parte de los pastos y con importancia para la alimentación y nutrición animal, la cual puede ser adicionada a la dieta son las gramíneas.
  
    br
    br
    br

    .row.container.justify-content-around.align-items-center
      
      h4 Gramíneas

      br
      br
      p Son las plantas con mayor distribución en el mundo, por su abundancia son la principal fuente de alimento de los herbívoros, tienen una estructura vegetal uniforme, son monocotiledóneas y presentan las siguientes características:
      
      br
      br
      br
    
      ImagenInfografica.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/img-punto-caliente-gram-tema5.png', alt='')
              //figcaption Leyenda de la imagen

          .tarjeta.color-acento-botones.p-3(x="20%" y="10%" numero="1")
            //.h5.mb-2 titulo
            p #[strong  Inflorescencia:] envuelta por glumas, hermafroditas, por lo general, en forma de espiga, racimos o panículas, con frutos son ricos en albumen.        

          .tarjeta.color-acento-botones.p-3(x="20%" y="20%" numero="2")
            //.h5.mb-2 titulo
            p #[strong Tallo: ]es de forma cilíndrica y, en el caso de los pastos, es herbáceo.
            p - #[strong Tallos nudosos:] son los estolones desde donde inicia el crecimiento de las raíces.


          .tarjeta.color-acento-botones.p-3(x="18%" y="50%" numero="3")
            //.h5.mb-2 titulo

            p #[strong Las hojas:] se alternan en doble hilera, su nervadura es paralela, en la base envuelven el tallo mientras que en el extremo terminan en punta hacia afuera.
              p Se componen de:
              p - #[strong Lámina o limbo:] plana, acintada y paralelinervia.
              p - #[strong Base o vaina:] abraza al tallo por el nudo abriéndose por sus bordes (vaina abierta) o soldándose  (vaina cerrada).
              p - #[strong Lígula:] pequeño apéndice membranoso o piloso formado por la epidermis interna de la vaina y que surge entre el limbo y el tallo.

 

          .tarjeta.color-acento-botones.p-3(x="15%" y="80%" numero="4")
            //.h5.mb-2 titulo
            p #[strong Raíz fasciculada:] sistema radicular poco profundo.
    
    br
    br
    br

    .row.container.justify-content-around.align-items-center

        p Existen, también, las especies de gramíneas, adecuadas, principalmente, para climas cálidos. Estas son:

        h4 Gramíneas de clima cálido
        
        .row 
        
          .col-lg-12

            figure
              img(src='@/assets/curso/temas/1.svg', alt='').diagrama-gram-clima-calido
        
        p.texto-inf-gram-clima-calido Adicionalmente, otro tipo de planta que se puede utilizar son las leguminosas. En Colombia, estas plantas pueden usarse para cultivarlas y también como complemento para la nutrición animal.

    br            
    br
    br
    

    .row.container.justify-content-around.align-items-center

        h4 Leguminosas

        p Pertenecientes a las familias de las dicotiledóneas, poseen bacterias especializadas para fijar nitrógeno, transformándolo por medio del proceso de simbiosis, una parte de este se va a las hojas para almacenarse en forma de proteína y el restante se fija en el suelo por medio de los nódulos para ayudar con la fertilidad del suelo (Pérez, 2017).
        br
        br
        p.mb-5 A continuación, conozca la estructura y formas de crecimiento de las leguminosas:

        ImagenInfografica.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/img-ptocal-leguminosas.png', alt='')
              //figcaption Leyenda de la imagen

          .tarjeta.color-acento-botones.p-3(x="52%" y="70%" numero="1")
            //.h5.mb-2 titulo
            p #[strong Tallo:] herbáceos y arbustivos

          .tarjeta.color-acento-botones.p-3(x="80%" y="83%" numero="2")
            //.h5.mb-2 titulo
            p #[strong Sistema radicular:] profundo y con nódulos, fijan el nitrógeno atmosférico.


          .tarjeta.color-acento-botones.p-3(x="62%" y="14%" numero="3")
            //.h5.mb-2 titulo
            p #[strong Hojas:]  anchas, ovaladas con alternancia de tres o más folículos.
 

          .tarjeta.color-acento-botones.p-3(x="40%" y="50%" numero="4")
            //.h5.mb-2 titulo
            p #[strong Flores:] corola irregular y son muy parecidas a las mariposas.

          .tarjeta.color-acento-botones.p-3(x="13%" y="23%" numero="5")
            //.h5.mb-2 titulo
            p #[strong Semillas:] crecimiento en fila y dentro de una vaina.
        
        p Ahora, se presentarán algunas leguminosas de importancia nutricional para manejar especies pecuarias, conforme con criterios técnicos y normativa de producción agropecuaria ecológica:

    
    br
    br
    br

    .row.container.justify-content-around.align-items-center

        h4 Leguminosas forrajeras


        .row 
          .col-lg-4
            p.texto-leg-forrajeras Dentro de las leguminosas de importancia en producción animal tenemos: alfalfa, frijol, garbanzo, lenteja, guácimo, centrosema, kudzu tropical, maní forrajero, guandul, soya perenne y siratro.
          
          .col-lg-8
            figure
              img(src='@/assets/curso/temas/legum-forrajeras-tema5.png', alt='')
        
        p.texto-inf-leg-forrajeras Las leguminosas pueden crecer en forma de arbusto; así mismo, su crecimiento se desarrolla vegetativamente en forma de pasto, como lo veremos en la siguiente imagen. Conocer la diferencia morfológica de especies forrajeras, es importante para el manejo de pastizales en alimentación animal.

    
    br
    br
    br


    p.mb-5 El siguiente esquema muestra las leguminosas, tipo pasto, y algunas generalidades de estas:
    .titulo-sexto.color-acento-contenido.mb-3
      p.mb-0 <b>Figura 4</b><br> <em>Anatomía de las leguminosas tipo pasto</em> 


    
    .row 
      .col-lg-12
        figure
          img(src='@/assets/curso/temas/img-anat-legum-tip-pasto.png', alt='').img-anat-legum-tip-pasto



        
    h4 Otros forrajes para la alimentación animal
    p.mb-5 También existen otras especies de forrajes para la alimentación animal, las cuales forman parte de algunas especies vegetales que ayudan a mejorar la dieta animal, como son:
    SlyderB.mb-5(:datos="datosSlyder").fondo-slider-tema5.tarjeta.p-5

    h3 Ciclos de pastoreo
        
    p El manejo de estos se hace dependiendo de la especie forrajera, condiciones del terreno, fertilidad, también el tipo y número de animales de la explotación. La frecuencia de pastoreo y de descanso de la pradera está estrechamente ligada con la velocidad de crecimiento y recuperación de los pastos, es importante conservarlos e implementar medidas sin causar afectaciones. Los principales sistemas de pastoreo son:


    
    SlyderF(columnas="col-lg-6 col-xl-4").bloque-carr-tarj-tema5
      .tarjeta.fondo-tar-carr-tema5.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/img1-carr-ciclos-pastor.png' alt='AvatarTop')
        h4.text-center Pastoreo continuo
        p El sistema más sencillo, usado en explotaciones extensivas. Allí los animales se encuentran en el mismo lote toda la época del año. Desde el punto de vista agroecológico, no se recomienda porque las plantas no cuentan con el tiempo necesario para recuperarse, el suelo se expone a erosión y aparición de arvenses, se dificultan labores de fertilización llevándolo a la alteración de sus propiedades.
        
      .tarjeta.fondo-tar-carr-tema5.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/img2-carr-ciclos-pastor.png' alt='AvatarTop')
        h4.text-center Pastoreo alterno
        p Para este sistema se divide el potrero en dos para alternar los periodos de permanencia de los animales, permite controlar el tiempo de ocupación y descanso. Requiere de inversión en cercas, bebederos y comederos.
        p.texto-invisible Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod sapiente ad eligendi dolorum deleniti corrupti quae praesentium pariatur, cupiditate quidem 
        
      .tarjeta.fondo-tar-carr-tema5.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/img3-carr-ciclos-pastor.png' alt='AvatarTop')
        h4.text-center Pastoreo rotacional
        p El área total se divide en varios potreros y los animales se van moviendo de manera secuencial, controlando la ocupación durante periodos, asegurando la recuperación de la pradera. Es una modalidad homogénea que controla la pérdida de alimento y no se compacta el suelo por efectos de sobrepastoreo.
        p.texto-invisible Lorem ipsum dolor sit amet consectetur, adipisicing elit. 

      .tarjeta.fondo-tar-carr-tema5.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/img4-carr-ciclos-pastor.png' alt='AvatarTop')
        h4.text-center Pastoreo en franjas
        p Para este sistema debemos usar cerca eléctrica. Esta modalidad es usada en ganadería de leche, nos permite controlar el suministro de agua y sal, la cosecha del pasto es uniforme, de igual manera, la recuperación de la pradera.
        p.texto-invisible Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptate quia necessitatibus explicabo dignissimos 

      .tarjeta.fondo-tar-carr-tema5.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/img5-carr-ciclos-pastor.png' alt='AvatarTop')
        h4.text-center Confinamiento pastoreo cero
        p El animal se encuentra todo el tiempo estabulado, es un sistema intensivo, permite aumentar la carga animal, no hay pérdida por pisoteo y se aprovecha de mejor forma el forraje.
        p.texto-invisible Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptate quia necessitatibus explicabo dignissimos nesciunt voluptas quae voluptate quia 
    p.texto-inf-ciclos-pastoreo.my-5 Los ciclos o sistemas de pastoreo tienen como objetivo aprovechar al máximo los alimentos disponibles y aumentar la producción del animal; esto se logra con un sostenimiento de los forrajes, para conservar y preservar por más tiempo la disponibilidad de recursos alimenticios, como se explica en el siguiente video:

      .row.tarjeta.tarjeta--blanca.p-2.p-md-3

        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/I2G6MjqXGRQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      p.mt-5 Dentro de la preservación de los forrajes, para conservar y preservar el alimento para los animales, también es importante conocer sobre los tipos de silos para la nutrición animal, como veremos a continuación:


      p Existen otros forrajes para la alimentación animal que se utilizan para el manejo de la producción pecuaria:

      
      TabsC.color-primario.fondo-tabs-horiz-tema5
        .py-3.py-md-4(titulo="Silos de trinchera ")
          .row
            .col-md-5
              //h4 Celebrate your failures 1
              p.texto-izq-tabs-horizontales Se abre un hueco, se recubre de un material aislante y se pone el material a ensilar, siempre debe estar cubierto evitando la entrada de aire y agua.
          
            .col-md-7.mb-5.mb-md-0
              figure
                img(src='@/assets/curso/temas/img-silos-trinc-tema5.png', alt='')
                //figcaption Leyenda de la imagen

        .py-3.py-md-4(titulo="Silo de cajón o búnker")
          .row

            .col-md-5
              //h4 Celebrate your failures 2
              p.texto-izq-tabs-horizontales Se utiliza para granjas intensivas y los lugares donde hay estaciones, por lo general, es de concreto y donde se almacenan grandes cantidades de comida.
            
            .col-md-7.mb-5.mb-md-0
              figure
                img(src='@/assets/curso/temas/img-silo-cajon-tema5.png', alt='')
                //figcaption Leyenda de la imagen

        
        .py-3.py-md-4(titulo="Silo de montón")
          .row

            .col-md-5
              //h4 Celebrate your failures 2
              p.texto-izq-tabs-horizontales En este se usa plástico como material de cobertura donde se recolecta el material a ensilar, es muy rudimentario, pero puede ser satisfactorio si se cubre adecuadamente.
            
            .col-md-7.mb-5.mb-md-0
              figure
                img(src='@/assets/curso/temas/silo-monton-tema5.png', alt='')
                //figcaption Leyenda de la imagen

        .py-3.py-md-4(titulo="Silos de bolsa")
          .row

            .col-md-5
              //h4 Celebrate your failures 2
              p.texto-izq-tabs-horizontales Es la manera más rudimentaria y práctica para conservar alimento. Se hace en bolsas resistentes de polietileno.
            
            .col-md-7.mb-5.mb-md-0
              figure
                img(src='@/assets/curso/temas/silos-de-bolsa-tema5.png', alt='').imagenes-tabs-horizontales
                //figcaption Leyenda de la imagen

    p.mt-4.pt-5 Los sistemas agroforestales, fundamentalmente, son la combinación de especies forestales con especies de importancia agrícola, procurando mantener el equilibrio del sistema. Para su establecimiento debemos tener un manejo adecuado del suelo que cumpla los requerimientos que la planta necesite para su buen desarrollo, la idea es asociar árboles maderables o de diversos usos con cultivos de importancia en la producción animal. 

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Árboles forrajeros',
        texto:
          'Raíces forrajeras: son una alternativa para alimentar los animales. Especialmente en épocas de verano, cuando el forraje de las praderas baja considerablemente, se deben aprovechar al máximo los productos fibrosos disponibles en la finca.',
        imagen: require('@/assets/curso/temas/img2-raices-forrajeras.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Raíces forrajeras',
        texto:
          'Han venido incorporándose en los sistemas de producción, principalmente, adaptándolos a sistemas como el silvopastoril. Son fuentes de fibra y proteína. También los emplean en programas de reforestación, como maderable, cercas vivas y programas de conservación de suelos.',
        imagen: require('@/assets/curso/temas/img-raices-forrajeras.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
