module.exports = `
<html style="height: 100%"><head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Anonymous+Pro" rel="stylesheet">
    <link rel="shortcut icon" type="image/x-icon" href="assets/favicon.ico">
    <title>renderer check</title>
<style type="text/css">#inputField {
  display: flex;
  flex-direction: row;
  align-content: center;
  margin: 10px 25px;
}

.field_label {
  font-size: 16px;
  margin: 0 5px 0 0;
  align-self: center;
}

#inputField .input {
  flex-grow: 1;
  padding: 3px;
  font-size: 120%;
}
</style><style type="text/css">#labelField {
  display: flex;
  flex-direction: row;
  align-content: center;
  margin: 10px 25px;
}

.field_value {
  font-size: 120%;
  margin: 0 5px 0 0;
  align-self: center;
}
</style><style type="text/css">#jobs {
  display: flex;
  height: 100%;
  flex-direction: column;
  font-family: "Roboto; sans-serif", sans-serif;
  font-size: 12px;
  margin-left: 10px;
  margin-right: 10px;
  overflow-y: auto;
}

#jobs .title {
  font-size: 24px;
  align-self: center;
  margin: 17px 0 0 0;
  font-weight: bold;
  color: #5F9EA0;
}

.actionsButtonsContainer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 25px;
}

.actionButton {
  cursor: pointer;
  padding: 3px 12px;
  font-size: 15px;
  color: #406a6b;
  margin: 0 0 0 10px;
}

.tableListContainer {
  display: flex;
  margin: 10px 20px;
}

.tableListContainer .tableList {
  width: 100%;
  border-collapse: collapse;
}

.tableListContainer .tableListClicable td {
  cursor: pointer;
}

.selectedItem {
  background-color: lightcyan;
}

@media all and (max-width: 700px) {
  #jobs {
    display: flex;
    height: 100%;
    flex-direction: column;
    font-family: "Roboto; sans-serif", sans-serif;
    font-size: 12px;
    margin-left: 10px;
    margin-right: 10px;
    overflow-y: auto;
  }

  #jobs .title {
    font-size: 24px;
    align-self: center;
    margin: 17px 0 0 0;
    font-weight: bold;
    color: #5F9EA0;
  }

}
</style><style type="text/css">/*

github.com style (c) Vasily Polovnyov <vast@whiteants.net>

*/

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  color: #333;
  background: #f8f8f8;
}

.hljs-comment,
.hljs-quote {
  color: #998;
  font-style: italic;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-subst {
  color: #333;
  font-weight: bold;
}

.hljs-number,
.hljs-literal,
.hljs-variable,
.hljs-template-variable,
.hljs-tag .hljs-attr {
  color: #008080;
}

.hljs-string,
.hljs-doctag {
  color: #d14;
}

.hljs-title,
.hljs-section,
.hljs-selector-id {
  color: #900;
  font-weight: bold;
}

.hljs-subst {
  font-weight: normal;
}

.hljs-type,
.hljs-class .hljs-title {
  color: #458;
  font-weight: bold;
}

.hljs-tag,
.hljs-name,
.hljs-attribute {
  color: #000080;
  font-weight: normal;
}

.hljs-regexp,
.hljs-link {
  color: #009926;
}

.hljs-symbol,
.hljs-bullet {
  color: #990073;
}

.hljs-built_in,
.hljs-builtin-name {
  color: #0086b3;
}

.hljs-meta {
  color: #999;
  font-weight: bold;
}

.hljs-deletion {
  background: #fdd;
}

.hljs-addition {
  background: #dfd;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}
</style><style type="text/css">/*

Original highlight.js style (c) Ivan Sagalaev <maniac@softwaremaniacs.org>

*/

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #F0F0F0;
}


/* Base color: saturation 0; */

.hljs,
.hljs-subst {
  color: #444;
}

.hljs-comment {
  color: #888888;
}

.hljs-keyword,
.hljs-attribute,
.hljs-selector-tag,
.hljs-meta-keyword,
.hljs-doctag,
.hljs-name {
  font-weight: bold;
}


/* User color: hue: 0 */

.hljs-type,
.hljs-string,
.hljs-number,
.hljs-selector-id,
.hljs-selector-class,
.hljs-quote,
.hljs-template-tag,
.hljs-deletion {
  color: #880000;
}

.hljs-title,
.hljs-section {
  color: #880000;
  font-weight: bold;
}

.hljs-regexp,
.hljs-symbol,
.hljs-variable,
.hljs-template-variable,
.hljs-link,
.hljs-selector-attr,
.hljs-selector-pseudo {
  color: #BC6060;
}


/* Language color: hue: 90; */

.hljs-literal {
  color: #78A960;
}

.hljs-built_in,
.hljs-bullet,
.hljs-code,
.hljs-addition {
  color: #397300;
}


/* Meta color: hue: 200 */

.hljs-meta {
  color: #1f7199;
}

.hljs-meta-string {
  color: #4d99bf;
}


/* Misc effects */

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}
</style><style type="text/css">pre {
  border-left: 1px dashed #EEEEEE;
  margin-left: 5px;
  padding-left: 10px;
}

pre code {
  font-family: 'Anonymous Pro', monospace;
  border-bottom: 1px dashed #D7D7D7;
}

th {
  background-color: rgba(176, 176, 176, 0.3);
  border: 1px solid rgba(176, 176, 176, 0.3);
  padding: 7px;
}

td {
  padding: 7px;
  border: 1px solid #DCDCDC;
}

img[src$='#emoji-img'] {
  width: 27px;
  vertical-align: bottom;
}

.userNameMe {
  color: #437B58;
}

.userNameOther {
  color: #4F58D8;
}

#bodyContainer {
  flex-direction: row;
  flex-grow: 1;
  font-size: 14px;
}

#editButton, #deleteButton {
  font-size: 12px;
  margin-left: 7px;
  cursor: pointer;
  text-decoration: underline;
  color: #777777;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

section.title {
  font-size: 24px;
  align-self: center;
  margin: 17px 0 0 0;
  font-weight: bold;
  color: #5F9EA0;
}

section.fields {
  font-size: 16px;
  margin: 23px 10% 67px 10%;
  border: 5px solid #D9CADC;
}

section.fields .fieldGroup {
  border: 3px solid #BDA4FB;
  padding: 20px;
  margin: 17px;
}

section.fields .fieldGroupTitle {
  font-size: 21px;
  margin: 0 0 15px 0;
  color: #7C5FC9;
  font-weight: bold;
}

section.fields .fieldContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  border-bottom: 1px solid #D9CADC;
}

.labelContainer {
  display: flex;
  flex-direction: row;
}

section.fields input[type=checkbox] {
  /* Double-sized Checkboxes */
  -ms-transform: scale(1.7); /* IE */
  -moz-transform: scale(1.7); /* FF */
  -webkit-transform: scale(1.7); /* Safari and Chrome */
  -o-transform: scale(1.7); /* Opera */
  padding: 10px;
}

section.fields input[type=text] {
  text-align: right;
  font-size: 18px;
  width: 30px;
  padding-right: 10px;
  margin: 3px 0;
}

@media all and (max-width: 700px) {
  #bodyContainer {
    flex-direction: row;
    flex-grow: 1;
    font-size: 18px;
  }

  #editButton, #deleteButton {
    font-size: 18px;
    margin-left: 7px;
    cursor: pointer;
    text-decoration: underline;
    color: #777777;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  .labelContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.loader {
  height: 11px;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #DDDDDD;
}

.loader:before {
  display: block;
  position: absolute;
  content: "";
  left: -200px;
  width: 200px;
  height: 11px;
  background-color: #2980B9;
  animation: loading 1s linear infinite;
}

@keyframes loading {
  from {
    left: -200px;
    width: 30%;
  }
  50% {
    width: 30%;
  }
  70% {
    width: 70%;
  }
  80% {
    left: 50%;
  }
  95% {
    left: 120%;
  }
  to {
    left: 100%;
  }
}

/*

agate.css
androidstudio.css
arduino-light.css
arta.css
ascetic.css
atelier-cave-dark.css
atelier-cave-light.css
atelier-dune-dark.css
atelier-dune-light.css
atelier-estuary-dark.css
atelier-estuary-light.css
atelier-forest-dark.css
atelier-forest-light.css
atelier-heath-dark.css
atelier-heath-light.css
atelier-lakeside-dark.css
atelier-lakeside-light.css
atelier-plateau-dark.css
atelier-plateau-light.css
atelier-savanna-dark.css
atelier-savanna-light.css
atelier-seaside-dark.css
atelier-seaside-light.css
atelier-sulphurpool-dark.css
atelier-sulphurpool-light.css
atom-one-dark.css
atom-one-light.css
brown-paper.css
codepen-embed.css
color-brewer.css
darcula.css
dark.css
darkula.css
default.css
docco.css
dracula.css
far.css
foundation.css
github-gist.css
github.css
googlecode.css
grayscale.css
gruvbox-dark.css
gruvbox-light.css
hopscotch.css
hybrid.css
idea.css
ir-black.css
kimbie.dark.css
kimbie.light.css
magula.css
mono-blue.css
monokai-sublime.css
monokai.css
obsidian.css
ocean.css
paraiso-dark.css
paraiso-light.css
pojoaque.css
pojoaque.jpg
purebasic.css
qtcreator_dark.css
qtcreator_light.css
railscasts.css
rainbow.css
school-book.css
solarized-dark.css
solarized-light.css
sunburst.css
tomorrow-night-blue.css
tomorrow-night-bright.css
tomorrow-night-eighties.css
tomorrow-night.css
tomorrow.css
vs.css
xcode.css
xt256.css
zenburn.css

 */


</style></head>
<body style="height: 100%; margin: 0px;">
<div style="height: 100%" id="app"><div data-reactroot="" id="mainContainer" style="display: flex; height: 100%; flex-direction: column; font-family: Roboto, sans-serif; font-size: 16px; margin-left: 10px; margin-right: 10px; overflow-y: hidden;"><div class="notifications-wrapper"></div><header><div id="titleContainer" style="display: flex; flex-direction: row; justify-content: flex-start; margin-top: 9px; margin-bottom: 14px;"><a target="_blank" style="font-size: 22px; color: rgb(119, 119, 119); margin-left: 8px; text-decoration: underline; cursor: pointer;"><!-- react-text: 6 -->md list <!-- /react-text --></a><a style="font-size: 14px; color: rgb(119, 119, 119); margin-top: 9px; margin-left: 10px; text-decoration: underline; cursor: pointer;">config</a><a style="font-size: 14px; color: rgb(119, 119, 119); margin-top: 9px; margin-left: 10px; text-decoration: underline; cursor: pointer;">search</a><div><a style="font-size: 14px; color: rgb(119, 119, 119); margin-top: 9px; margin-left: 10px; text-decoration: underline; cursor: pointer;">members</a><a style="font-size: 14px; color: rgb(119, 119, 119); margin-top: 9px; margin-left: 10px; text-decoration: underline; cursor: pointer;">Jobs</a><a style="font-size: 14px; color: rgb(119, 119, 119); margin-top: 9px; margin-left: 10px; text-decoration: underline; cursor: pointer;">Executions</a><a style="font-size: 14px; color: rgb(119, 119, 119); margin-top: 9px; margin-left: 10px; text-decoration: underline; cursor: pointer;">Body_Results</a><a style="font-size: 14px; color: rgb(119, 119, 119); margin-top: 9px; margin-left: 10px; text-decoration: underline; cursor: pointer;">JSON_Extrations</a><a style="font-size: 14px; color: rgb(119, 119, 119); margin-top: 9px; margin-left: 10px; text-decoration: underline; cursor: pointer;">Markdown_Conversions</a></div></div><div id="buttonsContainer" style="display: flex; position: absolute; right: 21px; top: 24px; font-size: 12px;"></div></header><section id="sectionBody" style="flex: 1 1 auto; overflow-y: auto; min-height: 0px;"><div id="jobs"><section class="title">Jobs</section><section class="tableListContainer"><table class="tableList tableListClicable"><thead><tr><th>name</th><th>initial_state</th><th>url</th><th>created_at</th></tr></thead><tbody><tr><td>job_name 1</td><td>initial_spec_state 1</td><td>url 1</td><td>1475851513611</td></tr><tr><td>job_name 2</td><td>initial_spec_state 2</td><td>url 2</td><td>1475851513611</td></tr><tr><td>job_name 3</td><td>initial_spec_state 3</td><td>url 3</td><td>1475851513611</td></tr></tbody></table></section><section class="actionsButtonsContainer"><button class="actionButton">Create new Job</button></section><section class="inputsContainer"><div id="labelField"><label class="field_label"><!-- react-text: 204 -->id<!-- /react-text --><!-- react-text: 205 -->:<!-- /react-text --></label><label class="field_value"></label></div><div id="inputField"><label class="field_label"><!-- react-text: 209 -->Job name<!-- /react-text --><!-- react-text: 210 -->:<!-- /react-text --></label><input type="text" class="input" value="job_name"></div><div id="inputField"><label class="field_label"><!-- react-text: 214 -->Initial spec state (firebase queue)<!-- /react-text --><!-- react-text: 215 -->:<!-- /react-text --></label><input type="text" class="input" value="initial_spec_state"></div><div id="inputField"><label class="field_label"><!-- react-text: 219 -->Initial URL<!-- /react-text --><!-- react-text: 220 -->:<!-- /react-text --></label><input type="text" class="input" value="url"></div></section><section class="actionsButtonsContainer"><button class="actionButton">Save</button><button class="actionButton">Run</button></section><section class="tableListContainer"><table class="tableList tableListClicable"><thead><tr><th>body</th><th>created_at</th></tr></thead><tbody><tr><td>bla, bla, bla, bla, bla, bla, bla</td><td>1475851513611</td></tr></tbody></table></section><div class="resultsContainer"></div></div></section><footer></footer></div></div>
<script type="text/javascript" src="bundle.js"></script>

<script src="http://127.0.0.1:35729/livereload.js?ext=Chrome&amp;extver=2.1.0"></script></body></html>
`;
