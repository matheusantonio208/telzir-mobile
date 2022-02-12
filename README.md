# telzir-mobile
Exercício LOLDesginer - Módulo Mobile (React Native)

<p align="center">
<a href="https://github.com/matheusantonio208/telzir-mobile"><img src="https://github.com/matheusantonio208/telzir-mobile/blob/main/.brand/logo.png" alt="A beautiful and minimal node js API." width="350"></a><br>
"Simplicity is the ultimate sophistication" -Leonardo da Vinci
</p>
<p align="center">
<a href="https://github.com/matheusantonio208/telzir-mobile" target="__blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/matheusantonio208/telzir-mobile?style=social"></a>
<a href="https://github.com/matheusantonio208/telzir-mobile/blob/main/LICENSE"><img src="https://img.shields.io/github/license/matheusantonio208/telzir-mobile?label=License&message=MIT&color=red" alt="License"></a>
<a href="https://github.com/matheusantonio208/telzir-mobile/archive/main.zip" target="__blank"><img src="https://img.shields.io/static/v1?label=Download&message=ZIP&color=red" alt="atlantjs.dev-setup preview"></a>
</p>

<p align="center">
<b>Project Status:</b>  In development ⚠️
</p>

### :bookmark_tabs:Table of Contents
---
- [telzir-mobile](#telzir-mobile)
  - [### :bookmark_tabs:Table of Contents](#-bookmark_tabstable-of-contents)
  - [### ⛩️ Philosophy](#-️-philosophy)
  - [### :arrow_forward: Get Started](#-arrow_forward-get-started)


### ⛩️ Philosophy
------
**Performatic**
<p>
We seek to develop the best solution, spending the least amount of client / server processing, delivering the most fluid solution possible.
</p>

**Robust**
<p>
We aim to develop an elegant, efficient and healthy code - avoiding duplication of code, having a clear and unique "what to do?" and the "how to do it?" - with complete and efficient error handling, together with a battery of tests that spells out the business rules according to a clear strategy in order to avoid confusion with code tangle.
</p>

**Scalable**
<p>
We use a modular architecture, with its modules separated by contexts, making it easier to maintain and scale the application over time, without harming other parts of the project.
</p>

**Simple**
<p>
Our program is oriented to "How can I make even a child understand what is written, and even a monkey can use it?"
</p>

**Safe**
<p>
We aim at the security of information transferred from end to end through the application modules.
</p>

### :arrow_forward: Get Started
---
1. <a href="https://github.com/matheusantonio208/telzir-mobile/archive/main.zip">Download</a> or clone repository with `git clone https://github.com/matheusantonio208/telzir-mobile.git`
2. Run `pnpm install` or `yarn install`
3. Open Telzir API in VS Code Terminal
   1. Rename console with `server api`
   2. Run `yarn dev`
4. Create a new console of Telzir Mobile
5. Rename console with `vpn-api`
6. Run `yarn lt --port 3000 --subdomain application-mock-server`
7. Add link received in file -> src \ services \ api.js
8. Create new console Telzir Mobile, and rename with `mobile-version`
9. With the cell phone plugged into the usb port, run `adb devices`
11. Run `adb reverse tcp:9090 tcp:9090`
12. Run `yarn android`

<p align="center">
Or click in <a href="https://gitpod.io/#https://github.com/matheusantonio208/telzir-mobile" target="__blank"><img src="https://img.shields.io/badge/Start-Gitpod-blue?logo=gitpod" alt="Gitpod Ready-to-Code"></a>
</p>