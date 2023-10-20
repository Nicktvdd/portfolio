<script>
  import Step from "./Step.svelte";

  let steps = [
    { name: "Projectname", icon: "fa-solid fa-code" },
    { name: "Project2", icon: "fa-solid fa-list-check" },
    { name: "Project3", icon: "fa-solid fa-diagram-project" },
  ];

  let benefits = [
    {
      name: "a poopie butt",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "chef de la creme",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "wears a soft sweater",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
</script>

<main class="flex flex-col flex-1 p-4">
  <section
    id="introPage"
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
  >
    <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
    >
      <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl animate-fade-left animate-ease-linear">
        Hi! I'm <br /><span class="poppins text-teal-400">Nick</span> Van den
        Dungen<br />Full Stack
        <span class="poppins text-teal-400">Developer</span>
      </h2>
      <p class="text-base sm:text-lg md:text-xl animate-fade-right animate-ease-linear">
        My <span class="text-teal-400">favorite tech</span> includes Javascript (NEXT.JS
        or SvelteKit), TailwindCSS, Node.js + Express.js & MongoDB!
      </p>
      <a
        class="blueShadow transition ease-in-out delay-100 hover:translate-y-1 hover:scale-110 hover:bg-teal-400 duration-200
        mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-stone-950
        cursor-pointer"
        href="https://www.linkedin.com/in/nick-van-den-dungen/"
        target="_blank"
      >
        <div
          class="absolute top-0 right-full w-full-h-full bg-teal-400 opacity-20 group-hover:transtone-x-full z-0 duration-200"
        />
        <h4 class="relative z-9">Get in touch &rarr;</h4>
      </a>
    </div>
    <div class="relative grid place-items-center">
      <img
        src={"images/profile.png"}
        alt="Profile image"
        class="object-cover z-[2] max-h-[70vh] animate-fade animate-ease-linear"
      />
    </div>
  </section>

  <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-lg sm:text-xl md:text-2xl">
        A few of my creative endeavors.
      </h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Curious to <span class="poppins text-teal-400">see</span> my work?
      </h3>
    </div>
    <a
      href="https://www.youtube.com/watch?v=H8ZH_mkfPUY&t=7s"
      target="_blank"
      class="mx-auto px-4 py-2 rounded-md border border-solid border-white
    flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-teal-700 duration-200"
    >
      <i class="fa-regular fa-circle-play" />
      <p>Watch the video</p>
    </a>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-10">
      <Step step={steps[0]}>
        <p>
          lorem ipsum bla bla bla <strong class="text-teal-400">
            Some tech like Nextjs strip etc.
          </strong> commerce.js is a product content managment system. stripe is
          used for transaction handling.
        </p>
      </Step>
      <Step step={steps[1]}>
        <p>
          Todos is full stack bla <strong class="text-teal-400">
            Some tech like Nextjs strip etc.
          </strong> commerce.js is a product content managment system. stripe is
          used for transaction handling.
        </p></Step
      >
      <Step step={steps[2]}>
        <p>
          lorem ipsum bla bla bla <strong class="text-teal-400">
            Some tech like Nextjs strip etc.
          </strong> commerce.js is a product content managment system. stripe is
          used for transaction handling.
        </p></Step
      >
    </div>
  </section>
  <section
    id="about"
    class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col
  gap-16 sm:gap-20 md:gap-24 relative"
  >
    <div
      class="flex flex-col gap-2 text-center relative before:absolute before:top-0
  before:left-0 before:w-2/3 before:h-1.5 before:bg-teal-700 after:absolute
  after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-teal-700 py-4"
    >
      <h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        A bit <span class="poppins text-teal-400">about</span> me.
      </h3>
    </div>
    <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
      I am . . .
    </p>
    <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
      {#each benefits as benefit, index}
        <div class="flex gap-6 sm:gap-8">
          <p
            class="poppins text-4xl sm:text-5xl md:text-6xl text-stone-500 font-semibold"
          >
            0{index + 1}
          </p>
          <div class="flex flex-col gap-6 sm:gap-8">
            <h3 class="text-2xl sm:text-3xl md:text:5-xl">
              {benefit.name}
            </h3>
            <p>{benefit.description}</p>
          </div>
        </div>
      {/each}
    </div>
    <h5 class="text-2xl sm:text-3xl font-semibold text-center poppins">
      The <span class="text-teal-400 poppins">Complete</span> Package
    </h5>
    <div
      class="flex flex-col overflow-x-scroll md:overflow-x-auto gap-10 max-w-[800px] mx-auto w-full"
    >
      <table class="bg-stone-100 text-stone-700 rounded text-center">
        <thead class="border-b border-solid border-stone-200">
          <tr class="">
            <th />
            <th class="whitespace-nowrap p-2 px-4"> candidate #1</th>
            <th class="whitespace-nowrap p-2 px-4"> candidate #2</th>
            <th class="whitespace-nowrap p-2 px-4"> candidate #3</th>
            <th class="whitespace-nowrap bg-teal-700 text-white p-4 px-8"> Me</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-solid border-stone-200">
            <td
              class="border-r border-solid bord-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap"
            >
              Dedication</td
            >
            <td><i class="fa-solid fa-check text-stone-500" /></td>
            <td><i class="fa-solid fa-xmark text-stone-500" /></td>
            <td><i class="fa-solid fa-xmark text-stone-500" /></td>
            <td><i class="fa-solid fa-check text-green-500" /></td>
          </tr>
          <tr class="border-b border-solid border-stone-200">
            <td
              class="border-r border-solid bord-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap"
            >
              Critical Thought</td
            >
            <td><i class="fa-solid fa-xmark text-stone-500" /></td>
            <td><i class="fa-solid fa-check text-stone-500" /></td>
            <td><i class="fa-solid fa-check text-stone-500" /></td>
            <td><i class="fa-solid fa-check text-green-500" /></td>
          </tr>
          <tr class="border-b border-solid border-stone-200">
            <td
              class="border-r border-solid bord-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap"
            >
              Interpersonal Skills</td
            >
            <td><i class="fa-solid fa-xmark text-stone-500" /></td>
            <td><i class="fa-solid fa-xmark text-stone-500" /></td>
            <td><i class="fa-solid fa-check text-stone-500" /></td>
            <td><i class="fa-solid fa-check text-green-500" /></td>
          </tr>
          <tr class="border-b border-solid border-stone-200">
            <td
              class="border-r border-solid bord-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap"
            >
              Programming Ability</td
            >
            <td><i class="fa-solid fa-check text-stone-500" /></td>
            <td><i class="fa-solid fa-xmark text-stone-500" /></td>
            <td><i class="fa-solid fa-xmark text-stone-500" /></td>
            <td><i class="fa-solid fa-check text-green-500" /></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mx-auto -mt-12 italic sm:hidden opacity-50">
      <p>Scroll to see more &rarr;</p>
    </div>
  </section>
</main>
