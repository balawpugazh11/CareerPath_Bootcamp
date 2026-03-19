let bootcamps = [];
let idCounter = 1;

exports.getBootcamps = (req, res) => {
  res.json(bootcamps);
};

exports.createBootcamp = (req, res) => {
  const newBootcamp = {
    id: idCounter++,
    name: req.body.name
  };

  bootcamps.push(newBootcamp);
  res.json(newBootcamp);
};

exports.getBootcampById = (req, res) => {
  const bootcamp = bootcamps.find(b => b.id == req.params.id);

  if (!bootcamp) {
    return res.status(404).json({ message: 'Not found' });
  }

  res.json(bootcamp);
};

exports.updateBootcamp = (req, res) => {
  const bootcamp = bootcamps.find(b => b.id == req.params.id);

  if (!bootcamp) {
    return res.status(404).json({ message: 'Not found' });
  }

  bootcamp.name = req.body.name;
  res.json(bootcamp);
};

exports.deleteBootcamp = (req, res) => {
  bootcamps = bootcamps.filter(b => b.id != req.params.id);
  res.json({ message: 'Deleted successfully' });
};