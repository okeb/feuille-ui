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
      id: "Accueil",
      title: "Allez à l'accueil",
      hotkey: "ctrl+h",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M14 2h-4v2H8v2H6v2H4v2H2v2h2v10h7v-6h2v6h7V12h2v-2h-2V8h-2V6h-2V4h-2V2zm0 2v2h2v2h2v2h2v2h-2v8h-3v-6H9v6H6v-8H4v-2h2V8h2V6h2V4h4z"/></svg>&nbsp;&nbsp;&nbsp;`,
      handler: () => {
        document.getElementById("home").click();
      }
    },
    {
      id: "Docs",
      title: "Ouvrir la documentation",
      hotkey: "ctrl+d",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M6 3h14v2h2v6h-2v8h-2V5H6V3zm8 14v-2H6V5H4v10H2v4h2v2h14v-2h-2v-2h-2zm0 0v2H4v-2h10zM8 7h8v2H8V7zm8 4H8v2h8v-2z"/></svg>&nbsp;&nbsp;&nbsp;`,
      handler: () => {
        document.getElementById("docs").click();
      }
    },
    {
      id: "signin",
      title: "Se connecter",
      hotkey: "ctrl+l",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M15 2H9v2H7v2h2V4h6v4H4v14h16V8h-3V4h-2V2zm0 8h3v10H6V10h9zm-2 3h-2v4h2v-4z"/></svg>&nbsp;&nbsp;&nbsp;`,
      handler: () => {
        document.getElementById("signin").click();
      }
    },
    {
      id: "Theme",
      title: "Changez le theme...",
      hotkey: 'ctrl+t',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M4 4h18v14h-6v2H8v-2H2V4h2zm16 12V6H4v10h16z"/></svg>&nbsp;&nbsp;&nbsp;`,
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
    }
  ];
	onMount(async () => {
    const ninja = document.querySelector("ninja-keys");
    ninja.data = hotkeys;
	});
</script>

<ninja-keys id="ninja-keys" class="dark:text-white dark:placeholder-dark-300" placeholder="Tapez votre recherche..." class:dark="{mode}"></ninja-keys>
<nav class="border-b border-b-[#EBEBEB] dark:border-b-[#333333] py-3 px-12 grid grid-cols-2 transition-colors">
  <section>
    <img src="favicon-96.png" alt="logo de feuille UI" class="h-10 p-0">
  </section>
  <section class="flex justify-end content-center gap-8">
    <a id="home" href="/" class="a_navItem">Get started</a>
    <a id="docs" href="/documentation" class="a_navItem">Documentation API</a>
    <a id="login" href="/" class="a_navItem">Connexion</a>
    <a id="github" href="/" class="a_navItem">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    </a>

    <div class="a_navItem shadow-green-500/50 shadow-xl" on:click={toggleMode} on:keypress={() => {console.log(mode)}}>
      {#if mode}
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M13 0h-2v4h2V0ZM0 11v2h4v-2H0Zm24 0v2h-4v-2h4ZM13 24h-2v-4h2v4ZM8 6h8v2H8V6ZM6 8h2v8H6V8Zm2 10v-2h8v2H8Zm10-2h-2V8h2v8Zm2-14h2v2h-2V2Zm0 2v2h-2V4h2Zm2 18h-2v-2h2v2Zm-2-2h-2v-2h2v2ZM4 2H2v2h2v2h2V4H4V2ZM2 22h2v-2h2v-2H4v2H2v2Z"/></svg>
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M6 2h8v2h-2v2h-2V4H6V2ZM4 6V4h2v2H4Zm0 10H2V6h2v10Zm2 2H4v-2h2v2Zm2 2H6v-2h2v2Zm10 0v2H8v-2h10Zm2-2v2h-2v-2h2Zm-2-4v-2h2v-2h2v8h-2v-4h-2Zm-6 0h6v2h-6v-2Zm-2-2h2v2h-2v-2Zm0 0V6H8v6h2Zm8-10h2v2h2v2h-2v2h-2V6h-2V4h2V2Z"/></svg>
      {/if}
    </div>

  </section>
</nav>
<slot/>


<style>

    ninja-keys {
      --ninja-overflow-background: rgba(255,255,255, .9);
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

</style>