module.exports = {
  tutorialSidebar: [
    // Sección de Análisis
    {
      type: 'category',
      label: 'Análisis',
      link: {
        type: 'doc',
        id: 'analisis/index',
      },
      items: [
        'analisis/flujo-negocio',
        'analisis/requisitos',
      ],
    },
    // Sección de Propuesta
    {
      type: 'category',
      label: 'Propuesta',
      link: {
        type: 'doc',
        id: 'propuesta/index', // Corregido: antes tenía guion
      },
      items: [
        'propuesta/flujo-solucion',
        'propuesta/acuerdos-tradeoffs',
        'propuesta/elevator-pitch',
        'propuesta/junta-directiva',
        'propuesta/documento-postmortem',
      ],
    },
    // Sección de Recolección de Información
    {
      type: 'category',
      label: 'Recolección de Información',
      link: {
        type: 'doc',
        id: 'recoleccion-informacion/index',
      },
      items: [
        'recoleccion-informacion/justificacion', // Corregido: faltaba la "j" al inicio
        'recoleccion-informacion/preguntas',
        'recoleccion-informacion/evidencias',
      ],
    },
  ],
};