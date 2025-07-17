const questions = [
    {
        question: "¿Qué son las mercancías íntegramente producidas?",
        options: [
            "Son las que en su proceso productivo tuvo lugar íntegramente en el territorio de los países miembros del Acuerdo y las que en su producción o elaboración se utilizaron exclusivamente materiales considerados originarios.",
            "Son las que en su proceso productivo tuvo lugar íntegramente en el territorio de los países no miembros del Acuerdo y las que en su producción o elaboración se utilizaron exclusivamente materiales considerados originarios.",
            "Son las que en su proceso productivo no tuvo lugar íntegramente en el territorio de los países miembros del Acuerdo y las que en su producción o elaboración se utilizaron exclusivamente materiales considerados originarios.",
            "Son las que en su proceso productivo tuvo lugar íntegramente en el territorio de los países miembros del Acuerdo y las que en su producción o elaboración se utilizaron exclusivamente materiales considerados no originarios."
        ],
        correctAnswer: "Son las que en su proceso productivo tuvo lugar íntegramente en el territorio de los países miembros del Acuerdo y las que en su producción o elaboración se utilizaron exclusivamente materiales considerados originarios."
    },
    {
        question: "¿Cuál es el “Criterio de producción integral”?",
        options: [
            "Se refiere a la producción de una mercancía utilizando solo materiales no originarios.",
            "Se refiere a la producción de una mercancía utilizando materiales de cualquier origen.",
            "Se refiere a la producción de una mercancía utilizando materiales importados de otros países.",
            "Se refiere a la producción de una mercancía utilizando solo materiales originarios de los países partes del tratado."
        ],
        correctAnswer: "Se refiere a la producción de una mercancía utilizando solo materiales originarios de los países partes del tratado."
    },
    {
        question: "¿Qué diferencia semántica existe en la denominación de los criterios de origen entre distintos acuerdos como por ejemplo en el Acuerdo de Complementación Económica No 41 entre Chile y México?",
        options: [
            "Diferencia entre criterio de obtención total y transformación sustancial.",
            "Diferencia entre criterio de obtención total y producción integral.",
            "Diferencia entre insumos totalmente obtenidos y materiales originarios.",
            "Diferencia entre origen nacional y origen regional."
        ],
        correctAnswer: "Diferencia entre criterio de obtención total y producción integral."
    },
    {
        question: "¿Qué busca determinar el “Criterio de cambio de clasificación arancelaria”?",
        options: [
            "Si los insumos no originarios han sido utilizados en la producción integral de la mercancía.",
            "Si los insumos no originarios han sido importados de países no miembros del tratado.",
            "Si los insumos no originarios han sufrido una transformación que cambia su clasificación arancelaria.",
            "Si los insumos no originarios representan menos del 7% del valor total del producto."
        ],
        correctAnswer: "Si los insumos no originarios han sufrido una transformación que cambia su clasificación arancelaria."
    },
    {
        question: "¿Qué es la viruta de madera según el siguiente texto: (la viruta de madera derivada de madera utilizada en la industria de fabricación de muebles se considerará originaria cuando se recupere para fabricar aglomerado de madera, aun cuando la madera de la que proviene no sea originaria).",
        options: [
            "Un producto básico.",
            "Un producto de la industria de fabricación de muebles.",
            "Un producto de la industria de la madera.",
            "Un producto de la industria de la construcción."
        ],
        correctAnswer: "Un producto de la industria de fabricación de muebles."
    },
    {
        question: "¿Qué significa que un material sea “totalmente obtenido”?",
        options: [
            "Un material se considera “totalmente obtenido” cuando se utilizan insumos no originarios en su producción. Por ejemplo, una estatua de mármol donde el mármol es el único insumo sería un caso de material totalmente obtenido.",
            "Un material se considera “totalmente obtenido” cuando se utilizan insumos originarios en su comercialización. Por ejemplo, una estatua de mármol donde el mármol no es el único insumo sería un caso de material totalmente obtenido.",
            "Un material se considera “totalmente obtenido” cuando no se utilizan insumos originarios en su producción. Por ejemplo, una estatua de mármol donde el mármol es el único insumo sería un caso de material totalmente obtenido.",
            "Un material se considera “totalmente obtenido” cuando no se utilizan insumos no originarios en su producción. Por ejemplo, una estatua de mármol donde el mármol es el único insumo sería un caso de material totalmente obtenido."
        ],
        correctAnswer: "Un material se considera “totalmente obtenido” cuando no se utilizan insumos no originarios en su producción. Por ejemplo, una estatua de mármol donde el mármol es el único insumo sería un caso de material totalmente obtenido."
    },
    {
        question: "La Leche, huevos, miel natural, pelo, lana, semen y estiércol para que sean considerados productos o mercancías totalmente obtenidas deben venir o provenir de:",
        options: [
            "Desechos y desperdicios derivados de operaciones de fabricación y mercancías usadas, utilizadas para recuperación de materias primas",
            "De animales vivos nacidos y criados o cazados, pescados o atrapados en el territorio de los países miembros",
            "De animales nacidos y criados en el territorio de los países no miembros del Acuerdo.",
            "Del reino vegetal recolectados o cosechados"
        ],
        correctAnswer: "De animales vivos nacidos y criados o cazados, pescados o atrapados en el territorio de los países miembros"
    },
    {
        question: "¿Qué tipo de operaciones no confieren origen en el método negativo de transformación sustancial?",
        options: [
            "Operaciones que cumplen el criterio del porcentaje.",
            "Operaciones mínimas.",
            "Operaciones que cumplen el criterio del salto.",
            "Operaciones realizadas en el país de origen."
        ],
        correctAnswer: "Operaciones mínimas."
    },
    {
        question: "¿Qué se entiende por “Calificación de Origen”?",
        options: [
            "El proceso (criterios o condiciones) de determinar si una mercancía es originaria o no.",
            "La verificación de la cantidad de una mercancía.",
            "El análisis de las condiciones de transporte de una mercancía.",
            "La evaluación del criterio de la calidad de una mercancía."
        ],
        correctAnswer: "El proceso (criterios o condiciones) de determinar si una mercancía es originaria o no."
    },
    {
        question: "¿Cuál de los siguientes métodos positivos se utiliza para definir la transformación sustancial?",
        options: [
            "Método de valor de contenido.",
            "Todas las anteriores",
            "Método del proceso productivo calificador.",
            "Método de cambio de clasificación."
        ],
        correctAnswer: "Todas las anteriores"
    },
    {
        question: "¿Qué es el término “recolectados” dentro de la terminología utilizada para identificar a las mercancías totalmente obtenidas?",
        options: [
            "Se aplica a aquellos casos en los cuales la producción tuvo lugar con intervención humana a través de los ciclos de siembra y cosecha.",
            "Se aplica a aquellos casos en los cuales la producción tuvo lugar con intervención humana a través de la caza, la pesca o la captura con trampas.",
            "Se refiere a la apropiación de animales vivos nacidos y criados en el territorio de los países miembros del Acuerdo.",
            "Se refiere a la apropiación de plantas o partes de plantas en cuyo crecimiento no hubo intervención humana."
        ],
        correctAnswer: "Se refiere a la apropiación de plantas o partes de plantas en cuyo crecimiento no hubo intervención humana."
    },
    {
        question: "¿Qué permite a un buque enarbolar la bandera de un país?",
        options: [
            "El contrato de arrendamiento o fletamento.",
            "La coincidencia con el país en el que está domiciliado su propietario.",
            "El acto de registro o matriculación en el Registro de Buques de ese país.",
            "La operación por parte de una empresa domiciliada en ese país."
        ],
        correctAnswer: "El acto de registro o matriculación en el Registro de Buques de ese país."
    },
    {
        question: "¿Indique el criterio utilizado para determinar el origen de ciertos bienes?",
        options: [
            "Criterio de obtención de calidad.",
            "Criterio de obtención de valor.",
            "Criterio de obtención total.",
            "Criterio de obtención parcial."
        ],
        correctAnswer: "Criterio de obtención total."
    },
    {
        question: "¿Cuál es el país de registro, matrícula y bandera de un buque?",
        options: [
            "El país en el que está domiciliado su propietario.",
            "El país en el que opera el buque.",
            "El país en el que está establecida la empresa que tomó el buque en arrendamiento.",
            "El país de la bandera del buque."
        ],
        correctAnswer: "El país de la bandera del buque."
    },
    {
        question: "¿Qué sucede con los desechos, desperdicios y mercancías usadas recuperadas para la elaboración de materias primas?",
        options: [
            "No se consideran para la elaboración de materias primas.",
            "Se consideran no originarios aun cuando provengan de mercancías originarias.",
            "No se consideran ni originarios ni no originarios.",
            "Se consideran originarios aun cuando provengan de mercancías no originarias."
        ],
        correctAnswer: "Se consideran originarios aun cuando provengan de mercancías no originarias."
    },
    {
        question: "¿Qué dificultad puede surgir al interpretar si un producto es íntegramente producido por cumplimiento del criterio de obtención total o por el criterio de producción integral?",
        options: [
            "Diferencias semánticas en los acuerdos.",
            "Uso de materiales importados en la producción.",
            "Distinción entre insumos totalmente obtenidos y materiales originarios.",
            "Sometimiento a procesos primarios de embalaje."
        ],
        correctAnswer: "Distinción entre insumos totalmente obtenidos y materiales originarios."
    },
    {
        question: "Mencione algunos ejemplos en los que no resulta fácil distinguir si un producto originario lo es por cumplimento del criterio de obtención total o por el criterio de producción integral.",
        options: [
            "Uvas pasa secadas al sol.",
            "Nueces sin cáscara.",
            "Todas las anteriores.",
            "Un pescado HGT (H descabezado, G eviscerado, T sin cola)."
        ],
        correctAnswer: "Todas las anteriores."
    },
    {
        question: "¿Qué es el criterio de obtención total en lo referente a la calificación de origen?",
        options: [
            "Un criterio utilizado para determinar el origen de ciertos bienes.",
            "Un criterio utilizado para determinar el valor de ciertos bienes.",
            "Un criterio utilizado para determinar la calidad de ciertos bienes.",
            "Un criterio utilizado para determinar el destino de ciertos bienes."
        ],
        correctAnswer: "Un criterio utilizado para determinar el origen de ciertos bienes."
    },
    {
        question: "¿Qué son los desechos y desperdicios derivados de operaciones de fabricación y mercancías usadas, en el tema de la obtención total para la calificación de origen?",
        options: [
            "Bienes no originarios.",
            "Bienes no recuperados.",
            "Bienes recuperados.",
            "Bienes originarios."
        ],
        correctAnswer: "Bienes recuperados."
    },
    {
        question: "¿Cuántos criterios básicos existen para la calificación de origen?",
        options: [
            "4",
            "2",
            "3",
            "1"
        ],
        correctAnswer: "3"
    },
    {
        question: "¿Qué sucede si se pierde el documento de tránsito aduanero?",
        options: [
            "Se permite continuar sin el documento",
            "Se deben pagar tarifas adicionales para obtener un nuevo documento",
            "Se considera una violación grave y se imponen sanciones",
            "Se puede solicitar un duplicado al punto de origen"
        ],
        correctAnswer: "Se puede solicitar un duplicado al punto de origen"
    },
    {
        question: "¿Qué documentos adicionales pueden ser necesarios para el tránsito aduanero de mercancías?",
        options: [
            "Permisos especiales para mercancías restringidas",
            "Certificados de calidad y seguros",
            "Licencias de importación y exportación",
            "Declaraciones de aduanas y facturas comerciales"
        ],
        correctAnswer: "Permisos especiales para mercancías restringidas"
    },
    {
        question: "¿Qué sucede si un viajero no declara mercancías que exceden el límite permitido?",
        options: [
            "El viajero debe pagar una tarifa adicional",
            "Las mercancías se transfieren al servicio de aduanas",
            "El viajero puede enfrentar multas o sanciones",
            "Las mercancías se liberan automáticamente"
        ],
        correctAnswer: "El viajero puede enfrentar multas o sanciones"
    },
    {
        question: "¿Qué documento es necesario presentar en caso de que el conductor no sea propietario del vehículo?",
        options: [
            "Licencia de conducir",
            "Contrato de arrendamiento",
            "Matrícula del vehículo",
            "Carta notarial"
        ],
        correctAnswer: "Carta notarial"
    },
    {
        question: "¿Qué ocurre si se detectan errores en los documentos durante el desaduanamiento directo?",
        options: [
            "El proceso continúa sin cambios",
            "Se requiere la corrección antes de continuar",
            "Los documentos se ignoran y se pasa a la siguiente etapa",
            "Se emite una multa automáticamente"
        ],
        correctAnswer: "Se requiere la corrección antes de continuar"
    },
    {
        question: "¿Cuál es la primera acción que debe tomar un turista al llegar a un punto de control aduanero con su vehículo?",
        options: [
            "Presentar su pasaporte",
            "Pagar una tarifa",
            "Llenar un formulario de entrada",
            "Declarar su ingreso a la autoridad aduanera"
        ],
        correctAnswer: "Declarar su ingreso a la autoridad aduanera"
    },
    {
        question: "¿Qué debe hacer un operador aduanero si se detecta una irregularidad durante el tránsito?",
        options: [
            "Destruir las mercancías irregulares",
            "Ignorar la irregularidad y continuar el tránsito",
            "Informar al cliente y permitir la salida de las mercancías",
            "Notificar a las autoridades aduaneras y corregir la irregularidad"
        ],
        correctAnswer: "Notificar a las autoridades aduaneras y corregir la irregularidad"
    },
    {
        question: "¿Qué papel juega la tecnología en el desaduanamiento directo?",
        options: [
            "Facilita la automatización del proceso",
            "No tiene impacto",
            "Requiere la eliminación de sistemas tradicionales",
            "Aumenta los tiempos de procesamiento"
        ],
        correctAnswer: "Facilita la automatización del proceso"
    },
    {
        question: "¿Qué debe contener la carta notarial para que un conductor no propietario pueda transitar en Perú?",
        options: [
            "Solo la firma del propietario",
            "Dirección del propietario",
            "Solo nombre y apellidos",
            "Nombre, apellidos y firma del propietario"
        ],
        correctAnswer: "Nombre, apellidos y firma del propietario"
    },
    {
        question: "¿Qué información es esencial en la declaración de bienes?",
        options: [
            "La fecha de llegada del vuelo",
            "El peso total de las mercancías",
            "El número de pasaporte del viajero",
            "El precio de compra y la descripción detallada"
        ],
        correctAnswer: "El precio de compra y la descripción detallada"
    },
    {
        question: "¿Cuándo debe realizarse el cierre de la CIV, DUIT o DJT?",
        options: [
            "Al finalizar la estancia en el país",
            "Antes de realizar un pago en aduana",
            "Al ingresar al país",
            "Solo en casos especiales"
        ],
        correctAnswer: "Al finalizar la estancia en el país"
    },
    {
        question: "¿Qué deben hacer los viajeros que llevan mercancías de gran valor?",
        options: [
            "Reemplazarlas por artículos de menor valor",
            "Declararlas como bienes comerciales",
            "Informar al personal de aduanas sobre el valor",
            "Llevar un seguro de transporte"
        ],
        correctAnswer: "Informar al personal de aduanas sobre el valor"
    },
    {
        question: "¿Qué es lo más importante al completar un formulario de declaración de bienes?",
        options: [
            "La exactitud de la información proporcionada",
            "La rapidez en la entrega del formulario",
            "La simplicidad del contenido del formulario",
            "La presentación de un recibo de compra"
        ],
        correctAnswer: "La exactitud de la información proporcionada"
    },
    {
        question: "¿Qué tipo de mercancías están generalmente exentas de impuestos al ingresar por sala internacional?",
        options: [
            "Bienes de uso personal que no excedan el límite establecido",
            "Productos electrónicos de alto valor",
            "Productos perecederos",
            "Mercancías para venta comercial"
        ],
        correctAnswer: "Bienes de uso personal que no excedan el límite establecido"
    },
    {
        question: "¿Qué documento debe completar un pasajero que ingrese al país con bienes tributables?",
        options: [
            "Formulario de Registro Aduanero (FRA)",
            "Permiso de Importación (PI)",
            "Declaración Única de Aduanas (DUA)",
            "Documento Único de Importación (DUI)"
        ],
        correctAnswer: "Formulario de Registro Aduanero (FRA)"
    },
    {
        question: "¿Qué se debe hacer si el vehículo se destruye durante la estancia en Ecuador?",
        options: [
            "Ninguna de las anteriores",
            "Dejarlo en una estación de servicio",
            "Seguir el procedimiento de destrucción documentado",
            "Abandonarlo"
        ],
        correctAnswer: "Seguir el procedimiento de destrucción documentado"
    },
    {
        question: "¿Qué sucede si los bienes tributables están valorados entre USD 1000 y USD 2000, según la resolución?",
        options: [
            "El pasajero debe devolver los bienes",
            "Solo se pagarán los tributos",
            "Se pagarán los tributos y una multa",
            "Se confiscan los bienes sin excepción"
        ],
        correctAnswer: "Se pagarán los tributos y una multa"
    },
    {
        question: "¿Qué tipo de mercancías pueden ser desaduanadas directamente?",
        options: [
            "Mercancías perecederas únicamente",
            "Solo mercancías de alto valor",
            "Todas las mercancías sin excepción",
            "Mercancías que cumplan con ciertos requisitos específicos"
        ],
        correctAnswer: "Mercancías que cumplan con ciertos requisitos específicos"
    },
    {
        question: "¿Cómo se puede asegurar la correcta implementación del desaduanamiento directo en una empresa?",
        options: [
            "Reduciendo la cantidad de documentación requerida",
            "Contratando personal adicional",
            "Aumentando los costos de operación",
            "Implementando un sistema de gestión aduanera adecuado y capacitando al personal"
        ],
        correctAnswer: "Implementando un sistema de gestión aduanera adecuado y capacitando al personal"
    },
    {
        question: "¿Qué debe hacer el transportista si se presenta un problema durante el tránsito?",
        options: [
            "Informar a las autoridades aduaneras y solicitar instrucciones",
            "Continuar el tránsito y presentar un informe después",
            "Resolver el problema sin notificar a las autoridades",
            "Cambiar la ruta de tránsito sin previo aviso"
        ],
        correctAnswer: "Informar a las autoridades aduaneras y solicitar instrucciones"
    },
    {
        question: "¿Qué entidad se encarga de la publicación de la resolución en el Sistema de Administración del Conocimiento (SAC) del Ecuapass?",
        options: [
            "Dirección General del SENAE",
            "Dirección de Tecnologías de la Información",
            "Dirección de Secretaría General",
            "Ministerio de Comercio Exterior"
        ],
        correctAnswer: "Dirección de Tecnologías de la Información"
    },
    {
        question: "¿Qué tipo de mercancía debe ser importada exclusivamente por las Fuerzas Armadas y la Policía Nacional para ser desaduanada directamente?",
        options: [
            "Material calificado como bélico",
            "Equipos médicos",
            "Alimentos perecibles",
            "Material de oficina"
        ],
        correctAnswer: "Material calificado como bélico"
    },
    {
        question: "¿Cuál de las siguientes mercancías requiere un procedimiento específico para su desaduanamiento directo según el reglamento?",
        options: [
            "Equipos electrónicos",
            "Juguetes",
            "Semen congelado para inseminación artificial",
            "Ropa y textiles"
        ],
        correctAnswer: "Semen congelado para inseminación artificial"
    },
    {
        question: "¿Qué entidad generalmente autoriza el desaduanamiento directo?",
        options: [
            "El Servicio Nacional de Aduana del Ecuador",
            "El Ministerio de Comercio Exterior y el Sercop",
            "La Organización Mundial del Comercio",
            "El Servicio Nacional de Aduana del Ecuador y el SERCOP para una entidad privada"
        ],
        correctAnswer: "El Servicio Nacional de Aduana del Ecuador"
    },
    {
        question: "¿Cuál de los siguientes bienes puede ser importado temporalmente con reexportación en el mismo estado bajo el desaduanamiento directo?",
        options: [
            "Bienes para espectáculos públicos",
            "Productos textiles",
            "Productos farmacéuticos",
            "Equipos de oficina"
        ],
        correctAnswer: "Bienes para espectáculos públicos"
    },
    {
        question: "¿Cómo se manejan las mercancías que requieren inspección en el desaduanamiento directo?",
        options: [
            "Se omite la inspección en el proceso de desaduanamiento directo",
            "Se deben inspeccionar antes del desaduanamiento",
            "Se realizan inspecciones aleatorias después del desaduanamiento",
            "Las inspecciones se realizan únicamente a pedido del importador"
        ],
        correctAnswer: "Se realizan inspecciones aleatorias después del desaduanamiento"
    },
    {
        question: "¿Qué mercancía relacionada con la salud requiere desaduanamiento directo?",
        options: [
            "Materiales radioactivos",
            "Equipos de gimnasio",
            "Huevos fértiles",
            "Vacunas para uso humano o animal"
        ],
        correctAnswer: "Vacunas para uso humano o animal"
    },
    {
        question: "¿Cuál es la cantidad máxima de perfume permitida por pasajero sin pago de tributos?",
        options: [
            "500 mililitros",
            "2000 mililitros",
            "3000 mililitros",
            "1000 mililitros"
        ],
        correctAnswer: "500 mililitros"
    },
    {
        question: "¿Qué tipo de sistema de control es esencial para el desaduanamiento directo?",
        options: [
            "Un sistema de gestión documental manual",
            "Un sistema de control de calidad de productos",
            "Un sistema de gestión aduanera electrónica",
            "Un sistema de verificación en persona"
        ],
        correctAnswer: "Un sistema de gestión aduanera electrónica."
    },
    {
        question: "¿Cuál es un requisito básico para acceder al desaduanamiento directo?",
        options: [
            "Estar registrado en la Cámara de Comercio",
            "Contar con un sistema de gestión aduanera adecuado",
            "Presentar una garantía bancaria",
            "Tener un número de registro fiscal"
        ],
        correctAnswer: "Contar con un sistema de gestión aduanera adecuado"
    },
    {
        question: "En el contexto de la Regla 6, si una Nota de subpartida es incompatible con una Nota de Capítulo, ¿qué sucede con la interpretación de las subpartidas?",
        options: [
            "La Nota de subpartida prevalece y se aplica exclusivamente para la interpretación de las subpartidas afectadas",
            "La Nota de Capítulo siempre prevalece sobre la Nota de subpartida, invalidando la clasificación bajo esa subpartida.",
            "Ambas Notas se aplican conjuntamente para llegar a una conclusión combinada.",
            "Se deben ignorar las Notas de subpartida y proceder según las Reglas 1 a 5."
        ],
        correctAnswer: "La Nota de subpartida prevalece y se aplica exclusivamente para la interpretación de las subpartidas afectadas"
    },
    {
        question: "¿Qué se debe hacer con las mercancías que no pueden clasificarse utilizando las reglas anteriores según la Regla General 4?",
        options: [
            "Se envían a una revisión adicional para una nueva clasificación.",
            "Se clasifican en una categoría general.",
            "Se descartan del sistema arancelario.",
            "Se comparan con mercancías similares y se asignan a la partida que tenga mayor analogía"
        ],
        correctAnswer: "Se comparan con mercancías similares y se asignan a la partida que tenga mayor analogía"
    },
    {
        question: "Un fabricante importa partes de un vehículo que se encuentran sin ensamblar. Según la Regla de Interpretación 2A, ¿cómo deben clasificarse estas partes en términos arancelarios?",
        options: [
            "Como el vehículo completo, siempre y cuando las partes representen las características esenciales del vehículo",
            "Como un conjunto de partes, pero sin relación con el vehículo completo.",
            "Como partes individuales, bajo diferentes partidas según su naturaleza.",
            "No es posible clasificarlas hasta que estén completamente ensambladas."
        ],
        correctAnswer: "Como el vehículo completo, siempre y cuando las partes representen las características esenciales del vehículo"
    },
    {
        question: "Según la Regla de Interpretación 2A, ¿cuál de los siguientes ejemplos puede clasificarse bajo la misma partida que el artículo terminado?",
        options: [
            "Una bicicleta en partes individuales sin ensamblar.",
            "Un televisor sin pantalla, pero con todos los demás componentes ensamblados.",
            "Un computador portátil sin teclado, pero con todos los componentes internos funcionando",
            "Un vehículo con el motor pero sin ruedas ni puertas."
        ],
        correctAnswer: "Un computador portátil sin teclado, pero con todos los componentes internos funcionando"
    },
    {
        question: "Según las Notas Explicativas de la Regla General 5b, ¿cuál de los siguientes ejemplos sería un envase clasificado por separado de las mercancías que contiene?",
        options: [
            "Un estuche de plástico de un solo uso para joyería.",
            "Una caja de cartón desechable que contiene zapatos.",
            "Una bolsa de papel que contiene harina.",
            "Un barril de metal retornable que contiene aceite"
        ],
        correctAnswer: "Un barril de metal retornable que contiene aceite"
    },
    {
        question: "¿Cuál es la condición para que los elementos que son separables sean considerados para la aplicación de la regla general interpretativa 3b?",
        options: [
            "Que estos elementos estén separados unos de otros y no sean complementarios los unos de los otros y que unidos constituyan un todo que pueda venderse normalmente por elementos separados.",
            "Que estos elementos estén adaptados unos a otros y sean complementarios los unos de los otros y que unidos constituyan un todo que no pueda venderse normalmente por elementos separados",
            "Que estos elementos estén adaptados unos a otros y sean complementarios los unos de los otros y que unidos constituyan un todo que pueda venderse normalmente por elementos separados.",
            "Que estos elementos estén separados unos de otros y sean complementarios los unos de los otros y que unidos constituyan un todo que no pueda venderse normalmente por elementos separados."
        ],
        correctAnswer: "Que estos elementos estén adaptados unos a otros y sean complementarios los unos de los otros y que unidos constituyan un todo que no pueda venderse normalmente por elementos separados"
    },
    {
        question: "En el contexto de la Regla de Interpretación 2A, ¿cuál es la importancia de las 'características esenciales' en la clasificación de un artículo incompleto?",
        options: [
            "Las características esenciales determinan si un artículo incompleto puede clasificarse en una partida diferente a la del artículo completo.",
            "Las características esenciales permiten que un artículo incompleto se clasifique como si fuera un artículo completo en la partida correspondiente",
            "Las características esenciales no se consideran en la clasificación de artículos incompletos.",
            "Las características esenciales solo son relevantes para los artículos que están completamente ensamblados."
        ],
        correctAnswer: "Las características esenciales permiten que un artículo incompleto se clasifique como si fuera un artículo completo en la partida correspondiente"
    },
    {
        question: "¿Qué impacto tiene la aplicación de la Regla de Interpretación 2A en el cálculo de aranceles aduaneros para un artículo incompleto pero esencialmente terminado?",
        options: [
            "El arancel se calcula sobre el artículo completo, considerando sus partes esenciales",
            "El arancel se aplica solo a las partes individuales.",
            "No se aplica ningún arancel hasta que el artículo esté ensamblado.",
            "Se otorga una exención arancelaria hasta que el artículo esté completo."
        ],
        correctAnswer: "El arancel se calcula sobre el artículo completo, considerando sus partes esenciales"
    },
    {
        question: "¿Cuál es la condición que deben tener los juegos o surtidos acondicionados para la venta al por menor, para la aplicación de la regla general interpretativa 3B?",
        options: [
            "Que estén constituidas por productos o artículos que se presenten juntos para la satisfacción de una necesidad específica o el ejercicio de una actividad determinada.",
            "Que estén constituidas por lo menos por dos artículos diferentes que, en principio, puedan clasificarse en partidas distintas. No se consideran como un juego o surtido, a efectos de esta Regla, por ejemplo, seis tenedores de ―fondue”.",
            "Que estén acondicionadas de modo que puedan venderse directamente a los utilizadores sin reacondicionar (por ejemplo, cajas, cofres, panoplias).",
            "Todas las anteriores"
        ],
        correctAnswer: "Todas las anteriores"
    },
    {
        question: "¿Qué aspecto no se menciona como criterio para definir la mayor analogía en la clasificación de mercancías?",
        options: [
            "Utilización.",
            "Marca comercial",
            "Características.",
            "Denominación."
        ],
        correctAnswer: "Marca comercial"
    },
    {
        question: "¿Qué significa la frase 'si no son contrarias a los textos de dichas partidas y Notas' en el contexto de la clasificación de mercancías?",
        options: [
            "Que las mercancías deben clasificarse según su origen geográfico sin excepciones.",
            "Que el texto de las partidas y Notas tiene prioridad sobre otras consideraciones al clasificar mercancías",
            "Que cualquier artículo se puede clasificar libremente sin restricciones.",
            "Que las reglas de clasificación son solo recomendaciones."
        ],
        correctAnswer: "Que el texto de las partidas y Notas tiene prioridad sobre otras consideraciones al clasificar mercancías"
    },
    {
        question: "En el contexto de la regla 3a: ¿Qué ocurre cuando dos o más partidas se refieren a diferentes materias que constituyen un producto mezclado o un artículo compuesto?",
        options: [
            "La partida que describe de manera más precisa o completa tendrá prioridad sobre las demás.",
            "Las partidas deben considerarse igualmente específicas, incluso si una describe el producto con mayor precisión",
            "Se debe seleccionar la partida que esté más cercana al inicio del documento.",
            "La partida que se refiera a la mayor cantidad de materias constituyentes del producto tendrá prioridad."
        ],
        correctAnswer: "Las partidas deben considerarse igualmente específicas, incluso si una describe el producto con mayor precisión"
    },
    {
        question: "¿Cómo se determina cuál partida tiene mayor analogía con una mercancía afectada bajo la Regla General 4?",
        options: [
            "Evaluando el costo de importación.",
            "Comparando la cantidad de mercancía.",
            "Comparando con otras mercancías similares basándose en la denominación, características y utilización",
            "Revisando la fecha de fabricación."
        ],
        correctAnswer: "Comparando con otras mercancías similares basándose en la denominación, características y utilización"
    },
    {
        question: "Al aplicar la Regla 3c, si dos partidas tienen el mismo nivel de especificidad en su descripción, ¿qué criterio adicional se puede considerar para desempatar?",
        options: [
            "La opinión del importador sobre la clasificación más adecuada.",
            "Las Notas Explicativas del Sistema Armonizado",
            "El valor unitario de la mercancía.",
            "El país de origen de la mercancía."
        ],
        correctAnswer: "Las Notas Explicativas del Sistema Armonizado"
    },
    {
        question: "En base a la aplicación de la Regla general interpretativa 3b, ¿En que partida se debería clasificar el siguiente enunciado? Los juegos de dibujo compuestos por una regla (partida 90.17), un círculo de cálculo (transportador) (partida 90.17), un compás (partida 90.17), un lápiz (partida 96.09) y un sacapuntas (partida 82.14), que se presenten en un estuche de plástico (partida 42.02):",
        options: [
            "Partida 82.14.",
            "Partida 96.09.",
            "Partida 42.02.",
            "Partida 90.17"
        ],
        correctAnswer: "Partida 90.17"
    },
    {
        question: "¿En qué casos la aplicación estricta de la Regla 3c podría llevar a resultados contrarios a la intención del Sistema Armonizado?",
        options: [
            "Cuando la mercancía es nueva y no existe una partida específica para ella.",
            "Cuando la mercancía tiene un uso principal que no corresponde a la partida asignada por la Regla 3c.",
            "Cuando la aplicación literal de la regla conduce a una clasificación absurda o económicamente inviable",
            "Cuando la mercancía es una mezcla de materiales de diferentes partidas."
        ],
        correctAnswer: "Cuando la aplicación literal de la regla conduce a una clasificación absurda o económicamente inviable"
    },
    {
        question: "¿Cuál es la implicación de la Nota de subpartida 2 del Capítulo 71 en relación con la Regla 6, y cómo afecta la clasificación de las subpartidas 7110.11 y 7110.19?",
        options: [
            "La Nota de subpartida 2 debe ser ignorada cuando clasifique bajo la partida 7110, ya que la Nota 4 B. del Capítulo 71 tiene precedencia absoluta.",
            "La Nota de subpartida 2 amplía el alcance del término 'platino' para incluir otros metales, afectando la clasificación en las subpartidas 7110.11 y 7110.19.",
            "La Nota de subpartida 2 permite la clasificación de platino en cualquier subpartida de la partida 7110, independientemente de las otras Notas de Capítulo.",
            "La Nota de subpartida 2 modifica el alcance del término 'platino', permitiendo una interpretación que excluye la aplicación de la Nota 4 B. del Capítulo 71 para las subpartidas 7110.11 y 7110.19"
        ],
        correctAnswer: "La Nota de subpartida 2 modifica el alcance del término 'platino', permitiendo una interpretación que excluye la aplicación de la Nota 4 B. del Capítulo 71 para las subpartidas 7110.11 y 7110.19"
    },
    {
        question: "Un producto podría clasificarse, en principio, en las partidas 8471 (máquinas para trabajar el metal) y 8473 (herramientas máquina para trabajar la madera). Si al aplicar las Reglas 3a y 3b no se logra desempatar, ¿en cuál partida se clasificaría según la Regla 3c?",
        options: [
            "En la partida 8473, si el producto está diseñado principalmente para trabajar la madera.",
            "En la partida 8471, ya que las máquinas para trabajar el metal suelen ser más complejas.",
            "En la partida 8473, ya que aparece después de la 8471 en el orden numérico del Sistema Armonizado",
            "En la partida que genere el menor arancel para el importador."
        ],
        correctAnswer: "En la partida 8473, ya que aparece después de la 8471 en el orden numérico del Sistema Armonizado"
    },
    {
        question: "Según las Notas Explicativas de la Regla General 5b, ¿en qué caso un envase se clasifica junto con las mercancías que contiene?",
        options: [
            "Cuando se usa exclusivamente para el transporte de mercancías peligrosas.",
            "Cuando es reutilizable.",
            "Cuando no tiene un valor comercial por sí mismo",
            "Cuando es un envase de lujo."
        ],
        correctAnswer: "Cuando no tiene un valor comercial por sí mismo"
    },
    {
        question: "De acuerdo con las Notas Explicativas de la Regla General 5b, ¿cómo se clasifica un envase reutilizable que contiene un perfume?",
        options: [
            "Se clasifica junto con el perfume.",
            "Se clasifica solo si está hecho de materiales reciclables.",
            "Se clasifica por separado del perfume",
            "No se clasifica, ya que es un artículo de lujo"
        ],
        correctAnswer: "Se clasifica por separado del perfume"
    }
];

