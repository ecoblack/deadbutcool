/*
 * This is a manifest file that'll be compiled into application.css, which will include all the files
 * listed below.
 *
 * Any CSS and SCSS file within this directory, lib/assets/stylesheets, vendor/assets/stylesheets,
 * or any plugin's vendor/assets/stylesheets directory can be referenced here using a relative path.
 *
 * You're free to add application-wide styles to this file and they'll appear at the bottom of the
 * compiled file so the styles you add here take precedence over styles defined in any other CSS/SCSS
 * files in this directory. Styles in this file should be added after the last require_* statement.
 * It is generally better to create a new file per style scope.
 *
 *= require_tree .
 *= require_self
 */

/* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

/* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
@media screen and (max-width: 800px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive a.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}

// This applies from 600px onwards
body {
  background-color: #000000;
}

// This applies from 0px to 600px
@media (max-width: 600px) {
  body {
    background: red;
  }
}
/* universal */

html, body{

    
    margin: 0;
    padding: 0;
}
/* HEADER */


.topnav a {
 
  
  display: inline-block;
  font-family: Canela;
  color: #fff;
  letter-spacing: 1.4px;
  text-align: center;
  
  text-decoration: none;
  font-size: 32px;
  

}

#myTopnav {

  border: 1px solid red;
}

.independent-studio-c {
  width: 986px;
  
  font-family: Favorit, sans-serif;
  font-size: 60px;
  line-height: 1.0;
  text-align: left;
  color: #ffffff;
}

/* Works grid */

.work a {
 font-family: Favorit, sans-serif;
  color: white;
  margin:10%;
  width: 300px;
  height: 300px;
  border: 1px solid black;
  border: 1px solid red;
}

.gallery__item {
  float: left;
  width: 30%;
  margin-right: 5%;
  margin-bottom: 5%;
  &:nth-child(3n) {
    margin-right: 0;
  }

  
}
/* FOOTER */
footer  {
  border: 1px solid red;
  font-family: Favorit, sans-serif;
  font-size: 24px;
  line-height: 1.25;
  text-align: left;
  color: #ffffff;
  padding:50px;
 
}
