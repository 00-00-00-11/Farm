Bot template with multi language support prepared using DiscordJS v12
---

- Easy to use bot template that can be installed and customized quickly. Now with MongoDB support!
- You just need to edit `config.json` file

Get live support
---
- You can quickly find me on [my Discord server](https://bariscodes.me/discord)

Installation
--- 
- You need [Node.js](https://nodejs.org/) V12 or higher.
- Clone or fork this repository
- Edit `config.json` file
- Run `npm install` command
- Run `npm start` command

Contributing
---
- Feel free to open PRs

Quick Documentation
---

<b>Q:</b> How can I add more languages?<br>
<b>A:</b> To add more languages just copy one of the `en` or `tr` folder in `locales` folder and translate it. <b>Do not change the key names</b>.

<b>Q:</b> Can I use this codes with DiscordJS v11?<br>
<b>A:</b> Basically, you can't.

<b>Q:</b> I want to add new command, but how can I use language system?<br>
<b>A:</b> Just add you new command and use `client.i18n.get("LANG_CODE", "SECTION", "KEY")`. And don't forget to add "KEY" value to required files in all language folders.
