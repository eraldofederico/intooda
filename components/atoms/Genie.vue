<template>
  <!-- Add a class or wrapper to size the SVG if needed -->
  <svg
    ref="blob"
    viewBox="0 0 172 172"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="animate-float"
  >
    <!-- Group to rotate -->
    <g ref="blobGroup" filter="url(#filter0_f_2465_33983)">
      <circle
        ref="blobCircle"
        cx="86"
        cy="86"
        r="55.1543"
        fill="url(#paint0_linear_2465_33983)"
      />
    </g>

    <defs>
      <filter
        id="filter0_f_2465_33983"
        x="0.845703"
        y="0.845703"
        width="170.309"
        height="170.309"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <!-- We'll animate stdDeviation on this -->
        <feGaussianBlur
          ref="blobBlur"
          stdDeviation="15"
          result="effect1_foregroundBlur_2465_33983"
        />
      </filter>

      <linearGradient
        id="paint0_linear_2465_33983"
        x1="46.9507"
        y1="46.9507"
        x2="125.049"
        y2="125.049"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#D0415E" ref="stop0" />
        <stop offset="0.25" stop-color="#D65767" ref="stop1" />
        <stop offset="0.5" stop-color="#DB7971" ref="stop2" />
        <stop offset="0.75" stop-color="#E0A57C" ref="stop3" />
        <stop offset="1" stop-color="#E6D886" ref="stop4" />
      </linearGradient>
    </defs>
  </svg>
</template>
