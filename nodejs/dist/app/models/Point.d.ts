import { Model } from 'sequelize-typescript';
declare class Point extends Model<string> {
    id?: string;
    image?: string;
    name: string;
    email: string;
    whatsapp: string;
    latitude: number;
    longitude: number;
    city: string;
    uf: string;
    created_at: Date;
    updated_at: Date;
    static init(sequelize: any): any;
    static associate(models: any): void;
}
export default Point;
