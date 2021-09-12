const Check = require("./model/check.model")

module.exports = {
  saveCheckToDb: check => {
    new Check(check).save()
  },
}
