const express = require('express');
const { getAllSkills, getSkillById, deleteSkill, createSkill, updateSkill
} = require('../service/skill.service');
const route = express.Router();

route.get('/', (req, res) => {
    const data = getAllSkills();
    res.status(200).send(data);
});

route.get('/:id', (req, res) => {
    const { id } = req.params;
    const data = getSkillById(id);
    res.status(200).send(data);
});

route.delete('/:id', (req, res) => {
    const { id } = req.params;
    const data = deleteSkill(id);
    res.status(200).send(data);
});

route.post('/', (req, res) => {
    const { title } = req.body;
    const data = createSkill(title)
    res.status(200).send(data);
});

route.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const data = updateSkill(id, title);
    res.status(200).send(data);

});

module.exports = route;
