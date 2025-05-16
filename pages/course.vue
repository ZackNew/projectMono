<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div>
    <CourseHero />
    <FlexComponent v-if="route.query.course === 'graphic-design'" imgSide="right" img-bg-color="bg-[#FF3D00]" class="mt-[1px]">
      <template #content>
        <div class="max-w-xl">
          <h1 class="text-4xl font-bold text-[#FBA819] uppercase">
            Fundamentals <br /> of Graphic Design
          </h1>
          <br class="hidden md:block" />
          <br />
          <p class="text-white font-rs text-xl">This course isn’t for passive learners. It’s for those ready to put in the work, sharpen
            their skills, and create with intent. Whether you're just starting or leveling up, our hands-on lessons give
            you the tools, techniques, and mindset to stand out—not blend in. <span
              class="text-[#FBA819]">Kickstart</span> your journey by registering below.
          </p>
        </div>
      </template>
      <template #image>
          <img src="https://cdn.pixabay.com/photo/2025/02/02/17/21/floral-arrangement-9377225_1280.jpg" class="object-cover h-full min-w-full" loading="lazy"/>
      </template>
    </FlexComponent>

    <FlexComponent v-else imgSide="left" img-bg-color="bg-[#7E4938]" class="mt-[1px]">
      <template #content>
        <div class="max-w-xl">
          <h1 class="text-4xl font-bold text-[#FBA819] uppercase">
            Fundamentals <br /> of Motion design
          </h1>
          <br />
          <br />
          <p class="text-white font-rs text-xl">This course isn’t for passive learners. It’s for those ready to put in the work, sharpen
            their skills, and create with intent. Whether you're just starting or leveling up, our hands-on lessons give
            you the tools, techniques, and mindset to stand out—not blend in. <span
              class="text-[#FBA819]">Kickstart</span> your journey by registering below.
          </p>
        </div>
      </template>
      <template #image>
          <img src="https://cdn.pixabay.com/photo/2022/10/17/18/22/yak-7528421_1280.jpg" class="object-cover h-full min-w-full" loading="lazy"/>
      </template>
    </FlexComponent>

    <!-- TODO: the fancy form here -->
    <RegistrationForm/>

    <FlexComponent v-if="route.query.course === 'graphic-design'" imgSide="left" img-bg-color="bg-[#FF3D00]" class="mt-[1px]">
      <template #content>
        <div class="max-w-xl">
          <h1 class="text-4xl font-bold text-[#FBA819] uppercase">
            Design <br /> With Precision <br /> & Purpose
          </h1>
          <br class="hidden md:block" />
          <br />
          <p class="text-white font-rs text-xl">This course isn’t for passive learners. It’s for those ready to put in the work, sharpen
            their skills, and create with intent.
          </p>
          <br class="hidden md:block" />
          <br />
          <p class="text-white font-rs text-xl">Whether you're just starting or leveling up, our hands-on lessons give you the tools,
            techniques, and mindset to stand out—not blend in. <span class="text-[#FBA819]">Kickstart</span> your
            journey. Kick mediocrity out of the industry.</p>
        </div>
      </template>
      <template #image>
          <img src="https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="object-cover h-full min-w-full" loading="lazy"/>
      </template>
    </FlexComponent>

    <FlexComponent v-else imgSide="right" img-bg-color="bg-[#3A3C87]" class="mt-[1px]">
      <template #content>
        <div class="max-w-xl">
          <h1 class="text-4xl font-bold text-[#FBA819] uppercase">
            Gain The Skills  <br /> For Success
          </h1>
          <br class="hidden md:block" />
          <br />
          <p class="text-white font-rs text-xl">This course isn’t for passive learners. It’s for those ready to put in the work, sharpen
            their skills, and create with intent. Whether you're just starting or leveling up, our hands-on lessons give
            you the tools, techniques, and mindset to stand out—not blend in. <span
              class="text-[#FBA819]">Kickstart</span> your journey by registering below.
          </p>
        </div>
      </template>
      <template #image>
          <img  src="https://images.pexels.com/photos/388415/pexels-photo-388415.jpeg?auto=compress&cs=tinysrgb&w=1200" class="object-cover h-full min-w-full" loading="lazy"/>
      </template>
    </FlexComponent>

    <FlexComponent v-if="route.query.course === 'graphic-design'" imgSide="right" img-bg-color="bg-[#FBA819]" class="mt-[1px]">
      <template #content>
        <div class="max-w-xl">
          <h1 class="text-4xl font-bold text-[#FBA819] uppercase">
            Build a <br /> Portfolio That <br />Sets You Apart
          </h1>
          <br class="hidden md:block" />
          <br />
          <p class="text-white font-rs text-xl">This course isn’t for passive learners. It’s for those ready to put in the work, sharpen their skills, and create with intent. Whether you're just starting or leveling up, our hands-on lessons give you the tools, techniques, and mindset to stand out—not blend in. <span class="text-[#FBA819]">Kickstart</span> your journey by registering below.
          </p>
        </div>
      </template>
      <template #image>
          <img src="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="object-cover h-full min-w-full" loading="lazy"/>
      </template>
    </FlexComponent>

    <FlexComponent v-else imgSide="left" img-bg-color="bg-[#E68C65]" class="mt-[1px]">
      <template #content>
        <div class="max-w-xl">
          <h1 class="text-4xl font-bold text-[#FBA819] uppercase">
            Use After Effects <br /> With Confidence
          </h1>
          <br class="hidden md:block" />
          <br />
          <p class="text-white font-rs text-xl">This course isn’t for passive learners. It’s for those ready to put in the work, sharpen their skills, and create with intent.
          </p>
          <br class="hidden md:block" />
          <br />
          <p class="text-white font-rs text-xl">Whether you're just starting or leveling up, our hands-on lessons give you the tools,
            techniques, and mindset to stand out—not blend in. <span class="text-[#FBA819]">Kickstart</span> your
            journey. Kick mediocrity out of the industry.</p>
        </div>
      </template>
      <template #image>
          <img  src="https://images.pexels.com/photos/388415/pexels-photo-388415.jpeg?auto=compress&cs=tinysrgb&w=1200" class="object-cover h-full min-w-full" loading="lazy"/>
      </template>
    </FlexComponent>
    <div class="mt-[1px]">
      <Projects/>
    </div>
  </div>
</template>