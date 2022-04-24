<template lang="pug">
v-app(app)
  v-app-bar(app color="white" elevate-on-scroll)
    v-container
      v-row(align="center")
          v-app-bar-nav-icon 
            v-img(src="./assets/logo.png" max-height="32" contain)
          v-app-bar-title() Fookie.js Overview
          v-spacer      
  v-main(app)
    v-container(app class="tw-h-full")
      router-view
  v-footer(padless)
    v-card(flat tile width="100%" class="tw-text-center")
      v-card-text
        | {{ new Date().getFullYear() }} &mdash; 
        strong Fookie JS
