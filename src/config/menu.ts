export const menu = [
    {
        type: 'item',
        icon: 'fas fa-chart-area',
        name: 'Dashboard',
        component: 'dashboard',
        perms: ['*'],
        children: []
    },
    {
        type: 'group',
        icon: 'fas fa-tools',
        name: 'Administración',
        perms: ['*'],
        children: [
            {
                type: 'item',
                icon: 'fas fa-chart-area',
                name: 'Dashboard',
                perms: ['*'],
                children: [
                    {
                        type: 'item',
                        icon: 'fas fa-chart-area',
                        name: 'Dashboard',
                        component: 'dashboard',
                        perms: ['*'],
                        children: [
                            {
                                type: 'item',
                                icon: 'fas fa-chart-area',
                                name: 'Dashboard',
                                component: 'dashboard',
                                perms: ['*'],
                                children: []
                            }
                        ]
                    }
                ]
            },
            {
                type: 'item',
                icon: 'fas fa-users',
                name: 'Usuarios',
                component: 'dashboard',
                perms: ['*'],
                children: []
            }
        ]
    },
    {
        type: 'group',
        icon: 'fas fa-tools',
        name: 'Administración',
        perms: ['*'],
        children: [
            {
                type: 'item',
                icon: 'fas fa-chart-area',
                name: 'Dashboard',
                perms: ['*'],
                children: [
                    {
                        type: 'item',
                        icon: 'fas fa-chart-area',
                        name: 'Dashboard',
                        component: 'dashboard',
                        perms: ['*'],
                        children: [
                            {
                                type: 'item',
                                icon: 'fas fa-chart-area',
                                name: 'Dashboard',
                                component: 'dashboard',
                                perms: ['*'],
                                children: []
                            }
                        ]
                    }
                ]
            },
            {
                type: 'item',
                icon: 'fas fa-users',
                name: 'Usuarios',
                component: 'dashboard',
                perms: ['*'],
                children: []
            }
        ]
    },
    {
        type: 'group',
        icon: 'fas fa-tools',
        name: 'Administración',
        perms: ['*'],
        children: [
            {
                type: 'item',
                icon: 'fas fa-chart-area',
                name: 'Dashboard',
                perms: ['*'],
                children: [
                    {
                        type: 'item',
                        icon: 'fas fa-chart-area',
                        name: 'Dashboard',
                        component: 'dashboard',
                        perms: ['*'],
                        children: [
                            {
                                type: 'item',
                                icon: 'fas fa-chart-area',
                                name: 'Dashboard',
                                component: 'dashboard',
                                perms: ['*'],
                                children: []
                            }
                        ]
                    }
                ]
            },
            {
                type: 'item',
                icon: 'fas fa-users',
                name: 'Usuarios',
                component: 'dashboard',
                perms: ['*'],
                children: []
            }
        ]
    }
]