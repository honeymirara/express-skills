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
  const arr = JSON.parse(fs.readFileSync(path));
  return arr;
};

function getSkillById(id) {
  const arr = JSON.parse(fs.readFileSync(path));
  const filtered = arr.filter(el => el.id == id);
  
  fs.writeFileSync(path, JSON.stringify(arr));
  return filtered;
};

function deleteSkill(id) {
  const arr = JSON.parse(fs.readFileSync(path));
  const filtered = arr.filter(el => el.id != id);
  
  fs.writeFileSync(path, JSON.stringify(arr));
  return filtered;
};

function createSkill(title) {
  const arr = JSON.parse(fs.readFileSync(path));
  const obj = { id: Math.floor(Math.random() * 10), title };
  arr.push(obj);
  
  fs.writeFileSync(path, JSON.stringify(arr));
  return arr;
};

function updateSkill(id, title) {
  const arr = JSON.parse(fs.readFileSync(path));
  const filtered = arr.filter(el => el.id != id);
  if (arr.length == filtered.length) throw new Error('bad id');

  const obj = { id, title };
  filtered.push(obj);
  
  fs.writeFileSync(path, JSON.stringify(arr));
  return filtered;
};




module.exports = { getAllSkills, getSkillById, deleteSkill, createSkill, updateSkill };
