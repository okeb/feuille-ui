<script lang="ts">
  import "virtual:windi.css"
	import { onMount } from 'svelte';

  let mode:boolean = true

  const toggleMode = () => {
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      }
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      }
    }
    mode = !mode
  }


	const hotkeys = [
    {
      id: "Docs",
      title: "Ouvrir la documentation",
      section: "Suggestion",
      hotkey: "ctrl+d",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M21 22H3V2h12v2h2v2h2v2h2v14zM17 6h-2v2h2V6zM5 4v16h14V10h-6V4H5zm8 12H7v2h6v-2zm-6-4h10v2H7v-2zm4-4H7v2h4V8z"/></svg>&nbsp;&nbsp;&nbsp;`,
      children: ['getting started','installation','configuration','naming'],
      handler: () => {
        // open menu if closed. Because you can open directly that menu from it's hotkey
        ninja.open({ parent: 'Docs' });
        // if menu opened that prevent it from closing on select that action, no need if you don't have child actions
        return {keepOpen: true};
      },
    },
    {
      id: "Accueil",
      title: "Allez à l'accueil",
      section: "Suggestion",
      hotkey: "ctrl+a",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M13 2h-2v6h2V2zm0 14h-2v6h2v-6zm9-5v2h-6v-2h6zM8 13v-2H2v2h6zm7-6h2v2h-2V7zm4-2h-2v2h2V5zM9 7H7v2h2V7zM5 5h2v2H5V5zm10 12h2v2h2v-2h-2v-2h-2v2zm-8 0v-2h2v2H7v2H5v-2h2z"/></svg>&nbsp;&nbsp;&nbsp;`,
      handler: () => {
        document.getElementById("home").click();
      }
    },
    {
      id: "signin",
      title: "Se connecter",
      section: "Suggestion",
      hotkey: "ctrl+l",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M5 3h14v2H5V3zm0 16H3V5h2v14zm14 0v2H5v-2h14zm0 0h2V5h-2v14zM10 8H8v2h2V8zm4 0h2v2h-2V8zm1 5H9v2h6v-2z"/></svg>&nbsp;&nbsp;&nbsp;`,
      handler: () => {
        document.getElementById("signin").click();
      }
    },
    {
      id: "feedback",
      title: "Envoyer un commentaire...",
      hotkey: "ctrl+J",
      section: "Aide",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M22 2H2v14h2V4h16v12h-8v2h-2v2H8v-4H2v2h4v4h4v-2h2v-2h10V2z"/></svg>&nbsp;&nbsp;&nbsp;`,
      handler: () => {
        document.getElementById("signin").click();
      }
    },
    {
      id: "bug",
      title: "Signaler un bug...",
      hotkey: "ctrl+q",
      section: "Aide",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M8 2h2v4h4V2h2v4h2v3h2v2h-2v2h4v2h-4v2h2v2h-2v3H6v-3H4v-2h2v-2H2v-2h4v-2H4V9h2V6h2V2Zm8 6H8v3h8V8Zm-5 5H8v7h3v-7Zm2 7h3v-7h-3v7ZM4 9H2V7h2v2Zm0 10v2H2v-2h2Zm16 0h2v2h-2v-2Zm0-10V7h2v2h-2Z"/></svg>&nbsp;&nbsp;&nbsp;`,
      handler: () => {
        document.getElementById("signin").click();
      }
    },
    {
      id: "contact",
      title: "Contacter le support...",
      hotkey: "ctrl+h",
      section: "Aide",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M22 4H2v16h20V4zM4 18V6h16v12H4zM8 8H6v2h2v2h2v2h4v-2h2v-2h2V8h-2v2h-2v2h-4v-2H8V8z"/></svg>&nbsp;&nbsp;&nbsp;`,
      handler: () => {
        document.getElementById("signin").click();
      }
    },
    // {
    //   id: "logout",
    //   title: "Se deconnecter",
    //   hotkey: "ctrl+shift+l",
    //   icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M10 3H8v2H6v2h2V5h2v2h2v2h-2v2H8v2H6v2H4v-2H2v2h2v2h2v-2h4v2h2v2h-2v2h2v-2h2v-2h-2v-4h2v-2h2v2h2v2h2v-2h2v-2h-2v2h-2v-2h-2V9h2V5h-4v2h-2V5h-2V3z"/></svg>&nbsp;&nbsp;&nbsp;`,
    //   handler: () => {
    //     document.getElementById("signin").click();
    //   }
    // },
    // {
    //   id: "forgetpassword",
    //   title: "Mot de passe oublié ?",
    //   hotkey: "ctrl+shift+p",
    //   icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M15 2H9v2H7v4H4v14h16V8h-3V4h-2V2zm0 2v4H9V4h6zm-6 6h9v10H6V10h3zm4 3h-2v4h2v-4z"/></svg>&nbsp;&nbsp;&nbsp;`,
    //   handler: () => {
    //     document.getElementById("signin").click();
    //   }
    // },
    // {
    //   id: "signup",
    //   title: "S'inscrire",
    //   hotkey: "ctrl+shift+i",
    //   icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M18 2h-6v2h-2v6h2V4h6V2zm0 8h-6v2h6v-2zm0-6h2v6h-2V4zM7 16h2v-2h12v2H9v4h12v-4h2v6H7v-6zM3 8h2v2h2v2H5v2H3v-2H1v-2h2V8z"/></svg>&nbsp;&nbsp;&nbsp;`,
    //   handler: () => {
    //     document.getElementById("signin").click();
    //   }
    // },
    // {
    //   id: "newsletter",
    //   title: "S'inscrire à la newsletter",
    //   hotkey: "ctrl+shift+n",
    //   icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M4 4h18v10h-2V6H4v12h8v2H2V4h2zm4 4H6v2h2v2h2v2h4v-2h2v-2h2V8h-2v2h-2v2h-4v-2H8V8zm6 10h2v2h-2v-2zm4 2v2h-2v-2h2zm2-2h-2v2h2v-2zm0 0v-2h2v2h-2z"/></svg>&nbsp;&nbsp;&nbsp;`,
    //   handler: () => {
    //     document.getElementById("signin").click();
    //   }
    // },
    {
      id: "Theme",
      title: "theme...",
      hotkey: 'ctrl+t',
      section: 'Paramètres',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M8 3h8v2H8V3zm0 2H6v4H4v12h16V9h-2V5h-2v4H8V5zm8 6h2v8H6v-8h2v6h2v-4h2v2h2v-2h2v-2z"/></svg>&nbsp;&nbsp;&nbsp;`,
      children: [
        {
          id: "Light Theme",
          title: "Passez en Mode Light",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M13 0h-2v4h2V0ZM0 11v2h4v-2H0Zm24 0v2h-4v-2h4ZM13 24h-2v-4h2v4ZM8 6h8v2H8V6ZM6 8h2v8H6V8Zm2 10v-2h8v2H8Zm10-2h-2V8h2v8Zm2-14h2v2h-2V2Zm0 2v2h-2V4h2Zm2 18h-2v-2h2v2Zm-2-2h-2v-2h2v2ZM4 2H2v2h2v2h2V4H4V2ZM2 22h2v-2h2v-2H4v2H2v2Z"/></svg>&nbsp;&nbsp;&nbsp;`,
          hotkey: "ctrl+shift+l",
          handler: () => {
            localStorage.getItem('color-theme')
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            mode = false
          }
        },
        {
          id: "Dark Theme",
          title: "Passez en mode Dark",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M6 2h8v2h-2v2h-2V4H6V2ZM4 6V4h2v2H4Zm0 10H2V6h2v10Zm2 2H4v-2h2v2Zm2 2H6v-2h2v2Zm10 0v2H8v-2h10Zm2-2v2h-2v-2h2Zm-2-4h2v4h2v-8h-2v2h-2v2Zm-6 0v2h6v-2h-6Zm-2-2h2v2h-2v-2Zm0 0V6H8v6h2Z"/></svg>&nbsp;&nbsp;&nbsp;`,
          hotkey: "ctrl+shift+d",
          handler: () => {
            localStorage.getItem('color-theme')
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            mode = true
          }
        }
      ]
    },
    {
          id:'getting started',
          title: 'Getting Started',
          parent: 'Docs',
          handler: () => {
            document.getElementById("docs").click();
          }
        },{
          id:'installation',
          title: 'Installation',
          parent: 'Docs',
        },{
          id:'configuration',
          title: 'Configuration',
          parent: 'Docs',
        },{
          id:'naming',
          title: 'ABEM Naming',
          parent: 'Docs',
        },
  ];
	onMount(async () => {
    const ninja = document.querySelector("ninja-keys");
    ninja.data = hotkeys;
	});
