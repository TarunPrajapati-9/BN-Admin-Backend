/* eslint-disable no-undef */
const Items = require('../Modules/Item');

//POST /api/items/additem
const addItem = async (req, res) => {
    try {
        const { name, description, category, imageUrl } = req.body;

        if (!name || !description || !category || !imageUrl) {
            res.status(400).json({ error: "All Fields must be Required" });
        }
        else {
            const addItem = await Items.create({
                name,
                description,
                category,
                imageUrl,
            })

            res.json(addItem);
        }
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
};

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