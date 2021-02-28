const PetController = require('../controllers/pet.controller');

module.exports = (app) => {
    app.get("/api/pets", PetController.index);
    app.post("/api/create/pets",PetController.create);
    app.get("/api/pets/:id", PetController.show);
    app.put("/api/update/pets/:id", PetController.update);
    app.delete("/api/destroy/pets/:id", PetController.destroy);
}