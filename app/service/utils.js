const Service = require("egg").Service;
const fs = require("fs");
const path = require("path");
const qiniu = require("qiniu");
const awaitWriteStream = require("await-stream-ready").write;
const sendToWormhole = require("stream-wormhole");
const md5 = require("md5");
const bucket = "27link"; //要上传的空间名
const imageUrl = "www-27link-com-idvbknc.qiniudns.com"; // 空间绑定的域名
const accessKey = "N97kYu7DCm-1hfpFSoqgeJuTN_PJUuq_CU_zwjHL"; //Access Key
const secretKey = "XKgLJmyX2xOoXbi_hH7RsPvC5XKH6swSsxa9RDlb"; //Secret Key
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
const options = {
  scope: bucket
};
const putPolicy = new qiniu.rs.PutPolicy(options);
const uploadToken = putPolicy.uploadToken(mac);
let config = new qiniu.conf.Config();
config.zone = qiniu.zone.Zone_z0;
class utilsService extends Service {
  async uploadFiles() {
    const { ctx } = this;
    const stream = await ctx.getFileStream();
    const filename =
    md5(stream.filename) + path.extname(stream.filename).toLocaleLowerCase();
    const localFilePath = path.join(__dirname, "/public/admin/upload", filename);
    const writeStream = fs.createWriteStream(localFilePath);
    try {
      await awaitWriteStream(stream.pipe(writeStream));
      const formUploader = new qiniu.form_up.FormUploader(config);
      const putExtra = new qiniu.form_up.PutExtra();
      const imgSrc = await new Promise((resolve, reject) => {
        formUploader.putFile(
          uploadToken,
          filename,
          localFilePath,
          putExtra,
          (respErr, respBody, respInfo) => {
            if (respErr) {
              reject("");
            }
            if (respInfo.statusCode == 200) {
              resolve(imageUrl + respBody.key);
            } else {
              reject("");
            }
            // 上传之后删除本地文件
            fs.unlinkSync(localFilePath);
          }
        );
      });
      if (imgSrc !== "") {
        return {
          url: imgSrc
        };
      } else {
        return false;
      }
    } catch (err) {
      //如果出现错误，关闭管道
      await sendToWormhole(stream);
      return false;
    }
  }
}
module.exports = utilsService;
