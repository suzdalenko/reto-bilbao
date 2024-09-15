<template>
     <header class="ex-header">
        <div class="container">
            <div class="row">
                <div class="col-xl-10 offset-xl-1">
                    <h1>{{ workPage }} {{ cityPage }}</h1>
                </div> 
            </div> 
        </div> 
    </header>
    <div class="ex-basic-1 pt-5">
        <div class="container">
            <div class="row">
                <div class="col-xl-10 offset-xl-1">
                     <p class="mb-5 description_text">
                        En Mudanzas Reto, nos enorgullecemos de ofrecer un servicio integral especializado en una amplia gama de <b>{{workPage}}</b>. Además de nuestras destacadas soluciones en mudanzas y limpiezas, gestionamos la reubicación de trastos, muebles antiguos, y cualquier otro tipo de artículos que necesiten ser trasladados o retirados.
                        <br><br>
                        Ya sea que estés planificando una mudanza en <b>{{cityPage}}</b> o necesites deshacerte de objetos que ocupan espacio en tu hogar o negocio, nuestro equipo está listo para ayudarte. Nos dedicamos a ofrecer un servicio eficiente, cuidadoso y adaptado a tus necesidades específicas, garantizando que el proceso sea lo más sencillo y libre de estrés posible.
                        <br><br>
                        Para obtener un presupuesto personalizado sin compromiso, no dudes en ponerte en contacto con nosotros. Estamos disponibles para responder a tus consultas y proporcionarte toda la información que necesites, ya sea a través de una llamada telefónica o mediante mensajes de WhatsApp. En Mudanzas Reto, tu satisfacción es nuestra prioridad, y trabajamos arduamente para asegurar que cada proyecto se lleve a cabo con el mayor profesionalismo y atención al detalle.
                        <br><br>
                        Para proporcionarte un presupuesto detallado y ajustado a tus necesidades específicas, te invitamos cordialmente a enviarnos fotografías del trabajo que deseas realizar. Contar con imágenes del proyecto nos permitirá evaluar con mayor precisión el alcance y las particularidades del servicio requerido, garantizando así una propuesta más exacta y personalizada.
                        <br><br>
                        Nuestro equipo se compromete a revisar detenidamente la información que nos envíes y, en un plazo breve, te responderemos con una propuesta detallada que refleje de manera fiel tus requerimientos y expectativas. Nos esforzamos por ofrecerte una solución que se ajuste perfectamente a tus necesidades, proporcionando un presupuesto transparente y competitivo.
                        <br><br>
                        Agradecemos de antemano tu colaboración y te aseguramos que trabajaremos con la mayor eficiencia para ofrecerte el mejor servicio posible. Si tienes alguna pregunta adicional o necesitas asistencia durante el proceso, no dudes en ponerte en contacto con nosotros. Estamos a tu disposición para cualquier consulta y para ayudarte a llevar a cabo tu proyecto de manera exitosa.
                        <br><br>
                     </p>
                </div> 
            </div> 
        </div> 
    </div>   
</template>
<script>
export default {
    props: ['workPage', 'cityPage'],
    data(){
        return {

        }
    },

}
</script>