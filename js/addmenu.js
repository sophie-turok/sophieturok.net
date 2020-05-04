var mainmenu = document.createElement('mainmenu');
document.body.appendChild(mainmenu)

var homebutton = document.createElement('a')
homebutton.id = 'homebutton'
homebutton.href = 'index.html'
homebutton.innerHTML = '<h2>sophie turok</h2>'
mainmenu.appendChild(homebutton)

var aboutbutton = document.createElement('a')
aboutbutton.innerHTML = 'about'
aboutbutton.href = 'about.html'
aboutbutton.id = 'boldlink'
mainmenu.appendChild(aboutbutton)

var projects = document.createElement('a')
projects.innerHTML = 'projects'
projects.href = 'index.html'
projects.id = 'boldlink'
mainmenu.appendChild(projects)

// EDIT THESE TWO LINES TO ADD A PAGE
var projectlinks = ['LittlePilesEverywhere','gonetothedogs','Signs','blocks','pants','youhavetheseshelveswhatwouldyouputonthem','yardsigns','free']
var projecttitles = ['Little Piles Everywhere', 'gone to the dogs','Signs', 'Blocks', 'pants', 'You have these shelves what would you put on them', 'yard signs', 'free']
projectlinks.forEach((projectlink, index) => {
	var button = document.createElement('a')
	button.innerHTML = projecttitles[index]
	button.href = projectlink + '.html'
	mainmenu.appendChild(button)
})
