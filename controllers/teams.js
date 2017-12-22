var express = require('express');
var fs = require('fs');
var teamService = require('../models/teamService');
var router = express.Router();

router.get('/', function(req, res) {
  var teams = teamService.allTeams();
  res.render('teams/index', { teams: teams });
});

router.post('/', function(req, res) {
  teamService.addTeam(req.body);
  res.redirect('/teams');
});

router.get('/new', function(req, res) {
  res.render('teams/new');
});

//emmy work merged with brandi
router.delete('/:name', function(req,res){
	// console.log('name:', req.params.name)
  	teamService.deleteTeam(req.params.name);
  		res.send('Delete Route Works!')
});

router.put('/:name', function(req,res){
  	teamService.editTeam(req.params.name, req.body);
  		res.send('PUT Success!');
});


//right here
router.get('/edit/:name', function(req, res) {
  console.log(req.param.name);
	var team = teamService.getTeam(req.params.name);
  	res.render('teams/edit', {team: team});
});



router.get('/:name', function(req, res) {
  // search for the team name in all the teams.
  var team = teamService.getTeam(req.params.name);

  res.render('teams/show', { team: team });
});

module.exports = router;
