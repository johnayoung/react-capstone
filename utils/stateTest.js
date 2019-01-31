'use strict';

const state = {
    currentEndpoint: {
        createdBy: '',
        name: '',
        description: '',
        group: '',
        method: '',
        route: '',
        parameters: [
            {
                name: '',
                description: '',
                condition: '',
                type: '',
                value: ''
            }
        ],
        collection: ''
    },
    endpoints: [
        {Endpoint1},
        {Endpoint2}
    ],
}

const state = {
    collections: [
        {
            createdBy: '',
            category: '',
            name: '',
            description: '',
            baseUrl: '',
            endpoints: [],
            views: 1203
        }
    ],
    categories: [
        'Finance',
        'Data',
        'Social'
    ]
}

const state = {
    addEndpoint: {
        fullUrl: '',
        name: '',
        description: '',
        parameters: [
            {
                id: '',
                name: '',
                condition: 'required',
                type: '',
                value: ''
            }
        ]
    }
}