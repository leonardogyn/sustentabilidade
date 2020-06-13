import { Request, Response } from 'express';
declare class PointController {
    index(req: Request, res: Response): Promise<Response>;
    store(req: Request, res: Response): Promise<Response>;
}
declare const _default: PointController;
export default _default;
