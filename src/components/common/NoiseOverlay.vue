<template>
  <svg class="pointer-events-none fixed inset-0 z-[60] size-full opacity-[.09] mix-blend-overlay" aria-hidden="true">
    <filter id="grain-f" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="2" stitchTiles="stitch" />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#grain-f)" />
  </svg>
</template>
