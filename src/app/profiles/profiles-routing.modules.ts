import {NgModule} from '@angular/core'
import {RouterModule, Routes } from '@angular/router'

import { ProfilePageComponent } from './../profile-page/profile-page.component'
import { ProfilesComponent } from './profiles.component';

const profileRoutes: Routes = [
    {
        path:'profiles',
        component: ProfilesComponent,
        children: [
            {
                path: 'profilesPage',
                component: ProfilePageComponent
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(profileRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class ProfilesRoutingModule{}