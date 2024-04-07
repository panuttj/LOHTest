const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const app = express();
const port = 3000;


app.use(cors())

mongoose
    .connect(
        "mongodb+srv://lohtester:MLjU7nEYl3Ek50NH@cluster0.knkingd.mongodb.net/tester"
    )
    .then((value) => {
        console.info("Connected to MongoDB");
    })
    .catch((e) => {
        console.error("Connection error", e.message);
    });
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.get("/", async (req, res) => {
    res.send("Hello World!");
});

app.get("/navigation", async (req, res) => {
    const collection = mongoose.connection.collection("navigations");
    const doc = await collection.find().toArray();
    const listNavigation = [];
    const addChildren = (item, allItems) => {
        const children = allItems.filter(f => f.navigation_id === item._id);
        children.forEach(child => {
            const data = {
                _id: child.id,
                id: child.key,
                title: child.name,
                translate: child.comment,
                children: [],
                icon: child.icon,
                type: child.type,
            };
            item.children.push(data);
            listNavigation.push(data)
            addChildren(data, allItems);
        });
    }

    doc.forEach(item => {
        if (item.navigation_id === null) {
            const data = {
                _id: item.id,
                id: item.key,
                title: item.name,
                translate: item.comment,
                children: [],
                icon: item.icon,
                type: item.type,
            };
            listNavigation.push(data);
            addChildren(data, doc);

        }
    });

    listNavigation.sort((a, b) => a._id - b._id);
    listNavigation.forEach(node => {
        delete node._id;
    });
    res.status(200).send(listNavigation)
});


app.get("/categories", async (req, res) => {
    const collection = mongoose.connection.collection("web_categories");
    const doc = await collection.find().toArray();
    const listCategories = []
    const addChildren = (item, allItem) => {
        const children = allItem.filter((f) => f.parent_id === item.id)
        children.forEach((child) => {
            const data = {
                id: child.id,
                title: child.title_th,
                url: `/category/${child.id}`,
                child: [],
            }
            item.child.push(data)
            addChildren(data, allItem)
        })
    }

    doc.forEach((item) => {
        if (item.parent_id === null) {
            const data = {
                megaMenu: false,
                megaMenuWithSub: true,
                title: item.title_th,
                id: item.id,
                child: [],
                url: `/category/${item.id}`
            }
            listCategories.push(data)
            addChildren(data, doc)
        }
    })

    res.status(200).send(listCategories);
});