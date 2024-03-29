<script>
  import Step from "./Step.svelte";

  let steps = [
    { name: "Portfolio", icon: "fa-solid fa-code text-light-accent", href:"https://github.com/Nicktvdd/portfolio"},
    { name: "D&D Android App", icon: "fa-solid fa-list-check text-light-accent", href:"https://github.com/Nicktvdd/DnD-Api"},
    { name: "Low-level C programming", icon: "fa-solid fa-diagram-project text-light-accent", href:"https://github.com/Nicktvdd/MiniShell"},
  ];

  let benefits = [
    {
      name: "Programming Enthusiast with a Sports Science Background",
      description:
        "I'm a programming enthusiast currently studying at Hive Helsinki, with a background in sports science and management. My experience brings a blend of teamwork, problem-solving, and creativity to the world of programming. I possess a deep-rooted passion for coding and an insatiable curiosity for learning. Whether it's code or sports, I relish challenges and collaboration, continually seeking fresh ways to excel.",
    },
    {
      name: "Advocate for Sustainable Development and Environmental Awareness",
      description:
        "I am deeply committed to leveraging technology for sustainable development and raising awareness about environmental issues. My drive pushes me to create innovative solutions and advocate for a greener future. Whether in tech work or personal initiatives, I promote eco-conscious practices and aim for a harmonious blend of technology and environmental responsibility.",
    },
    {
      name: "Problem Solver",
      description:
        "I have a natural aptitude for problem-solving. I take pleasure in dissecting complex challenges, simplifying them into manageable components, and uncovering practical solutions. Whether in sports or programming, I'm skilled at creatively addressing issues. My approach to problem-solving, coupled with my unwavering commitment to excellence, fuels my dedication to contributing to technology and sustainable development.",
    },
  ];
</script>