const questionDisplay = document.getElementById('question-display');
const instantFeedbackDiv = document.getElementById('instant-feedback'); // Nuevo elemento para feedback instantáneo
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const submitButton = document.getElementById('submit-btn');
const resultsContainer = document.getElementById('results-container');
const scoreSpan = document.getElementById('score');
const finalFeedbackDiv = document.getElementById('final-feedback'); // Cambiado de feedbackDiv
const restartButton = document.getElementById('restart-btn');

let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length).fill(null); // Para guardar las respuestas del usuario
let userCorrectness = new Array(questions.length).fill(null); // Para guardar si la respuesta fue correcta (true/false)

function displayQuestion() {
    const questionData = questions[currentQuestionIndex];
    questionDisplay.innerHTML = `
        <p>Pregunta ${currentQuestionIndex + 1} de ${questions.length}: ${questionData.question}</p>
        <div class="options">
            ${questionData.options.map((option, optionIndex) => `
                <label>
                    <input type="radio" name="currentQuestion" value="${option}" ${userAnswers[currentQuestionIndex] === option ? 'checked' : ''}>
                    ${option}
                </label>
            `).join('')}
        </div>
    `;

    // Limpiar feedback instantáneo al mostrar una nueva pregunta
    instantFeedbackDiv.innerHTML = '';
    instantFeedbackDiv.className = ''; // Eliminar clases de estilo

    // Actualizar visibilidad de botones
    prevButton.classList.toggle('hidden', currentQuestionIndex === 0);
    nextButton.classList.toggle('hidden', currentQuestionIndex === questions.length - 1);
    submitButton.classList.toggle('hidden', currentQuestionIndex !== questions.length - 1);
}

