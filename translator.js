function getTranslatorSheet()
{
  const translatorSheet = [
    // --------------    site    --------------
    {
      'id':'site-navbar-t1',
      'langs':{
        'es':'Inicio',
        'en':'Home'
      }
    },
    {
      'id':'site-navbar-t2',
      'langs':{
        'es':'Nosotros',
        'en':'About us'
      }
    },
    {
      'id':'site-navbar-t3',
      'langs':{
        'es':'Reglas',
        'en':'Rules'
      }
    },
    {
      'id':'site-navbar-t4',
      'langs':{
        'es':'Español',
        'en':'English'
      }
    },
    {
      'id':'site-footer-t1',
      'langs':{
        'es':'© 2024 Rooster Games. Todos los derechos reservados.',
        'en':'© 2024 Rooster Games. All rights reserved.'
      }
    },
    // ----------------------------------------
    // -------------- index.html --------------
    {
      'id':'index-header-t1',
      'langs':{
        'es':'Rooster Games',
        'en':'Rooster Games'
      }
    },{
      'id':'index-header-t2',
      'langs':{
        'es':'Desarrollo de videojuegos',
        'en':'Game development'
      }
    },{
      'id':'index-header-t3',
      'langs':{
        'es':'Tu club universitario en desarrollo de videojuegos',
        'en':'Your college club for game development'
      }
    },{
      'id':'index-header-t4',
      'langs':{
        'es':'Entra al discord',
        'en':'Hop on discord'
      }
    },{
      'id':'index-join-t1',
      'langs':{
        'es':'Únete',
        'en':'Join us'
      }
    },{
      'id':'index-join-t2',
      'langs':{
        'es':'En Rooster Games, nos apasiona la creación de videojuegos y queremos que formes parte de nuestra comunidad.',
        'en':'We at Rooster games are pasionate about videogames and would like you to join our comunity.'
      }
    },{
      'id':'index-join-t3',
      'langs':{
        'es':'No importa tu experiencia o tu especialización',
        'en':'No matter your experience'
      }
    },{
      'id':'index-join-t4',
      'langs':{
        'es':', ¡todos son bienvenidos!',
        'en':', everyone is welcome!'
      }
    },{
      'id':'index-join-t10',
      'langs':{
        'es':'No tenemos un proceso de inscripción formal ni papeleo complicado. Todo lo que necesitas hacer es ',
        'en':'No sign up process is required, all you have to do is '
      }
    },{
      'id':'index-join-t11',
      'langs':{
        'es':'aceptar las ',
        'en':'accept the club '
      }
    },{
      'id':'index-join-t12',
      'langs':{
        'es':'reglas',
        'en':'rules'
      }
    },{
      'id':'index-join-t13',
      'langs':{
        'es':' del club y contactarnos',
        'en':' and contact us'
      }
    },{
      'id':'index-join-t14',
      'langs':{
        'es':'. Puedes hacerlo de dos maneras:',
        'en':'. You can do it by one of the following ways:'
      }
    },{
      'id':'index-join-15',
      'langs':{
        'es':'Discord:',
        'en':'Discord:'
      }
    },{
      'id':'index-join-16',
      'langs':{
        'es':'Únete a nuestro servidor y preséntate en el canal de bienvenida.',
        'en':'Join our server and present yourself in the welcome channel.'
      }
    },{
      'id':'index-join-17',
      'langs':{
        'es':'Reuniones: ',
        'en':'Meetings: '
      }
    },{
      'id':'index-join-18',
      'langs':{
        'es':'Te damos la bienvenida a nuestras reuniones semanales cada ',
        'en':'You are welcome to join our weekly meetings, every '
      }
    },{
      'id':'index-join-19',
      'langs':{
        'es':'[tal dia] a las [tal hora] ',
        'en':'[this day] at [this time].'
      }
    },{
      'id':'index-join-20',
      'langs':{
        'es':'de la tarde.',
        'en':''
      }
    },{
      'id':'index-join-30',
      'langs':{
        'es':'¡Esperamos verte pronto en Rooster Games, donde juntos daremos vida a emocionantes experiencias de juego!',
        'en':'We hope to see you soon at Rooster Games, where together we\'ll bring to life exciting gaming experiences!'
      }
    },
    // ----------------------------------------
    // -------------- about.html --------------
    {
      'id':'about-header-t1',
      'langs':{
        'es':'Sobre Nosotros',
        'en':'About Us'
      }
    },{
      'id':'about-leo-t1',
      'langs':{
        'es':'Soy aficionado de los videojuegos con experiencia en desarrollo de software. Estoy aquí para ayudar a superar desafíos técnicos y hacer realidad sus ideas. Estoy abierto a aprender de cada uno de ustedes (soy consciente de que no lo sé todo). Espero me consideren un recurso y constuyamos algo cool.',
        'en':'I\'m a fan of videogames with experience in software development. I\'m here to help you overcome technical chalenges and make your visions come true. I\'m open to learn of every one of you (I know, I don\'t know it all). Hope you would consider me a resource and build something cool.'
      }
    },{
      'id':'about-leslie-t1',
      'langs':{
        'es':'Como líder del club, mi compromiso es respaldarte y acompañarte en cada etapa del proceso de desarrollo de videojuegos. Con experiencia profesional en un MMORPG, estoy preparada para atender tus consultas y necesidades. Nuestro club une talento y pasión por los videojuegos en la comunidad universitaria. Buscamos colaborar, aprender y alcanzar metas significativas en el ámbito del desarrollo de videojuegos. Te invito a acercarte con confianza ante cualquier duda.',
        'en':'As the leader of the club, my commitment is to support and accompany you at every stage of the video game development process. With professional experience in an MMORPG, I am prepared to address your inquiries and needs. Our club brings together talent and passion for video games within the university community. We aim to collaborate, learn, and achieve meaningful goals in the field of game development. I invite you to approach with confidence for any questions you may have.'
      }
    }
    // ----------------------------------------
  ]

  return translatorSheet;
}

function getTranslator()
{
  let translator = new MultiLanguage();
  translator.addSheet(getTranslatorSheet());

  return translator;
}

function setLanguage(languaje)
{
  localStorage.setItem('rgs-language', languaje);
  getTranslator().translate(getTranslatorSheet(), languaje);
}

document.addEventListener("DOMContentLoaded", function(event) {
  if (localStorage.getItem("rgs-language") != null)
  {
    const storedLang = localStorage.getItem("rgs-language");
    const siteLang = document.getElementById('site-navbar-t4').innerHTML == 'Español' ? 'es' : 'en';

    //console.log(storedLang, siteLang)

    if (storedLang != siteLang)
    {
      setLanguage(storedLang);
    }
  }
});