import { Model } from 'sequelize-typescript';
declare class PointItem extends Model<PointItem> {
    id: string;
    point_id: number;
    item_id: number;
    created_at: Date;
    updated_at: Date;
    static init(sequelize: any): typeof PointItem;
    static associate(models: any): void;
}
export default PointItem;
