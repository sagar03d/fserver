const index = (async (req, res) => {
  res.render('index', { title: 'Express1' });
});
const about = (async (req, res) => {
  res.render('index', { title: 'About Page' });
});

module.exports = {
  index,
  about
}