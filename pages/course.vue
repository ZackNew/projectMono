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
          <br />
          <br />
          <p class="text-white font-rs">This course isn’t for passive learners. It’s for those ready to put in the work, sharpen
            their skills, and create with intent. Whether you're just starting or leveling up, our hands-on lessons give
            you the tools, techniques, and mindset to stand out—not blend in. <span
              class="text-[#FBA819]">Kickstart</span> your journey by registering below.
          </p>
        </div>
      </template>
      <template #image>
        <div class="justify-end">
          <img src="/images/img1.png" />
        </div>
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
          <p class="text-white font-rs">This course isn’t for passive learners. It’s for those ready to put in the work, sharpen
            their skills, and create with intent. Whether you're just starting or leveling up, our hands-on lessons give
            you the tools, techniques, and mindset to stand out—not blend in. <span
              class="text-[#FBA819]">Kickstart</span> your journey by registering below.
          </p>
        </div>
      </template>
      <template #image>
        <div class="justify-end">
          <img src="/images/img2.svg" />
        </div>
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
          <br />
          <br />
          <p class="text-white font-rs">This course isn’t for passive learners. It’s for those ready to put in the work, sharpen
            their skills, and create with intent.
          </p>
          <br />
          <br />
          <p class="text-white font-rs">Whether you're just starting or leveling up, our hands-on lessons give you the tools,
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

    <FlexComponent v-else imgSide="right" img-bg-color="bg-[#3A3C87]" class="mt-[1px]">
      <template #content>
        <div class="max-w-xl">
          <h1 class="text-4xl font-bold text-[#FBA819] uppercase">
            Gain The Skills  <br /> For Success
          </h1>
          <br />
          <br />
          <p class="text-white font-rs">This course isn’t for passive learners. It’s for those ready to put in the work, sharpen
            their skills, and create with intent. Whether you're just starting or leveling up, our hands-on lessons give
            you the tools, techniques, and mindset to stand out—not blend in. <span
              class="text-[#FBA819]">Kickstart</span> your journey by registering below.
          </p>
        </div>
      </template>
      <template #image>
        <div class="justify-end">
          <img src="/images/img2.svg" />
        </div>
      </template>
    </FlexComponent>

    <FlexComponent v-if="route.query.course === 'graphic-design'" imgSide="right" img-bg-color="bg-[#FBA819]" class="mt-[1px]">
      <template #content>
        <div class="max-w-xl">
          <h1 class="text-4xl font-bold text-[#FBA819] uppercase">
            Build a <br /> Portfolio That <br />Sets You Apart
          </h1>
          <br />
          <br />
          <p class="text-white font-rs">This course isn’t for passive learners. It’s for those ready to put in the work, sharpen their skills, and create with intent. Whether you're just starting or leveling up, our hands-on lessons give you the tools, techniques, and mindset to stand out—not blend in. <span class="text-[#FBA819]">Kickstart</span> your journey by registering below.
          </p>
        </div>
      </template>
      <template #image>
        <div class="justify-end">
          <img src="/images/img2.svg" />
        </div>
      </template>
    </FlexComponent>

    <FlexComponent v-else imgSide="left" img-bg-color="bg-[#E68C65]" class="mt-[1px]">
      <template #content>
        <div class="max-w-xl">
          <h1 class="text-4xl font-bold text-[#FBA819] uppercase">
            Use After Effects <br /> With Confidence
          </h1>
          <br />
          <br />
          <p class="text-white font-rs">This course isn’t for passive learners. It’s for those ready to put in the work, sharpen their skills, and create with intent.
          </p>
          <br />
          <br />
          <p class="text-white font-rs">Whether you're just starting or leveling up, our hands-on lessons give you the tools,
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
    <div class="mt-[1px]">
      <Projects/>
    </div>
  </div>
</template>