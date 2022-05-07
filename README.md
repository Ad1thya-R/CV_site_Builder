

<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Ad1thya-R/CV_site_Builder">
    <img src="images/cvbuilder.jpg" alt="Logo" width="800">
  </a>

<h3 align="center">CV Site Builder</h3>

  <p align="center">
    As an extension to designing my portfolio website (which you can visit at https://adithya.eu), I decided to create a tool that would allow anyone to turn their CV into a website. I used HTML5, CSS and vanilla JavaScript, without any libraries.
    <br />
    <a href="https://github.com/Ad1thya-R/CV_site_Builder"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://ad1thya-r.github.io/CV_site_Builder">View Demo</a>
    ·
    <a href="https://github.com/Ad1thya-R/CV_site_Builder/issues">Report Bug</a>
    ·
    <a href="https://github.com/Ad1thya-R/CV_site_Builder/issues">Request Feature</a>
  </p>
</div>



<!-- ABOUT THE PROJECT -->
## About The Project

This project was a part of my university web programming course (CSE104), with the objective of developing a dynamic, interactive, standard compliant, website using client based programming (html, css, js). 

It was required that the project had the following elements:
* General structure defined clearly in valid current HTML.
* General design/appearance defined in valid CSS.
* Interaction with the user, based on JavaScript



<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://javascript.com/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## User Usage

The following section will describe a simple exploration of the functionalities of both the CV Builder site and the CV site from a User standpoint.


### CV Builder Usage

The user must input in all fields to have a fully functioning CV site. Unfortunately, I did not implement the ability to customise the number of project inputs, education inputs and experience inputs. 

The use must also separate all fields by commas where they are shown. This holds true with the skills, social media, projects, education and experience sections.

The image uploads are not truly restricted to a specific file format, however it is recommended for the user to use relatively smaller memory files, as the local Storage in which these files are kept is restricted in space and the loading time of the images when not cached on ones machine (i.e. when somebody loads the user's CV website for the first time) can be quite long.

### CV Site Usage

The user's interactions with the built CV website involve a few standard interactive features which have been implemented. Firstly, when hovering over any of the headers, the "bouncy text" animation gets triggered.

Then, the user can interact with the "theme switcher", which allows them to select one among 3 different default colour themes to set for their website. Their selection is then kept for any future visits of the webpage.

Other than that, they are able to access the various links to other pages with the many "See more" buttons.



### Development of the CV site

The CV Site was built using CSS Grid, with the inspiration for the design of the main page being that of a MacBook tab. I used grid as I felt that given the structure I had envisioned for my website, with the listing of multiple portfolio informations aligned.

I then implemented a "bouncy text" animation when the user hovers over the text (inspired by https://bobangajicsm.github.io/portfolio/). I implmented this using CSS transform with the following parameters:

   ```css
    @keyframes animate {
      25%{
          transform: scale(0.8,1.3);
      }
      50%{
          transform: scale(1.1,0.8);
      }
      75%{
          transform: scale(0.7,1.2);
      }
     }

   ```
   The other "big" interactive feature as far as the CV Website is concerned is the implmentation of the theme switcher. There were 2 main elements to achieving a working theme switcher. Firstly, I implmented all of the main colours of the website in a variable based manner in CSS, as follows:
   
   ```css
    :root{
      --mainColor:#eaeaea;
      --secondaryColor:#fff;

      --borderColor:#c1c1c1;

      --mainText:black;
      --secondaryText:#4b5156;

      --themeDotborder:#24292e;

      --previewColor:rgba(234,234,234,0.8);
      --prevShadow:#01426a;

      --polytechnique:rgba(255,255,255,0);
      --bouncyhover:#01426a;
      --linkcolor: #01426a;
    }

   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

See the [open issues](https://github.com/Ad1thya-R/CV_site_Builder/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>




    © 2022 GitHub, Inc.

    Terms
    Privacy
    Security
    Status
    Docs
    Contact GitHub
    Pricing
    API
    Training
    Blog
    About

