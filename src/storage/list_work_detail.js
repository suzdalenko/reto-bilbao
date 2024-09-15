const listWorkDetail = [
    'Mudanzas-particulares-y-empresas-Euskadi',
    'Vaciados-de-pisos-garages-recogida-de-muebles-y-chatarra-Euskadi',
    'Reformas-construccion-Euskadi',
    'Pinturas-Euskadi',
    'Aviso-legal-y-politica-de-privacidad'
];


const infoPages = [
    {
        title : `Mudanzas económicas en Euskadi Bilbo, Vitoria-Gasteiz (Araba), San Sebastián (Donostia Gipuzkoa)`,
        desc1 : `En Mudanzas Reto, ofrecemos mudanzas económicas en el Euskadi, simplificando cada etapa del proceso para ti. 
                Ya sea que necesites trasladar tu mobiliario, transportar materiales o ambos, estamos aquí para garantizar una experiencia sin complicaciones. <br><br>  
                Nos comprometemos a ofrecerte un servicio de la más alta calidad al mejor precio disponible, adaptándonos a tus necesidades específicas. 
                Si estás planeando mudarte de casa, piso, habitación u oficina, puedes confiar plenamente en nuestro equipo de profesionales. 
                Nos encargamos de todo con rapidez y cuidado, asegurando que tus pertenencias lleguen a su destino en perfectas condiciones. <br><br> 
                Nuestro objetivo es hacer de tu mudanza un proceso fluido y eficiente, minimizando el estrés asociado y maximizando tu satisfacción. 
                No dudes en contactarnos para obtener un presupuesto personalizado o para cualquier consulta que puedas tener. 
                ¡Estamos listos para ayudarte y hacer que tu mudanza sea una experiencia positiva y sin contratiempos!`,
        desc2 : `En Mudanzas Reto, nos encargamos del desmontaje y montaje de todo tipo de muebles, ya sea en pisos, casas, chalets, oficinas, locales o comercios en el País Vasco. 
                Nos especializamos en optimizar el proceso de carga y descarga, garantizando una protección absoluta de tus muebles y enseres durante el transporte. 
                Ya sea que cuentes con ascensor o no, subimos y bajamos tus pertenencias de manera segura y eficiente. 
                Además, ofrecemos un servicio de plataformas elevadoras para aquellos casos en los que el acceso sea más complicado. 
                Nuestros vehículos están completamente equipados con herramientas y materiales de alta calidad, preparados para resolver cualquier imprevisto que pueda surgir durante el proceso 
                de mudanza. Contamos con un equipo de operarios altamente cualificados, que trabajan con dedicación para garantizar que tu mudanza se realice sin problemas. 
                Además, te ofrecemos los mejores precios del mercado, con tarifas claras y reales, sin sorpresas ni costes ocultos. 
                Nos enorgullecemos de brindar un servicio integral, adaptado a las necesidades específicas de cada cliente. 
                Ya sea una mudanza pequeña o un traslado más complejo, nuestro objetivo es facilitar el proceso para que no tengas que preocuparte por nada. <br><br>
                Ponte en contacto con nosotros, y estaremos encantados de proporcionarte toda la información que necesites sobre tu mudanza o transporte en el País Vasco. ¡Confía en Mudanzas Reto para un servicio profesional, seguro y a precios competitivos!`,
        images: ['/img/mudanzas1.png', '/img/mudanzas2.png'],
    },
    {
        title : 'Recogida de muebles, vaciados de pisos Euskadi Bilbo, Vitoria-Gasteiz (Araba), San Sebastián (Donostia Gipuzkoa)',
        desc1 : `Ofrecemos un servicio integral de recogida de muebles y enseres, adaptándonos a sus necesidades. Ya sea que requiera asistencia en su hogar, o si necesita vaciar espacios más grandes como fábricas, naves industriales, locales comerciales o trasteros, estamos preparados para gestionar el proceso de manera eficiente y profesional. No importa el tamaño o la ubicación, garantizamos un trabajo rápido y cuidadoso para despejar cualquier tipo de espacio.`,
        desc2 : `¿Nos permite ayudarle a simplificar su vida? En Mudanzas Reto, nos encargamos de la retirada y recogida de muebles, electrodomésticos viejos y enseres en desuso en todo el País Vasco. Nuestro servicio está diseñado para ofrecerle una solución práctica y eficiente, que podría ser la decisión más sencilla y acertada para usted. 
                <br><br> Nos ocupamos de todo el proceso: retiramos los objetos pesados de su hogar o lugar de trabajo, los cargamos cuidadosamente en nuestros camiones y garantizamos que se donen, si están en buenas condiciones, o se reciclen de manera responsable. Así, usted contribuye al cuidado del medio ambiente mientras se deshace de aquello que ya no necesita. ¡Lo único que tiene que hacer es señalar lo que quiere que desaparezca, y nosotros nos encargaremos del resto!`,
        images: ['/img/garage1.png', '/img/garage2.png'],
    },
    {
        title : 'Reformas, reparaciones Euskadi Bilbao, Vitoria-Gasteiz, San Sebastián (Donostia)',
        desc1 : `En Mudanzas Reto, somos expertos en llevar a cabo una amplia gama de reparaciones y reformas en el País Vasco. Nos ocupamos de su proyecto desde el principio hasta la finalización, garantizando que cada detalle sea atendido con la máxima precisión. Compártanos su idea y nuestro equipo de especialistas se encargará de todo lo necesario para completar su reforma integral de manera eficiente y en el menor tiempo posible. Como siempre, utilizamos los mejores acabados y materiales para asegurar un resultado de alta calidad y duradero.`,
        desc2 : `En Mudanzas Reto, le ofrecemos presupuestos sin compromiso, adaptados a sus necesidades y a su presupuesto, para la reforma de su hogar en el País Vasco. Nuestro objetivo es proporcionar soluciones económicas y rápidas que transformen su espacio con la máxima calidad.`,
        images: ['/img/obras1.png', '/img/obras2.png'],
    },
    {
        title : 'Pinturas Euskadi Bilbao, Vitoria-Gasteiz, San Sebastián (Donostia)',
        desc1 : `Con más de 15 años de experiencia en el sector de la pintura en Euskadi, incluyendo Bilbao, Vitoria-Gasteiz y San Sebastián (Donostia), hemos perfeccionado nuestras técnicas para ofrecer un servicio más rápido y eficiente que el de nuestra competencia. Gracias a la excelente coordinación de nuestro equipo de profesionales, podemos llevar a cabo trabajos de pintura en chalets, pisos, locales y negocios con una eficacia inigualable. Nos aseguramos de que cada proyecto se realice de manera limpia, rápida y con la mejor calidad en el resultado final.`,
        desc2 : `Nuestro principal objetivo es garantizar la satisfacción total de nuestros clientes. En la mayoría de los casos, la calidad de nuestro trabajo no solo cumple con sus expectativas, sino que también nos ayuda a atraer nuevos clientes. La recomendación de nuestros clientes satisfechos a sus amigos y familiares es el mejor testimonio de nuestro compromiso con la excelencia y la confianza que generamos.`,
        images: ['/img/pintura1.png', '/img/pintura2.png'],
    }
];


export default { listWorkDetail, infoPages }
