import { Router } from "express"
import { getPlayer, getPlayerByID, postPlayer, deletePlayer, updatePlayer } from "./controllers/players-controller"
import { getClubs } from "./controllers/clubs-controler";

const router = Router()

router.get('/players', getPlayer);
router.post('/players', postPlayer);
router.delete('/players/:id', deletePlayer);
router.patch('/players/:id', updatePlayer);
router.get("/players/:id", getPlayerByID);

router.get("/clubs", getClubs);

export { router }