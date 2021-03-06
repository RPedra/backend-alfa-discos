const Firebase = require("../utils/Firebase");
const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");

module.exports = {
  async signIn(request, response) {
    try {
      const { email, senha } = request.body;

      let firebaseId;
      try {
        firebaseId = await Firebase.login(email, senha);
      } catch (error) {
        return response
          .status(403)
          .json({ notification: "Credenciais invalidas" });
      }
      
      const user = await UserModel.getByFields({ firebase_id: firebaseId });
      
      const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "30d",
      });
      
      return response.status(200).json({user, accessToken});

    } catch (error) {
      return response
        .status(500)
        .json({ message: "Error ao tentar validar as credenciais" });
    }
  },
};
