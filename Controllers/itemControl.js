/* eslint-disable no-undef */
const Items = require('../Modules/Item');

//POST /api/items/additem
const addItem = async (req, res) => {
    try {
        const { name, description, category } = req.body;
        let imageUrl;
        // console.log(req.file.filename);
        if (req.file && req.file.filename) {
            imageUrl = req.file.filename;
            if (!name || !description || !category) {
                return res.status(400).json({ error: "All Fields must be Required" });
            }
        }
        else {
            return res.status(400).json({ error: "Please Upload File!!" });
        }


        const addItem = await Items.create({
            name,
            description,
            category,
            imageUrl,
        });

        res.json(addItem);
    } catch (err) {
        console.error("Error adding item:", err);
        // res.status(500).json({ error: "Internal Server Error" });
    }
}


//GET /api/item/fetchitems
const fetchAllItems = async (req, res) => {
    try {
        const items = await Items.find();
        res.json(items);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

module.exports = { addItem, fetchAllItems };