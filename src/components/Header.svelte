<script>
  export let y;

  let tabs = [
    { name: "Projects", link: "#projects" },
    { name: "About me", link: "#about" },
    //{name: 'Projects', '#projects' }
  ];
</script>

<header
  class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid " +
    (y > 0
      ? " py-4 bg-transparent border-dark-shade"
      : " py-6 bg-transparent border-transparent")}
>
<img
src={"favicon.png"}
alt="Logo"
class="w-10 h-10 py-1 px-1"
/>
  <h1 class="font-medium">
    <b class="font-bold poppins">Nick</b> Van den Dungen
  </h1>
  <div class="sm:flex ml-auto pr-4 items-center gap-4 hidden">
    {#each tabs as tab, index}
      <a href={tab.link} class="duration-200 hover:animate-wiggle hover:animate-infinite hover:animate-ease-linear">
        <p class="hover:text-dark-accent ">{tab.name}</p>
      </a>
    {/each}
  </div>
  <a
    href="https://www.linkedin.com/in/nick-van-den-dungen/"
    target="_blank"
    class="relative duration-200 text-light-accent hover:text-dark-accent hover:animate-wiggle hover:animate-infinite hover:animate-ease-linear"
  >
    <i class="fa-brands fa-linkedin" />
  </a>
  <a
    href="https://github.com/Nicktvdd"
    target="_blank"
    class="relative duration-200 text-light-accent hover:text-dark-accent px-4 hover:animate-wiggle hover:animate-infinite hover:animate-ease-linear"
  >
    <i class="fa-brands fa-github" />
  </a>
</header>
