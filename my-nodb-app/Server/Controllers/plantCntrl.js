const herbArr = [{
    name: 'Mint',
    uses: ['tea', 'cooking'],
    image: `https://www.almanac.com/sites/default/files/image_nodes/mint-planting-growing-harvesting.jpg`,
    id: 1
    },

    {name: 'Lavender',
    uses: ['tea', 'essential oil'],
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXa6PmfzBlTnzu4N-pZuKi7cZK57-VTQUX1A&usqp=CAU`,
    id: 2},

    {name: 'Rosemary',
    uses: ['tea', 'cooking'],
    image: `https://www.almanac.com/sites/default/files/image_nodes/rosemary-foliage.jpg`,
    id: 3},

    {name: 'Lemon Balm',
    uses: ['tea', 'cooking'],
    image: `https://harvesttotable.com/wp-content/uploads/2009/04/Lemon-balm-2.jpg`,
    id: 4},

    {name: 'Basil',
    uses: ['tea', 'cooking'],
    image: `https://www.gardeningknowhow.com/wp-content/uploads/2014/07/basil.jpg`,
    id: 5},

    {name: 'Parsley',
    uses: ['tea', 'cooking'],
    image: `https://www.almanac.com/sites/default/files/styles/opengraph/public/image_nodes/parsley-planting-growing-harvesting.jpg?itok=_JqeQUPM`,
    id: 6},

    {name: 'Chamomile',
    uses: ['tea', 'cooking'],
    image: `https://www.florahealth.com/us/wp-content/uploads/sites/2/2017/06/Chamomile-flower_72dpi.jpg`,
    id: 7}
    ]

const vegArr = [{
    name: 'Tomatoes',
    types: ['cherry', 'roma', 'red beefsteak'],
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYvLhFCnhsTUMUmxsVd72WyLA8pJvL4mTwdw&usqp=CAU`,
    id: 1
    },

    {name: 'Peppers',
    types: ['jalapeno', 'bell', 'poblano'],
    image: `https://minnesotafreshfarm.com/uploads/3/4/4/3/34438696/published/hot-peppers-ffu.jpg?1550785699`,
    id: 2
    },

    {name: 'Squash',
    types: ['zucchini', 'yellow', 'patty pan'],
    image: `https://www.gardenzeus.com/wp-content/uploads/shutterstock_449749306.jpg`,
    id: 3
    },

    {name: 'Beans',
    types: ['bush', 'pole', 'string'],
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQB3Ufnl7tuLFebQQ4YPSRhsgyIRAx1vG3lNQ&usqp=CAU`,
    id: 4
    },

    {name: 'Corn',
    types: ['sweet', 'baby', 'nirvana hybrid'],
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUsqEzoxSYDo4wb5cJsFVz856FirGEobRJ5Q&usqp=CAU`,
    id: 5
    },

    {name: 'Leafy Greens',
    types: ['spinach', 'lettuce', 'kale'],
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTH3HIEYJwM-cZdDfOvFccsRyarl-QrJ4A-Uw&usqp=CAU`,
    id: 6
    },

    {name: 'Potatoes',
    types: ['yukon gold', 'russet', 'red'],
    image: `https://www.almanac.com/sites/default/files/users/AlmanacStaffArchive/potatoes-harvested_full_width.jpg`,
    id: 7
    }
]

module.exports = {
    getHerbs: (req, res) => {
        res.status(200).send(herbArr)
    },

    getVeggies: (req, res) => {
        res.status(200).send(vegArr)
    }
}