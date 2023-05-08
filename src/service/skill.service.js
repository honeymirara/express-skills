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

function createSkill(title) {
  const arr = JSON.parse(fs.readFileSync(path));
  const obj = { id: arr.length + 1, title: title }
  arr.push(obj);
  fs.writeFileSync(path, JSON.stringify(arr));
  return arr;
};

function updateSkill(id, title) {
const arr = JSON.parse(fs.readFileSync(path));
const filtered = arr.filter(el => el.id != id);
if (arr.length == filtered.length) throw new Error('id does not exist');

const obj = {id, title};
filtered.push(obj);

fs.writeFileSync(path, JSON.stringify(arr));
return arr;
};


function deleteSkill(id) {
  const arr = JSON.parse(fs, readFileSync(path));
  const filtered = arr.filter(el => el.id !=id);
  fs.writeFileSync(path, JSON.stringify(arr));
  return arr;
};






module.exports = { getAllSkills, getSkillById, deleteSkill, createSkill, updateSkill };