</script>

<nav class="backdrop-blur-lg backdrop-filter bg-white/30 dark:bg-black/30  py-3 <md:px-8 px-12 transition-colors fixed w-full">
  <div class="container grid grid-cols-2 <lg:grid-cols-3 mx-auto">
    <section class="flex content-center">
      <a href="/" class="">
        <img src="/image/Feuilleui_logo_minimalist.png" alt="logo de feuille UI" class="transition-all <md:(h-8 py-1 my-1) h-10 p-0 hidden dark:inline-block">
        <!-- <img src="/image/Feuilleui_logo_withBorder-large.png" alt="logo de feuille UI" class="transition-all h-10 p-0 hidden dark:group-hover:inline-block group-hover:hidden"> -->
        <img src="/image/Feuilleui_logo-slim-sm.png" alt="logo de feuille UI" class="transition-all <md:(h-8 py-1 my-1) h-10 p-0 dark:hidden">
        <!-- <img src="/image/Feuilleui_logo-large.png" alt="logo de feuille UI" class="transition-all h-10 p-0 hidden group-hover:inline-flex dark:hidden dark:group-hover:hidden"> -->
      </a>

      <!-- <span class="my-auto text-xs rounded px-1.5 py-0.5 bg-[rgba(0,255, 0,.031)] text-[rgba(0,255,0,.824)] border-[rgba(0,255,0,.226)] inline-flex items-center justify-center border font-medium">Beta</span> -->

      <!-- <span class="my-auto text-xs rounded px-1.5 py-0.5 bg-[rgba(0,187,255,.031)] text-[rgba(0,229,254,.824)] border-[rgba(2,200,255,.226)] inline-flex items-center justify-center border font-medium">Beta</span> -->

      <div class="flex content-center my-auto font-light text-[0.7rem] ml-7 group cursor-pointer <lg:hidden">
        <span class="my-auto pb-0.5">Appuyer sur </span>
        <span class="transition-all group-hover:hidden mr-0.5 ml-1.5 my-auto text-xs rounded p-0.5 dark:bg-white/10 bg-black/10 dark:border-[rgba(255,255,255,.226)] border-black/10 inline-flex items-center justify-center border font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path fill="currentColor" d="M4 2H2v8h2V2zm16 0h2v8h-2V2zm-6 6h-4V2H4v2h4v4H4v2h4v4H4v2h4v4H4v2h6v-6h4v6h2v-6h4v-2h-4v-4h4V8h-4V2h-2v6zm-4 6v-4h4v4h-4zM20 2h-4v2h4V2zM2 14h2v8H2v-8zm14 6h4v2h-4v-2zm6-6h-2v8h2v-8z"/></svg>
        </span>
        <span class="transition-all hidden group-hover:inline-flex mr-0.5 ml-1.5 my-auto text-xs rounded p-0.5 bg-[rgba(0,255, 0,.031)] border-[rgba(0,255,0,.226)] inline-flex items-center justify-center border font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path fill="rgba(0,255,0,.824)" d="M4 2H2v8h2V2zm16 0h2v8h-2V2zm-6 6h-4V2H4v2h4v4H4v2h4v4H4v2h4v4H4v2h6v-6h4v6h2v-6h4v-2h-4v-4h4V8h-4V2h-2v6zm-4 6v-4h4v4h-4zM20 2h-4v2h4V2zM2 14h2v8H2v-8zm14 6h4v2h-4v-2zm6-6h-2v8h2v-8z"/></svg>
        </span> 
        <span class="transition-all group-hover:hidden ml-0.5 mr-1.5 my-auto text-gray-700 dark:text-white rounded px-1 py-0.5 dark:bg-white/10 border-black/10 bg-black/10 dark:border-[rgba(255,255,255,.226)] inline-flex items-center justify-center border font-medium">
          K
        </span> 
        <span class="transition-all group-hover:inline-flex hidden ml-0.5 mr-1.5 my-auto text-[rgba(0,255,0,.824)] rounded px-1 py-0.5 bg-[rgba(0,255, 0,.031)] border-[rgba(0,255,0,.226)] inline-flex items-center justify-center border font-medium">
          K
        </span> 
        <span class="my-auto pb-0.5"> pour faire une recherche</span>
      </div>
    </section>
    <section class="flex justify-end content-center gap-8 <md:gap-7 <lg:col-span-2">

      <a id="home" href="/" class="a_navBar__item  <md:hidden">Get&nbsp;started</a>
      <a id="docs" href="/documentation" class="a_navBar__item  <md:inline-flex hidden">
        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"><path fill="currentColor" d="M21 22H3V2h12v2h2v2h2v2h2v14zM17 6h-2v2h2V6zM5 4v16h14V10h-6V4H5zm8 12H7v2h6v-2zm-6-4h10v2H7v-2zm4-4H7v2h4V8z"/></svg>&nbsp; -->
        Documentation
      </a>

      <a id="docs" href="/documentation" class="a_navBar__item  <md:hidden">Documentation&nbsp;API</a>

      <a id="login" href="/" class="a_navBar__item <md:hidden">Connexion</a>

      <!-- <a id="menu" href="/" class="a_navBar__item hidden <md:inline-flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"/></svg>
      </a> -->

      <a id="github" href="/" class="a_navBar__item <md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" class="my-auto inline-flex"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
      </a>

      <!-- <div class="group my-auto flex cursor-pointer hidden <md:inline-flex">
        <div class="group-hover:hidden flex justify-start border-1 border-gray-100/40  content-center my-auto gap-2 dark:text-white font-light rounded-lg py-2 px-2.5 transition-all" style="box-shadow:-4px 0px 5px rgba(5, 162, 194, 0.3), 0px 0px 7px rgba(112, 225, 200, 0.3), 4px 0px 7px rgba(255, 178, 36, 0.3)">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="rgba(156, 163, 175)" d="M6 2h8v2H6V2zM4 6V4h2v2H4zm0 8H2V6h2v8zm2 2H4v-2h2v2zm8 0v2H6v-2h8zm2-2h-2v2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2zm0-8h2v8h-2V6zm0 0V4h-2v2h2z"/></svg>
          <span class="text-xs text-gray-400 py-0 my-auto transition-all">Recherche...</span>
        </div>
        <div class="hidden group-hover:flex justify-start content-center my-auto gap-2 dark:text-white font-light rounded-lg border-1 border-gray-100/40 py-2 px-2.5 transition-all" style="box-shadow:-8px 0px 15px rgba(5, 162, 194, 0.3), 0px 0px 20px rgba(112, 225, 200, 0.3), 8px 0px 20px rgba(255, 178, 36, 0.3)">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M6 2h8v2H6V2zM4 6V4h2v2H4zm0 8H2V6h2v8zm2 2H4v-2h2v2zm8 0v2H6v-2h8zm2-2h-2v2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2zm0-8h2v8h-2V6zm0 0V4h-2v2h2z"/></svg>
          <span class="text-xs bg-clip-text bg-gradient-to-tl from-current via-light-800 to-gray-500 py-0 my-auto">Recherche...</span>
        </div>
      </div>  -->

      <div class="a_navBar__item" on:click={toggleMode} on:keypress={() => {console.log(mode)}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" class="transition-all hidden dark:inline-flex my-auto"><path fill="currentColor" d="M13 0h-2v4h2V0ZM0 11v2h4v-2H0Zm24 0v2h-4v-2h4ZM13 24h-2v-4h2v4ZM8 6h8v2H8V6ZM6 8h2v8H6V8Zm2 10v-2h8v2H8Zm10-2h-2V8h2v8Zm2-14h2v2h-2V2Zm0 2v2h-2V4h2Zm2 18h-2v-2h2v2Zm-2-2h-2v-2h2v2ZM4 2H2v2h2v2h2V4H4V2ZM2 22h2v-2h2v-2H4v2H2v2Z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" class="transition-all inline-flex dark:hidden my-auto"><path fill="currentColor" d="M6 2h8v2h-2v2h-2V4H6V2ZM4 6V4h2v2H4Zm0 10H2V6h2v10Zm2 2H4v-2h2v2Zm2 2H6v-2h2v2Zm10 0v2H8v-2h10Zm2-2v2h-2v-2h2Zm-2-4v-2h2v-2h2v8h-2v-4h-2Zm-6 0h6v2h-6v-2Zm-2-2h2v2h-2v-2Zm0 0V6H8v6h2Zm8-10h2v2h2v2h-2v2h-2V6h-2V4h2V2Z"/></svg>
      </div>

      <a id="search" href="/" class="a_navBar__item hidden <md:inline-flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
          <path fill="currentColor" d="M6 2h8v2H6V2zM4 6V4h2v2H4zm0 8H2V6h2v8zm2 2H4v-2h2v2zm8 0v2H6v-2h8zm2-2h-2v2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2zm0-8h2v8h-2V6zm0 0V4h-2v2h2z"/>
        </svg>
      </a>
    </section>
  </div>
</nav>

<main class="container mx-auto pt-20">
  <slot/>
</main>

<ninja-keys id="ninja-keys" class="dark:text-white dark:placeholder-dark-300" placeholder="Tapez votre recherche..." class:dark="{mode}">
  <div class="flex content-center justify-left gap-2 py-3 px-2 opacity-75 border-t dark:border-t-dark-300 border-t-light-900" slot="footer">
    <p class="flex content-center text-[0.7rem] align-bottom my-auto">
      <span class="py-0.5 px-1 rounded dark:bg-white/10 bg-black/10 mx-2 -mt-0.5 rotate-z-180">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" class="my-auto"><path fill="currentColor" d="M18 16H8v2H6v-2H4v-2h2v-2h2v2h10V4h2v12h-2zM8 12v-2h2v2H8zm0 6v2h2v-2H8z"/></svg>
        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" class="my-auto !rotate-180"><path fill="currentColor" d="M16 4h-2v2h2v2H6v2H4v8h2v2h6v-2H6v-8h10v2h-2v2h2v-2h2v-2h2V8h-2V6h-2V4z"/></svg> -->
      </span>
      selectionner
    </p>
    <p class="flex content-center text-[0.7rem] align-bottom my-auto">
      <span class="py-0.5 px-1 rounded dark:bg-white/10 bg-black/10 mx-1 -mt-0.50">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" class="my-auto"><path fill="currentColor" d="M11 4h2v12h2v2h-2v2h-2v-2H9v-2h2V4zM7 14v2h2v-2H7zm0 0v-2H5v2h2zm10 0v2h-2v-2h2zm0 0v-2h2v2h-2z"/></svg>
      </span>
      <span class="py-0.5 px-1 rounded dark:bg-white/10 bg-black/10 ml-1 mr-2 -mt-0.5">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" class="my-auto"><path fill="currentColor" d="M11 20h2V8h2V6h-2V4h-2v2H9v2h2v12zM7 10V8h2v2H7zm0 0v2H5v-2h2zm10 0V8h-2v2h2zm0 0v2h2v-2h-2z"/></svg>
      </span>
      naviguer
    </p>
    <p class="flex content-center text-[0.7rem] align-bottom my-auto">
      <span class="py-0.5 px-1 rounded dark:bg-white/10 bg-black/10 mx-2 -mt-0.5 font-vt">
        ESC
      </span>
      fermer
    </p>
    <p class="flex content-center text-[0.7rem] align-bottom my-auto">
      <span class="py-0.5 px-1 rounded dark:bg-white/10 bg-black/10 mx-2 -mt-0.5">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" class="my-auto"><path fill="currentColor" d="M21 5H7v2H5v2H3v2H1v2h2v2h2v2h2v2h16V5h-2zM7 17v-2H5v-2H3v-2h2V9h2V7h14v10H7zm8-6h-2V9h-2v2h2v2h-2v2h2v-2h2v2h2v-2h-2v-2zm0 0V9h2v2h-2z"/></svg>
      </span>
      menu précédent
    </p>
  </div>
</ninja-keys>


<style>
    ninja-keys {
      --ninja-overflow-background: rgba(177,177,177, .6);
    }
    
    ninja-keys.dark {
      --ninja-overflow-background: rgba(0,0,0, .9);
    }
    ninja-keys {
      --ninja-text-color: #222222;
    }
    ninja-keys.dark {
      --ninja-text-color: #FFFFFF;
    }
    ninja-keys.dark {
      --ninja-placeholder-color: #777777;
    }
    ninja-keys  {
      --ninja-placeholder-color: rgba(0, 0, 0,.2);
    }
    ninja-keys.dark {
      --ninja-accent-color: rgba(0, 255, 17, 0.989);
    }

    .scare-text {
      display: inline-block;
      font-family: "Scary Halloween Font";
      font-size: 1.1em;
      transform: translateY(-1px);
      background-color: rgb(255, 171, 36);
      background-image: linear-gradient(10deg, rgb(220, 4, 98) 0%, rgb(229, 21, 90) 13%, rgb(237, 38, 81) 19%, rgb(244, 52, 71) 23%, rgb(249, 65, 62) 27%, rgb(253, 79, 48) 31%, rgb(255, 94, 36) 34%, rgb(255, 104, 10) 38%, rgb(255, 123, 0) 41%, rgb(255, 141, 10) 44%, rgb(255, 153, 20) 47%, rgb(255, 171, 36) 50%, rgb(255, 184, 51) 53%, rgb(255, 198, 66) 56%, rgb(255, 212, 82) 59%, rgb(255, 224, 102) 62%, rgb(255, 226, 122) 66%, rgb(255, 232, 148) 69%, rgb(255, 236, 168) 73%, rgb(255, 241, 189) 77%, rgb(255, 246, 214) 81%, rgb(255, 251, 235) 87%, rgb(255, 255, 255) 100%);
      background-size: 100%;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

</style>