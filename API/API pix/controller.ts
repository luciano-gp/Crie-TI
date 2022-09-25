import { Log } from './Log';
export class LogController {

    create = async (req, res, next) => {
        try {
            const data = await Log.create(req.body);
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

}