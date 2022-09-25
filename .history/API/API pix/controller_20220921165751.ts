import { Log } from './Log';
export class LogController {

    index = async (req, res, next) => {
        const logs = await Log.findAll();
        res.json(logs);
    }

    create = async (req, res, next) => {
        try {
            const data = await Log.create(req.body);
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

}