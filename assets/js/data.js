/**
 * Portfolio - Datos de contenido
 * Las secciones de Habilidades, Portfolio y Testimonios se renderizan
 * dinámicamente desde este archivo en assets/js/main.js
 */
const PORTFOLIO_DATA = {
  skills: [
    { name: "HTML", level: 80 },
    { name: "CSS", level: 70 },
    { name: "JavaScript", level: 70 },
    { name: "SQL Scripting", level: 80 },
    { name: "Git", level: 70 },
    { name: "Investigación y Solución", level: 80 },
    { name: "PHP", level: 80 },
    { name: "Laravel", level: 70 },
    { name: "MySQL", level: 90 },
    { name: "Trabajo en Equipo", level: 90 },
    { name: "Inglés", level: 70 },
    { name: "Implementación API REST", level: 70 }
  ],

  portfolio: [
    {
      title: "EINA - ERP Concesionario",
      image: "assets/img/portfolio/eina2.png",
      url: "https://eina.sinigual.com/login",
      urlTitle: "EINA - Barcelona",
      stack: [
        { name: "Laravel 12", file: "assets/img/stack/laravel.svg" },
        { name: "opencode", file: "assets/img/stack/opencode.svg" },
        { name: "MySQL", file: "assets/img/stack/mysql.svg" },
        { name: "MariaDB", file: "assets/img/stack/mariadb.svg" },
        { name: "PostgreSQL", file: "assets/img/stack/postgresql.svg" },
        { name: "Vue 3", file: "assets/img/stack/vue.svg" },
        { name: "Angular 22", file: "assets/img/stack/angular.svg" }
      ]
    },
    {
      title: "Mini Dev JS - Juego de Memoria",
      image: "assets/img/portfolio/portfoliomuro.jpg",
      url: "https://mariodemoder.github.io/juegodememoria-JS/",
      urlTitle: "Ver proyecto",
      stack: [
        { name: "JavaScript", file: "assets/img/stack/javascript.svg" },
        { name: "HTML", file: "assets/img/stack/html5.svg" },
        { name: "CSS", file: "assets/img/stack/css3.svg" }
      ]
    },
    {
      title: "Ayuntamiento de Mercedes",
      image: "assets/img/portfolio/mercedesciudaddetodos.jpg",
      url: "http://nw.mercedes.gob.ar/",
      urlTitle: "Sitio del municipio",
      stack: [
        { name: "Laravel 12", file: "assets/img/stack/laravel.svg" },
        { name: "opencode", file: "assets/img/stack/opencode.svg" },
        { name: "MySQL", file: "assets/img/stack/mysql.svg" },
        { name: "MariaDB", file: "assets/img/stack/mariadb.svg" },
        { name: "PostgreSQL", file: "assets/img/stack/postgresql.svg" },
        { name: "Vue 3", file: "assets/img/stack/vue.svg" },
        { name: "Bootstrap", file: "assets/img/stack/bootstrap.svg" }
      ]
    },
    {
      title: "Tedear S.A.",
      image: "assets/img/portfolio/logo-tedear.png",
      url: "http://www.tedear.com.ar/",
      urlTitle: "Tedear S.A.",
      stack: [
        { name: "Visual Studio .NET", file: "assets/img/stack/dotnet.svg" },
        { name: "SQL Server", file: "assets/img/stack/sqlserver.svg" }
      ]
    },
    {
      title: "Remediar - Ministerio de Salud",
      image: "assets/img/portfolio/Remediar.jpg",
      url: "https://www.argentina.gob.ar/salud/remediar",
      urlTitle: "Ver detalle",
      stack: [
        { name: "Visual Studio .NET", file: "assets/img/stack/dotnet.svg" },
        { name: "SQL Server", file: "assets/img/stack/sqlserver.svg" }
      ]
    },
    {
      title: "Proyectos en GitHub",
      image: "assets/img/portfolio/githubMariodemoder.png",
      url: "https://github.com/mariodemoder",
      urlTitle: "Ver repositorios",
      stack: [
        { name: "Git / GitHub", file: "assets/img/stack/github.svg" }
      ]
    },
    {
      title: "PokeSearch - Ejemplo Full Stack",
      image: "assets/img/portfolio/github.jpg",
      url: "https://github.com/mariodemoder/pokesearch",
      urlTitle: "Ver repositorio",
      stack: [
        { name: "Laravel 12", file: "assets/img/stack/laravel.svg" },
        { name: "Vue 3", file: "assets/img/stack/vue.svg" },
        { name: "Docker", file: "assets/img/stack/docker.svg" }
      ]
    },
    {
      title: "CRUD LocalStorage JS",
      image: "assets/img/portfolio/github.jpg",
      url: "https://github.com/mariodemoder/crudLocalJS",
      urlTitle: "Ver repositorio",
      stack: [
        { name: "JavaScript", file: "assets/img/stack/javascript.svg" },
        { name: "Bootstrap", file: "assets/img/stack/bootstrap.svg" }
      ]
    },
    {
      title: "Golondrina - Trámites",
      image: "assets/img/portfolio/github.jpg",
      url: "https://mariodemoder.github.io/golondrina/",
      urlTitle: "Ver proyecto",
      stack: [
        { name: "HTML", file: "assets/img/stack/html5.svg" },
        { name: "CSS", file: "assets/img/stack/css3.svg" },
        { name: "JavaScript", file: "assets/img/stack/javascript.svg" },
        { name: "Bootstrap", file: "assets/img/stack/bootstrap.svg" }
      ]
    }
  ],

  testimonials: [
    {
      name: "Albert Garrell Clusella",
      role: "CEO en Sinigual",
      image: "assets/img/testimonials/albert.png",
      text: "Mario ha formado parte del equipo de desarrollo de Sinigual, trabajando en EINA, nuestro ERP para talleres y concesionarios. Como responsable del equipo, puedo valorar de primera mano su trabajo durante este tiempo. Lo que más destacaría es una cualidad poco frecuente en un perfil técnico: comprende el negocio. No se limita a implementar los requisitos que recibe, sino que pregunta el porqué, identifica implicaciones que no estaban sobre la mesa y propone alternativas mejores. Su capacidad de análisis hace que los problemas lleguen al código correctamente planteados. Técnicamente es un desarrollador Laravel sólido, con criterio propio y con una preocupación real por la mantenibilidad del código a largo plazo. En el plano personal, es una persona comprometida con su trabajo y con el equipo, respetuosa en el trato y con un carácter que contribuye a un buen ambiente, también en los momentos de mayor dificultad. Para cualquier equipo que valore el rigor técnico y la implicación con el proyecto, Mario es un muy buen fichaje."
    },
    {
      name: "Duncan Guijo Fernández",
      role: "Technical Team Lead en Sinigual | Backend Development, Software Architecture",
      image: "assets/img/testimonials/duncan.png",
      text: "He tenido el placer de trabajar y aprender de Mario y siempre ha destacado por su profesionalidad y su capacidad para entender el producto, aportando soluciones que van más allá del desarrollo con una visión general de la situación de la empresa en cada momento. Como desarrollador, tiene una gran habilidad para construir soluciones escalables en entornos de entrega continua y un excelente dominio de las bases de datos."
    },
    {
      name: "Albano Acenso",
      role: "Digital Marketing | Paid Media",
      image: "assets/img/testimonials/albano.jpg",
      text: "Mario es un colaborador valioso, ya que siempre busca crear un ambiente agradable y de confianza con su equipo de trabajo. Sus conocimientos en HTML, CSS, JavaScript, MySQL Scripting, PHP, Laravel/PHP y MySQL son impresionantes, y es evidente que ha invertido tiempo y esfuerzo en mejorar sus habilidades. En resumen, Mario Alejandro Muñoz es un profesional excepcional y una persona de confianza. Sin duda alguna, es un activo valioso para cualquier equipo de trabajo y estoy seguro de que seguirá teniendo éxito en su carrera."
    },
    {
      name: "Osvaldo Falabella",
      role: "Consultant at INET - Ing. Profesor UTN",
      image: "assets/img/testimonials/osvalodfallabella.jpg",
      text: "Mario Muñoz ha pasado satisfactoriamente por nuestra cátedra (Redes de Información UTN FRLP), mostrando un muy buen desempeño académico, con participación activa en las clases y en los laboratorios, como así también en los trabajos de desarrollo grupal. También puedo acotar que tiene muy buenas actitudes dentro del grupo en el cual participó y además en la búsqueda de información innovadora."
    },
    {
      name: "Pablo Alejandro Adorno",
      role: "Marketing digital | Paid Media | Websites | E-commerce",
      image: "assets/img/testimonials/pabloadorno.jpg",
      text: "Necesitábamos un software que cubriera las necesidades de gestión de reclamos para el área técnica y atender mejor a los usuarios y llevar un mejor control interno. El trato y la calidad a lo largo de todo el proceso fue perfecto. Cuesta encontrar profesionales que se adapten tan bien a lo que necesitas!"
    },
    {
      name: "Ezequiel Russo",
      role: "Sr. Oracle DBA",
      image: "assets/img/testimonials/ezerusso.jpg",
      text: "Mario es un colaborador que ha aportado gran valor al equipo de trabajo. Siempre con una actitud positiva y resolutiva ante los problemas. He tenido la suerte de contar con su ayuda en múltiples proyectos y su aporte ha sido siempre valorable."
    },
    {
      name: "Silvina Lopez",
      role: "Comercial inmobiliario - Emprendedora",
      image: "assets/img/testimonials/sillopez.jpg",
      text: "Mario es un excelente profesional, me ha dado soporte en un microemprendimiento personal y estoy encantada de haberlo conocido. Llegará muy lejos tanto en lo personal como en lo profesional."
    },
    {
      name: "Gustavo Schuster",
      role: "Data Engineer",
      image: "assets/img/testimonials/gustavo.jfif",
      text: "Mario es un profesional de primera. Además de sus gran capacidad técnica y profesional es colaborativo, solidario y dispuesto al trabajo en equipo. Humanamente es un compañero espectacular, con muy buenas relaciones interpersonales y siempre con ganas de ayudar a los compañeros."
    },
    {
      name: "Tomás Andrés Belforte",
      role: "Project Manager | Gerente de Proyectos | SAP Business One",
      image: "assets/img/testimonials/tomasBelforte.jpg",
      text: "Mario is a very proactive person who has a deeply understanding of many problems and knows how to solve them. I've worked with him and it was a great experience."
    }
  ]
};
