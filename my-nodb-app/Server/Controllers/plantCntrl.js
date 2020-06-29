const herbArr = [{
    name: 'Mint',
    uses: ['tea', 'cooking', 'essential oil'],
    image: `https://www.almanac.com/sites/default/files/image_nodes/mint-planting-growing-harvesting.jpg`,
    id: 1
    },

    {name: 'Lavender',
    uses: ['tea', 'essential oil', 'baking'],
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXa6PmfzBlTnzu4N-pZuKi7cZK57-VTQUX1A&usqp=CAU`,
    id: 2},

    {name: 'Rosemary',
    uses: ['medicinal', 'cooking'],
    image: `https://www.almanac.com/sites/default/files/image_nodes/rosemary-foliage.jpg`,
    id: 3},

    {name: 'Lemon Balm',
    uses: ['tea', 'cooking', 'essential oil'],
    image: `https://harvesttotable.com/wp-content/uploads/2009/04/Lemon-balm-2.jpg`,
    id: 4},

    {name: 'Basil',
    uses: ['health benefits', 'cooking'],
    image: `https://www.gardeningknowhow.com/wp-content/uploads/2014/07/basil.jpg`,
    id: 5},

    {name: 'Parsley',
    uses: ['cooking'],
    image: `https://www.almanac.com/sites/default/files/styles/opengraph/public/image_nodes/parsley-planting-growing-harvesting.jpg?itok=_JqeQUPM`,
    id: 6},

    {name: 'Chamomile',
    uses: ['tea', 'essential oil', 'medicinal'],
    image: `https://www.florahealth.com/us/wp-content/uploads/sites/2/2017/06/Chamomile-flower_72dpi.jpg`,
    id: 7}
    ]

const vegArr = [{
    name: 'Tomatoes',
    types: ['cherry', 'roma', 'red beefsteak'],
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYvLhFCnhsTUMUmxsVd72WyLA8pJvL4mTwdw&usqp=CAU`,
    id: 8
    },

    {name: 'Peppers',
    types: ['jalapeno', 'bell', 'poblano'],
    image: `https://minnesotafreshfarm.com/uploads/3/4/4/3/34438696/published/hot-peppers-ffu.jpg?1550785699`,
    id: 9
    },

    {name: 'Squash',
    types: ['zucchini', 'yellow', 'patty pan'],
    image: `https://www.gardenzeus.com/wp-content/uploads/shutterstock_449749306.jpg`,
    id: 10
    },

    {name: 'Beans',
    types: ['bush', 'pole', 'string'],
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQB3Ufnl7tuLFebQQ4YPSRhsgyIRAx1vG3lNQ&usqp=CAU`,
    id: 11
    },

    {name: 'Corn',
    types: ['sweet', 'baby', 'nirvana hybrid'],
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUsqEzoxSYDo4wb5cJsFVz856FirGEobRJ5Q&usqp=CAU`,
    id: 12
    },

    {name: 'Leafy Greens',
    types: ['spinach', 'lettuce', 'kale'],
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTH3HIEYJwM-cZdDfOvFccsRyarl-QrJ4A-Uw&usqp=CAU`,
    id: 13
    },

    {name: 'Potatoes',
    types: ['yukon gold', 'russet', 'red'],
    image: `https://www.almanac.com/sites/default/files/users/AlmanacStaffArchive/potatoes-harvested_full_width.jpg`,
    id: 14
    }
]

const backEndGardenArr = [];

module.exports = {
    getHerbs: (req, res) => {
        res.status(200).send(herbArr)
    },

    getVeggies: (req, res) => {
        res.status(200).send(vegArr)
    },

    inputTypeOrUse: (req, res) => {

    },

    removeHerbs: (req, res, next) => {
        const {id} = req.params;
        //console.log(id)
        if (id > 7) {
            next()
        } else { 
            for (let i = backEndGardenArr.length - 1; i >= 0; i--) {
                if (+id === backEndGardenArr[i].id) {
                    console.log('hit')
                      backEndGardenArr.splice(i, 1)
                  }
         }
        res.status(200).send(backEndGardenArr)
    }},

    removeVeggies: (req, res) => {
        //console.log(backEndGardenArr)
        const {id} = req.params;
        console.log(+id)
        console.log(backEndGardenArr[0].id)
         for (let i = backEndGardenArr.length - 1; i >= 0; i--) {
                if (+id === backEndGardenArr[i].id) {
                    console.log('hit')
                      backEndGardenArr.splice(i, 1)
                  }
         }
        //console.log(backEndGardenArr) 
        res.status(200).send(backEndGardenArr)
    },

    addToGarden: (req, res) => {
        backEndGardenArr.push(req.body)
        res.status(200).send(backEndGardenArr)
        
    }
}