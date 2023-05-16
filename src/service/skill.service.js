const fs = require('fs');
const path = './storage/storage.json';

class Service{
   getAllSkills() {
    const arr = JSON.parse(fs.readFileSync(path));
    if (!arr.length) throw new Error('arr is empty');
    return arr;
  };
  
   getSkillById(id) {
    const arr = JSON.parse(fs.readFileSync(path));
    const filtered = arr.filter(el => el.id == id);
    if (!filtered.length) throw new Error('id is not found');
    fs.writeFileSync(path, JSON.stringify(arr));
    return filtered;
  };
  
   createSkill(title) {
    const arr = JSON.parse(fs.readFileSync(path));
    const filtered = arr.filter(el => el.title == title);
    if (filtered.length > 0) throw new Error('id is exist');
    const obj = { id: arr.length + 1, title: title }
    arr.push(obj);
    fs.writeFileSync(path, JSON.stringify(arr));
    return arr;
  };
  
  updateSkill(id, title) {
    const arr = JSON.parse(fs.readFileSync(path));
    const filtered = arr.filter(el => el.id != id);
    if (arr.length == filtered.length) throw new Error('id does not exist');
  
    const obj = { id, title };
    filtered.push(obj);
  
    fs.writeFileSync(path, JSON.stringify(filtered));
    return filtered;
  };
  
  
  deleteSkill(id) {
    const arr = JSON.parse(fs.readFileSync(path));
    const filtered = arr.filter(el => el.id != id);
    fs.writeFileSync(path, JSON.stringify(filtered));
    return filtered;
  };
}









module.exports = {Service };
