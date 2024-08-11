import Settings from '@/pages/settings/index.vue'
import Default from "@/layouts/Default.vue";
import IntegrationSettings from "@/pages/settings/IntegrationSettings.vue";
import ProfileSettings from "@/pages/settings/ProfileSettings.vue";
import SecuritySettings from "@/pages/settings/SecuritySettings.vue";

export default [
    {
        path: '/settings',
        name: 'Settings',
        component: Settings,
        meta: {
            title: 'Settings',
            layout: Default
        },
        children: [
            {
                path: 'integrations',
                name: 'Integrations',
                component: IntegrationSettings,
                meta: {
                    title: 'Settings | Integrations',
                },
            },
            {
                path: 'profile',
                name: 'Profile',
                component: ProfileSettings,
                meta: {
                    title: 'Settings | Profile',
                },
            },
            {
                path: 'security',
                name: 'Security',
                component: SecuritySettings,
                meta: {
                    title: 'Settings | Security',
                },
            },
        ]
    }
]