function checkAndSaveAnswer() {
    const selectedOption = document.querySelector('input[name="currentQuestion"]:checked');
    const questionData = questions[currentQuestionIndex];
    let isCorrect = false;
    let userAnswerText = '';

    if (selectedOption) {
        userAnswerText = selectedOption.value;
        if (userAnswerText === questionData.correctAnswer) {
            isCorrect = true;
            instantFeedbackDiv.innerHTML = '¡Correcto!';
            instantFeedbackDiv.className = 'correct';
        } else {
            instantFeedbackDiv.innerHTML = `Incorrecto. La respuesta correcta era: <span class="correct-option">${questionData.correctAnswer}</span>`;
            instantFeedbackDiv.className = 'incorrect';
        }
    } else {
        instantFeedbackDiv.innerHTML = 'No seleccionaste ninguna respuesta.';
        instantFeedbackDiv.className = 'incorrect'; // Considerar como incorrecto si no hay respuesta
    }

    userAnswers[currentQuestionIndex] = userAnswerText;
    userCorrectness[currentQuestionIndex] = isCorrect;

    // Deshabilitar opciones después de responder
    const optionsInputs = questionDisplay.querySelectorAll('input[name="currentQuestion"]');
    optionsInputs.forEach(input => input.disabled = true);
}

