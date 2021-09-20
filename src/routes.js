const Router = require('express');
const admin = require("firebase-admin");


const router = new Router();

router.post('/delete_users', async (req, res) => {
    try {
        const {users} = req.body;
        console.log(users);
        const deleteUsersResult = await admin.auth().deleteUsers(users);

        console.log(`Successfully deleted ${deleteUsersResult.successCount} users`);
        console.log(`Failed to delete ${deleteUsersResult.failureCount} users`);
        deleteUsersResult.errors.forEach((err) => {
            console.log(err.error.toJSON());
        });
    } catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
})

module.exports = router;