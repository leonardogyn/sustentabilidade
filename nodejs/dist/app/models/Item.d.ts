import { Model } from 'sequelize-typescript';
declare class Item extends Model<Item> {
    id: string;
    image?: string;
    title: string;
    created_at: Date;
    updated_at: Date;
    static init(sequelize: any): any;
    static associate(models: any): void;
}
export default Item;