function goToNextQuestion() {
    // Solo verificar y guardar si no se ha hecho ya para esta pregunta
    if (userCorrectness[currentQuestionIndex] === null) { // Si no se ha respondido aún
        checkAndSaveAnswer();
    }

    // Esperar un momento para que el usuario vea el feedback antes de pasar
    setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            displayQuestion();
        } else {
            // Si es la última pregunta y se hace clic en Siguiente, mostrar resultados
            showResults();
        }
    }, 1500); // Espera 1.5 segundos
}

function goToPrevQuestion() {
    // No se muestra feedback al ir hacia atrás, solo se navega
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function showResults() {
    // Asegurarse de que la última pregunta esté verificada
    if (userCorrectness[currentQuestionIndex] === null) {
        checkAndSaveAnswer();
    }

    let score = 0;
    finalFeedbackDiv.innerHTML = ''; // Limpiar feedback final

    questions.forEach((questionData, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userCorrectness[index];

        const feedbackP = document.createElement('p');
        feedbackP.innerHTML = `<strong>Pregunta ${index + 1}:</strong> ${questionData.question}<br>`;

        if (isCorrect) {
            score++;
            feedbackP.classList.add('correct-answer');
            feedbackP.innerHTML += `Tu respuesta: <span class="correct-option">${userAnswer}</span> (Correcta)`;
        } else {
            feedbackP.classList.add('incorrect-answer');
            if (userAnswer) {
                feedbackP.innerHTML += `Tu respuesta: <span class="incorrect-selection">${userAnswer}</span> (Incorrecta)<br>`;
            } else {
                feedbackP.innerHTML += `No respondiste.<br>`;
            }
            feedbackP.innerHTML += `Respuesta correcta: <span class="correct-option">${questionData.correctAnswer}</span>`;
        }
        finalFeedbackDiv.appendChild(feedbackP);
    });

    scoreSpan.textContent = `${score} / ${questions.length}`;
    resultsContainer.classList.remove('hidden');
    document.getElementById('quiz-container').classList.add('hidden'); // Oculta el contenedor del quiz
}

function restartQuiz() {
    currentQuestionIndex = 0;
    userAnswers.fill(null); // Reinicia las respuestas
    userCorrectness.fill(null); // Reinicia la corrección
    resultsContainer.classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden'); // Muestra el contenedor del quiz
    displayQuestion();
}

// Event Listeners
prevButton.addEventListener('click', goToPrevQuestion);
nextButton.addEventListener('click', goToNextQuestion);
submitButton.addEventListener('click', showResults);
restartButton.addEventListener('click', restartQuiz);

// Initial display
displayQuestion();