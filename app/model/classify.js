module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const d = new Date();
    const ClassifySchema = new Schema({
        name:{ type:String },
        type:{ type:Number,default:1}, //1唯美图片2背景图片
        description:{ type:String },
        add_time:{
            type:Number,
            default:d.getTime()
        },

    });
    return mongoose.model('Classify',ClassifySchema,'classify');
}