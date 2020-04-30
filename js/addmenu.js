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
var projectlinks = ['wordblocks','domesticinstallations','yardsigns']
var projecttitles = ['word blocks', 'domestic installations', 'yard signs']
projectlinks.forEach((projectlink, index) => {
	var button = document.createElement('a')
	button.innerHTML = projecttitles[index]
	button.href = projectlink + '.html'
	mainmenu.appendChild(button)
})
