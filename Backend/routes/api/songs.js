const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
const Song = require("../../models/Song");
const auth = require("../../middleware/auth");
const User = require("../../models/User");

module.exports = router;

router.post("/", auth, bodyParser.json(), (req, res) => {
  Song.create(req.body)
    .then((song) => {
      User.findByIdAndUpdate(res.locals.userid, { $push: { songs: song.id } })
        .then((userUpdate) => {
          res.json({ msg: "Song added successfuly" });
        })
        .catch((err) => {
          res
            .status(400)
            .json({ error: "Made song but unable to add to user." });
        });
    })
    .catch((err) => res.status(400).json({ error: "Unable to add this song" }));
});

router.get(":/id", (req, res) => {
  Song.findById(req.params.id)
    .then((song) => res.json(song))
    .catch((err) => res.status(404).json({ noitemfound: "No Song found" }));
});

router.post("/playlistSongs", auth, (req, res) => {
  User.findById(res.locals.userid)
    .then((usr) => {
      Song.find({ _id: { $in: usr.songs } })
        .then((songs) => {
          res.json({ songs });
        })
        .catch((err) => {
          res.status(400).json({ error: "Couldn't retrieve songs" });
        });
    })
    .catch((error) => {
      res.status(400).json({ error: "Couldn't find user" });
    })
});

router.get("/", (req, res) => {
  Song.find()
    .then((songs) => res.json(songs))
    .catch((err) => res.status(404).json({ noitemsfound: "Not Songs found" }));
});

router.put("/:id", auth, bodyParser.json(), (req, res) => {
  User.findById(res.locals.userid)
    .then((res) => {
      if (!res.songs?.includes(req.params.id))
        return res.status(403).json({ error: "Missing permissions" });

      Song.findByIdAndUpdate(req.params.id, req.body)
        .then((song) => res.json({ msg: "Updated successfully" }))
        .catch((err) =>
          res.status(400).json({ error: "Unable to update the database" })
        );
    })
    .catch(console.error);
});

router.delete("/:id", auth, (req, res) => {
  User.findById(res.locals.userid)
    .then((usr) => {
      if (!usr.songs?.includes(req.params.id))
        return res.status(403).json({ error: "Missing permissions" });

      Song.findByIdAndDelete(req.params.id)
        .then((song) => {
          User.findById(res.locals.userid, {
            $pull: {
              songs: req.params.id,
            },
          })
            .then((userUpdate) => {
              res.json({ msg: "Item entry deleted successfully" });
            })
            .catch((err) => {
              res.status(400).json({
                msg: "Deleted song, but failed to remove from the user.",
              });
            });
        })
        .catch((err) => res.status(404).json({ error: "No such a song" }));
    })
    .catch(console.error);
});
