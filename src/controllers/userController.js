const userController = {

    index: async (req, res) => {
        try {
            res.status(200).json({
                msg: "teste"
            })
        } catch (error) {

            res.status(404).json({
                msg: error
            })
        }
    },
    show: async (req, res) => {},
    create: async (req, res) => {
        try {
            res.status(201).json(req.body)
          } catch (error) {
            res.status(401).json(error)
        
          }
    },
    update: async (req, res) => {},
    delete: async (req, res) => {},
}

module.exports = userController