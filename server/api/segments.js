const router = require('express').Router()
const { models: { Segment }} = require('../db')


// NOT DONE REFACTORING FOR THE RIGHT PURPOSE YET!!! TBC!!!

// GET /api/segments
router.get('/', async (req, res, next) => {
    try {
      const segments = await Segment.findAll()
      res.json(segments)
    }
    catch (error) {
      next(error)
    }
})

// POST /api/segments
router.post('/', async (req, res, next) => {
    try {
      const segment = await Segment.create(req.body)
      res.json(segment)
    } catch (error) {
      next(error)
    }
  })

// PUT /api/segments/:segmentId
router.put('/:segmentId', async (req, res, next) => {
    try {
      const segment = await Segment.findByPk(req.params.segmentId);
      res.json(await segment.update(req.body));
    } catch (error) {
      next(error)
    }
  })


// DELETE /api/segments/:segmentId
router.delete('/:segmentId', async (req, res, next) => {
    try {
      const segment = await Segment.findByPk(req.params.segmentId)
      await segment.destroy()
      res.json(segment)
    } catch (error) {
      next(error)
    }
})


module.exports = router