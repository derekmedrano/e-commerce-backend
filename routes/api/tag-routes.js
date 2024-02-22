const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll().then((tagData) => {
    res.json(tagData)
});
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {

  Tag.findOne({
    where: {
      id: req.params.id
    }
  }).then(tagData => {
    res.json(tagData)
  });

  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then((newCategory) => {
      res.json(newCategory);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put('/:id', (req, res) => {

  Tag.update(
    req.body,
    {
      // Gets the books based on the id given in the request parameters
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedTag) => {
      // Sends the updated book as a json response
      res.json(updatedTag);
    })
    .catch((err) => res.json(err));
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {

  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedTag) => {
      res.json(deletedTag);
    })
    .catch((err) => res.json(err));
  // delete on tag by its `id` value
});

module.exports = router;
