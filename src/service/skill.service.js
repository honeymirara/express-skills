const arr = [
  { id: 1, title: 'javascript' },
  { id: 2, title: 'typescript' },
  { id: 3, title: 'mongodb' },
  { id: 4, title: 'mongoose' },
  { id: 5, title: 'pg' },
];

const fs = require('fs');
const path = './storage/storage.json';


function getAllSkills() {
  const array = JSON.parse(fs.readFileSync(path));
  return arr;
};

function getSkillById(id) {
  const filtered = arr.filter(el => el.id == id);
  return filtered;
};

function deleteSkill(id) {
  const filtered = arr.filter(el => el.id != id);
  return filtered;
};

function createSkill(title) {
    const obj = { id: Math.floor(Math.random() * 10), title };
    arr.push(obj);
    return arr;
  };

function updateSkill(id, title) {
    const filtered = arr.filter(el => el.id != id);
    if (arr.length == filtered.length) throw new Error('bad id');

    const obj = { id, title };
    filtered.push(obj);
    return filtered;
};



module.exports = { getAllSkills, getSkillById, deleteSkill, createSkill, updateSkill };
