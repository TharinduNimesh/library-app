<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
::-moz-selection {
  color: #fff;
  background: #2377ff81;
}

::selection {
  color: #fff;
  background: #2377ff81;
}

/* Hide scrollbar for webkit browsers */
/* This will hide the scrollbar when not interacting with it */
::-webkit-scrollbar {
  width: 2px; /* Set the width of the scrollbar */
}

/* Track for webkit browsers */
::-webkit-scrollbar-track {
  background: transparent; /* Set the background color of the track */
}

/* Handle for webkit browsers */
::-webkit-scrollbar-thumb {
  background: transparent; /* Set the background color of the thumb */
  border-radius: 4px; /* Round the corners of the thumb */
}

/* When hovering over the scrollbar */
::-webkit-scrollbar-thumb:hover {
  background: #555; /* Change the thumb color on hover */
}

/* Scrollbar corner (between vertical and horizontal scrollbar) */
::-webkit-scrollbar-corner {
  background: #f1f1f1; /* Set the background color of the corner */
}
</style>
