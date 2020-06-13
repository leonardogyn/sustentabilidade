import { Request, Response } from 'express';
declare class ItemController {
    index(req: Request, res: Response): Promise<Response<any>>;
}
declare const _default: ItemController;
export default _default;
