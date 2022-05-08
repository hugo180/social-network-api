const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");

// GET all and POST 
router.route("/").get(getAllUsers).post(createUser);

//  GET one, PUT, and DELETE
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// Adding and deleting a friend
router.route("/:id/friends/:friendsId").post(addFriend).delete(removeFriend);

module.exports = router;
