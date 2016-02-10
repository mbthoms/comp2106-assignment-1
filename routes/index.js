var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Home - Matthew Thoms, Web Designer / Developer',
    headerImage: 'images/index-header.jpg',
    customPageStylesheet: "/stylesheets/index-nav.css"
  });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', {
    title: 'About - Matthew Thoms, Web Designer / Developer',
    headerImage: 'images/about-header.jpg',
    customPageStylesheet: "/stylesheets/about-nav.css"
  });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', {
    title: 'Projects - Matthew Thoms, Web Designer / Developer',
    headerImage: 'images/work-header.jpg',
    customPageStylesheet: "/stylesheets/projects-nav.css"
  });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', {
    title: 'Contact - Matthew Thoms, Web Designer / Developer',
    headerImage: 'images/contact-header.jpg',
    customPageStylesheet: "/stylesheets/contact-nav.css"
  });
});

module.exports = router;
