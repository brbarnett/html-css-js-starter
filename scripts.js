const dynamicContent = document.createElement('p');
dynamicContent.innerText = 'This is a dynamically-generated section, created in <code>scripts.js</code>';
document.getElementById('body').appendChild(dynamicContent);
