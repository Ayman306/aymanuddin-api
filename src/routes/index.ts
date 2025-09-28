import { jobTrigger } from '../module/job-trigger/job-trigger.route';
import express from 'express';
class RouteInitClass {
    router:express.Router=express.Router();
    constructor() {
        this.init()
    }

    init() {
        this.router.use('/job-trigger', jobTrigger);
    }
}

export const apiRoute = new RouteInitClass();