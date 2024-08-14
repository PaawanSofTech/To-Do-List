router.post('/', async (req, res) => {
    const { name, category } = req.body;
    const newTask = new Task({ name, category });
    try {
      const task = await newTask.save();
      res.json(task);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
  router.put('/:id', async (req, res) => {
    const { name, completed, category } = req.body;
    try {
      const task = await Task.findByIdAndUpdate(req.params.id, { name, completed, category }, { new: true });
      res.json(task);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  