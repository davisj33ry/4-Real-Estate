exports.homepage = async (req, res) => {
    // Get data for the homepage
    const data = await getHomepageData();
    // Render the main.handlebars template with the data
    res.render('main', { data });
}
