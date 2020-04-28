# Guide to adding a piece of work to this website
1. upload any images you have to the `pics` folder
2. copy the contents of `sample.html` into a new file
3. replace `YOUR WORK TITLE` in **two** places with the title of your work
4. replace `YOUR_PICTURE1.jpg` with the actual name of the image you want to show. if you want to use more than 1 picture you can add another line that looks like the sample
5. save your file under `PROJECTNAME.html` (replace projectname with a name of your project **without spaces**)
6. open `index.html` and add this code directly above the line that says `</projects>` (**not** the  line that says `<projects>`):
```
<project>
  <a href="PROJECTNAME.html">
    <img src="pics/YOUR_PICTURE.jpg"/>
    YOUR WORK TITLE
  </a>
</project>
```
Again, replace `PROJECTNAME, YOUR_PICTURE, AND YOUR WORK TITLE` with the appropriate names. 

7. save your changes in `index.html` and then open the folder `js` and open the file `addmenu.js`.  Edit the line that looks like this: 
```
var projectlinks = ['wordblocks','domesticinstallations']
``` 
by adding `'PROJECTNAME'` (replace `PROJECTNAME` with the name of the file you added for this project). After you add it, the line should look like this: 
```
var projectlinks = ['wordblocks','domesticinstallations','YOURPROJECTNAME']
``` 

8.  now, do this again with the next line, but for this one, add the actual text you want to appear for the link that you press on. This should be the same as `YOUR WORK TITLE` above.
9.  save this file. you're done! 