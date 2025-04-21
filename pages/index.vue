<template>
  <div>
    <Hero />
    <div class="w-full">
      <div id="about">
        <FlexComponent imgSide="left" img-bg-color="bg-[#FF3D00]">
          <template #content>
            <div class="max-w-2xl lg:max-w-3xl font-rs">
              <p class="text-white">OK, here’s a story, you are a design enthusiast, a design fanatic, a design freak,
                ready to dive into the colorful world of graphic design. Unfortunately most if not all schools are way
                too
                average to show you the way.
              </p>
              <br />
              <br />
              <p class="text-white">Well, you're one lucky designer-to-be because at Project Mono, we're not your
                average
                stuffy school. Nope, we're the black sheep of the design education scene, and we're here to shake things
                up!</p>
            </div>
          </template>
          <template #image>
            <div class="justify-end">
              <img src="/images/img1.png" />
            </div>
          </template>
        </FlexComponent>
        <FlexComponent imgSide="right" img-bg-color="bg-[#FBA819]" class="mt-[1px]">
          <template #content>
            <div class="max-w-2xl lg:max-w-3xl">
              <h1 class="text-6xl font-bold text-[#FBA819]">
                SO WHAT'S <br /> OUR DEAL
              </h1>
              <br />
              <br />
              <p class="text-white font-rs">
                That’s easy. Practice don’t make perfect. Perfect practice does. That’s what separates us from the
                bunch,
                we
                have the perfect classes for perfect practice. We see a rise in quantity of designers these days but not
                much in quality. That’s our literal reason for existence.
                <span class="text-[#FBA819]">Kick mediocrity outta the Industry.</span>
              </p>
            </div>
          </template>
          <template #image>
            <div class="justify-end ">
              <img src="/images/img2.svg" />
            </div>
          </template>
        </FlexComponent>

        <!-- Who's welcome page -->
        <div class="mx-auto max-w-5xl text-[#333333] my-16">
          <h1 class="text-center text-6xl font-bold">WHO'S <br /> WELCOME</h1>
          <p class="text-center my-8 font-rs">
            Let’s be honest here for a while. Our program isn’t for everyone. We have exercises that progressively
            overload like
            it’s a muscle growth training. This means if you aren’t the type to finish what you started you might wanna
            sit this
            one out. So, anyone who is determined to become an S-tier designer is welcome to join us.
          </p>
        </div>
      </div>

      <!-- Courses -->
      <div id="courses">
        <div class="flex justify-center mx-auto my-12">
          <div>
            <hr class="w-36 h-1 bg-[#333333] border-0 mx-auto">
            <h1 class="text-8xl font-extrabold text-center text-[#FBA819] mt-2">COURSES</h1>
          </div>
        </div>
        <FlexComponent imgSide="left" img-bg-color="bg-[#FF3D00]">
          <template #content>
            <div class="max-w-2xl lg:max-w-3xl">
              <h1 class="text-4xl font-bold text-[#FBA819] uppercase">
                Fundamentals <br /> of Graphic Design
              </h1>
              <br />
              <br />
              <p class="text-white font-rs">This course isn’t for passive learners. It’s for those ready to put in the work,
                sharpen their skills, and create with intent.
              </p>
              <br />
              <p class="text-white font-rs">Whether you're just starting or leveling up, our hands-on lessons give you the
                tools,
                techniques, and mindset to stand out—not blend in. <span class="text-[#FBA819]">Kickstart</span> your
                journey. Kick mediocrity out of the industry.</p>
            </div>
          </template>
          <template #image>
            <div class="justify-end">
              <img src="/images/img1.png" />
            </div>
          </template>
        </FlexComponent>
        <FlexComponent imgSide="right" img-bg-color="bg-[#FBA819]" class="mt-[1px]">
          <template #content>
            <div class="max-w-2xl lg:max-w-3xl text-[#FBA819]">
              <h2 class="text-3xl font-semibold text-white mb-4">LESSONS</h2>
              <p class="font-azeret">Module 1: Foundations of Graphic Design</p>
              <p class="font-azeret">Module 2: Core Design Tools</p>
              <p class="font-azeret">Module 3: Design Principles and Color Theory</p>
              <p class="font-azeret">Module 4: Typography Essentials</p>
              <p class="font-azeret">Module 5: Psychology of Design</p>
              <p class="font-azeret">Module 6: Visual Communication with Adobe Illustrator</p>
              <p class="font-azeret">Module 7: Image Editing with Adobe Photoshop</p>
              <p class="font-azeret">Module 8: Real-world Application</p>
              <p class="font-azeret">Module 9: Digital Design Essentials</p>
              <p class="font-azeret">Module 10: Portfolio Development and Sales</p>
              <div class="mt-12 flex gap-8 items-center">
                <button @click="navigateTo('/course?course=graphic-design')"
                  class="px-4 py-2 bg-[#FBA819] text-white rounded-full transition border-[1.5px] border-black text-xs button-shadow-black">
                  Enroll Now
                </button>
                <p class="text-[#FBA819] font-azeret">For 2,999 ETB one time payment</p>
              </div>
            </div>
          </template>
          <template #image>
            <div class="justify-end">
              <img src="/images/img2.svg" />
            </div>
          </template>
        </FlexComponent>
        <FlexComponent imgSide="left" img-bg-color="bg-[#C97155]" class="mt-[1px]">
          <template #content>
            <div class="max-w-2xl lg:max-w-3xl">
              <h1 class="text-4xl font-bold text-[#FBA819] uppercase">
                Fundamentals <br /> of Motion design
              </h1>
              <br />
              <br />
              <p class="text-white font-rs">This course isn’t for passive learners. It’s for those ready to put in the work,
                sharpen their skills, and create with intent.
              </p>
              <br />
              <p class="text-white font-rs">Whether you're just starting or leveling up, our hands-on lessons give you the
                tools,
                techniques, and mindset to stand out—not blend in. <span class="text-[#FBA819]">Kickstart</span> your
                journey. Kick mediocrity out of the industry.</p>
            </div>
          </template>
          <template #image>
            <div class="justify-end">
              <img src="/images/img1.png" />
            </div>
          </template>
        </FlexComponent>
        <FlexComponent imgSide="right" img-bg-color="bg-[#3A3C87]" class="mt-[1px]">
          <template #content>
            <div class="max-w-2xl lg:max-w-3xl text-[#FBA819]">
              <h2 class="text-3xl font-semibold text-white mb-4">LESSONS</h2>
              <p class="font-azeret">Module 1: Motion Mindset & Fundamentals</p>
              <p class="font-azeret">Module 2: Thinking in Motion</p>
              <p class="font-azeret">Module 3: Match Cuts & Motion Sequences</p>
              <p class="font-azeret">Module 4: Style & Expression</p>
              <p class="font-azeret">Module 5: Recharge & Explore</p>
              <p class="font-azeret">Module 6: Interface & 3D Space</p>
              <p class="font-azeret">Module 7: Real World x Motion</p>
              <p class="font-azeret">Module 8: Major Project – Part 1</p>
              <p class="font-azeret">Module 9:  Major Project – Part 2</p>
              <div class="mt-12 flex gap-8 items-center">
                <button @click="navigateTo('/course?course=motion-design')"
                  class="px-4 py-2 bg-[#FBA819] text-white rounded-full transition border-[1.5px] border-black text-xs button-shadow-black">
                  Enroll Now
                </button>
                <p class="text-[#FBA819] font-azeret">For 3,999 ETB one time payment</p>
              </div>
            </div>
          </template>
          <template #image>
            <div class="justify-end">
              <img src="/images/img2.svg" />
            </div>
          </template>
        </FlexComponent>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>