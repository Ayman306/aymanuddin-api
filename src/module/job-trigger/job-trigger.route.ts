import express from 'express';
class jobTriggerRoute {
    router:express.Router = express.Router();
    constructor() {
        this.init()
    }

    init() {
        this.router.get('/', (req: express.Request, res: express.Response) => {
            res.send('Job Trigger')
        })
    }
}

export const jobTrigger = new jobTriggerRoute().router;