<div class="animated-background"></div>
<main class="flex flex-col flex-1 p-4">
  <section
    id="introPage"
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
  >
    <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
    >
      <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl animate-fade-left animate-ease-linear">
        Hi! I'm <br /><span class="poppins bg-clip-text text-transparent bg-gradient-to-r from-light-accent to-main-brand">Nick</span> Van den
        Dungen<br />Full Stack
        <span class="poppins bg-clip-text text-transparent bg-gradient-to-r from-light-accent to-main-brand">Developer</span>
      </h2>
      <p class="text-base sm:text-lg md:text-xl animate-fade-right animate-ease-linear">
        My <span class="text-main-brand">favorite tech</span> includes Kotlin with Ktor, Javascript/Typescript (NEXT.JS
        or SvelteKit), Node.js + Express.js & MongoDB.<br> My true passion lies in 
        <span class="text-main-brand">learning. </span> I eagerly embrace new challenges and skills, 
        adventuring into unfamiliar territory with enthusiasm.
      </p>
      <a
        class="transition ease-in-out delay-100 hover:translate-y-1 hover:scale-110 hover:bg-main-brand duration-200
        mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-light-accent text-white
        cursor-pointer"
        href="mailto:nicktvdd@gmail.com"
        target="_blank"
      >
        <div
          class="absolute top-0 right-full w-full-h-full bg-dark-accent opacity-20 group-hover:translate-x-full z-0 duration-200"
        />
        <h4 class="relative z-9">Get in touch &rarr;</h4>
      </a>
    </div>
    <div class="relative grid place-items-center">
      <img
        src={"images/backup.png"}
        alt="Profile image"
        class="object-cover z-[2] max-h-[70vh] animate-fade animate-ease-linear"
      />
    </div>
  </section>

  <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
    <div class="flex flex-col gap-2 text-center">
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl text-light-shade">
        My <span class="poppins text-main-brand">projects</span>
      </h3>
    </div>
    <!-- <a
      href="https://www.youtube.com/watch?v=H8ZH_mkfPUY&t=7s"
      target="_blank"
      class="mx-auto px-4 py-2 rounded-md border border-solid border-white-50
    flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-teal-800 duration-200"
    >
      <i class="fa-regular fa-circle-play" />
      <p>Watch the video</p>
    </a> -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-10">
      <Step step={steps[0]}>
        <p>
          This portfolio website is powered by <strong class="text-main-brand">SvelteKit</strong>, 
          styled with <strong class="text-main-brand">TailwindCSS</strong>, 
          and hosted on <strong class="text-main-brand">Vercel</strong>. 
          Shifting from my prior experience with React, I was eager to explore a fresh approach. 
          SvelteKit felt intuitive, even though it has fewer learning resources available. 
          Additionally, it was my first experience with TailwindCSS.
        </p>
      </Step>
      <Step step={steps[1]} >
        <p>
          I'm Building a Dungeons and Dragons app with <strong class='text-main-brand'>Kotlin</strong> and
          <strong class='text-main-brand'>Compose</strong> in
          <strong class='text-main-brand'>Android Studio</strong>, 
          My goal is to create a comprehensive roleplaying platform, 
          complete with all features, a user-friendly interface, and all the tools you need as a player and game master.
        </p></Step
      >
      <Step step={steps[2]}>
        <p>
          At Hive Helsinki, I'm diving into the realm of <strong class='text-main-brand'>C</strong> and 
          <strong class='text-main-brand'>C++</strong>, 
          harnessing low-level problem-solving, teamwork, 
          and attention to detail to craft intricate projects. 
          I'm delving deep into programming fundamentals, often creating functions from scratch. 
          One notable project was MiniShell, a minimalist shell developed from the ground up within a team.
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
  before:left-0 before:w-2/3 before:h-1.5 before:bg-light-accent after:absolute
  after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-light-accent py-4"
    >
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl text-light-shade">
        A bit <span class="poppins text-main-brand">about</span> me.
      </h3>
    </div>
    <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
      I am . . .
    </p>
    <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
      {#each benefits as benefit, index}
        <div class="flex gap-6 sm:gap-8 text-light-accent">
          <p
            class="poppins text-4xl sm:text-5xl md:text-6xl font-semibold"
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
    <h5 class="text-2xl text-light-accent sm:text-3xl font-semibold text-center poppins">
      The <span class="text-main-brand poppins">Complete</span> Package
    </h5>
    <div
      class="flex flex-col overflow-x-scroll md:overflow-x-auto gap-10 max-w-[800px] mx-auto w-full"
    >
      <table class=" text-light-accent rounded text-center">
        <thead class="border-b border-solid border-light-shade">
          <tr class="">
            <th />
            <th class="whitespace-nowrap p-2 px-4"> candidate #1</th>
            <th class="whitespace-nowrap p-2 px-4"> candidate #2</th>
            <th class="whitespace-nowrap p-2 px-4"> candidate #3</th>
            <th class="whitespace-nowrap text-main-brand p-4 px-8"> Me</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-solid border-light-shade">
            <td
              class="text-white border-r border-solid border-light-shade pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap"
            >
              Dedication</td
            >
            <td><i class="fa-solid fa-check text-white-500" /></td>
            <td><i class="fa-solid fa-xmark text-white-500" /></td>
            <td><i class="fa-solid fa-xmark text-white-500" /></td>
            <td><i class="fa-solid fa-check text-green-500" /></td>
          </tr>
          <tr class="border-b border-solid border-light-shade">
            <td
              class="text-white border-r border-solid border-light-shade pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap"
            >
              Critical Thought</td
            >
            <td><i class="fa-solid fa-xmark text-white-500" /></td>
            <td><i class="fa-solid fa-check text-white-500" /></td>
            <td><i class="fa-solid fa-check text-white-500" /></td>
            <td><i class="fa-solid fa-check text-green-500" /></td>
          </tr>
          <tr class="border-b border-solid border-light-shade">
            <td
              class="text-white border-r border-solid border-light-shade pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap"
            >
              Interpersonal Skills</td
            >
            <td><i class="fa-solid fa-xmark text-white-500" /></td>
            <td><i class="fa-solid fa-xmark text-white-500" /></td>
            <td><i class="fa-solid fa-check text-white-500" /></td>
            <td><i class="fa-solid fa-check text-green-500" /></td>
          </tr>
          <tr class="border-b border-solid border-light-shade">
            <td
              class="text-white border-r border-solid border-light-shade pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap"
            >
              Awesome problem solving</td
            >
            <td><i class="fa-solid fa-check text-white-500" /></td>
            <td><i class="fa-solid fa-xmark text-white-500" /></td>
            <td><i class="fa-solid fa-xmark text-white-500" /></td>
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
