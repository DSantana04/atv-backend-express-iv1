const securedExample = async (req, res) => {
    console.log("Something that needs secured authentication was ran here.");
    res.status(200).json({ message: 'This is a secured endpoint' });
};

export default { securedExample: securedExample };
