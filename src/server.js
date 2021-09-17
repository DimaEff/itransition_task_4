const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');

const middleware = require('./middleware');


const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());
app.use(middleware.decodeToken);

app.post('/api/delete_users', async (req, res) => {
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

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});