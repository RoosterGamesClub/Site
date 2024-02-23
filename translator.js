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

    console.log(storedLang, siteLang)

    if (storedLang != siteLang)
    {
      setLanguage(storedLang);
    }
  }
});