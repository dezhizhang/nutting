module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const d = new Date();
    const PictureSchema = new Schema({
        name:{ type:String },
        classify_id:{ type:Schema.Types.Mixed },
        picture_id:{ type:Schema.Types.Mixed }, 
        url:{ type:String },
        img:{ type:String },
        view:{ type:Number,default:1},
        download:{ type:Number,default:0},
        collect:{ type:Number,default:0},
        description:{ type:String },
        add_time:{
            type:Number,
            default:d.getTime()
        },

    });
    return mongoose.model('Picture',PictureSchema,'picture');
}